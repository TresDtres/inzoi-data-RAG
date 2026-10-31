#!/usr/bin/env python
"""Generador de 'La Biblia del Modding inZOI' — sitio estatico desde el corpus.

Uso:
    python herramientas/generar.py [--corpus <ruta a pages/>] [--salida <ruta sitio/>]

Fuentes:
    - contenido/biblia/*.md   -> paginas curadas (la biblia, ES)
    - contenido/secciones.json -> definicion de departamentos + mapeo a docs
    - corpus pages/**.md       -> navegador de documentacion (EN, render tal cual)

Salida: sitio/ (index.html, seccion/*.html, docs/*.html, busqueda.json, assets/).
Solo stdlib. Re-ejecutar tras cada snapshot de la wiki (capture_snapshot.py).
"""
from __future__ import annotations

import argparse
import html as html_mod
import json
import re
import shutil
import time
import urllib.parse
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[1]
CORPUS_DEFECTO = RAIZ.parent / "modkit-wiki-rag-v2" / "pages"
CONTENIDO = RAIZ / "contenido"
SALIDA_DEFECTO = RAIZ / "sitio"

# ---------------------------------------------------------------------------
# Markdown -> HTML (subconjunto: headings, fences, listas, tablas, links...)
# ---------------------------------------------------------------------------

def _esc(texto: str) -> str:
    return html_mod.escape(texto, quote=False)


def _resolver(href: str, base_route_dir: str) -> str:
    """Resuelve un enlace del corpus a su ruta de documento (sin barra inicial).

    Los enlaces a fragmentos (x.chunks/part-N.md) se colapsan a la pagina del
    documento padre, que contiene el contenido fusionado.
    """
    if ".chunks/part-" in href:
        href = href.split(".chunks/")[0]
        if not href.endswith(".md"):
            href += ".md"
    if href.endswith(".md"):
        destino = urllib.parse.urljoin(base_route_dir + "/", href)
        return destino.removesuffix(".md")
    return href


_DIR_ACTUAL = ""


def _inline(texto: str, base: str = "") -> str:
    texto = _esc(texto)

    def repl_enlace(m: re.Match) -> str:
        href = m.group(2)
        absoluto = href.startswith(("http://", "https://", "mailto:"))
        interno = (not absoluto and
                   (href.endswith(".md") or href.startswith(("./", "../", "/"))
                    or ".chunks/" in href))
        if interno:
            ruta = _resolver(href.lstrip("/"), _DIR_ACTUAL)
            return f'<a href="{base}docs/{ruta}.html">{m.group(1)}</a>'
        return f'<a href="{href}" target="_blank" rel="noopener">{m.group(1)}</a>'

    texto = re.sub(r"!\[([^\]]*)\]\(([^)\s]+)\)", r'<img src="\2" alt="\1" loading="lazy">', texto)
    texto = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", repl_enlace, texto)
    texto = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", texto)
    texto = re.sub(r"(?<!\*)\*([^*\s][^*]*)\*(?!\*)", r"<em>\1</em>", texto)
    texto = re.sub(r"`([^`]+)`", r"<code>\1</code>", texto)
    return texto


def md_a_html(markdown: str, route: str | None = None, base: str = "") -> str:
    global _DIR_ACTUAL
    _DIR_ACTUAL = "/".join((route or "").split("/")[:-1])
    lineas = markdown.splitlines()
    salida: list[str] = []
    en_lista = False
    en_tabla = False
    en_codigo = False
    bloque_codigo: list[str] = []

    def cerrar_lista():
        nonlocal en_lista
        if en_lista:
            salida.append("</ul>")
            en_lista = False

    def cerrar_tabla():
        nonlocal en_tabla
        if en_tabla:
            salida.append("</tbody></table>")
            en_tabla = False

    for linea in lineas:
        if en_codigo:
            if linea.strip().startswith("```"):
                cuerpo = _esc("\n".join(bloque_codigo))
                salida.append(f'<pre><code>{cuerpo}</code></pre>')
                bloque_codigo = []
                en_codigo = False
            else:
                bloque_codigo.append(linea)
            continue
        if linea.strip().startswith("```"):
            cerrar_lista()
            cerrar_tabla()
            en_codigo = True
            continue
        if not linea.strip():
            cerrar_lista()
            cerrar_tabla()
            continue
        if re.match(r"^#{1,6}\s", linea):
            cerrar_lista()
            cerrar_tabla()
            nivel = len(linea) - len(linea.lstrip("#"))
            titulo = _inline(linea.lstrip("#").strip(), base)
            salida.append(f"<h{min(nivel + 1, 6)}>{titulo}</h{min(nivel + 1, 6)}>")
            continue
        if linea.strip() in ("---", "***"):
            cerrar_lista()
            cerrar_tabla()
            salida.append("<hr>")
            continue
        if linea.lstrip().startswith("|") and "|" in linea[1:]:
            cerrar_lista()
            celdas = [c.strip() for c in linea.strip().strip("|").split("|")]
            if all(re.fullmatch(r":?-{2,}:?", c) for c in celdas):
                continue
            if not en_tabla:
                salida.append("<table><thead><tr>"
                              + "".join(f"<th>{_inline(c, base)}</th>" for c in celdas)
                              + "</tr></thead><tbody>")
                en_tabla = True
            else:
                salida.append("<tr>" + "".join(f"<td>{_inline(c, base)}</td>" for c in celdas) + "</tr>")
            continue
        cerrar_tabla()
        m_lista = re.match(r"^(\s*)([-*+])\s+(.*)$", linea)
        if m_lista:
            if not en_lista:
                salida.append("<ul>")
                en_lista = True
            salida.append(f"<li>{_inline(m_lista.group(3), base)}</li>")
            continue
        m_num = re.match(r"^(\s*)(\d+)\.\s+(.*)$", linea)
        if m_num:
            if not en_lista:
                salida.append('<ul class="lista-num">')
                en_lista = True
            salida.append(f"<li>{_inline(m_num.group(3), base)}</li>")
            continue
        if linea.lstrip().startswith(">"):
            cerrar_lista()
            salida.append(f"<blockquote>{_inline(linea.lstrip('> ').strip(), base)}</blockquote>")
            continue
        cerrar_lista()
        salida.append(f"<p>{_inline(linea.strip(), base)}</p>")

    cerrar_lista()
    cerrar_tabla()
    return "\n".join(salida)


# ---------------------------------------------------------------------------
# Frontmatter
# ---------------------------------------------------------------------------

FM_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.DOTALL)


def leer_frontmatter(texto: str) -> tuple[dict, str]:
    m = FM_RE.match(texto)
    meta: dict = {}
    cuerpo = texto
    if m:
        cuerpo = texto[m.end():]
        for linea in m.group(1).splitlines():
            if ":" in linea:
                clave, _, valor = linea.partition(":")
                clave = clave.strip()
                valor = valor.strip().strip('"')
                if valor.startswith("["):
                    try:
                        valor = json.loads(valor.replace("'", '"'))
                    except json.JSONDecodeError:
                        pass
                meta[clave] = valor
    return meta, cuerpo


# ---------------------------------------------------------------------------
# Plantillas
# ---------------------------------------------------------------------------

ESTILO = """
:root {
  --fondo: #0e1116; --panel: #161b23; --panel2: #1d242f; --borde: #2a3240;
  --texto: #dce3ec; --tenue: #8b96a5; --acento: #ff8a3d; --acento2: #4cc2ff;
}
* { box-sizing: border-box; }
body { margin: 0; font-family: "Segoe UI", system-ui, sans-serif; background: var(--fondo); color: var(--texto); line-height: 1.55; }
a { color: var(--acento2); text-decoration: none; }
a:hover { text-decoration: underline; }
code { background: #10151d; border: 1px solid var(--borde); border-radius: 4px; padding: 1px 5px; font-size: 0.92em; color: #ffc7a3; }
pre { background: #10151d; border: 1px solid var(--borde); border-radius: 8px; padding: 14px 16px; overflow-x: auto; }
pre code { border: 0; background: none; padding: 0; color: #d7e3f4; }
table { border-collapse: collapse; width: 100%; margin: 12px 0; }
th, td { border: 1px solid var(--borde); padding: 7px 10px; text-align: left; font-size: 0.95em; }
th { background: var(--panel2); }
blockquote { border-left: 3px solid var(--acento); margin: 12px 0; padding: 6px 14px; background: var(--panel); border-radius: 0 8px 8px 0; color: var(--tenue); }
img { max-width: 100%; }
header.top { position: sticky; top: 0; z-index: 20; background: rgba(14,17,22,0.96); border-bottom: 1px solid var(--borde); padding: 10px 22px; display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
header.top .logo { font-weight: 700; font-size: 1.05em; letter-spacing: 0.4px; color: var(--texto); }
header.top .logo b { color: var(--acento); }
header.top nav { display: flex; gap: 14px; flex-wrap: wrap; font-size: 0.92em; }
header.top nav a { color: var(--tenue); }
.busqueda { flex: 1; min-width: 220px; display: flex; gap: 8px; }
.busqueda input { flex: 1; background: var(--panel); border: 1px solid var(--borde); border-radius: 8px; padding: 8px 12px; color: var(--texto); font-size: 0.95em; }
.busqueda button { background: var(--acento); color: #14181d; border: 0; border-radius: 8px; padding: 8px 14px; font-weight: 600; cursor: pointer; }
main { max-width: 1080px; margin: 0 auto; padding: 28px 22px 60px; }
.hero { border: 1px solid var(--borde); background: linear-gradient(140deg, var(--panel), var(--panel2)); border-radius: 14px; padding: 30px 32px; margin-bottom: 26px; }
.hero h1 { margin: 0 0 10px; font-size: 1.9em; }
.hero p { color: var(--tenue); max-width: 760px; }
.rejilla { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; }
.tarjeta { display: block; background: var(--panel); border: 1px solid var(--borde); border-radius: 12px; padding: 16px 18px; transition: border-color 0.15s; }
.tarjeta:hover { border-color: var(--acento); text-decoration: none; }
.tarjeta .badge { display: inline-flex; width: 34px; height: 34px; border-radius: 9px; background: var(--panel2); border: 1px solid var(--borde); align-items: center; justify-content: center; font-weight: 700; color: var(--acento); margin-bottom: 8px; }
.tarjeta h3 { margin: 0 0 6px; font-size: 1.02em; color: var(--texto); }
.tarjeta p { margin: 0; color: var(--tenue); font-size: 0.88em; }
h2.seccion-titulo { border-bottom: 1px solid var(--borde); padding-bottom: 8px; margin-top: 34px; }
.migas { color: var(--tenue); font-size: 0.85em; margin-bottom: 18px; }
.migas a { color: var(--tenue); }
.resultados { margin-top: 10px; }
.resultado { background: var(--panel); border: 1px solid var(--borde); border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; }
.resultado .ruta { color: var(--tenue); font-size: 0.8em; }
.aviso { border: 1px dashed var(--borde); color: var(--tenue); padding: 8px 12px; border-radius: 8px; font-size: 0.88em; margin-top: 10px; }
.doc-meta { display: flex; gap: 10px; flex-wrap: wrap; font-size: 0.82em; color: var(--tenue); margin-bottom: 16px; }
.doc-meta .chip { background: var(--panel2); border: 1px solid var(--borde); border-radius: 999px; padding: 2px 10px; }
.lista-docs { list-style: none; padding: 0; }
.lista-docs li { padding: 5px 0; border-bottom: 1px solid #1c232e; }
.lista-docs .src { color: var(--tenue); font-size: 0.8em; margin-left: 8px; }
footer { border-top: 1px solid var(--borde); color: var(--tenue); font-size: 0.82em; padding: 18px 22px; text-align: center; }
"""

BUSQUEDA_JS = """
const INDICE = window.INDICE_BIBLIA || [];
const BASE = window.BIBLIA_BASE || '';
function normalizar(s) { return (s || '').toLowerCase(); }
function buscarLocal(q) {
  const nq = normalizar(q);
  if (!nq) return [];
  return INDICE.filter(d => normalizar(d.t + ' ' + d.r).includes(nq) || normalizar(d.s).includes(nq)).slice(0, 30);
}
async function buscarSemantica(q) {
  try {
    const r = await fetch('http://127.0.0.1:8088/search', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: q, top_k: 10})
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.results || [];
  } catch (e) { return null; }
}
function htmlEscape(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function renderResultados(cont, docs, semanticos) {
  cont.innerHTML = '';
  if (docs.length === 0 && !semanticos) {
    cont.innerHTML = '<div class="aviso">Sin coincidencias locales.</div>';
    return;
  }
  for (const d of docs) {
    const div = document.createElement('div');
    div.className = 'resultado';
    div.innerHTML = `<a href="${BASE}docs/${d.r}.html">${htmlEscape(d.t)}</a><div class="ruta">${d.r}</div>`;
    cont.appendChild(div);
  }
  if (semanticos) {
    const h = document.createElement('div');
    h.className = 'resultado';
    h.innerHTML = '<b>Busqueda semantica (RAG local)</b>';
    cont.appendChild(h);
    for (const s of semanticos) {
      const div = document.createElement('div');
      div.className = 'resultado';
      const ruta = String(s.file || '').replace(/^pages\\//, '').replace(/\\.md$/, '');
      div.innerHTML = `<a href="${BASE}docs/${ruta}.html">${htmlEscape(s.title || ruta)}</a> <span class="ruta">${Math.round((s.score || 0) * 100)}%</span>`;
      cont.appendChild(div);
    }
  }
}
function conectarBusqueda(inputId, contId) {
  const input = document.getElementById(inputId);
  const cont = document.getElementById(contId);
  let timer = null;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const q = input.value.trim();
      if (q.length < 2) { cont.innerHTML = ''; return; }
      const locales = buscarLocal(q);
      const semanticos = await buscarSemantica(q);
      renderResultados(cont, locales, semanticos);
    }, 220);
  });
}
document.addEventListener('DOMContentLoaded', () => conectarBusqueda('q', 'resultados'));
"""


def _layout(titulo: str, cuerpo_html: str, base: str = "") -> str:
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html_mod.escape(titulo)} — La Biblia del Modding inZOI</title>
<link rel="stylesheet" href="{base}assets/estilo.css">
<script>window.BIBLIA_BASE = "{base}";</script>
</head>
<body>
<header class="top">
  <a class="logo" href="{base}index.html">La Biblia del <b>Modding</b> inZOI</a>
  <nav>
    <a href="{base}principios.html">Principios</a>
    <a href="{base}seccion/crea-zoi.html">CAZ</a>
    <a href="{base}seccion/build.html">Build</a>
    <a href="{base}seccion/script.html">Script</a>
    <a href="{base}docs/local/trucos-lua-botones-radiales.html">Trucos Lua</a>
    <a href="{base}seccion/vehicle.html">Vehicle</a>
    <a href="{base}docs/modkit/project/editor.html">Navegador de docs</a>
  </nav>
  <div class="busqueda">
    <input id="q" type="search" placeholder="Buscar en la biblia y en los documentos...">
    <button onclick="return false;">Buscar</button>
  </div>
</header>
<main>
<div class="resultados" id="resultados"></div>
{cuerpo_html}
</main>
<footer>Generado desde el corpus modkit-wiki-rag-v2. Regenerar con <code>python herramientas/generar.py</code>.</footer>
<script src="{base}assets/busqueda-datos.js"></script>
<script src="{base}assets/busqueda.js"></script>
</body>
</html>"""


# ---------------------------------------------------------------------------
# Corpus
# ---------------------------------------------------------------------------

def escanear_corpus(corpus: Path) -> list[dict]:
    """Lee todos los .md; fusiona los fragmentos .chunks/ en su documento padre."""
    documentos: dict[str, dict] = {}
    partes: dict[str, list[tuple[int, str, str]]] = {}

    for ruta in sorted(corpus.rglob("*.md")):
        rel = ruta.relative_to(corpus).as_posix()
        texto = ruta.read_text(encoding="utf-8", errors="replace")
        meta, cuerpo = leer_frontmatter(texto)

        m = re.match(r"^(.*)\.chunks/part-(\d+)\.md$", rel)
        if m:
            padre = m.group(1).removesuffix(".md")
            partes.setdefault(padre, []).append((int(m.group(2)), cuerpo, rel))
            continue

        ruta_doc = rel.removesuffix(".md")
        m_h1 = re.search(r"^#\s+(.+)$", cuerpo, re.MULTILINE)
        documentos[ruta_doc] = {
            "ruta": ruta_doc,
            "archivo": rel,
            "titulo": meta.get("title") or (m_h1.group(1).strip() if m_h1 else ruta_doc.split("/")[-1]),
            "fuente": meta.get("source") or "desconocida",
            "seccion": meta.get("section") or "",
            "url": meta.get("url") or "",
            "migas": meta.get("breadcrumb") or "",
            "cuerpo": cuerpo,
        }

    # fusionar partes en el padre cuando existe; huerfanos se quedan como doc propio
    for padre, lista in partes.items():
        lista.sort(key=lambda t: t[0])
        if padre in documentos:
            cuerpo_extra = "\n\n".join(p[1] for p in lista)
            documentos[padre]["cuerpo"] += "\n\n" + cuerpo_extra
        else:
            primera = lista[0]
            documentos[padre] = {
                "ruta": padre,
                "archivo": primera[2],
                "titulo": padre.split("/")[-1],
                "fuente": "desconocida",
                "seccion": "",
                "url": "",
                "migas": "",
                "cuerpo": "\n\n".join(p[1] for p in lista),
            }

    return sorted(documentos.values(), key=lambda d: d["ruta"])


def pagina_doc(doc: dict) -> str:
    ruta = doc["ruta"]
    # las paginas de docs viven en docs/<ruta>.html: una carpeta mas que la propia ruta
    base = "../" * (ruta.count("/") + 1)
    cuerpo = md_a_html(doc["cuerpo"], ruta, base)
    migas = " / ".join(doc["migas"]) if isinstance(doc["migas"], list) else ""
    original = f'<a href="{html_mod.escape(doc["url"])}" target="_blank" rel="noopener">ver original</a>' if doc["url"] else ""
    meta = (f'<div class="doc-meta"><span class="chip">{html_mod.escape(doc["fuente"])}</span>'
            f'<span class="chip">{html_mod.escape(ruta)}</span>{original}</div>')
    cuerpo_html = f"""<div class="migas"><a href="{base}index.html">Inicio</a> / Documentacion / {html_mod.escape(migas)}</div>
<h1>{html_mod.escape(doc["titulo"])}</h1>
{meta}
<div class="doc-cuerpo">{cuerpo}</div>"""
    return _layout(doc["titulo"], cuerpo_html, base)


# ---------------------------------------------------------------------------
# Secciones
# ---------------------------------------------------------------------------

def _agrupar(docs: list[dict]) -> list[tuple[str, list[dict]]]:
    grupos: dict[str, list[dict]] = {}
    for d in docs:
        grupos.setdefault(d["seccion"] or d["fuente"], []).append(d)
    for clave in grupos:
        grupos[clave].sort(key=lambda d: d["titulo"].lower())
    return sorted(grupos.items())


def pagina_seccion(sec: dict, docs_correspondientes: list[dict], corpus: Path) -> str:
    cuerpo_curado = (CONTENIDO / "biblia" / f"{sec['id']}.md").read_text(encoding="utf-8")
    meta, cuerpo_md = leer_frontmatter(cuerpo_curado)
    base = "../"
    cuerpo = md_a_html(cuerpo_md, None, base)

    grupos_html = []
    for grupo, docs in _agrupar(docs_correspondientes):
        items = "".join(
            f'<li><a href="{base}docs/{d["ruta"]}.html">{html_mod.escape(d["titulo"])}</a>'
            f'<span class="src">[{html_mod.escape(d["fuente"])}]</span></li>'
            for d in docs[:60]
        )
        extra = f' <span class="src">({len(docs)} documentos)</span>' if len(docs) > 60 else ""
        grupos_html.append(f"<h3>{html_mod.escape(grupo)}{extra}</h3><ul class=\"lista-docs\">{items}</ul>")

    cuerpo_html = f"""<div class="migas"><a href="{base}index.html">Inicio</a> / Departamentos / {html_mod.escape(sec["nombre"])}</div>
<h1>{html_mod.escape(sec["nombre"])}</h1>
<p>{html_mod.escape(sec["resumen"])}</p>
{cuerpo}
<h2 class="seccion-titulo">Documentacion oficial y del corpus</h2>
{chr(10).join(grupos_html) or '<p class="aviso">Sin documentos mapeados para esta seccion todavia.</p>'}"""
    return _layout(sec["nombre"], cuerpo_html, base)


def pagina_principios() -> str:
    texto = (CONTENIDO / "biblia" / "principios.md").read_text(encoding="utf-8")
    _, cuerpo_md = leer_frontmatter(texto)
    cuerpo_html = f"""<div class="migas"><a href="index.html">Inicio</a> / Principios</div>
<h1>Principios del modding en inZOI</h1>
{md_a_html(cuerpo_md, None)}"""
    return _layout("Principios del modding en inZOI", cuerpo_html)


def pagina_inicio(secciones: list[dict], total_docs: int) -> str:
    tarjetas = []
    for sec in secciones:
        tarjetas.append(f"""<a class="tarjeta" href="seccion/{sec['id']}.html">
<div class="badge">{html_mod.escape(sec["inicial"])}</div>
<h3>{html_mod.escape(sec["nombre"])}</h3>
<p>{html_mod.escape(sec["resumen"])}</p>
</a>""")
    cuerpo = f"""<div class="hero">
<h1>La Biblia del Modding en inZOI</h1>
<p>Toda la ayuda posible para crear mods con el inZOI ModKit, organizada por los {len(secciones)} departamentos
de <b>MY MOD PROJECTS</b>. Cada departamento explica que se puede construir, que reglas deben cumplir los assets
para funcionar en el juego, como usarlo paso a paso, y ejemplos de codigo con Lua y scripts.
Incluye {total_docs} documentos oficiales navegables del corpus.</p>
<p>Filosofia de la biblia: <a href="principios.html">copiar lo que ya existe en el juego y reemplazarlo por lo nuestro</a>.</p>
</div>
<h2 class="seccion-titulo">Departamentos del ModKit</h2>
<div class="rejilla">
{chr(10).join(tarjetas)}
</div>"""
    return _layout("Portada", cuerpo)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--corpus", type=Path, default=CORPUS_DEFECTO)
    parser.add_argument("--salida", type=Path, default=SALIDA_DEFECTO)
    args = parser.parse_args()
    corpus: Path = args.corpus
    salida: Path = args.salida

    if not corpus.is_dir():
        print(f"error: no existe el corpus {corpus}", flush=True)
        return 2

    t0 = time.time()
    print(f"escaneando corpus {corpus} ...", flush=True)
    docs = escanear_corpus(corpus)
    print(f"  {len(docs)} documentos", flush=True)

    if salida.exists():
        shutil.rmtree(salida)
    (salida / "assets").mkdir(parents=True)
    (salida / "seccion").mkdir()
    (salida / "assets" / "estilo.css").write_text(ESTILO, encoding="utf-8")
    (salida / "assets" / "busqueda.js").write_text(BUSQUEDA_JS, encoding="utf-8")

    # navegador de documentos
    indice_busqueda = []
    for i, doc in enumerate(docs, 1):
        destino = salida / "docs" / (doc["ruta"] + ".html")
        destino.parent.mkdir(parents=True, exist_ok=True)
        destino.write_text(pagina_doc(doc), encoding="utf-8")
        snippet = re.sub(r"\s+", " ", doc["cuerpo"])[:220]
        indice_busqueda.append({"r": doc["ruta"], "t": doc["titulo"], "s": snippet, "f": doc["fuente"]})
        if i % 2000 == 0:
            print(f"  {i}/{len(docs)} documentos renderizados", flush=True)
    (salida / "assets" / "busqueda-datos.js").write_text(
        "window.INDICE_BIBLIA = " + json.dumps(indice_busqueda, ensure_ascii=False) + ";",
        encoding="utf-8")

    # secciones curadas
    secciones = json.loads((CONTENIDO / "secciones.json").read_text(encoding="utf-8"))
    for sec in secciones:
        patrones = sec.get("docs", [])
        correspondientes = [d for d in docs if any(d["ruta"].startswith(p) for p in patrones)]
        html = pagina_seccion(sec, correspondientes, corpus)
        (salida / "seccion" / f"{sec['id']}.html").write_text(html, encoding="utf-8")
        print(f"  seccion {sec['id']}: {len(correspondientes)} docs", flush=True)

    # principios y portada
    (salida / "principios.html").write_text(pagina_principios(), encoding="utf-8")
    (salida / "index.html").write_text(pagina_inicio(secciones, len(docs)), encoding="utf-8")

    print(f"OK: {len(docs)} docs + {len(secciones)} secciones en {salida} ({time.time() - t0:.1f}s)", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

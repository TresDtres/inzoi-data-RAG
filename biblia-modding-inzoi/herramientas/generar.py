#!/usr/bin/env python
"""Generador de 'La Biblia del Modding inZOI' — sitio estatico desde el corpus.

Uso:
    python herramientas/generar.py [--corpus <ruta a pages/>] [--salida <ruta sitio/>]

Fuentes:
    - contenido/biblia/*.md   -> paginas curadas (la biblia, ES)
    - contenido/secciones.json -> definicion de departamentos + mapeo a docs
    - contenido/aprendizaje.json -> misiones Lua y rutas de interes (ES/EN)
    - corpus pages/**.md       -> navegador de documentacion (EN, render tal cual)

Salida: sitio/ (index.html, aprende.html, seccion/*.html, docs/*.html, assets/).
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
  color-scheme: dark;
  --fondo: #090f14; --panel: #111a22; --panel2: #17232c; --panel3: #1d2b35;
  --borde: #2a3a46; --texto: #edf4f5; --tenue: #a7b8bf;
  --acento: #ff975c; --acento2: #62d8cc; --max-ancho: min(96vw, 2320px);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; min-width: 320px; font-family: "Segoe UI", system-ui, sans-serif;
  background: radial-gradient(ellipse at 82% -15%, #19313a 0, transparent 38%), var(--fondo);
  color: var(--texto); line-height: 1.6;
}
a { color: var(--acento2); text-decoration: none; }
a:hover { color: #a6fff1; text-decoration: underline; text-underline-offset: 3px; }
button, input, select, textarea { font: inherit; }
:focus-visible { outline: 3px solid var(--acento2); outline-offset: 3px; }
code { background: #0c1319; border: 1px solid var(--borde); border-radius: 5px; padding: 2px 6px; font-size: 0.92em; color: #ffd1b6; }
pre { background: #0b1218; border: 1px solid var(--borde); border-radius: 10px; padding: 16px 18px; overflow: auto; }
pre code { border: 0; background: none; padding: 0; color: #dce9ef; }
table { display: block; border-collapse: collapse; width: 100%; margin: 18px 0; overflow-x: auto; }
th, td { border: 1px solid var(--borde); padding: 9px 12px; text-align: left; font-size: 0.94em; }
th { background: var(--panel2); color: var(--texto); }
blockquote { border-left: 3px solid var(--acento); margin: 18px 0; padding: 10px 16px; background: var(--panel); border-radius: 0 10px 10px 0; color: #c5d1d5; }
img { max-width: 100%; height: auto; border-radius: 10px; }
.skip-link { position: fixed; z-index: 50; left: 12px; top: 12px; transform: translateY(-160%); padding: 9px 12px; color: #101820; background: var(--acento2); border-radius: 8px; }
.skip-link:focus { transform: none; }
header.top { position: sticky; top: 0; z-index: 20; background: #0a1116f2; border-bottom: 1px solid var(--borde); backdrop-filter: blur(14px); }
.top-inner { max-width: var(--max-ancho); margin: 0 auto; padding: 10px 26px; display: grid; grid-template-columns: auto minmax(0, 1fr) minmax(240px, 360px); gap: 20px; align-items: center; }
header.top .logo { display: flex; align-items: center; gap: 10px; color: var(--texto); font-size: .96rem; font-weight: 700; white-space: nowrap; }
.brand-mark { display: grid; width: 34px; height: 34px; place-items: center; color: #101820; background: linear-gradient(145deg, var(--acento), #ffc47d); border-radius: 10px 10px 10px 3px; font: 800 .75rem "Consolas", monospace; }
.brand-copy b { color: var(--acento); }
.brand-copy span { color: var(--tenue); font-weight: 500; }
header.top nav { display: flex; gap: 5px; flex-wrap: wrap; align-items: center; font-size: .82rem; }
header.top nav a { color: #bdc9ce; padding: 7px 9px; border-radius: 7px; }
header.top nav a:hover, header.top nav a[aria-current="page"] { color: var(--texto); background: var(--panel2); text-decoration: none; }
.busqueda { min-width: 0; display: flex; gap: 7px; }
.busqueda input { min-width: 0; width: 100%; background: #111a22; border: 1px solid var(--borde); border-radius: 8px; padding: 8px 11px; color: var(--texto); font-size: .86rem; }
.busqueda button { background: var(--acento); color: #111820; border: 0; border-radius: 8px; padding: 8px 13px; font-weight: 700; cursor: pointer; }
main { max-width: var(--max-ancho); min-height: 70vh; margin: 0 auto; padding: 34px 26px 72px; }
.resultados:empty { display: none; }
.resultados { max-width: 900px; margin: 0 auto 18px; }
.resultado { background: var(--panel); border: 1px solid var(--borde); border-radius: 10px; padding: 12px 16px; margin-bottom: 8px; }
.resultado .ruta { display: block; color: var(--tenue); font-size: .78rem; }
.hero { position: relative; overflow: hidden; border: 1px solid #38505a; background: linear-gradient(120deg, #13232a 0%, #14212a 55%, #1b2b31 100%); border-radius: 20px; padding: clamp(28px, 5vw, 64px); margin-bottom: 42px; box-shadow: 0 22px 70px #0003; }
.hero::after { content: ""; position: absolute; width: 370px; height: 370px; right: -120px; top: -190px; border: 1px solid #62d8cc38; border-radius: 50%; box-shadow: 0 0 0 36px #62d8cc0a, 0 0 0 72px #62d8cc08; pointer-events: none; }
.hero-home { display: grid; grid-template-columns: minmax(0, 1fr) 230px; gap: 34px; align-items: center; }
.hero-kicker, .page-kicker { color: var(--acento2); text-transform: uppercase; letter-spacing: .14em; font: 700 .74rem/1.4 "Consolas", monospace; }
.hero h1 { max-width: 780px; margin: 10px 0 16px; font-size: clamp(2.4rem, 5vw, 4.25rem); letter-spacing: -.045em; line-height: 1.04; }
.hero p { color: #b7c8cd; max-width: 74ch; margin: 10px 0; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.button-primary, .button-secondary { display: inline-flex; align-items: center; min-height: 42px; padding: 9px 14px; border-radius: 9px; font-weight: 700; }
.button-primary { background: var(--acento); color: #121920; }
.button-primary:hover { color: #121920; background: #ffb078; text-decoration: none; }
.button-secondary { border: 1px solid #52646b; color: var(--texto); background: #10191e88; }
.button-secondary:hover { color: var(--texto); border-color: var(--acento2); text-decoration: none; }
.hero-stats { display: grid; gap: 10px; padding: 16px; border: 1px solid #40565d; border-radius: 14px; background: #0b151ab8; }
.hero-stat { display: grid; gap: 1px; padding: 8px 2px; }
.hero-stat + .hero-stat { border-top: 1px solid #30434a; }
.hero-stat strong { color: var(--acento); font: 700 1.8rem/1.1 "Consolas", monospace; }
.hero-stat span { color: #b7c8cd; font-size: .82rem; }
.rejilla { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr)); gap: 14px; }
.tarjeta { position: relative; display: flex; min-height: 178px; flex-direction: column; align-items: flex-start; background: linear-gradient(145deg, var(--panel), #101820); border: 1px solid var(--borde); border-radius: 14px; padding: 19px 20px; transition: border-color .18s, transform .18s, background .18s; }
.tarjeta:hover { border-color: var(--acento); transform: translateY(-3px); background: linear-gradient(145deg, #17242c, #111a22); text-decoration: none; }
.tarjeta .badge { display: inline-grid; width: 36px; height: 36px; border-radius: 10px; background: #ff975c14; border: 1px solid #ff975c44; place-items: center; font-weight: 800; color: var(--acento); margin-bottom: 13px; }
.tarjeta h3 { margin: 0 0 7px; font-size: 1.08rem; color: var(--texto); }
.tarjeta p { margin: 0; color: #aab9bf; font-size: .9rem; }
h1 { letter-spacing: -.025em; line-height: 1.15; }
h2.seccion-titulo { display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--borde); padding-bottom: 12px; margin: 0 0 18px; font-size: 1.2rem; }
h2.seccion-titulo::before { content: ""; width: 4px; height: 22px; border-radius: 3px; background: var(--acento); }
.migas { color: var(--tenue); font-size: .8rem; margin-bottom: 22px; }
.migas a { color: #b4c3c8; }
.aviso { border: 1px solid #655238; background: #251e16; color: #ead2ae; padding: 11px 14px; border-radius: 10px; font-size: .9rem; margin-top: 12px; }
.page-heading { padding: 12px 0 24px; margin-bottom: 28px; border-bottom: 1px solid var(--borde); }
.page-heading h1 { margin: 6px 0 12px; font-size: clamp(2rem, 4vw, 3rem); }
.page-lead { max-width: 76ch; color: #b7c8cd; font-size: 1.08rem; }
.doc-page, .section-page, .principles-page { max-width: 1000px; margin: 0 auto; }
.doc-cuerpo, .section-prose, .principles-page { max-width: 82ch; }
.doc-cuerpo { color: #d4dfe2; font-size: 1rem; line-height: 1.78; }
.doc-cuerpo h2, .section-prose h2, .principles-page h2 { margin: 2.2em 0 .7em; color: var(--texto); font-size: 1.55rem; line-height: 1.25; }
.doc-cuerpo h3, .section-prose h3, .principles-page h3 { margin: 1.8em 0 .55em; color: #dfe9eb; font-size: 1.16rem; }
.doc-cuerpo p, .section-prose p, .principles-page p { margin: 0 0 1.15em; }
.doc-cuerpo li, .section-prose li, .principles-page li { margin: .4em 0; }
.doc-cuerpo pre, .section-prose pre, .principles-page pre { margin: 18px 0 24px; }
.doc-cuerpo table, .section-prose table, .principles-page table { font-size: .93rem; }
.doc-cuerpo hr, .section-prose hr, .principles-page hr { border: 0; border-top: 1px solid var(--borde); margin: 30px 0; }
.doc-meta { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; color: var(--tenue); font-size: .8rem; margin: 16px 0 26px; }
.doc-meta .chip { background: var(--panel2); border: 1px solid var(--borde); border-radius: 999px; padding: 4px 10px; }
.doc-meta a { margin-left: auto; }
.corpus-index { margin-top: 42px; padding-top: 22px; border-top: 1px solid var(--borde); }
.corpus-index h3 { margin: 26px 0 10px; color: var(--acento2); font-size: .95rem; }
.lista-docs { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 330px), 1fr)); gap: 7px; list-style: none; padding: 0; }
.lista-docs li { min-width: 0; display: flex; align-items: baseline; justify-content: space-between; gap: 12px; padding: 10px 12px; border: 1px solid #263640; border-radius: 9px; background: #101820; }
.lista-docs li a { min-width: 0; }
.lista-docs li:hover { border-color: #47616b; }
.lista-docs .src { color: var(--tenue); font-size: .74rem; text-align: right; }
footer { border-top: 1px solid var(--borde); color: var(--tenue); font-size: .8rem; padding: 22px 26px; text-align: center; }
footer code { color: #c8d8dc; }
@media (max-width: 1120px) {
  .top-inner { grid-template-columns: 1fr minmax(240px, 340px); gap: 8px 16px; }
  header.top nav { grid-row: 2; grid-column: 1 / -1; }
}
@media (max-width: 700px) {
  .top-inner { display: flex; flex-wrap: wrap; padding: 10px 16px; gap: 8px 12px; }
  header.top .logo { width: 100%; }
  header.top nav { order: 2; width: 100%; gap: 2px; }
  header.top nav a { padding: 6px 7px; }
  .busqueda { order: 3; width: 100%; }
  main { padding: 24px 16px 54px; }
  .hero-home { grid-template-columns: 1fr; }
  .hero-stats { grid-template-columns: repeat(2, 1fr); }
  .hero-stat + .hero-stat { border-top: 0; }
  .hero-stat:nth-child(even) { border-left: 1px solid #30434a; padding-left: 14px; }
  .lista-docs { grid-template-columns: 1fr; }
  .lista-docs li { align-items: flex-start; flex-direction: column; gap: 3px; }
  .doc-meta a { margin-left: 0; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
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


def _layout(
    titulo: str,
    cuerpo_html: str,
    base: str = "",
    extra_head: str = "",
    extra_scripts: str = "",
) -> str:
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html_mod.escape(titulo)} — La Biblia del Modding inZOI</title>
<link rel="stylesheet" href="{base}assets/estilo.css">
{extra_head}
<script>window.BIBLIA_BASE = "{base}";</script>
</head>
<body>
<a class="skip-link" href="#contenido">Saltar al contenido</a>
<header class="top"><div class="top-inner">
  <a class="logo" href="{base}index.html"><span class="brand-mark" aria-hidden="true">IZ</span><span class="brand-copy">La Biblia del <b>Modding</b> <span>inZOI</span></span></a>
  <nav aria-label="Navegación principal">
    <a href="{base}principios.html">Principios</a>
    <a href="{base}seccion/crea-zoi.html">CAZ</a>
    <a href="{base}seccion/build.html">Build</a>
    <a href="{base}seccion/script.html">Script</a>
    <a href="{base}aprende.html">Aprende / Learn</a>
      <a href="{base}maquina-estados.html">Lua Flow</a>
      <a href="{base}docs/local/trucos-lua-botones-radiales.html">Trucos Lua</a>
    <a href="{base}seccion/vehicle.html">Vehicle</a>
    <a href="{base}docs/modkit/project/editor.html">Navegador de docs</a>
  </nav>
  <div class="busqueda" role="search">
    <input id="q" type="search" aria-label="Buscar en la Biblia y el corpus" placeholder="Buscar en la Biblia y los documentos…">
    <button onclick="return false;">Buscar</button>
  </div>
 </div></header>
<main id="contenido" class="site-main">
<div class="resultados" id="resultados" aria-live="polite"></div>
{cuerpo_html}
</main>
<footer>Generado desde el corpus modkit-wiki-rag-v2. Regenerar con <code>python herramientas/generar.py</code>.</footer>
<script src="{base}assets/busqueda-datos.js"></script>
<script src="{base}assets/busqueda.js"></script>
{extra_scripts}
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
    cuerpo_html = f"""<div class="migas"><a href="{base}index.html">Inicio</a> / Documentación / {html_mod.escape(migas)}</div>
<article class="doc-page">
  <header class="page-heading">
    <p class="page-kicker">DOCUMENTACIÓN · {html_mod.escape(doc["fuente"])}</p>
    <h1>{html_mod.escape(doc["titulo"])}</h1>
    {meta}
  </header>
  <div class="doc-cuerpo">{cuerpo}</div>
</article>"""
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
<article class="section-page">
  <header class="page-heading">
    <p class="page-kicker">DEPARTAMENTO · MODKIT</p>
    <h1>{html_mod.escape(sec["nombre"])}</h1>
    <p class="page-lead">{html_mod.escape(sec["resumen"])}</p>
  </header>
  <div class="section-prose">{cuerpo}</div>
  <section class="corpus-index">
    <h2 class="seccion-titulo">Documentación oficial y del corpus</h2>
    {chr(10).join(grupos_html) or '<p class="aviso">Sin documentos mapeados para esta sección todavía.</p>'}
  </section>
</article>"""
    return _layout(sec["nombre"], cuerpo_html, base)


def pagina_principios() -> str:
    texto = (CONTENIDO / "biblia" / "principios.md").read_text(encoding="utf-8")
    _, cuerpo_md = leer_frontmatter(texto)
    cuerpo_html = f"""<div class="migas"><a href="index.html">Inicio</a> / Principios</div>
<article class="principles-page">
  <header class="page-heading">
    <p class="page-kicker">MÉTODO DE TRABAJO</p>
    <h1>Principios del modding en inZOI</h1>
  </header>
  {md_a_html(cuerpo_md, None)}
</article>"""
    return _layout("Principios del modding en inZOI", cuerpo_html)


def pagina_inicio(secciones: list[dict], total_docs: int) -> str:
    tarjetas = []
    for sec in secciones:
        tarjetas.append(f"""<a class="tarjeta" href="seccion/{sec['id']}.html">
<div class="badge">{html_mod.escape(sec["inicial"])}</div>
<h3>{html_mod.escape(sec["nombre"])}</h3>
<p>{html_mod.escape(sec["resumen"])}</p>
</a>""")
    cuerpo = f"""<section class="hero hero-home">
<div class="hero-copy">
<p class="hero-kicker">GUÍA DE CREACIÓN · INZOI MODKIT</p>
<h1>La Biblia del Modding en inZOI</h1>
<p>Toda la ayuda posible para crear mods con el inZOI ModKit, organizada por los {len(secciones)} departamentos
de <b>MY MOD PROJECTS</b>. Cada departamento explica que se puede construir, que reglas deben cumplir los assets
para funcionar en el juego, como usarlo paso a paso, y ejemplos de codigo con Lua y scripts.
Incluye {total_docs} documentos oficiales navegables del corpus.</p>
<div class="hero-actions">
  <a class="button-primary" href="aprende.html">Aprende creando</a>
  <a class="button-secondary" href="principios.html">Lee los principios</a>
</div>
</div>
<aside class="hero-stats" aria-label="Contenido de la Biblia">
  <div class="hero-stat"><strong>{len(secciones)}</strong><span>departamentos del ModKit</span></div>
  <div class="hero-stat"><strong>{total_docs:,}</strong><span>documentos navegables</span></div>
</aside>
</section>
<h2 class="seccion-titulo">Departamentos del ModKit</h2>
<div class="rejilla">
{chr(10).join(tarjetas)}
</div>"""
    return _layout("Portada", cuerpo)


def _texto_bilingue(valor: object, contexto: str) -> None:
    if not isinstance(valor, dict) or not all(
        isinstance(valor.get(idioma), str) and valor[idioma].strip()
        for idioma in ("es", "en")
    ):
        raise ValueError(f"{contexto}: se requieren textos no vacios en es y en")


def cargar_aprendizaje() -> dict:
    datos = json.loads((CONTENIDO / "aprendizaje.json").read_text(encoding="utf-8"))
    misiones = datos.get("missions")
    rutas = datos.get("tracks")
    if not isinstance(misiones, list) or not misiones:
        raise ValueError("aprendizaje.json: se requiere al menos una mision")
    if not isinstance(rutas, list) or not rutas:
        raise ValueError("aprendizaje.json: se requiere al menos una ruta de interes")

    ids_mision: set[str] = set()
    estados_validos = {"in_game", "visible", "preview", "validated", "documented", "pattern"}
    for indice, mision in enumerate(misiones, 1):
        contexto = f"mision {indice}"
        if not isinstance(mision, dict) or not isinstance(mision.get("id"), str):
            raise ValueError(f"{contexto}: falta un id")
        if mision["id"] in ids_mision:
            raise ValueError(f"{contexto}: id duplicado {mision['id']}")
        ids_mision.add(mision["id"])
        for campo in ("title", "objective", "action", "question"):
            _texto_bilingue(mision.get(campo), f"{contexto}.{campo}")
        opciones = mision.get("choices")
        if not isinstance(opciones, list) or len(opciones) < 2:
            raise ValueError(f"{contexto}: se requieren al menos dos opciones")
        ids_opcion: set[str] = set()
        for opcion in opciones:
            if not isinstance(opcion, dict) or not isinstance(opcion.get("id"), str):
                raise ValueError(f"{contexto}: opcion sin id")
            if opcion["id"] in ids_opcion:
                raise ValueError(f"{contexto}: id de opcion duplicado")
            ids_opcion.add(opcion["id"])
            _texto_bilingue(opcion.get("text"), f"{contexto}.choices")
        if mision.get("answer") not in ids_opcion:
            raise ValueError(f"{contexto}: answer debe coincidir con una opcion")
        feedback = mision.get("feedback")
        if not isinstance(feedback, dict):
            raise ValueError(f"{contexto}: falta feedback")
        for tipo in ("correct", "incorrect"):
            _texto_bilingue(feedback.get(tipo), f"{contexto}.feedback.{tipo}")
        evidencia = mision.get("evidence")
        if not isinstance(evidencia, dict) or evidencia.get("status") not in estados_validos:
            raise ValueError(f"{contexto}: estado de evidencia desconocido")
        _texto_bilingue(evidencia, f"{contexto}.evidence")
        fuente = mision.get("source")
        if not isinstance(fuente, str) or not re.fullmatch(
            r"(?:seccion/[a-z0-9-]+|docs/(?:[a-z0-9_-]+/)*[a-z0-9_-]+)\.html",
            fuente,
        ):
            raise ValueError(f"{contexto}: fuente interna invalida")
        if not isinstance(mision.get("code"), str):
            raise ValueError(f"{contexto}: code debe ser texto")

    ids_ruta: set[str] = set()
    for indice, ruta in enumerate(rutas, 1):
        contexto = f"ruta {indice}"
        if not isinstance(ruta, dict) or not isinstance(ruta.get("id"), str):
            raise ValueError(f"{contexto}: falta un id")
        if ruta["id"] in ids_ruta:
            raise ValueError(f"{contexto}: id duplicado {ruta['id']}")
        ids_ruta.add(ruta["id"])
        _texto_bilingue(ruta.get("label"), f"{contexto}.label")
        _texto_bilingue(ruta.get("description"), f"{contexto}.description")
        destino = ruta.get("href")
        if not isinstance(destino, str) or not re.fullmatch(r"seccion/[a-z0-9-]+\.html", destino):
            raise ValueError(f"{contexto}: href interno invalido")
    return datos


def pagina_aprendizaje(datos: dict) -> str:
    datos_json = json.dumps(datos, ensure_ascii=False)
    datos_json = (datos_json.replace("&", "\\u0026")
                  .replace("<", "\\u003c")
                  .replace(">", "\\u003e")
                  .replace("\u2028", "\\u2028")
                  .replace("\u2029", "\\u2029"))
    cuerpo = f"""    <div class="migas"><a href="index.html">Inicio</a> / <span id="aprendizaje-migas">Aprende creando</span></div>
<div class="aprende" id="aprendizaje"></div>
<script id="aprendizaje-datos" type="application/json">{datos_json}</script>"""
    return _layout(
        "Aprende creando / Learn by creating",
        cuerpo,
        extra_head='<link rel="stylesheet" href="assets/aprende.css">',
        extra_scripts='<script src="assets/aprende.js" defer></script>',
    )


def pagina_maquina_estados() -> str:
    cuerpo = """<div class="migas"><a href="index.html">Inicio</a> / Lua Flow</div>
<div id="lua-flow-app"></div>"""
    return _layout(
        "Lua Flow — Editor visual B1/B2",
        cuerpo,
        extra_head='<link rel="stylesheet" href="assets/maquina-estados.css">',
        extra_scripts='<script src="assets/maquina-estados.js" defer></script>',
    )


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

    aprendizaje = cargar_aprendizaje()
    t0 = time.time()
    print(f"escaneando corpus {corpus} ...", flush=True)
    docs = escanear_corpus(corpus)
    print(f"  {len(docs)} documentos", flush=True)

    if salida.exists():
        shutil.rmtree(salida, ignore_errors=True)
    (salida / "assets").mkdir(parents=True, exist_ok=True)
    (salida / "seccion").mkdir(parents=True, exist_ok=True)
    (salida / "assets" / "estilo.css").write_text(ESTILO, encoding="utf-8")
    (salida / "assets" / "busqueda.js").write_text(BUSQUEDA_JS, encoding="utf-8")
    for nombre in ("aprende.css", "aprende.js", "maquina-estados.css", "maquina-estados.js"):
        origen = RAIZ / "herramientas" / nombre
        (salida / "assets" / nombre).write_text(origen.read_text(encoding="utf-8"), encoding="utf-8")

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
    (salida / "aprende.html").write_text(pagina_aprendizaje(aprendizaje), encoding="utf-8")
    (salida / "maquina-estados.html").write_text(pagina_maquina_estados(), encoding="utf-8")

    print(f"OK: {len(docs)} docs + {len(secciones)} secciones en {salida} ({time.time() - t0:.1f}s)", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

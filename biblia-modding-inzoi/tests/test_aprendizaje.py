import json
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


BIBLIA = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BIBLIA / "herramientas"))
import generar


class AprendizajeTests(unittest.TestCase):
    def test_fuente_bilingue_y_rutas_de_departamento_validas(self):
        datos = generar.cargar_aprendizaje()
        secciones = json.loads((BIBLIA / "contenido" / "secciones.json").read_text(encoding="utf-8"))
        paginas = {f"seccion/{seccion['id']}.html" for seccion in secciones}

        self.assertEqual(len(datos["missions"]), 9)
        self.assertEqual(len({mision["id"] for mision in datos["missions"]}), len(datos["missions"]))
        self.assertNotIn("GizmoPhoto", json.dumps(datos))
        self.assertEqual(datos["missions"][0]["id"], "cambio-cabello")
        self.assertEqual(datos["missions"][0]["answer"], "b2")
        self.assertEqual(datos["missions"][0]["evidence"]["status"], "in_game")
        self.assertIn("appearance.hair action=change", datos["missions"][0]["code"])
        self.assertEqual(datos["missions"][1]["evidence"]["status"], "in_game")
        self.assertEqual(datos["missions"][2]["evidence"]["status"], "documented")
        self.assertEqual(datos["missions"][3]["evidence"]["status"], "documented")
        self.assertEqual(datos["missions"][4]["id"], "fx-interfaz-cli")
        self.assertEqual(datos["missions"][4]["evidence"]["status"], "visible")
        self.assertIn("JavaScript", datos["missions"][4]["action"]["es"])
        self.assertIn("fx.spawn", datos["missions"][4]["code"])
        self.assertEqual(datos["missions"][5]["id"], "interfaz-no-es-carga")
        self.assertEqual(datos["missions"][5]["evidence"]["status"], "in_game")
        self.assertIn("PregnancySurprise", datos["missions"][5]["action"]["es"])
        self.assertIn("movement.teleport", datos["missions"][5]["code"])
        self.assertEqual(datos["missions"][6]["id"], "bloqueo-autonomia-jerarquia")
        self.assertEqual(datos["missions"][7]["id"], "bloqueo-agenda-timeline")
        self.assertEqual(datos["missions"][8]["id"], "viaje-familiar-coche-obediencia")
        for ruta in datos["tracks"]:
            self.assertIn(ruta["href"], paginas)
        for mision in datos["missions"]:
            for campo in ("title", "objective", "action", "question", "evidence"):
                self.assertTrue(mision[campo]["es"].strip())
                self.assertTrue(mision[campo]["en"].strip())

    def test_generador_emite_experiencia_assets_y_enlaces(self):
        with tempfile.TemporaryDirectory() as temporal:
            raiz = Path(temporal)
            corpus = raiz / "pages"
            corpus.mkdir()
            (corpus / "sample.md").write_text("# Test page\n\nCorpus fixture.\n", encoding="utf-8")
            for mision in generar.cargar_aprendizaje()["missions"]:
                fuente = Path(mision["source"][5:-5] + ".md")
                pagina = corpus / fuente
                pagina.parent.mkdir(parents=True, exist_ok=True)
                pagina.write_text("# Source fixture\n", encoding="utf-8")
            salida = raiz / "site"

            with patch.object(sys, "argv", ["generar.py", "--corpus", str(corpus), "--salida", str(salida)]):
                resultado = generar.main()

            self.assertEqual(resultado, 0)
            inicio = (salida / "index.html").read_text(encoding="utf-8")
            aprender = (salida / "aprende.html").read_text(encoding="utf-8")
            self.assertIn('href="aprende.html"', inicio)
            self.assertIn('id="aprendizaje-datos"', aprender)
            self.assertIn("Learn by creating", aprender)
            self.assertIn('href="assets/aprende.css"', aprender)
            self.assertIn('src="assets/aprende.js"', aprender)
            self.assertTrue((salida / "assets" / "aprende.css").is_file())
            self.assertTrue((salida / "assets" / "aprende.js").is_file())
            lua_flow = (salida / "maquina-estados.html").read_text(encoding="utf-8")
            self.assertIn("Lua Flow", lua_flow)
            self.assertIn('href="assets/maquina-estados.css"', lua_flow)
            self.assertIn('src="assets/maquina-estados.js"', lua_flow)
            self.assertTrue((salida / "assets" / "maquina-estados.css").is_file())
            self.assertTrue((salida / "assets" / "maquina-estados.js").is_file())
            for ruta in generar.cargar_aprendizaje()["tracks"]:
                self.assertTrue((salida / ruta["href"]).is_file(), ruta["href"])
            for mision in generar.cargar_aprendizaje()["missions"]:
                self.assertTrue((salida / mision["source"]).is_file(), mision["source"])

    def test_rechaza_mision_sin_texto_ingles(self):
        original = generar.cargar_aprendizaje()
        with tempfile.TemporaryDirectory() as temporal:
            ruta = Path(temporal) / "aprendizaje.json"
            original["missions"][0]["title"]["en"] = ""
            ruta.write_text(json.dumps(original), encoding="utf-8")
            with patch.object(generar, "CONTENIDO", Path(temporal)):
                with self.assertRaisesRegex(ValueError, "title"):
                    generar.cargar_aprendizaje()

    def test_json_incrustado_escapa_marcas_html(self):
        datos = generar.cargar_aprendizaje()
        datos["missions"][0]["title"]["es"] = "<img src=x onerror=alert(1)>"
        pagina = generar.pagina_aprendizaje(datos)

        self.assertNotIn("<img src=x", pagina)
        self.assertIn(r"\u003cimg", pagina)

    def test_resolucion_enlaces_sin_dobles_barras_ni_rotos(self):
        import posixpath
        import re
        from urllib.parse import unquote

        self.assertEqual(generar._resolver("local/ejemplo.md", ""), "local/ejemplo")
        self.assertEqual(
            generar._resolver("pages/wiki/cli/bio/bio-set-gender.md", "mcp-tools/cli"),
            "wiki/cli/bio/bio-set-gender",
        )
        html_cli = generar.md_a_html(
            "[bio](pages/wiki/cli/bio/bio-set-gender.md) y [Slot](key:SlotName)",
            "mcp-tools/cli/estado.md",
            "../../../",
        )
        self.assertIn('href="../../../docs/wiki/cli/bio/bio-set-gender.html"', html_cli)
        self.assertNotIn('href="key:SlotName"', html_cli)

        sitio = BIBLIA / "sitio"
        idx_file = sitio / "assets" / "busqueda-datos.js"
        if not idx_file.is_file():
            return
        raw_idx = idx_file.read_text(encoding="utf-8")
        entries = json.loads(raw_idx[raw_idx.index("["):raw_idx.rindex("]") + 1])
        valid_routes = {f"docs/{e['r']}.html" for e in entries}
        for p in list(sitio.glob("*.html")) + list((sitio / "seccion").glob("*.html")) + list((sitio / "assets").glob("*")):
            valid_routes.add(p.relative_to(sitio).as_posix())

        tag_re = re.compile(r'<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"', re.I)
        all_html_rel = (
            [p.relative_to(sitio).as_posix() for p in list(sitio.glob("*.html")) + list((sitio / "seccion").glob("*.html"))]
            + [
                f"docs/{e['r']}.html"
                for e in entries
                if e["r"].startswith(("local/", "mcp-tools/", "modkit/", "howto/", "workflows/", "wiki/luaapi/b1/structs/"))
            ]
        )
        broken = []
        double_slashes = []
        for rel_f in all_html_rel:
            parent_dir = posixpath.dirname(rel_f)
            text = (sitio / rel_f).read_text(encoding="utf-8", errors="replace")
            for m in tag_re.finditer(text):
                raw = m.group(1)
                if not raw or raw.startswith(("#", "http://", "https://", "mailto:", "javascript:", "coui://")):
                    continue
                if "//" in raw:
                    double_slashes.append((rel_f, raw))
                path_part = unquote(raw.split("#")[0].split("?")[0])
                if not path_part:
                    continue
                target_rel = posixpath.normpath(posixpath.join(parent_dir, path_part)) if parent_dir else posixpath.normpath(path_part)
                if target_rel not in valid_routes:
                    broken.append((rel_f, raw, target_rel))

        self.assertEqual(double_slashes, [], f"Double slashes found: {double_slashes[:10]}")
        self.assertEqual(broken, [], f"Broken links found: {broken[:10]}")


if __name__ == "__main__":
    unittest.main()

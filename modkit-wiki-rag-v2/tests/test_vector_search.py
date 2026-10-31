import json
import sqlite3
import tempfile
import unittest
from pathlib import Path

import numpy as np

from tools.vector_search import (
    DEFAULT_SEARCH_SOURCES,
    VectorSearch,
    build_index,
    collect_corpus,
    parse_frontmatter,
    semantic_chunks,
)


class FakeEmbeddingModel:
    def encode(self, texts, **kwargs):
        vectors = []
        for text in texts:
            lowered = text.lower()
            vectors.append([
                float("unreal" in lowered or "engine" in lowered),
                float("lua" in lowered or "script" in lowered),
                1.0,
            ])
        vectors = np.asarray(vectors, dtype=np.float32)
        if kwargs.get("normalize_embeddings"):
            vectors /= np.linalg.norm(vectors, axis=1, keepdims=True)
        return vectors


def _frontmatter(metadata, body):
    return "---\n" + "".join(
        f"{key}: {json.dumps(value, ensure_ascii=False)}\n"
        for key, value in metadata.items()
    ) + "---\n\n" + body


class VectorSearchTests(unittest.TestCase):
    def test_rag_battery_contains_all_24_cases(self):
        fixture = Path(__file__).parent / "fixtures" / "rag_battery.json"
        battery = json.loads(fixture.read_text(encoding="utf-8"))
        self.assertEqual(len(battery["cases"]), 24)
        self.assertEqual(
            [case["id"] for case in battery["cases"]],
            [f"{number:02d}" for number in range(1, 25)],
        )
        self.assertTrue(all(case["query"].strip() for case in battery["cases"]))

    def test_frontmatter_is_kept_as_metadata_not_content(self):
        metadata, content = parse_frontmatter(
            '---\ntitle: "CLI"\nsource: "wiki"\nbreadcrumb: ["Docs"]\n---\n\n# CLI\nText.'
        )
        self.assertEqual(metadata["title"], "CLI")
        self.assertEqual(metadata["breadcrumb"], ["Docs"])
        self.assertEqual(content, "# CLI\nText.")

    def test_semantic_chunks_keep_heading_context_code_and_overlap(self):
        markdown = (
            "# Guide\n\n## Python\n\n"
            + "First sentence. " * 90
            + "\n\n```python\nprint('hello')\n```\n\n"
            + "Second section text. " * 90
        )
        chunks = semantic_chunks(markdown, "Guide", max_chars=500, overlap_chars=100)
        self.assertGreater(len(chunks), 2)
        self.assertTrue(all("Document: Guide" in chunk for chunk in chunks))
        self.assertTrue(all("Section: Python" in chunk for chunk in chunks))
        self.assertIn("```python\nprint('hello')\n```", "\n\n".join(chunks))
        first_body = chunks[0].split("\n\n", 1)[1]
        second_body = chunks[1].split("\n\n", 1)[1]
        self.assertIn(first_body[-60:], second_body)
        self.assertTrue(all(len(chunk) <= 500 for chunk in chunks))

    def test_oversized_table_header_does_not_produce_invalid_wrap_width(self):
        table = "|" + ("very_long_header " * 100) + "|\n|---|\n| value |"
        chunks = semantic_chunks(table, "Table", max_chars=500, overlap_chars=0)
        self.assertTrue(chunks)
        self.assertTrue(all(len(chunk) <= 500 for chunk in chunks))

    def test_collection_skips_navigation_indexes_and_keeps_local_sources_separate(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            pages = root / "pages"
            state = root / "state"
            (pages / "wiki" / "cli").mkdir(parents=True)
            (pages / "modkit").mkdir(parents=True)
            (pages / "official").mkdir(parents=True)
            (pages / "local").mkdir(parents=True)
            state.mkdir()

            docs = [
                ("wiki-doc", "wiki", "wiki/cli", "CLI", "https://example.test/cli",
                 "wiki/cli.md", "pages/wiki/cli.md", "article", "# CLI\n\nUse Unreal."),
                ("nav-doc", "wiki", "wiki", "Finder", "https://example.test/finder",
                 "wiki/finder.md", "pages/wiki/finder.md", "navigation-index", "# Finder\n\nLinks."),
                ("landing-doc", "modkit", "modkit", "ModKit landing", "https://example.test/modkit",
                 "modkit/index.md", "pages/modkit/index.md", "article", "# ModKit\n\nCategory links."),
            ]
            connection = sqlite3.connect(state / "catalog.sqlite")
            connection.executescript("""
                CREATE TABLE pages(
                    doc_id TEXT, source TEXT, section TEXT, title TEXT, url TEXT,
                    breadcrumbs TEXT, route TEXT, relative_path TEXT, active INTEGER
                );
                CREATE TABLE chunks(doc_id TEXT, chunk_index INTEGER, relative_path TEXT);
            """)
            for doc_id, source, section, title, url, parent, chunk, page_type, body in docs:
                metadata = {
                    "document_id": doc_id,
                    "source": source,
                    "title": title,
                    "page_type": page_type,
                }
                (root / parent).parent.mkdir(parents=True, exist_ok=True)
                (root / parent).write_text(_frontmatter(metadata, body), encoding="utf-8")
                (root / chunk).write_text(_frontmatter(metadata, body), encoding="utf-8")
                connection.execute(
                    "INSERT INTO pages VALUES (?,?,?,?,?,?,?,?,1)",
                    (doc_id, source, section, title, url, "[]", section, parent),
                )
                connection.execute("INSERT INTO chunks VALUES (?,?,?)", (doc_id, 1, chunk))
            connection.commit()
            connection.close()
            (pages / "official" / "source.md").write_text(
                _frontmatter(
                    {"source": "official_external", "title": "Official", "url": "https://official.test"},
                    "# Official\n\nOfficial reference.",
                ),
                encoding="utf-8",
            )
            (pages / "local" / "notes.md").write_text(
                _frontmatter({"source": "wiki", "title": "Notes"}, "# Notes\n\nLocal proposal."),
                encoding="utf-8",
            )

            corpus = collect_corpus(root)
            sources = {record.source for record in corpus}
            titles = {record.title for record in corpus}
            self.assertEqual(sources, {"wiki", "official_external", "local"})
            self.assertNotIn("Finder", titles)
            self.assertNotIn("ModKit landing", titles)
            self.assertIn("Official", titles)
            self.assertIn("Notes", titles)

    def test_build_is_incremental_and_query_returns_citations(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            (root / "state").mkdir()
            (root / "pages" / "wiki").mkdir(parents=True)
            (root / "pages" / "official").mkdir(parents=True)
            connection = sqlite3.connect(root / "state" / "catalog.sqlite")
            connection.executescript("""
                CREATE TABLE pages(
                    doc_id TEXT, source TEXT, section TEXT, title TEXT, url TEXT,
                    breadcrumbs TEXT, route TEXT, relative_path TEXT, active INTEGER
                );
                CREATE TABLE chunks(doc_id TEXT, chunk_index INTEGER, relative_path TEXT);
            """)
            markdown_path = root / "pages" / "wiki" / "engine.md"
            metadata = {"document_id": "engine-doc", "source": "wiki", "title": "Unreal Engine"}
            markdown_path.write_text(
                _frontmatter(metadata, "# Unreal Engine\n\nUse the Unreal Engine editor."),
                encoding="utf-8",
            )
            animation_path = root / "pages" / "wiki" / "interaction-animation.md"
            animation_metadata = {
                "document_id": "interaction-animation-doc",
                "source": "wiki",
                "title": "Interaction Animation",
            }
            animation_path.write_text(
                _frontmatter(
                    animation_metadata,
                    "# Interaction Animation\n\n"
                    "Unreal Engine documents character interaction animations in "
                    "Animation Montages, with sections and posture configurations.",
                ),
                encoding="utf-8",
            )
            lexical_path = root / "pages" / "wiki" / "lexical.md"
            lexical_metadata = {
                "document_id": "lexical-doc",
                "source": "wiki",
                "title": "Lexical Exact",
            }
            lexical_path.write_text(
                _frontmatter(lexical_metadata, "# Lexical Exact\n\nQuartz lantern."),
                encoding="utf-8",
            )
            external_path = root / "pages" / "official" / "external.md"
            external_path.write_text(
                _frontmatter(
                    {"document_id": "external-doc", "title": "External Reference"},
                    "# External Reference\n\nUnreal Engine interaction animation montage section.",
                ),
                encoding="utf-8",
            )
            connection.execute(
                "INSERT INTO pages VALUES (?,?,?,?,?,?,?,?,1)",
                ("interaction-animation-doc", "wiki", "wiki/animation", "Interaction Animation",
                 "https://example.test/interaction-animation", "[]", "wiki/animation/interaction",
                 "wiki/interaction-animation.md"),
            )
            connection.execute(
                "INSERT INTO chunks VALUES (?,?,?)",
                ("interaction-animation-doc", 1, "pages/wiki/interaction-animation.md"),
            )
            connection.execute(
                "INSERT INTO pages VALUES (?,?,?,?,?,?,?,?,1)",
                ("lexical-doc", "wiki", "wiki/lexical", "Lexical Exact",
                 "https://example.test/lexical", "[]", "wiki/lexical", "wiki/lexical.md"),
            )
            connection.execute(
                "INSERT INTO chunks VALUES (?,?,?)",
                ("lexical-doc", 1, "pages/wiki/lexical.md"),
            )
            local_path = root / "pages" / "local" / "archery.md"
            local_path.parent.mkdir(parents=True)
            local_path.write_text(
                _frontmatter(
                    {"document_id": "local-archery", "source": "wiki", "title": "Archery Notes"},
                    "# Archery Notes\n\nUnreal Engine archery proposal.",
                ),
                encoding="utf-8",
            )
            second_chunk_path = root / "pages" / "wiki" / "engine-part-002.md"
            second_chunk_path.write_text(
                _frontmatter(metadata, "# Unreal Engine\n\nUse the Unreal Engine editor."),
                encoding="utf-8",
            )
            connection.execute(
                "INSERT INTO pages VALUES (?,?,?,?,?,?,?,?,1)",
                ("engine-doc", "wiki", "wiki/cli", "Unreal Engine", "https://example.test/engine",
                 '["Docs"]', "wiki/cli/engine", "wiki/engine.md"),
            )
            connection.execute("INSERT INTO chunks VALUES (?,?,?)", ("engine-doc", 1, "pages/wiki/engine.md"))
            connection.execute(
                "INSERT INTO chunks VALUES (?,?,?)",
                ("engine-doc", 2, "pages/wiki/engine-part-002.md"),
            )
            connection.commit()
            connection.close()

            index_path = root / "state" / "vector_index.sqlite"
            model = FakeEmbeddingModel()
            first = build_index(root, index_path, "test/model", batch_size=4, model=model)
            second = build_index(root, index_path, "test/model", batch_size=4, model=model)
            self.assertEqual(first["chunks_embedded"], 5)
            self.assertEqual(second["chunks_embedded"], 0)
            self.assertEqual(second["chunks_reused"], 5)

            searcher = VectorSearch(index_path, "test/model", model=model)
            try:
                result = searcher.search("How do I use Unreal Engine?", top_k=5)
                local_result = searcher.search("How do I use Unreal Engine?", top_k=5, source="local")
                animation_result = searcher.search(
                    "Unreal Engine character interaction animation montage sections posture",
                    top_k=5,
                )
                lexical_result = searcher.search("quartz lantern", top_k=5)
            finally:
                searcher.close()
            self.assertGreaterEqual(result["count"], 1)
            self.assertEqual(result["results"][0]["title"], "Unreal Engine")
            self.assertEqual(result["results"][0]["source"], "wiki")
            self.assertEqual(result["source_filter"]["mode"], "official_default")
            self.assertNotIn("local", result["source_filter"]["sources"])
            self.assertNotIn("official_external", result["source_filter"]["sources"])
            self.assertEqual(tuple(result["source_filter"]["sources"]), DEFAULT_SEARCH_SOURCES)
            self.assertTrue(all(hit["source"] != "local" for hit in result["results"]))
            self.assertEqual(result["results"][0]["url"], "https://example.test/engine")
            self.assertIn("Document: Unreal Engine", result["results"][0]["text"])
            self.assertEqual(local_result["count"], 1)
            self.assertEqual(local_result["results"][0]["title"], "Archery Notes")
            self.assertEqual(local_result["results"][0]["source"], "local")
            self.assertEqual(local_result["source_filter"]["mode"], "explicit")
            self.assertEqual(animation_result["results"][0]["title"], "Interaction Animation")
            self.assertGreater(animation_result["results"][0]["lexical_score"], 0)
            self.assertEqual(lexical_result["results"][0]["title"], "Lexical Exact")
            self.assertEqual(lexical_result["results"][0]["lexical_score"], 1.0)


    def test_collects_mcp_tools_with_frontmatter_source_and_strips_frontmatter(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            (root / "state").mkdir()
            (root / "pages" / "mcp-tools" / "fichas").mkdir(parents=True)
            connection = sqlite3.connect(root / "state" / "catalog.sqlite")
            connection.executescript("""
                CREATE TABLE pages(
                    doc_id TEXT, source TEXT, section TEXT, title TEXT, url TEXT,
                    breadcrumbs TEXT, route TEXT, relative_path TEXT, active INTEGER
                );
                CREATE TABLE chunks(doc_id TEXT, chunk_index INTEGER, relative_path TEXT);
            """
            )
            connection.commit()
            connection.close()
            ficha = root / "pages" / "mcp-tools" / "fichas" / "sample_tool.md"
            body = ("## sample_tool" + chr(10) + chr(10) + chr(10) +
                    "**Que hace:** crea un material desde un material maestro.")
            ficha.write_text(_frontmatter(
                {"source": "mcp-tools", "tools": "sample_tool", "categoria": "ficha"},
                body,
            ), encoding="utf-8")

            corpus = collect_corpus(root)
            self.assertEqual(len(corpus), 1)
            record = corpus[0]
            self.assertEqual(record.source, "mcp-tools")
            self.assertEqual(record.title, "sample_tool")
            self.assertIn("mcp-tools", DEFAULT_SEARCH_SOURCES)
            self.assertIn("crea un material", record.text)
            self.assertNotIn("categoria", record.text)


if __name__ == "__main__":
    unittest.main()

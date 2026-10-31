import unittest
import time
from pathlib import Path
from tempfile import TemporaryDirectory
from unittest.mock import patch

from tools.capture_snapshot import (
    PageResult,
    capture,
    chunk_markdown,
    compact_navigation_index,
    doc_identity,
    extract_page,
)


class CaptureSnapshotTests(unittest.TestCase):
    def test_doc_identity_preserves_wiki_branch_path(self):
        source, group, path = doc_identity(
            "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-time"
        )
        self.assertEqual(source, "wiki")
        self.assertEqual(group, "cli")
        self.assertEqual(path, "wiki/cli/environment/environment-get-time.md")

    def test_extract_page_keeps_code_links_and_breadcrumbs(self):
        html = """
        <nav aria-label="Breadcrumbs"><ol><li><a href="/docs/">Docs</a></li><li>Guide</li></ol></nav>
        <article class="theme-doc-markdown"><h1>Test Guide</h1>
        <p>Call <code>inzoi.cli.execute</code> and see <a href="/docs/modkit-docs/wiki/cli/">CLI</a>.</p>
        <pre><code class="language-js">await run();</code></pre></article>
        """
        title, markdown, breadcrumbs, links = extract_page(
            html, "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/test"
        )
        self.assertEqual(title, "Test Guide")
        self.assertIn("`inzoi.cli.execute`", markdown)
        self.assertIn("```js", markdown)
        self.assertIn("await run();", markdown)
        self.assertEqual(breadcrumbs, ["Docs", "Guide"])
        self.assertEqual(links[0][0], "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli")

    def test_chunks_respect_limit_without_splitting_fenced_blocks(self):
        source = "# Page\n\n" + ("alpha " * 3000) + "\n\n```js\nconst x = 1;\n```\n"
        chunks = chunk_markdown(source, limit=1200)
        self.assertGreater(len(chunks), 1)
        self.assertIn("```js\nconst x = 1;\n```", "\n\n".join(chunks))
        self.assertTrue(all(len(chunk) <= 1200 for chunk in chunks))

    def test_link_dense_indexes_do_not_retain_catalog_dump(self):
        compact = compact_navigation_index(
            "# CLI Finder\n\nSearch across commands.\n\n"
            "| command | description |\n| --- | --- |\n"
            + "\n".join(f"| [`cmd{i}`](/cmd{i}) | details |" for i in range(100))
        )
        self.assertIn("# CLI Finder", compact)
        self.assertIn("Search across commands.", compact)
        self.assertNotIn("| [`cmd", compact)

    def test_snapshot_records_diffs_and_retains_removed_pages(self):
        first_url = "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/test/first"
        removed_url = "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/test/removed"
        html_v1 = "<article><h1>First</h1><p>Original text.</p></article>"
        html_v2 = "<article><h1>First</h1><p>Updated text.</p></article>"

        with TemporaryDirectory() as temporary:
            destination = Path(temporary)
            with patch("tools.capture_snapshot.sitemap_pages", return_value={first_url: "", removed_url: ""}), \
                 patch("tools.capture_snapshot._fetch_one", side_effect=lambda url, lastmod, previous:
                       PageResult(url, lastmod, "downloaded", html=(
                           html_v1 if url == first_url else
                           "<article><h1>Removed</h1><p>Keep this page.</p></article>"
                       ))):
                initial = capture(destination, workers=1)
            self.assertEqual(initial["added"], 2)
            self.assertEqual(initial["errors"], 0)

            time.sleep(1.1)
            with patch("tools.capture_snapshot.sitemap_pages", return_value={first_url: ""}), \
                 patch("tools.capture_snapshot._fetch_one", side_effect=lambda url, lastmod, previous:
                       PageResult(url, lastmod, "not_modified")):
                second = capture(destination, workers=1)
            self.assertEqual(second["removed"], 1)
            self.assertEqual(second["active_documents"], 1)
            self.assertTrue((destination / "pages/wiki/cli/test/removed.md").is_file())

            time.sleep(1.1)
            with patch("tools.capture_snapshot.sitemap_pages", return_value={first_url: ""}), \
                 patch("tools.capture_snapshot._fetch_one", side_effect=lambda url, lastmod, previous:
                       PageResult(url, lastmod, "downloaded", html=html_v2)):
                third = capture(destination, workers=1)
            self.assertEqual(third["changed"], 1)
            self.assertEqual(third["errors"], 0)
            history = list((destination / "history").rglob("first.md"))
            self.assertEqual(len(history), 1)
            self.assertIn("Original text.", history[0].read_text(encoding="utf-8"))
            active_page = destination / "pages/wiki/cli/test/first.md"
            self.assertIn("Updated text.", active_page.read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()

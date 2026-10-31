from __future__ import annotations

import argparse
import concurrent.futures
import hashlib
import json
import re
import shutil
import sqlite3
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString, Tag


SITE = "https://mod-docs.playinzoi.com"
SITEMAP_URL = f"{SITE}/sitemap.xml"
DOC_PREFIX = "/docs/modkit-docs/"
MAX_PAGE_BYTES = 5_000_000
MAX_MARKDOWN_CHARS = 9_000
MAX_DOM_DEPTH = 80
USER_AGENT = "ModKitKnowledgeSnapshot/1.0 (documentation indexing)"
BLOCK_TAGS = {
    "blockquote", "div", "h1", "h2", "h3", "h4", "h5", "h6",
    "hr", "ol", "p", "pre", "table", "ul",
}
IGNORED_TAGS = {"button", "footer", "header", "nav", "script", "style", "svg"}


@dataclass
class PageResult:
    url: str
    lastmod: str
    status: str
    html: str = ""
    etag: str = ""
    last_modified: str = ""
    error: str = ""


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def normalize_url(url: str) -> str:
    parsed = urllib.parse.urlsplit(urllib.parse.urljoin(SITE, url))
    path = parsed.path.rstrip("/") or "/"
    return urllib.parse.urlunsplit((parsed.scheme.lower(), parsed.netloc.lower(), path, "", ""))


def doc_identity(url: str) -> tuple[str, str, str]:
    parsed = urllib.parse.urlsplit(url)
    route = parsed.path[len(DOC_PREFIX):].strip("/")
    parts = [urllib.parse.unquote(part) for part in route.split("/") if part]
    source = parts[0] if parts else "root"
    group = parts[1] if len(parts) > 1 else "_index"
    safe_parts = [re.sub(r"[^A-Za-z0-9._-]+", "-", part).strip("-") or "_" for part in parts]
    route_parts = safe_parts[1:] if safe_parts else []
    if route_parts:
        leaf = route_parts[-1]
        relative = Path(*route_parts[:-1], f"{leaf}.md") if len(route_parts) > 1 else Path(f"{leaf}.md")
    else:
        relative = Path("index.md")
    if parsed.path.endswith("/"):
        relative = Path(*route_parts, "index.md")
    doc_id = hashlib.sha256(url.encode("utf-8")).hexdigest()
    return source, group, f"{source}/{relative.as_posix()}"


def route_from_url(url: str) -> str:
    return urllib.parse.urlsplit(url).path[len(DOC_PREFIX):].strip("/")


def sitemap_pages() -> dict[str, str]:
    request = urllib.request.Request(SITEMAP_URL, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=30) as response:
        root = ET.fromstring(response.read())
    pages: dict[str, str] = {}
    for item in root:
        loc = next((child.text for child in item if child.tag.endswith("loc")), None)
        if not loc or not loc.startswith(SITE + DOC_PREFIX):
            continue
        lastmod = next((child.text or "" for child in item if child.tag.endswith("lastmod")), "")
        pages[normalize_url(loc)] = lastmod
    return pages


def _inline(node: Tag | NavigableString, base_url: str, dom_depth: int = 0) -> str:
    if isinstance(node, NavigableString):
        return re.sub(r"\s+", " ", str(node))
    if dom_depth >= MAX_DOM_DEPTH:
        return re.sub(r"\s+", " ", node.get_text(" ", strip=True))
    if node.name in IGNORED_TAGS or "hash-link" in node.get("class", []):
        return ""
    if node.name == "img":
        src = urllib.parse.urljoin(base_url, node.get("src", ""))
        return f"![{node.get('alt', '').strip()}]({src})" if src else ""
    text = "".join(_inline(child, base_url, dom_depth + 1) for child in node.children)
    if node.name == "a":
        href = urllib.parse.urljoin(base_url, node.get("href", ""))
        return f"[{text.strip()}]({href})" if text.strip() and href else text
    if node.name == "code":
        return f"`{text.strip()}`" if text.strip() else ""
    if node.name in ("strong", "b"):
        return f"**{text.strip()}**"
    if node.name in ("em", "i"):
        return f"*{text.strip()}*"
    if node.name == "br":
        return "  \n"
    return text


def _render(
    node: Tag | NavigableString,
    base_url: str,
    depth: int = 0,
    dom_depth: int = 0,
) -> str:
    if isinstance(node, NavigableString):
        return str(node).strip()
    if dom_depth >= MAX_DOM_DEPTH:
        return re.sub(r"\s+", " ", node.get_text(" ", strip=True))
    name = node.name
    if name in IGNORED_TAGS or "hash-link" in node.get("class", []):
        return ""
    if re.fullmatch(r"h[1-6]", name):
        level = int(name[1])
        text = _inline(node, base_url, dom_depth).strip()
        return f"{'#' * level} {text}" if text else ""
    if name == "pre":
        code = node.find("code") or node
        classes = " ".join(code.get("class", []))
        match = re.search(r"(?:language|lang)-([A-Za-z0-9_+-]+)", classes)
        lang = match.group(1) if match else ""
        raw = code.get_text().rstrip("\n")
        fence = "`" * max(3, max((len(m.group(0)) for m in re.finditer(r"`+", raw)), default=0) + 1)
        return f"{fence}{lang}\n{raw}\n{fence}"
    if name in ("ul", "ol"):
        rows = []
        for index, item in enumerate(node.find_all("li", recursive=False), 1):
            marker = f"{index}." if name == "ol" else "-"
            inline_parts = []
            nested = []
            for child in item.children:
                if isinstance(child, Tag) and child.name in ("ul", "ol"):
                    nested.append(_render(child, base_url, depth + 1, dom_depth + 1))
                elif isinstance(child, Tag) and child.name in BLOCK_TAGS:
                    rendered = _render(child, base_url, depth + 1, dom_depth + 1)
                    if rendered:
                        inline_parts.append(rendered)
                else:
                    inline_parts.append(_inline(child, base_url, dom_depth + 1))
            first = re.sub(r"\s+", " ", "".join(inline_parts)).strip()
            prefix = "  " * depth + marker + (" " + first if first else "")
            rows.append(prefix)
            rows.extend("  " * (depth + 1) + line for item in nested for line in item.splitlines())
        return "\n".join(rows)
    if name == "table":
        rows = []
        for row in node.find_all("tr"):
            cells = [re.sub(r"\s+", " ", _inline(cell, base_url, dom_depth + 1)).strip().replace("|", r"\|")
                     for cell in row.find_all(["th", "td"], recursive=False)]
            if cells:
                rows.append("| " + " | ".join(cells) + " |")
        if rows and node.find("th"):
            rows.insert(1, "| " + " | ".join("---" for _ in rows[0].split("|")[1:-1]) + " |")
        return "\n".join(rows)
    if name == "blockquote":
        body = "\n\n".join(
            part for part in (_render(child, base_url, depth, dom_depth + 1) for child in node.children)
            if part
        )
        return "\n".join("> " + line if line else ">" for line in body.splitlines())
    if name == "hr":
        return "---"
    if name == "img":
        return _inline(node, base_url, dom_depth)

    parts = []
    pending = []
    for child in node.children:
        if isinstance(child, Tag) and child.name in BLOCK_TAGS:
            text = re.sub(r"\s+", " ", "".join(pending)).strip()
            if text:
                parts.append(text)
            pending.clear()
            rendered = _render(child, base_url, depth, dom_depth + 1)
            if rendered.strip():
                parts.append(rendered.strip())
        else:
            pending.append(_inline(child, base_url, dom_depth + 1))
    trailing = re.sub(r"\s+", " ", "".join(pending)).strip()
    if trailing:
        parts.append(trailing)
    if not parts:
        return _inline(node, base_url, dom_depth).strip()
    return "\n\n".join(parts)


def extract_page(html: str, url: str) -> tuple[str, str, list[str], list[tuple[str, str]]]:
    soup = BeautifulSoup(html, "html.parser")
    article = soup.select_one("article.theme-doc-markdown") or soup.find("article")
    if article is None:
        raise ValueError("No se encontró el artículo de documentación en el HTML")
    heading = article.find("h1")
    title = heading.get_text(" ", strip=True) if heading else ""
    if not title:
        meta = soup.find("meta", property="og:title")
        title = meta.get("content", "").strip() if meta else url.rsplit("/", 1)[-1]
    crumb_nav = soup.find("nav", attrs={"aria-label": re.compile("breadcrumb", re.I)})
    breadcrumbs = []
    crumb_items = crumb_nav.select("li.breadcrumbs__item") if crumb_nav else []
    if not crumb_items and crumb_nav:
        crumb_items = crumb_nav.find_all("li")
    for item in crumb_items:
        anchor = item.find("a", class_=re.compile("breadcrumbs__link")) or item.find("a")
        if anchor:
            label = anchor.get_text(" ", strip=True)
        else:
            label = " ".join(
                str(child).strip() for child in item.children if isinstance(child, NavigableString)
            )
        if label:
            breadcrumbs.append(label)
    breadcrumbs = list(dict.fromkeys(breadcrumbs))
    links = []
    for anchor in article.find_all("a", href=True):
        target = normalize_url(urllib.parse.urljoin(url, anchor["href"]))
        if urllib.parse.urlsplit(target).netloc == urllib.parse.urlsplit(SITE).netloc:
            links.append((target, anchor.get_text(" ", strip=True)))
    markdown = _render(article, url).strip()
    markdown = re.sub(r"\n{3,}", "\n\n", markdown)
    return title, markdown, breadcrumbs, sorted(set(links))


def compact_navigation_index(markdown: str) -> str:
    kept = []
    for block in _split_blocks(markdown):
        link_count = len(re.findall(r"\[[^\]]+\]\([^)]+\)", block))
        if block.startswith("# ") or block.startswith("## "):
            kept.append(block)
        elif len(block) <= 1_500 and link_count <= 4 and not block.startswith("|"):
            kept.append(block)
        if len(kept) >= 9:
            break
    return "\n\n".join(kept) or markdown.splitlines()[0]


def _split_blocks(text: str) -> list[str]:
    lines = text.splitlines()
    blocks, current = [], []
    fenced = False
    for line in lines:
        if line.lstrip().startswith("```") or line.lstrip().startswith("~~~"):
            fenced = not fenced
        if not line.strip() and not fenced:
            if current:
                blocks.append("\n".join(current).strip())
                current = []
        else:
            current.append(line)
    if current:
        blocks.append("\n".join(current).strip())
    return [block for block in blocks if block]


def chunk_markdown(text: str, limit: int = MAX_MARKDOWN_CHARS) -> list[str]:
    blocks = _split_blocks(text)
    chunks, current = [], []
    current_size = 0
    for block in blocks:
        if len(block) > limit:
            if current:
                chunks.append("\n\n".join(current))
                current, current_size = [], 0
            pieces = [block[i:i + limit] for i in range(0, len(block), limit)]
            chunks.extend(pieces[:-1])
            block = pieces[-1]
        if current and current_size + len(block) + 2 > limit:
            chunks.append("\n\n".join(current))
            current, current_size = [], 0
        current.append(block)
        current_size += len(block) + 2
    if current:
        chunks.append("\n\n".join(current))
    return chunks or [""]


def _manifest_value(value: object) -> str:
    return json.dumps(value, ensure_ascii=False)


def _frontmatter(doc: dict, snapshot_id: str, chunk_no: int, chunk_count: int) -> str:
    values = {
        "document_id": doc["doc_id"], "source": doc["source"], "url": doc["url"],
        "title": doc["title"], "section": doc["section"],
        "breadcrumb": doc["breadcrumbs"], "snapshot": snapshot_id,
        "captured_at": doc["captured_at"], "content_sha256": doc["content_sha256"],
        "chunk": chunk_no, "chunk_count": chunk_count, "page_type": doc["page_type"],
        "route": route_from_url(doc["url"]),
        "breadcrumb_status": "present" if doc["breadcrumbs"] else "not_present_in_source",
        "classification_basis": "breadcrumb_and_url" if doc["breadcrumbs"] else "official_url_path",
    }
    return "---\n" + "".join(f"{key}: {_manifest_value(value)}\n" for key, value in values.items()) + "---\n\n"


def _write_page(root: Path, relative: str, doc: dict, snapshot_id: str, chunks: list[str]) -> list[str]:
    target = root / "pages" / Path(relative)
    target.parent.mkdir(parents=True, exist_ok=True)
    output_paths = []
    if len(chunks) == 1:
        target.write_text(_frontmatter(doc, snapshot_id, 1, 1) + chunks[0] + "\n", encoding="utf-8")
        return [target.relative_to(root).as_posix()]

    chunk_dir = target.parent / (target.stem + ".chunks")
    chunk_dir.mkdir(parents=True, exist_ok=True)
    links = []
    for index, content in enumerate(chunks, 1):
        name = f"part-{index:03d}.md"
        chunk_path = chunk_dir / name
        chunk_path.write_text(
            _frontmatter(doc, snapshot_id, index, len(chunks)) + content + "\n",
            encoding="utf-8",
        )
        output_paths.append(chunk_path.relative_to(root).as_posix())
        links.append(f"- [Parte {index}]({chunk_dir.name}/{name})")
    target.write_text(
        _frontmatter(doc, snapshot_id, 0, len(chunks))
        + f"# {doc['title']}\n\nDocumento dividido en fragmentos por tamaño.\n\n"
        + "\n".join(links) + "\n",
        encoding="utf-8",
    )
    return output_paths


def _open_db(path: Path) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    db = sqlite3.connect(path)
    db.executescript("""
        CREATE TABLE IF NOT EXISTS pages (
            url TEXT PRIMARY KEY, doc_id TEXT NOT NULL, source TEXT NOT NULL,
            section TEXT NOT NULL, title TEXT NOT NULL, breadcrumbs TEXT NOT NULL,
            route TEXT NOT NULL DEFAULT '', breadcrumb_status TEXT NOT NULL DEFAULT '',
            relative_path TEXT NOT NULL, content_sha256 TEXT NOT NULL,
            fingerprint TEXT NOT NULL, source_lastmod TEXT NOT NULL DEFAULT '',
            etag TEXT NOT NULL DEFAULT '', last_modified TEXT NOT NULL DEFAULT '',
            captured_at TEXT NOT NULL, seen_snapshot TEXT NOT NULL,
            active INTEGER NOT NULL DEFAULT 1, stale_error TEXT NOT NULL DEFAULT ''
        );
        CREATE TABLE IF NOT EXISTS links (
            source_url TEXT NOT NULL, target_url TEXT NOT NULL, anchor_text TEXT NOT NULL,
            target_doc_id TEXT NOT NULL DEFAULT '',
            PRIMARY KEY (source_url, target_url, anchor_text)
        );
        CREATE TABLE IF NOT EXISTS chunks (
            doc_id TEXT NOT NULL, chunk_index INTEGER NOT NULL, relative_path TEXT NOT NULL,
            content_sha256 TEXT NOT NULL, PRIMARY KEY (doc_id, chunk_index)
        );
        CREATE INDEX IF NOT EXISTS idx_pages_source_section ON pages(source, section);
        CREATE INDEX IF NOT EXISTS idx_pages_active ON pages(active);
        CREATE INDEX IF NOT EXISTS idx_links_target ON links(target_doc_id);
    """)
    columns = {row[1] for row in db.execute("PRAGMA table_info(pages)")}
    if "route" not in columns:
        db.execute("ALTER TABLE pages ADD COLUMN route TEXT NOT NULL DEFAULT ''")
    if "breadcrumb_status" not in columns:
        db.execute("ALTER TABLE pages ADD COLUMN breadcrumb_status TEXT NOT NULL DEFAULT ''")
    return db


def _load_previous(db: sqlite3.Connection) -> dict[str, dict]:
    db.row_factory = sqlite3.Row
    return {row["url"]: dict(row) for row in db.execute("SELECT * FROM pages")}


def _fetch_one(url: str, lastmod: str, previous: dict | None) -> PageResult:
    headers = {"User-Agent": USER_AGENT, "Accept": "text/html"}
    if previous:
        if previous.get("etag"):
            headers["If-None-Match"] = previous["etag"]
        if previous.get("last_modified"):
            headers["If-Modified-Since"] = previous["last_modified"]
    request = urllib.request.Request(url, headers=headers)
    for attempt in range(4):
        try:
            time.sleep(0.15)
            with urllib.request.urlopen(request, timeout=35) as response:
                body = response.read(MAX_PAGE_BYTES + 1)
                if len(body) > MAX_PAGE_BYTES:
                    raise ValueError(f"Página excede {MAX_PAGE_BYTES} bytes")
                return PageResult(
                    url=url, lastmod=lastmod, status="downloaded",
                    html=body.decode(response.headers.get_content_charset() or "utf-8", "replace"),
                    etag=response.headers.get("ETag", ""),
                    last_modified=response.headers.get("Last-Modified", ""),
                )
        except urllib.error.HTTPError as error:
            if error.code == 304 and previous:
                return PageResult(url, lastmod, "not_modified",
                                  etag=previous.get("etag", ""),
                                  last_modified=previous.get("last_modified", ""))
            if error.code not in (429, 500, 502, 503, 504) or attempt == 3:
                return PageResult(url, lastmod, "error", error=f"HTTP {error.code}: {error.reason}")
            time.sleep(2 ** attempt)
        except Exception as error:
            if attempt == 3:
                return PageResult(url, lastmod, "error", error=f"{type(error).__name__}: {error}")
            time.sleep(2 ** attempt)
    return PageResult(url, lastmod, "error", error="Se agotaron los reintentos")


def _jsonl(path: Path, rows: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="\n") as stream:
        for row in rows:
            stream.write(json.dumps(row, ensure_ascii=False, sort_keys=True) + "\n")


def _write_manifests(db: sqlite3.Connection, run_dir: Path) -> None:
    manifests: dict[str, list[dict]] = {}
    for row in db.execute("""
        SELECT url,doc_id,source,section,title,breadcrumbs,route,breadcrumb_status,relative_path,
               content_sha256,source_lastmod,captured_at,stale_error
        FROM pages WHERE active=1 ORDER BY source,section,url
    """):
        entry = {
            "url": row[0], "document_id": row[1], "source": row[2],
            "section": row[3], "title": row[4], "breadcrumb": json.loads(row[5]),
            "route": row[6], "breadcrumb_status": row[7],
            "page": f"pages/{row[8]}", "content_sha256": row[9],
            "source_lastmod": row[10], "captured_at": row[11], "stale": bool(row[12]),
        }
        manifests.setdefault(row[3], []).append(entry)
    for section, entries in manifests.items():
        source, branch = section.split("/", 1)
        partitions: dict[str, list[dict]] = {}
        for entry in entries:
            route = urllib.parse.urlsplit(entry["url"]).path[len(DOC_PREFIX):].strip("/").split("/")
            partition = route[2] if source == "wiki" and branch in {"cli", "structguide"} and len(route) > 2 else branch
            partitions.setdefault(partition, []).append(entry)
        for partition, partition_entries in partitions.items():
            _jsonl(run_dir / "manifest" / source / branch / f"{partition}.jsonl", partition_entries)


def capture(destination: Path, workers: int = 4) -> dict:
    started = utc_now()
    snapshot_id = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    destination.mkdir(parents=True, exist_ok=True)
    db_path = destination / "state" / "catalog.sqlite"
    db = _open_db(db_path)
    previous = _load_previous(db)
    pages = sitemap_pages()
    if len(pages) > 12_000:
        raise RuntimeError(f"Sitemap contiene {len(pages)} páginas; supera el límite de seguridad.")

    run_dir = destination / "updates" / snapshot_id
    run_dir.mkdir(parents=True, exist_ok=False)
    changes = {"added": [], "changed": [], "removed": [], "errors": []}
    source_counts: dict[str, int] = {}
    branch_counts: dict[str, int] = {}
    processed = 0

    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
        future_map = {
            pool.submit(_fetch_one, url, lastmod, previous.get(url)): (url, lastmod)
            for url, lastmod in pages.items()
        }
        for future in concurrent.futures.as_completed(future_map):
            url, lastmod = future_map[future]
            result = future.result()
            processed += 1
            old = previous.get(url)
            if result.status == "error":
                changes["errors"].append({"url": url, "error": result.error})
                if old:
                    db.execute("UPDATE pages SET stale_error=?, seen_snapshot=? WHERE url=?",
                               (result.error, snapshot_id, url))
                continue
            if result.status == "not_modified" and old:
                db.execute(
                    """UPDATE pages SET source_lastmod=?,seen_snapshot=?,active=1,stale_error=?,
                       route=?,breadcrumb_status=? WHERE url=?""",
                    (
                        lastmod, snapshot_id, "", route_from_url(url),
                        "present" if json.loads(old["breadcrumbs"]) else "not_present_in_source",
                        url,
                    ),
                )
                source_counts[old["source"]] = source_counts.get(old["source"], 0) + 1
                branch_counts[old["section"]] = branch_counts.get(old["section"], 0) + 1
                continue

            try:
                title, body, breadcrumbs, links = extract_page(result.html, url)
                source, group, relative_path = doc_identity(url)
                section = f"{source}/{group}"
                page_type = "navigation-index" if len(body) > 50_000 and len(links) >= 50 else "article"
                if page_type == "navigation-index":
                    body = compact_navigation_index(body)
                content_hash = hashlib.sha256(body.encode("utf-8")).hexdigest()
                fingerprint = hashlib.sha256(json.dumps(
                    [title, breadcrumbs, content_hash, links], ensure_ascii=False, sort_keys=True
                ).encode("utf-8")).hexdigest()
                captured_at = utc_now()
                doc = {
                    "doc_id": hashlib.sha256(url.encode("utf-8")).hexdigest(),
                    "url": url, "source": source, "section": section,
                    "title": title, "breadcrumbs": breadcrumbs,
                    "captured_at": captured_at, "content_sha256": content_hash,
                    "page_type": page_type,
                }
                chunks = chunk_markdown(body)
                change_type = "added" if old is None else ("changed" if old["fingerprint"] != fingerprint else "")
                old_chunk_paths = []
                if old:
                    old_chunk_paths = [
                        row[0] for row in db.execute(
                            "SELECT relative_path FROM chunks WHERE doc_id=? ORDER BY chunk_index",
                            (old["doc_id"],),
                        )
                    ]
                    expected = [f"pages/{old['relative_path']}", *old_chunk_paths]
                    if any(not (destination / path).is_file() for path in expected):
                        change_type = "changed"
                if change_type:
                    if old:
                        old_paths = {f"pages/{old['relative_path']}", *old_chunk_paths}
                        for old_path in old_paths:
                            old_file = destination / old_path
                            if old_file.is_file():
                                archive = destination / "history" / snapshot_id / "before" / Path(old_path)
                                archive.parent.mkdir(parents=True, exist_ok=True)
                                shutil.copy2(old_file, archive)
                    if old:
                        changes["changed"].append({
                            "url": url, "title": title, "section": section,
                            "old_fingerprint": old["fingerprint"], "new_fingerprint": fingerprint,
                            "old_content_sha256": old["content_sha256"], "new_content_sha256": content_hash,
                            "page": f"pages/{relative_path}",
                        })
                    else:
                        changes["added"].append({
                            "url": url, "title": title, "section": section,
                            "content_sha256": content_hash, "page": f"pages/{relative_path}",
                        })
                else:
                    captured_at = old["captured_at"]

                db.execute("""
                    INSERT INTO pages (
                        url,doc_id,source,section,title,breadcrumbs,route,breadcrumb_status,
                        relative_path,content_sha256,fingerprint,source_lastmod,etag,last_modified,
                        captured_at,seen_snapshot,active,stale_error
                    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,1,'')
                    ON CONFLICT(url) DO UPDATE SET
                        doc_id=excluded.doc_id,source=excluded.source,section=excluded.section,
                        title=excluded.title,breadcrumbs=excluded.breadcrumbs,
                        route=excluded.route,breadcrumb_status=excluded.breadcrumb_status,
                        relative_path=excluded.relative_path,content_sha256=excluded.content_sha256,
                        fingerprint=excluded.fingerprint,source_lastmod=excluded.source_lastmod,
                        etag=excluded.etag,last_modified=excluded.last_modified,
                        captured_at=excluded.captured_at,seen_snapshot=excluded.seen_snapshot,
                        active=1,stale_error=''
                """, (
                    url, doc["doc_id"], source, section, title,
                    json.dumps(breadcrumbs, ensure_ascii=False), route_from_url(url),
                    "present" if breadcrumbs else "not_present_in_source", relative_path,
                    content_hash, fingerprint, lastmod, result.etag,
                    result.last_modified, captured_at, snapshot_id,
                ))
                db.execute("DELETE FROM links WHERE source_url=?", (url,))
                db.executemany("INSERT OR IGNORE INTO links(source_url,target_url,anchor_text) VALUES(?,?,?)",
                               [(url, target, anchor) for target, anchor in links])
                if change_type:
                    output_paths = _write_page(destination, relative_path, doc, snapshot_id, chunks)
                else:
                    output_paths = old_chunk_paths or [f"pages/{relative_path}"]
                new_paths = set(output_paths) | {f"pages/{relative_path}"}
                for obsolete_path in set(old_chunk_paths) | (
                    {f"pages/{old['relative_path']}"} if old else set()
                ):
                    if obsolete_path not in new_paths:
                        stale_file = destination / obsolete_path
                        if stale_file.is_file():
                            stale_file.unlink()
                db.execute("DELETE FROM chunks WHERE doc_id=?", (doc["doc_id"],))
                db.executemany(
                    "INSERT INTO chunks(doc_id,chunk_index,relative_path,content_sha256) VALUES(?,?,?,?)",
                    [
                        (doc["doc_id"], i, p, hashlib.sha256(content.encode("utf-8")).hexdigest())
                        for i, (p, content) in enumerate(zip(output_paths, chunks), 1)
                    ],
                )
                source_counts[source] = source_counts.get(source, 0) + 1
                branch_counts[section] = branch_counts.get(section, 0) + 1
            except Exception as error:
                changes["errors"].append({"url": url, "error": f"{type(error).__name__}: {error}"})
                if old:
                    db.execute("UPDATE pages SET stale_error=?, seen_snapshot=? WHERE url=?",
                               (str(error), snapshot_id, url))
            if processed % 100 == 0:
                db.commit()
                print(f"processed {processed}/{len(pages)}", flush=True)

    current_urls = set(pages)
    for url, old in previous.items():
        if url not in current_urls and old["active"]:
            db.execute("UPDATE pages SET active=0,seen_snapshot=?,stale_error='' WHERE url=?",
                       (snapshot_id, url))
            changes["removed"].append({
                "url": url, "title": old["title"], "section": old["section"],
                "page_retained": f"pages/{old['relative_path']}",
            })

    db.execute("UPDATE links SET target_doc_id=''")
    db.execute("""
        UPDATE links SET target_doc_id=(
            SELECT doc_id FROM pages WHERE pages.url=links.target_url AND pages.active=1
        )
        WHERE EXISTS (SELECT 1 FROM pages WHERE pages.url=links.target_url AND pages.active=1)
    """)
    db.commit()

    for change_name, rows in changes.items():
        _jsonl(run_dir / f"{change_name}.jsonl", rows)

    _write_manifests(db, run_dir)

    no_breadcrumbs = db.execute(
        "SELECT COUNT(*) FROM pages WHERE active=1 AND breadcrumbs IN ('[]','')"
    ).fetchone()[0]
    empty_pages = db.execute(
        "SELECT COUNT(*) FROM pages WHERE active=1 AND content_sha256=?",
        (hashlib.sha256(b"").hexdigest(),),
    ).fetchone()[0]
    duplicate_groups = db.execute("""
        SELECT COUNT(*) FROM (
            SELECT content_sha256 FROM pages WHERE active=1
            GROUP BY content_sha256 HAVING COUNT(*) > 1
        )
    """).fetchone()[0]
    summary = {
        "snapshot_id": snapshot_id, "started_at": started, "finished_at": utc_now(),
        "sitemap_urls": len(pages),
        "active_documents": db.execute("SELECT COUNT(*) FROM pages WHERE active=1").fetchone()[0],
        "source_counts": {
            row[0]: row[1] for row in db.execute(
                "SELECT source,COUNT(*) FROM pages WHERE active=1 GROUP BY source ORDER BY source"
            )
        },
        "section_counts": {
            row[0]: row[1] for row in db.execute(
                "SELECT section,COUNT(*) FROM pages WHERE active=1 GROUP BY section ORDER BY section"
            )
        },
        "added": len(changes["added"]), "changed": len(changes["changed"]),
        "removed": len(changes["removed"]), "errors": len(changes["errors"]),
        "documents_without_breadcrumbs": no_breadcrumbs,
        "documents_without_extracted_content": empty_pages,
        "duplicate_content_groups": duplicate_groups,
        "max_markdown_chars": MAX_MARKDOWN_CHARS,
        "manifest_database": "state/catalog.sqlite",
    }
    (run_dir / "summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (destination / "state" / "latest.json").write_text(
        json.dumps({"snapshot_id": snapshot_id, "status": "complete" if not changes["errors"] else "partial",
                    "summary": f"updates/{snapshot_id}/summary.json"}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    db.close()
    return summary


def refresh_location_metadata(destination: Path) -> dict:
    db = _open_db(destination / "state" / "catalog.sqlite")
    db.row_factory = sqlite3.Row
    updated_files = 0
    missing_files = []
    for row in db.execute("SELECT * FROM pages WHERE active=1").fetchall():
        breadcrumbs = json.loads(row["breadcrumbs"])
        status = "present" if breadcrumbs else "not_present_in_source"
        route = route_from_url(row["url"])
        db.execute(
            "UPDATE pages SET route=?,breadcrumb_status=? WHERE url=?",
            (route, status, row["url"]),
        )
        paths = {f"pages/{row['relative_path']}"}
        paths.update(
            item[0] for item in db.execute(
                "SELECT relative_path FROM chunks WHERE doc_id=?",
                (row["doc_id"],),
            )
        )
        metadata = {
            "route": route,
            "breadcrumb_status": status,
            "classification_basis": "breadcrumb_and_url" if breadcrumbs else "official_url_path",
        }
        for relative in paths:
            path = destination / relative
            if not path.is_file():
                missing_files.append(relative)
                continue
            text = path.read_text(encoding="utf-8")
            if not text.startswith("---\n"):
                raise ValueError(f"Markdown sin frontmatter esperado: {relative}")
            end = text.find("\n---\n", 4)
            if end < 0:
                raise ValueError(f"Frontmatter incompleto: {relative}")
            header = text[4:end].splitlines()
            header = [
                line for line in header
                if not any(line.startswith(f"{key}: ") for key in metadata)
            ]
            header.extend(f"{key}: {_manifest_value(value)}" for key, value in metadata.items())
            path.write_text("---\n" + "\n".join(header) + text[end:], encoding="utf-8")
            updated_files += 1
    db.commit()
    latest_path = destination / "state" / "latest.json"
    if latest_path.is_file():
        latest = json.loads(latest_path.read_text(encoding="utf-8"))
        _write_manifests(db, destination / "updates" / latest["snapshot_id"])
    breadcrumb_counts = {
        row[0]: row[1] for row in db.execute(
            "SELECT breadcrumb_status,COUNT(*) FROM pages WHERE active=1 GROUP BY breadcrumb_status"
        )
    }
    db.close()
    return {
        "documents": sum(breadcrumb_counts.values()),
        "markdown_files_updated": updated_files,
        "missing_files": missing_files,
        "breadcrumb_status_counts": breadcrumb_counts,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Capture official inZOI ModKit docs as small, linked Markdown pages.")
    parser.add_argument("--destination", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--refresh-location-metadata", action="store_true")
    args = parser.parse_args()
    if not 1 <= args.workers <= 8:
        parser.error("--workers debe estar entre 1 y 8")
    destination = args.destination.resolve()
    result = (
        refresh_location_metadata(destination)
        if args.refresh_location_metadata
        else capture(destination, args.workers)
    )
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

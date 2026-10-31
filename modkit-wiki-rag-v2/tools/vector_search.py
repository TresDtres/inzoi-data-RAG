from __future__ import annotations

import argparse
import hashlib
import json
import re
import sqlite3
import sys
import textwrap
import unicodedata
from dataclasses import dataclass
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from typing import Any, Iterable
import numpy as np


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_MODEL = "intfloat/multilingual-e5-small"
DEFAULT_INDEX = ROOT / "state" / "vector_index.sqlite"
DEFAULT_SEARCH_SOURCES = ("modkit", "resources", "wiki", "mcp-tools")
CHUNK_TARGET_CHARS = 1_300
CHUNK_OVERLAP_CHARS = 180
MAX_QUERY_CHARS = 2_000
MAX_HTTP_BODY = 16_384
MAX_TOP_K = 20
RERANK_CANDIDATES = 400
MAX_CHUNKS_PER_DOCUMENT = 2
INDEX_SCHEMA_VERSION = "2"
DEFAULT_CPU_THREADS = 8
_TORCH_INTEROP_CONFIGURED = False
_STOP_WORDS = frozenset({
    "a", "about", "after", "all", "an", "and", "are", "as", "at", "be", "been",
    "before", "between", "by", "can", "could", "does", "for", "from", "how", "in",
    "is", "it", "its", "of", "on", "or", "should", "that", "the", "their", "there",
    "these", "this", "to", "what", "when", "which", "with", "would", "you",
    "al", "como", "cual", "cuales", "de", "del", "donde", "el", "ella", "ellas",
    "ellos", "en", "es", "esta", "este", "esto", "la", "las", "lo", "los", "me",
    "mediante", "para", "por", "que", "se", "si", "sobre", "su", "sus", "un", "una",
    "uno", "unos", "unas", "y",
    "hace", "hacer", "hacen", "hago", "cuando", "usar", "uso", "usarla", "usarlo", "usaria",
    "puedo", "quiero", "necesito", "necesita", "necesitas", "hay", "existe", "saber",
    "exactamente", "exacto", "garantiza", "confundir", "dice", "explica", "posible",
    "forma", "parte", "clave", "devuelve", "requisitos", "tipicos", "objetivo",
    "mi", "mis", "no", "sin", "con", "ya", "veo", "ver", "miro", "mira", "tengo", "tiene",
    "tienen", "puede", "pueden", "puedes", "antes", "desde", "despues", "nueva", "nuevo",
    "nuevas", "nuevos", "existente", "existentes", "otra", "otro", "otras", "otros",
    "todo", "todos", "toda", "todas", "cada", "muy", "mas", "menos", "ahora", "luego", "tambien", "solo", "algun", "alguna", "alguno", "traves",
})
_TERM_GROUPS = (
    ("animation", "animations", "anim", "animacion", "animaciones"),
    ("montage", "montages", "montaje", "montajes"),
    ("interaction", "interactions", "interaccion", "interacciones"),
    ("section", "sections", "seccion", "secciones"),
    ("posture", "posturas", "postura"),
    ("growth", "crecimiento", "growthstep"),
    ("age", "ages", "edad", "edades"),
    ("gender", "genders", "genero", "generos"),
    ("field", "fields", "campo", "campos"),
    ("mesh", "meshes", "malla", "mallas"),
    ("skeletal", "esqueletico", "esqueletica", "esqueleticos", "esqueleticas"),
    ("attach", "attached", "attachment", "adjuntar", "adjunta", "adjuntado", "adjunto"),
    ("release", "released", "detach", "detached", "liberar", "liberacion", "soltar", "desprender"),
    ("input", "entrada", "entradas", "tecla", "teclas", "keyboard"),
    ("projectile", "projectiles", "proyectil", "proyectiles", "flecha", "flechas", "arrow", "arrows"),
    ("collision", "colision", "colisiones"),
    ("score", "scoring", "puntuacion", "puntuaciones"),
    ("row", "rows", "fila", "filas"),
    ("create", "created", "creating", "crear", "creacion"),
    ("document", "documented", "documentation", "documentacion", "documentada"),
    ("callback", "callbacks", "evento", "eventos"),
    ("reference", "references", "referencia", "referencias"),
    ("param", "params", "parameter", "parameters", "parametro", "parametros"),
    ("command", "commands", "comando", "comandos"),
    ("execute", "executes", "execution", "ejecutar", "ejecuta", "ejecucion"),
    ("script", "scripts"),
    ("tool", "tools", "herramienta", "herramientas"),
    ("file", "files", "archivo", "archivos"),
    ("save", "saves", "saved", "guardar", "guardado", "guardados"),
    ("game", "games", "juego", "juegos"),
    ("console", "consola", "consolas"),
    ("business", "negocio", "negocios"),
    ("change", "changes", "cambiar", "cambia", "cambio", "cambie"),
    ("list", "lists", "listar", "lista", "listas", "listado"),
    ("show", "shows", "mostrar", "muestra", "muestrame"),
    ("read", "reads", "leer", "lee"),
    ("write", "writes", "escribir", "escribe", "escribo"),
    ("search", "searches", "buscar", "busca", "busco"),
    ("open", "opens", "abrir", "abre"),
    ("close", "closes", "cerrar", "cierra"),
    ("start", "starts", "iniciar", "inicia"),
    ("level", "levels", "nivel", "niveles"),
    ("state", "states", "estado", "estados"),
    ("money", "dinero"),
    ("need", "needs", "necesitar", "necesita"),
)
_TERM_CANONICAL = {
    term: group[0]
    for group in _TERM_GROUPS
    for term in group
}


@dataclass(frozen=True)
class CorpusChunk:
    chunk_id: str
    doc_id: str
    source: str
    section: str
    title: str
    url: str
    breadcrumbs: list[str]
    route: str
    chunk_index: int
    relative_path: str
    text: str
    text_sha256: str


def parse_frontmatter(markdown: str) -> tuple[dict[str, Any], str]:
    if not markdown.startswith("---\n"):
        return {}, markdown
    end = markdown.find("\n---\n", 4)
    if end < 0:
        return {}, markdown
    metadata: dict[str, Any] = {}
    for line in markdown[4:end].splitlines():
        key, separator, value = line.partition(":")
        if not separator:
            continue
        value = value.strip()
        try:
            metadata[key.strip()] = json.loads(value)
        except json.JSONDecodeError:
            metadata[key.strip()] = value.strip("\"'")
    return metadata, markdown[end + 5:].lstrip("\n")


def _lexical_tokens(text: str) -> list[str]:
    text = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", " ", text)
    normalized = unicodedata.normalize("NFKD", text.casefold())
    normalized = "".join(char for char in normalized if not unicodedata.combining(char))
    return [
        _TERM_CANONICAL.get(term, term)
        for term in re.findall(r"[a-z0-9]+", normalized)
        if len(term) > 1 and term not in _STOP_WORDS
    ]


def _search_terms(text: str) -> set[str]:
    return set(_lexical_tokens(text))


def _fts_query(terms: set[str]) -> str:
    return " OR ".join(f'"{term}"' for term in sorted(terms))


def _markdown_blocks(markdown: str) -> list[str]:
    blocks: list[str] = []
    current: list[str] = []
    fenced = False
    for line in markdown.replace("\r\n", "\n").replace("\r", "\n").splitlines():
        stripped = line.lstrip()
        if re.match(r"(`{3,}|~{3,})", stripped):
            fenced = not fenced
        if not line.strip() and not fenced:
            if current:
                blocks.append("\n".join(current).strip())
                current = []
            continue
        if not fenced and current and (
            re.match(r"^#{1,6}\s+", line)
            or (line.startswith("|") != current[-1].startswith("|"))
        ):
            blocks.append("\n".join(current).strip())
            current = []
        current.append(line)
    if current:
        blocks.append("\n".join(current).strip())
    return [block for block in blocks if block]


def _wrap_prose(text: str, limit: int) -> list[str]:
    sentences = re.split(r"(?<=[.!?])\s+", text.strip())
    pieces: list[str] = []
    current = ""
    for sentence in sentences:
        if len(sentence) > limit:
            if current:
                pieces.append(current)
                current = ""
            pieces.extend(
                textwrap.wrap(
                    sentence,
                    width=limit,
                    break_long_words=True,
                    break_on_hyphens=False,
                )
            )
        elif current and len(current) + 1 + len(sentence) > limit:
            pieces.append(current)
            current = sentence
        else:
            current = f"{current} {sentence}".strip()
    if current:
        pieces.append(current)
    return pieces


def _split_code_block(block: str, limit: int) -> list[str]:
    lines = block.splitlines()
    opening = lines[0]
    closing = lines[-1] if len(lines) > 1 and re.match(r"^\s*(`{3,}|~{3,})\s*$", lines[-1]) else opening[:3]
    body = lines[1:-1] if len(lines) > 1 and closing == lines[-1] else lines[1:]
    overhead = len(opening) + len(closing) + 2
    body_limit = max(80, limit - overhead)
    groups: list[list[str]] = []
    current: list[str] = []
    size = 0
    for line in body:
        line_parts = [line]
        if len(line) > body_limit:
            line_parts = textwrap.wrap(
                line,
                width=body_limit,
                break_long_words=True,
                break_on_hyphens=False,
            )
        for part in line_parts:
            if current and size + len(part) + 1 > body_limit:
                groups.append(current)
                current, size = [], 0
            current.append(part)
            size += len(part) + 1
    if current or not groups:
        groups.append(current)
    rendered = []
    for group in groups:
        joined = "\n".join(group)
        rendered.append(f"{opening}\n{joined}\n{closing}")
    return rendered


def _split_table(block: str, limit: int) -> list[str]:
    lines = block.splitlines()
    if len(lines) < 3 or not lines[0].startswith("|") or not re.match(r"^\s*\|?[\s:|-]+\|?\s*$", lines[1]):
        return _wrap_prose(block, limit)
    prefix = lines[:2]
    rows = lines[2:]
    prefix_size = sum(len(line) + 1 for line in prefix)
    if prefix_size >= limit:
        return _wrap_prose(block, limit)
    pieces: list[str] = []
    current = prefix.copy()
    size = prefix_size
    for row in rows:
        if len(row) + size + 1 > limit and len(current) > len(prefix):
            pieces.append("\n".join(current))
            current = prefix.copy()
            size = prefix_size
        if len(row) + size + 1 > limit:
            pieces.extend(_wrap_prose(row, max(80, limit - size - 1)))
        else:
            current.append(row)
            size += len(row) + 1
    if len(current) > len(prefix) or not pieces:
        pieces.append("\n".join(current))
    return pieces


def _split_oversized_block(block: str, limit: int) -> list[str]:
    if len(block) <= limit:
        return [block]
    if re.match(r"^\s*(`{3,}|~{3,})", block):
        return _split_code_block(block, limit)
    if block.startswith("|"):
        return _split_table(block, limit)
    return _wrap_prose(block, limit)


def semantic_chunks(
    markdown: str,
    title: str,
    max_chars: int = CHUNK_TARGET_CHARS,
    overlap_chars: int = CHUNK_OVERLAP_CHARS,
) -> list[str]:
    if max_chars < 300 or overlap_chars < 0 or overlap_chars >= max_chars:
        raise ValueError("Chunk size must be >=300 and overlap must be in [0, max_chars)")

    headings: list[tuple[int, str]] = []
    blocks = _markdown_blocks(markdown)
    chunks: list[str] = []
    current: list[str] = []
    current_size = 0
    heading_pattern = re.compile(r"^(#{1,6})\s+(.+)$")

    def heading_context() -> str:
        path = " > ".join(text for _, text in headings)
        if path:
            return f"Document: {title}\nSection: {path}"
        return f"Document: {title}"

    def body_limit() -> int:
        return max_chars - len(heading_context()) - 2

    def render_current() -> str:
        return heading_context() + "\n\n" + "\n\n".join(current)

    def flush(keep_overlap: bool) -> None:
        nonlocal current, current_size
        if not current:
            return
        chunks.append(render_current())
        if not keep_overlap or overlap_chars == 0:
            current, current_size = [], 0
            return
        carry: list[str] = []
        carry_size = 0
        for block in reversed(current):
            next_size = len(block) + 2
            if carry_size + next_size > overlap_chars:
                break
            carry.insert(0, block)
            carry_size += next_size
        current = carry
        current_size = carry_size

    for block in blocks:
        heading = heading_pattern.match(block)
        if heading:
            flush(keep_overlap=False)
            level = len(heading.group(1))
            heading_text = heading.group(2).strip()
            headings = [(item_level, item) for item_level, item in headings if item_level < level]
            if not (level == 1 and heading_text.casefold() == title.casefold()):
                headings.append((level, heading_text))
            continue

        effective_limit = body_limit()
        if effective_limit < 80:
            raise ValueError("Document title and section heading leave no room for a search chunk")
        for piece in _split_oversized_block(block, effective_limit):
            piece_size = len(piece) + 2
            if current and current_size + piece_size > effective_limit:
                flush(keep_overlap=True)
                if current and current_size + piece_size > effective_limit:
                    current, current_size = [], 0
            current.append(piece)
            current_size += piece_size
    flush(keep_overlap=False)
    return chunks


def _stable_chunk_id(doc_id: str, index: int, text: str) -> str:
    return hashlib.sha256(
        f"{doc_id}\0{index}\0{text}".encode("utf-8")
    ).hexdigest()


def _make_chunks(
    *,
    doc_id: str,
    source: str,
    section: str,
    title: str,
    url: str,
    breadcrumbs: list[str],
    route: str,
    relative_path: str,
    content: str,
) -> list[CorpusChunk]:
    chunks = semantic_chunks(content, title)
    records = []
    seen_text_hashes: set[str] = set()
    for text in chunks:
        text_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
        if text_hash in seen_text_hashes:
            continue
        seen_text_hashes.add(text_hash)
        index = len(records) + 1
        records.append(
            CorpusChunk(
                chunk_id=_stable_chunk_id(doc_id, index, text),
                doc_id=doc_id,
                source=source,
                section=section,
                title=title,
                url=url,
                breadcrumbs=breadcrumbs,
                route=route,
                chunk_index=index,
                relative_path=relative_path,
                text=text,
                text_sha256=text_hash,
            )
        )
    return records


def collect_corpus(root: Path) -> list[CorpusChunk]:
    catalog_path = root / "state" / "catalog.sqlite"
    if not catalog_path.is_file():
        raise FileNotFoundError(f"Corpus catalog not found: {catalog_path}")
    chunks: list[CorpusChunk] = []
    connection = sqlite3.connect(catalog_path)
    connection.row_factory = sqlite3.Row
    try:
        pages = connection.execute("""
            SELECT p.doc_id, p.source, p.section, p.title, p.url, p.breadcrumbs,
                   p.route, p.relative_path
            FROM pages AS p
            WHERE p.active = 1 AND EXISTS (
                SELECT 1 FROM chunks AS c WHERE c.doc_id = p.doc_id
            )
            ORDER BY p.url
        """)
        for row in pages:
            doc_id = row["doc_id"]
            parent_relative_path = row["relative_path"]
            parent_path = root / "pages" / parent_relative_path
            if not parent_path.is_file():
                raise FileNotFoundError(f"Page manifest missing: {parent_path}")
            parent_metadata, _ = parse_frontmatter(parent_path.read_text(encoding="utf-8"))
            if (
                parent_metadata.get("page_type") == "navigation-index"
                or row["route"].strip("/") == row["source"]
            ):
                continue

            content_parts = []
            for chunk_row in connection.execute(
                "SELECT relative_path FROM chunks WHERE doc_id=? ORDER BY chunk_index",
                (doc_id,),
            ):
                chunk_relative_path = chunk_row["relative_path"]
                chunk_path = root / chunk_relative_path
                if not chunk_path.is_file():
                    raise FileNotFoundError(f"Captured chunk missing: {chunk_path}")
                _, content = parse_frontmatter(chunk_path.read_text(encoding="utf-8"))
                content_parts.append(content)
            breadcrumbs = json.loads(row["breadcrumbs"])
            chunks.extend(
                _make_chunks(
                    doc_id=doc_id,
                    source=row["source"],
                    section=row["section"],
                    title=row["title"],
                    url=row["url"],
                    breadcrumbs=breadcrumbs,
                    route=row["route"],
                    relative_path=f"pages/{parent_relative_path}",
                    content="\n\n".join(content_parts),
                )
            )
    finally:
        connection.close()

    for source_folder in ("official", "local", "mcp-tools"):
        source_root = root / "pages" / source_folder
        if not source_root.is_dir():
            continue
        for path in sorted(source_root.rglob("*.md")):
            if path.name.casefold() == "index.md":
                continue
            raw = path.read_text(encoding="utf-8")
            metadata, content = parse_frontmatter(raw)
            if metadata.get("page_type") == "navigation-index":
                continue
            relative_path = path.relative_to(root).as_posix()
            if source_folder == "mcp-tools":
                source = str(metadata.get("source", "mcp-tools"))
            else:
                source = "official_external" if source_folder == "official" else "local"
            title = str(metadata.get("title", ""))
            if not title:
                title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
                title = title_match.group(1).strip() if title_match else path.stem
            url = str(metadata.get("url", ""))
            doc_id = str(
                metadata.get("document_id")
                or hashlib.sha256(f"{source}:{relative_path}".encode("utf-8")).hexdigest()
            )
            breadcrumbs_value = metadata.get("breadcrumb", metadata.get("breadcrumbs", []))
            breadcrumbs = breadcrumbs_value if isinstance(breadcrumbs_value, list) else []
            chunks.extend(
                _make_chunks(
                    doc_id=doc_id,
                    source=source,
                    section=str(metadata.get("section", f"{source_folder}/{path.parent.name}")),
                    title=title,
                    url=url,
                    breadcrumbs=[str(item) for item in breadcrumbs],
                    route=str(metadata.get("route", relative_path)),
                    relative_path=relative_path,
                    content=content,
                )
            )
    return chunks


def _open_index(path: Path) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(path)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA journal_mode=WAL")
    connection.executescript("""
        CREATE TABLE IF NOT EXISTS chunks (
            chunk_id TEXT PRIMARY KEY,
            doc_id TEXT NOT NULL,
            source TEXT NOT NULL,
            section TEXT NOT NULL,
            title TEXT NOT NULL,
            url TEXT NOT NULL,
            breadcrumbs TEXT NOT NULL,
            route TEXT NOT NULL,
            chunk_index INTEGER NOT NULL,
            relative_path TEXT NOT NULL,
            text TEXT NOT NULL,
            text_sha256 TEXT NOT NULL,
            model_id TEXT NOT NULL,
            dimension INTEGER NOT NULL,
            embedding BLOB NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_vector_chunks_source ON chunks(source);
        CREATE INDEX IF NOT EXISTS idx_vector_chunks_doc ON chunks(doc_id);
        CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT NOT NULL);
        CREATE VIRTUAL TABLE IF NOT EXISTS chunks_fts USING fts5(
            chunk_id UNINDEXED,
            source UNINDEXED,
            title,
            section,
            breadcrumbs,
            body,
            tokenize='unicode61'
        );
    """)
    return connection


def _refresh_lexical_index(connection: sqlite3.Connection) -> None:
    indexed_rows = [
        (
            row["chunk_id"],
            row["source"],
            " ".join(_lexical_tokens(row["title"])),
            " ".join(_lexical_tokens(row["section"])),
            " ".join(_lexical_tokens(" ".join(json.loads(row["breadcrumbs"])))),
            " ".join(_lexical_tokens(row["text"])),
        )
        for row in connection.execute(
            "SELECT chunk_id,source,title,section,breadcrumbs,text FROM chunks"
        )
    ]
    with connection:
        connection.execute("DELETE FROM chunks_fts")
        connection.executemany(
            """
            INSERT INTO chunks_fts(chunk_id,source,title,section,breadcrumbs,body)
            VALUES (?,?,?,?,?,?)
            """,
            indexed_rows,
        )


def _resolve_device(device: str, torch_module: Any | None = None) -> tuple[str, str]:
    """Resolve the embedding device.

    "auto" picks CUDA when torch reports it available and falls back to CPU
    otherwise. Explicit values ("cpu", "cuda", "cuda:0") are returned unchanged.
    Returns (device, description) where description names the active GPU.
    """
    if device != "auto":
        return device, device
    if torch_module is None:
        import torch
        torch_module = torch
    if torch_module.cuda.is_available():
        return "cuda", f"cuda ({torch_module.cuda.get_device_name(0)})"
    return "cpu", "cpu (CUDA unavailable; fell back to CPU)"


def _model_prefixes(model_id: str) -> tuple[str, str]:
    """Task prefixes required by the model, as (passage_prefix, query_prefix).

    E5-family models are trained with "passage: "/"query: " inputs.
    BAAI/bge-m3 expects raw text, so non-E5 models get no prefixes:
    adding them would shift inputs away from the training distribution.
    """
    if "e5" in model_id.lower():
        return "passage: ", "query: "
    return "", ""


def _load_model(
    model_id: str,
    device: str,
    threads: int = DEFAULT_CPU_THREADS,
) -> Any:
    if threads < 1:
        raise ValueError("threads must be at least 1")
    try:
        from sentence_transformers import SentenceTransformer
    except ImportError as error:
        raise RuntimeError(
            "Missing sentence-transformers. Install requirements.txt or build the Docker image."
        ) from error
    import torch

    global _TORCH_INTEROP_CONFIGURED
    torch.set_num_threads(threads)
    if not _TORCH_INTEROP_CONFIGURED:
        torch.set_num_interop_threads(min(2, threads))
        _TORCH_INTEROP_CONFIGURED = True
    resolved_device, device_description = _resolve_device(device, torch)
    print(f"embedding device: {device_description}", flush=True)
    return SentenceTransformer(model_id, device=resolved_device)


def _encode(model: Any, inputs: list[str], batch_size: int) -> np.ndarray:
    vectors = model.encode(
        inputs,
        batch_size=batch_size,
        show_progress_bar=False,
        normalize_embeddings=True,
        convert_to_numpy=True,
    )
    result = np.asarray(vectors, dtype=np.float32)
    if result.ndim != 2 or result.shape[0] != len(inputs):
        raise RuntimeError("Embedding model returned an invalid vector batch")
    if not np.isfinite(result).all():
        raise RuntimeError("Embedding model returned non-finite vector values")
    return result


def build_index(
    root: Path,
    index_path: Path,
    model_id: str = DEFAULT_MODEL,
    device: str = "auto",
    batch_size: int = 32,
    threads: int = DEFAULT_CPU_THREADS,
    model: Any | None = None,
    max_chunks: int | None = None,
) -> dict[str, int | str]:
    records = collect_corpus(root)
    if not records:
        raise RuntimeError("No indexable corpus chunks were found")
    if len({record.chunk_id for record in records}) != len(records):
        raise RuntimeError("Corpus produced duplicate deterministic chunk IDs")
    if not 1 <= threads <= 8:
        raise ValueError("threads must be between 1 and 8")

    connection = _open_index(index_path)
    try:
        existing = {
            row["chunk_id"]: (row["text_sha256"], row["model_id"], row["source"])
            for row in connection.execute("SELECT chunk_id,text_sha256,model_id,source FROM chunks")
        }
        pending = [
            record
            for record in records
            if existing.get(record.chunk_id) != (record.text_sha256, model_id, record.source)
        ]
        if max_chunks is not None:
            if max_chunks < 1:
                raise ValueError("max-chunks must be at least 1")
            pending = pending[:max_chunks]
        _, device_description = _resolve_device(device)
        if pending and model is None:
            model = _load_model(model_id, device, threads)

        indexed_now = 0
        passage_prefix, _ = _model_prefixes(model_id)
        for start in range(0, len(pending), batch_size):
            batch = pending[start:start + batch_size]
            vectors = _encode(model, [passage_prefix + record.text for record in batch], batch_size)
            if len(vectors) and vectors.shape[1] == 0:
                raise RuntimeError("Embedding model returned zero-dimensional vectors")
            values = []
            for record, vector in zip(batch, vectors, strict=True):
                values.append((
                    record.chunk_id,
                    record.doc_id,
                    record.source,
                    record.section,
                    record.title,
                    record.url,
                    json.dumps(record.breadcrumbs, ensure_ascii=False),
                    record.route,
                    record.chunk_index,
                    record.relative_path,
                    record.text,
                    record.text_sha256,
                    model_id,
                    int(vector.shape[0]),
                    vector.tobytes(),
                ))
            with connection:
                connection.executemany("""
                    INSERT OR REPLACE INTO chunks (
                        chunk_id,doc_id,source,section,title,url,breadcrumbs,route,
                        chunk_index,relative_path,text,text_sha256,model_id,dimension,embedding
                    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
                """, values)
            indexed_now += len(values)

        with connection:
            connection.execute("CREATE TEMP TABLE IF NOT EXISTS current_chunk_ids (chunk_id TEXT PRIMARY KEY)")
            connection.execute("DELETE FROM current_chunk_ids")
            connection.executemany(
                "INSERT INTO current_chunk_ids(chunk_id) VALUES (?)",
                ((record.chunk_id,) for record in records),
            )
            connection.execute("""
                DELETE FROM chunks
                WHERE NOT EXISTS (
                    SELECT 1 FROM current_chunk_ids
                    WHERE current_chunk_ids.chunk_id = chunks.chunk_id
                )
            """)
        _refresh_lexical_index(connection)
        with connection:
            metadata = {
                "schema_version": INDEX_SCHEMA_VERSION,
                "model_id": model_id,
                "dimension": str(
                    connection.execute("SELECT dimension FROM chunks LIMIT 1").fetchone()[0]
                ),
                "built_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                "root": str(root.resolve()),
            }
            connection.executemany(
                "INSERT OR REPLACE INTO metadata(key,value) VALUES (?,?)",
                metadata.items(),
            )
        indexed_total = connection.execute("SELECT count(*) FROM chunks").fetchone()[0]
        return {
            "index_path": str(index_path),
            "model_id": model_id,
            "device": device_description,
            "chunks_in_corpus": len(records),
            "chunks_embedded": indexed_now,
            "chunks_reused": len(records) - indexed_now,
            "indexed_total": indexed_total,
        }
    finally:
        connection.close()


class VectorSearch:
    def __init__(
        self,
        index_path: Path,
        model_id: str = DEFAULT_MODEL,
        device: str = "auto",
        threads: int = DEFAULT_CPU_THREADS,
        model: Any | None = None,
    ) -> None:
        if not index_path.is_file():
            raise FileNotFoundError(f"Vector index not found: {index_path}. Run the build command first.")
        self.index_path = index_path
        self.connection = sqlite3.connect(index_path)
        self.connection.row_factory = sqlite3.Row
        metadata = dict(self.connection.execute("SELECT key,value FROM metadata"))
        if metadata.get("schema_version") != INDEX_SCHEMA_VERSION:
            self.connection.close()
            raise RuntimeError("Vector index schema is missing or incompatible; rebuild the index")
        if metadata.get("model_id") != model_id:
            self.connection.close()
            raise RuntimeError(
                f"Index uses model {metadata.get('model_id')!r}, not requested model {model_id!r}"
            )
        self.model_id = model_id
        self.dimension = int(metadata["dimension"])
        self.model = model if model is not None else _load_model(model_id, device, threads)
        self._embed_cache: tuple[list[str], "np.ndarray", "np.ndarray"] | None = None

    def close(self) -> None:
        self.connection.close()

    def _semantic_index(self) -> tuple[list[str], "np.ndarray", "np.ndarray"]:
        if self._embed_cache is None:
            mismatches = self.connection.execute(
                "SELECT count(*) FROM chunks WHERE dimension != ?", (self.dimension,)
            ).fetchone()[0]
            if mismatches:
                raise RuntimeError("Stored embedding dimension does not match index metadata")
            rows = self.connection.execute(
                "SELECT chunk_id, source, embedding FROM chunks"
            ).fetchall()
            chunk_ids: list[str] = []
            sources: list[str] = []
            vectors = np.empty((len(rows), self.dimension), dtype=np.float32)
            for position, row in enumerate(rows):
                vector = np.frombuffer(row["embedding"], dtype=np.float32)
                if vector.size != self.dimension:
                    raise RuntimeError(f"Corrupt embedding for chunk {row['chunk_id']}")
                vectors[position] = vector
                chunk_ids.append(row["chunk_id"])
                sources.append(row["source"])
            self._embed_cache = (chunk_ids, np.asarray(sources), vectors)
        return self._embed_cache

    def _semantic_scan(
        self, query_vector: "np.ndarray", search_sources: tuple[str, ...], top_k: int
    ) -> list[tuple[float, Any]]:
        chunk_ids, chunk_sources, vectors = self._semantic_index()
        scores = vectors @ query_vector
        selected = np.nonzero(np.isin(chunk_sources, search_sources))[0]
        if selected.size == 0:
            return []
        local_scores = scores[selected]
        order = np.argsort(-local_scores, kind="stable")[
            : min(selected.size, max(RERANK_CANDIDATES, top_k * 20))
        ]
        top_positions = selected[order]
        top_ids = [chunk_ids[position] for position in top_positions]
        placeholders = ",".join("?" for _ in top_ids)
        row_by_id = {
            row["chunk_id"]: row
            for row in self.connection.execute(
                "SELECT chunk_id,doc_id,source,section,title,url,breadcrumbs,route,"
                f"chunk_index,relative_path,text FROM chunks WHERE chunk_id IN ({placeholders})",
                top_ids,
            )
        }
        top_scores = local_scores[order]
        return [
            (float(top_scores[position]), row_by_id[chunk_ids[top_positions[position]]])
            for position in range(len(top_ids))
        ]

    def search(self, query: str, top_k: int = 5, source: str | None = None) -> dict[str, Any]:
        query = query.strip()
        if not query or len(query) > MAX_QUERY_CHARS:
            raise ValueError(f"query must contain 1..{MAX_QUERY_CHARS} characters")
        if top_k < 1 or top_k > MAX_TOP_K:
            raise ValueError(f"top_k must be between 1 and {MAX_TOP_K}")
        if source is not None and (not isinstance(source, str) or not source.strip()):
            raise ValueError("source must be a non-empty string when provided")
        search_sources = (source.strip(),) if source is not None else DEFAULT_SEARCH_SOURCES
        _, query_prefix = _model_prefixes(self.model_id)
        query_vector = _encode(self.model, [query_prefix + query], 1)[0]
        if query_vector.shape[0] != self.dimension:
            raise RuntimeError("Query embedding dimension does not match the stored index")
        query_terms = _search_terms(query)

        semantic_candidates = self._semantic_scan(query_vector, search_sources, top_k)
        candidates: dict[str, dict[str, Any]] = {}
        semantic_source_counts: dict[str, int] = {}
        semantic_seen: dict[str, int] = {}
        for semantic_score, row in semantic_candidates:
            semantic_source_counts[row["source"]] = semantic_source_counts.get(row["source"], 0) + 1
        for semantic_score, row in semantic_candidates:
            src = row["source"]
            candidates[row["chunk_id"]] = {
                "row": row,
                "semantic_score": semantic_score,
                "semantic_rank": semantic_seen.get(src, 0),
                "lexical_rank": None,
            }
            semantic_seen[src] = semantic_seen.get(src, 0) + 1

        lexical_candidates = []
        if query_terms:
            fts_query = _fts_query(query_terms)
            source_placeholders = ",".join("?" for _ in search_sources)
            fts_sql = f"""
                SELECT c.chunk_id,c.doc_id,c.source,c.section,c.title,c.url,c.breadcrumbs,
                       c.route,c.chunk_index,c.relative_path,c.text
                FROM chunks_fts
                JOIN chunks c ON c.chunk_id=chunks_fts.chunk_id
                WHERE chunks_fts MATCH ? AND c.source IN ({source_placeholders})
                ORDER BY bm25(chunks_fts,0,0,6,2,1,1)
                LIMIT ?
            """
            lexical_candidates = list(self.connection.execute(
                fts_sql,
                (fts_query, *search_sources, RERANK_CANDIDATES),
            ))
            lexical_source_counts: dict[str, int] = {}
            lexical_seen: dict[str, int] = {}
            for row in lexical_candidates:
                lexical_source_counts[row["source"]] = lexical_source_counts.get(row["source"], 0) + 1
            for row in lexical_candidates:
                src = row["source"]
                candidate = candidates.setdefault(row["chunk_id"], {
                    "row": row,
                    "semantic_score": 0.0,
                    "semantic_rank": None,
                    "lexical_rank": None,
                })
                candidate["lexical_rank"] = lexical_seen.get(src, 0)
                lexical_seen[src] = lexical_seen.get(src, 0) + 1

        reranked = []
        for candidate in candidates.values():
            candidate_source = candidate["row"]["source"]
            semantic_rank = candidate["semantic_rank"]
            semantic_denominator = max(
                semantic_source_counts.get(candidate_source, 1) - 1, 1
            )
            semantic_rank_score = (
                1.0 - semantic_rank / semantic_denominator
                if semantic_rank is not None
                else 0.0
            )
            lexical_rank = candidate["lexical_rank"]
            lexical_denominator = max(
                lexical_source_counts.get(candidate_source, 1) - 1, 1
            )
            lexical_rank_score = (
                1.0 - lexical_rank / lexical_denominator
                if lexical_rank is not None
                else 0.0
            )
            combined_score = (
                0.6 * lexical_rank_score + 0.4 * semantic_rank_score
                if lexical_candidates
                else semantic_rank_score
            )
            reranked.append((
                combined_score,
                lexical_rank_score,
                candidate["semantic_score"],
                candidate["row"],
            ))
        reranked.sort(key=lambda item: (item[0], item[1], item[2]), reverse=True)
        hits = []
        document_counts: dict[str, int] = {}
        for score, lexical_score, semantic_score, row in reranked:
            document_id = row["doc_id"]
            if document_counts.get(document_id, 0) >= MAX_CHUNKS_PER_DOCUMENT:
                continue
            hits.append({
                "score": round(score, 6),
                "semantic_score": round(semantic_score, 6),
                "lexical_score": round(lexical_score, 6),
                "chunk_id": row["chunk_id"],
                "document_id": document_id,
                "source": row["source"],
                "section": row["section"],
                "title": row["title"],
                "url": row["url"],
                "breadcrumbs": json.loads(row["breadcrumbs"]),
                "route": row["route"],
                "chunk_index": row["chunk_index"],
                "file": row["relative_path"],
                "text": row["text"],
            })
            document_counts[document_id] = document_counts.get(document_id, 0) + 1
            if len(hits) == top_k:
                break
        return {
            "query": query,
            "model_id": self.model_id,
            "source_filter": {
                "mode": "explicit" if source is not None else "official_default",
                "sources": list(search_sources),
            },
            "count": len(hits),
            "results": hits,
        }


def _health(index_path: Path) -> dict[str, Any]:
    if not index_path.is_file():
        return {"ok": False, "error": "Vector index is not built"}
    connection = sqlite3.connect(index_path)
    try:
        metadata = dict(connection.execute("SELECT key,value FROM metadata"))
        count = connection.execute("SELECT count(*) FROM chunks").fetchone()[0]
    except sqlite3.Error as error:
        return {"ok": False, "error": str(error)}
    finally:
        connection.close()
    return {
        "ok": True,
        "chunks": count,
        "model_id": metadata.get("model_id"),
        "built_at": metadata.get("built_at"),
    }


def serve(
    index_path: Path,
    model_id: str,
    device: str,
    host: str,
    port: int,
    threads: int = DEFAULT_CPU_THREADS,
) -> None:
    searcher = VectorSearch(index_path, model_id, device, threads)

    class Handler(BaseHTTPRequestHandler):
        def _send(self, status: int, payload: dict[str, Any]) -> None:
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self) -> None:
            if self.path != "/health":
                self._send(404, {"ok": False, "error": "Unknown endpoint"})
                return
            health = _health(index_path)
            self._send(200 if health["ok"] else 503, health)

        def do_POST(self) -> None:
            if self.path != "/search":
                self._send(404, {"ok": False, "error": "Unknown endpoint"})
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
                if length < 1 or length > MAX_HTTP_BODY:
                    raise ValueError("Request body size is invalid")
                payload = json.loads(self.rfile.read(length).decode("utf-8"))
                if not isinstance(payload, dict):
                    raise ValueError("Request must be a JSON object")
                query = payload.get("query")
                top_k = payload.get("top_k", 5)
                source = payload.get("source")
                if not isinstance(query, str):
                    raise ValueError("query must be a string")
                if isinstance(top_k, bool) or not isinstance(top_k, int):
                    raise ValueError("top_k must be an integer")
                if source is not None and (not isinstance(source, str) or not source.strip()):
                    raise ValueError("source must be a non-empty string when provided")
                self._send(200, searcher.search(query, top_k, source))
            except (UnicodeDecodeError, json.JSONDecodeError, ValueError) as error:
                self._send(400, {"ok": False, "error": str(error)})
            except Exception as error:
                self._send(500, {"ok": False, "error": f"{type(error).__name__}: {error}"})

        def log_message(self, format: str, *args: Any) -> None:
            sys.stderr.write("vector-search: " + format % args + "\n")

    server = HTTPServer((host, port), Handler)
    print(f"Vector search listening on http://{host}:{port}")
    try:
        server.serve_forever()
    finally:
        server.server_close()
        searcher.close()


def _add_index_arguments(parser: argparse.ArgumentParser) -> None:
    parser.add_argument("--root", type=Path, default=ROOT, help="Corpus root")
    parser.add_argument("--index", type=Path, default=DEFAULT_INDEX, help="SQLite vector index path")
    parser.add_argument("--model", default=DEFAULT_MODEL, help="Local Sentence Transformers model ID")
    parser.add_argument("--device", default="auto", help="Embedding device: auto, cpu, or cuda (default: auto; auto uses CUDA when available)")
    parser.add_argument(
        "--threads",
        type=int,
        default=DEFAULT_CPU_THREADS,
        help=f"Maximum PyTorch intra-op CPU threads (default: {DEFAULT_CPU_THREADS})",
    )


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Prepare and query the inZOI ModKit corpus with local vector search")
    subparsers = parser.add_subparsers(dest="command", required=True)

    build_parser = subparsers.add_parser("build", help="Create or incrementally refresh the vector index")
    _add_index_arguments(build_parser)
    build_parser.add_argument("--batch-size", type=int, default=32)
    build_parser.add_argument(
        "--max-chunks",
        type=int,
        default=None,
        help="Embed only the first N pending chunks (throughput smoke test)",
    )

    search_parser = subparsers.add_parser("search", help="Run one semantic query")
    search_parser.add_argument("query")
    search_parser.add_argument("--index", type=Path, default=DEFAULT_INDEX)
    search_parser.add_argument("--model", default=DEFAULT_MODEL)
    search_parser.add_argument("--device", default="auto")
    search_parser.add_argument("--threads", type=int, default=DEFAULT_CPU_THREADS)
    search_parser.add_argument("--top-k", type=int, default=5)
    search_parser.add_argument(
        "--source",
        help="Override the official-only default with one exact source (e.g. wiki, local)",
    )

    serve_parser = subparsers.add_parser("serve", help="Expose local /health and /search HTTP endpoints")
    serve_parser.add_argument("--index", type=Path, default=DEFAULT_INDEX)
    serve_parser.add_argument("--model", default=DEFAULT_MODEL)
    serve_parser.add_argument("--device", default="auto")
    serve_parser.add_argument("--threads", type=int, default=DEFAULT_CPU_THREADS)
    serve_parser.add_argument("--host", default="127.0.0.1")
    serve_parser.add_argument("--port", type=int, default=8088)

    args = parser.parse_args(list(argv) if argv is not None else None)
    try:
        if args.command == "build":
            if args.batch_size < 1 or args.batch_size > 256:
                raise ValueError("batch-size must be between 1 and 256")
            if not 1 <= args.threads <= 8:
                raise ValueError("threads must be between 1 and 8")
            result = build_index(
                args.root,
                args.index,
                args.model,
                args.device,
                args.batch_size,
                args.threads,
                max_chunks=args.max_chunks,
            )
            print(json.dumps(result, ensure_ascii=False, indent=2))
            return 0
        if args.command == "search":
            if not 1 <= args.threads <= 8:
                raise ValueError("threads must be between 1 and 8")
            searcher = VectorSearch(args.index, args.model, args.device, args.threads)
            try:
                print(json.dumps(
                    searcher.search(args.query, args.top_k, args.source),
                    ensure_ascii=False,
                    indent=2,
                ))
            finally:
                searcher.close()
            return 0
        if args.command == "serve":
            if not 1 <= args.port <= 65535:
                raise ValueError("port must be between 1 and 65535")
            if not 1 <= args.threads <= 8:
                raise ValueError("threads must be between 1 and 8")
            serve(args.index, args.model, args.device, args.host, args.port, args.threads)
            return 0
    except (FileNotFoundError, RuntimeError, sqlite3.Error, ValueError) as error:
        print(f"error: {error}", file=sys.stderr)
        return 2
    return 2


if __name__ == "__main__":
    raise SystemExit(main())

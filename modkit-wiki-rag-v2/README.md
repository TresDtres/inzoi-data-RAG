# inZOI ModKit knowledge snapshot

This corpus keeps official Wiki pages and ModKit how-to/reference pages in separate route-preserving trees under `pages/`. Each source page is one small Markdown file; pages that exceed the chunk budget are divided into linked Markdown parts. Link-dense, oversized directory/catalog pages are reduced to a short navigation entry because their individual destination pages are captured separately and their links are queryable in SQLite. Images remain links to the official site.

`state/catalog.sqlite` stores page metadata, stable document IDs, hashes, breadcrumbs, and internal page links. It is a navigation/index database, not prompt context. Each run writes section/route-partitioned manifests and added/changed/removed/error JSONL files under `updates/<snapshot-id>/`.

Capture or refresh with:

```powershell
python .\tools\capture_snapshot.py
```

The capture reads the official sitemap and only requests URLs below `/docs/modkit-docs/`. Existing page content is updated only when its normalized content or metadata changes. Retired pages are retained, and prior versions of changed pages are archived under `history/`. Run manifests and added/changed/removed reports are partitioned by source/section. No embeddings are created by this capture step.

## Local vector search

Build a separate semantic-search index and run it locally with Docker:

```powershell
docker compose run --build --rm vector-search build --root /corpus --index /index/vector_index.sqlite --device cuda --threads 8 --batch-size 64
docker compose up --build vector-search
```

Both indexing and serving use CUDA explicitly. The Compose service reserves an NVIDIA GPU; if CUDA is unavailable, the build or server fails instead of silently switching to CPU.

The first build downloads `intfloat/multilingual-e5-small` into a persistent
Docker volume. Embedding and query inference run locally; no corpus text is sent
to a hosted embedding API. The model is multilingual and receives the E5
`passage:` / `query:` prefixes. The index lives separately at
`state/vector-index/vector_index.sqlite`; snapshot capture and
`state/catalog.sqlite` are not modified.
PyTorch is limited to eight intra-op threads, and Compose caps the service at
eight CPU cores, leaving capacity for Unreal, VS Code, Docker, and other
applications. The indexer's accepted thread setting is 1-8; deliberately
change both `--threads` and the Compose `cpus`/thread environment to use a
different budget.

Query the HTTP service from another PowerShell window:

```powershell
$body = @{ query = '¿Cómo se registra un comando de Lua?'; top_k = 5 } | ConvertTo-Json
$utf8Body = [System.Text.Encoding]::UTF8.GetBytes($body)
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:8088/search `
  -ContentType 'application/json; charset=utf-8' `
  -Body $utf8Body
```

By default, search is restricted to the primary ModKit documentation sources
`modkit`, `resources`, and `wiki`. It excludes workspace-authored notes, FAQ
and separately curated `official_external` references, plus the less
authoritative `root`, `community`, and `videos` pages. Each response reports
its `source_filter`.

An explicit `source` value overrides that default and searches only that exact
source. For example, use `source = 'local'` or `source = 'official_external'`
only when you deliberately want those sources included. Search combines
semantic candidates with an FTS5 lexical index, uses bilingual term
normalization and limits duplicate chunks from one document. Results expose
the combined `score`, cosine `semantic_score`, and normalized lexical rank
`lexical_score`; none is a calibrated probability. Each result also includes
source metadata, a corpus-relative file, and a source URL for citations. The
HTTP listener is bound to loopback on the host. Retrieval returns evidence for
a downstream answer generator; it does not generate an answer itself.

Run the 24-case retrieval regression battery against the running service:

```powershell
python .\tools\evaluate_rag.py
```

The report checks expected evidence paths and source-scope violations.
Cases whose expected answer is “not found” are flagged for manual review rather
than treated as proof that a capability does not exist. This evaluates
retrieval, not the wording or factuality of a generated answer.

The indexer rebuilds embeddings only for changed chunks when their text,
source, or embedding model changes; it refreshes the lexical index and removes
stale vectors after a successful build. Captured navigation indexes and
top-level category landing pages are excluded; long Markdown is re-chunked by
section, with headings repeated as context and code fences kept intact. To
refresh after a corpus snapshot or index-schema upgrade, rebuild the index
with the same `docker compose run` command.

MCP tool schemas and the live game CLI catalog are separate operational sources. They should be queried from the live ModKit MCP when needed rather than treated as Wiki pages.

## Export MCP tool schemas

Export tool names, descriptions, argument schemas, required flags, declared return schemas, and advertised resources/prompts from the configured inZOI MCP servers:

```powershell
python .\tools\export_mcp_tools.py --output-dir .\state\mcp-tools
```

The script creates one JSON file per server (for example, `state/mcp-tools/inzoi-game.json`, `inzoi-modkit.json`, and `blender.json`). It reads the VS Code user `mcp.json` by default and uses only MCP `initialize`, `tools/list`, `resources/list`, and `prompts/list` requests; it does not call any listed tool. Pass `--config` to use another MCP configuration file, or repeat `--server` to select server names. Resource and prompt catalogs are marked `not_advertised` when the server does not declare those capabilities. Return schemas are marked `unspecified` when a server does not publish one.

## Official sources outside the ModKit sitemap

Official inZOI references that are outside `/docs/modkit-docs/` belong under `pages/official/`. Record the canonical URL and keep the note clearly attributed to its publisher. The ModKit snapshot capture does not fetch these external pages or add them to `state/catalog.sqlite` and the official snapshot manifests.

## Local, user-authored notes

Workspace-specific analysis and ideas belong under `pages/local/` and should be linked from `pages/local/index.md`. Keep these authored notes distinct from official source material, even when they cite or summarize official references. They are not overwritten by a capture run or automatically added to `state/catalog.sqlite` and the official snapshot manifests.

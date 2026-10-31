# inZOI Data RAG

A model-agnostic knowledge base for helping people create inZOI mods and understand the tools and systems behind them.

## Purpose

This project brings together the documentation an AI assistant needs to provide comprehensive, evidence-based support to inZOI players and modders. It is designed to work with any AI model, whether it runs locally or is hosted elsewhere, as long as the assistant can access the corpus through a compatible RAG client or integration.

The knowledge base is intended to help an assistant:

- Guide users through creating, testing, packaging, and troubleshooting mods.
- Explain how the inZOI ModKit and relevant parts of the game work.
- Clarify the documented capabilities and limits of the game's APIs and SDKs, including Lua APIs and script-based modding.
- Distinguish documented behavior from unsupported, unavailable, or unverified capabilities, so answers do not promise more than the tools allow.

The corpus combines official references with curated guides and practical workflows. Source URLs and attribution are retained in the relevant documents. The project is model-independent and does not require an account or authentication.

Our thanks to **KRAFTON** for creating inZOI, making mod creation possible, and providing steadfast support to the modding community.

## What is included

- `modkit-wiki-rag-v2/`: the ModKit knowledge corpus, MCP tool references, workflows, evaluation data, generators, and local semantic search service.
- `biblia-modding-inzoi/contenido/`: the curated Spanish-language Modding Bible source.
- `biblia-modding-inzoi/herramientas/generar.py`: builds the browsable Modding Bible site from its source content and the RAG corpus.

The generated HTML site, vector indexes, capture databases, raw historical data, and backups are excluded from Git. They are either generated locally or retained as local maintenance data.

## Requirements

- Git and Docker Desktop with the Linux/WSL2 engine.
- An NVIDIA GPU supported by Docker Desktop. The project selects CUDA explicitly and does not silently fall back to CPU. It was tested with an NVIDIA RTX 5080 with 16 GB of VRAM.
- Internet access for the first image and embedding-model download. After setup, search and inference run locally.
- Python 3 to generate the Modding Bible site; its generator uses only the standard library.

## Install and run the local RAG service

```powershell
git clone https://github.com/TresDtres/inzoi-data-RAG.git
cd inzoi-data-RAG/modkit-wiki-rag-v2
docker compose run --build --rm vector-search build --root /corpus --index /index/vector_index.sqlite --device cuda --threads 8 --batch-size 64
docker compose up -d vector-search
```

Check service health at `http://127.0.0.1:8088/health`. To search from PowerShell:

```powershell
$body = @{ query = 'How do I create a Lua mod in the ModKit?'; top_k = 5 } | ConvertTo-Json
$utf8Body = [System.Text.Encoding]::UTF8.GetBytes($body)
Invoke-RestMethod -Uri 'http://127.0.0.1:8088/search' -Method Post -ContentType 'application/json; charset=utf-8' -Body $utf8Body
```

The service binds to `127.0.0.1` and does not require a login. A locally running AI assistant can use it through a compatible RAG client. A hosted AI assistant can use the same knowledge through an integration or client configured by the user; the default local service is not exposed as a public endpoint. The first search after startup loads the vector cache and may take about two minutes; later searches are faster. The first index build takes the longest, and later builds reuse vectors for unchanged content.

## Generate and view the Modding Bible

From the repository root:

```powershell
cd biblia-modding-inzoi
python herramientas/generar.py
python -m http.server 8090 --directory sitio
```

Open `http://localhost:8090`. The generator creates `biblia-modding-inzoi/sitio/`, which is excluded from Git because it is a reproducible build output. If the local RAG service is running, the Bible's search interface can query its index.

## Create a localized edition of the Modding Bible

The curated Markdown files included here are in Spanish. The current generator produces one language at a time: it has no language switch or automatic translation. To create an edition in your language:

1. Make a fork or a separate branch for that language so the Spanish source remains available.
2. Translate the Markdown chapters in `biblia-modding-inzoi/contenido/biblia/`, including `principios.md`.
3. In `biblia-modding-inzoi/contenido/secciones.json`, translate each section's `nombre`, `resumen`, and, if useful, its `inicial` badge. Keep each `id` and `docs` path unchanged: the generator uses them to find the chapter files and map reference pages.
4. Translate the interface text in `biblia-modding-inzoi/herramientas/generar.py` (navigation, search labels, headings, breadcrumbs, and footer), and set the HTML `lang` value to the edition's language tag, such as `en` or `fr-FR`.
5. Keep tool names, API/SDK identifiers, CLI commands, code, field names, file paths, and source URLs exact. Translate explanations around them and preserve citations. Then regenerate and review the site:

   ```powershell
   cd biblia-modding-inzoi
   python herramientas/generar.py
   python -m http.server 8090 --directory sitio
   ```

   Open `http://localhost:8090` and check every department, chapter, link, and translated label. The generated `sitio/` folder is local build output.

The translated chapters remain readable in their department pages. The built-in search index is generated from the RAG corpus, so it does not automatically index new translations of the curated chapters. If you want translated chapters to appear in search results too, ask an AI assistant to extend the generator's search index for those files while preserving the original corpus routes and source references. An AI assistant can also help translate and review the chapters one at a time; verify technical terms and behavior against the cited sources.

## Update the knowledge base

Current MCP tool schemas are stored in `modkit-wiki-rag-v2/state/mcp-tools/`. See `modkit-wiki-rag-v2/MAINTENANCE.md` and `modkit-wiki-rag-v2/UPDATE-RUNBOOK.md` for the process to refresh tool references, workflows, retrieval questions, and the local index.

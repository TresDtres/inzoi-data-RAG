---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_upload_mod_file]
wiki_refs: []
---

## modkit_cf_upload_mod_file

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Sube un resultado de empaquetado (zip, etc.) a CurseForge. Herramienta de bajo nivel: en flujos normales se prefiere modkit_cf_publish.

**Descripción actual del MCP:** Low-level: upload an existing zip to a CurseForge mod. Prefer modkit_cf_publish (package → zip → upload in one call). Use only for a zip the user built (cf_publish deletes its temp zip, so re-run cf_publish to retry a failed publish). Auth required. Each upload creates a new file_id; do not re-upload the same zip.

**Cuándo usarla:** Cuando ya existe un zip construido por el usuario, o para adjuntar un archivo concreto a un mod ya registrado.

**Requisitos:** Empaquetado y zip ya completos; autenticacion; mod_id conocido (o CfUgcId en el .uplugin).

**Parámetros clave:**
- `mod_id` (integer, obligatorio) — Target mod id, confirmed by the user (from modkit_cf_create_mod or modkit_cf_list_my_mods).
- `file_path` (string, obligatorio) — Absolute zip path the user gave. Do not pick a zip yourself.
- `changelog` (string, obligatorio) — Plain-text change notes from the user; never empty or invented.
- `display_name` (string, opcional) — File label on CF. Default = filename.
- `release_type` (string, opcional) — Release channel. beta/alpha only if the user asks.
- `is_marked_for_manual_release` (boolean, opcional) — If true, the user publishes manually after approval.
- `game_version_ids` (array, opcional) — Target game version ids.
- `timeout_seconds` (number, opcional) — Upload timeout (s). For 1GB+ use 1200–1800.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_publish`

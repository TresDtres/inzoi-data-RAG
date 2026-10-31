---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_publish]
wiki_refs: []
---

## modkit_cf_publish

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Encadena en una sola llamada modkit_package, zip y modkit_cf_upload_mod_file; automatiza lo que ocurre tras pulsar Continue en la ventana ShareUGC del editor.

**Descripción actual del MCP:** Recommended CurseForge upload: UAT packaging → zip → upload in one call (no modkit_package needed). Auth required. Windows only. Packaging often takes 1–3 min; call no other tool until this returns. New mod: run after modkit_cf_create_mod → modkit_cf_update_uplugin. Existing mod: plugin + changelog suffice; the mod comes from .uplugin CfUgcId. 'Packaging failed': check the Output Log and report to the user; do not blindly retry. Other errors: see modkit://workspace-docs/curseforge_rules.

**Cuándo usarla:** Publicacion normal de una sola llamada cuando el mod ya esta registrado y validado.

**Requisitos:** Plugin validado; mod_id resuelto (por argumento o automaticamente desde CfUgcId del .uplugin); autenticacion.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Local .uplugin name from modkit_list_projects, chosen by the user.
- `changelog` (string, obligatorio) — Plain-text change notes from the user; never empty or invented.
- `mod_id` (integer, opcional) — Omit to use .uplugin CfUgcId. Set only right after registration or if .uplugin is stale.
- `display_name` (string, opcional) — File name on CF. Default '<plugin>.zip'.
- `release_type` (string, opcional) — Release channel. beta/alpha only if the user asks.
- `is_marked_for_manual_release` (boolean, opcional) — If true, the user publishes manually after approval.
- `game_version_ids` (array, opcional) — Target game version ids.
- `timeout_seconds` (number, opcional) — Timeout (s), applied separately to packaging and upload. Large mods: 1800–2400.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_create_mod`, `modkit_cf_update_uplugin`, `modkit_package`

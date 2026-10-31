---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: traducciones
tools: [modkit_list_translation_files]
wiki_refs: []
---

## modkit_list_translation_files

**Servidor:** inzoi-modkit | **Dominio:** traducciones

**Qué hace:** Devuelve la lista de archivos PO de un workspace Language, escaneando {Plugin}/l10n/ (distribucion) e {Plugin}/Intermediate/Localization/ (copia de trabajo).

**Descripción actual del MCP:** List a Language workspace's PO files under {Plugin}/l10n/ (shipped) and Intermediate/Localization/ (editor working cache). Pass `po_path` as-is to the other translation tools.

**Cuándo usarla:** Para localizar el archivo PO que se va a leer o editar.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** ninguna mencionada en el volcado

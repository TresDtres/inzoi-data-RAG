---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_build_talk_patch]
wiki_refs: []
---

## modkit_build_talk_patch

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Solo para workspace Talk: a partir de nueve campos editables por talk, crea o parchea en una sola llamada las filas enlazadas de TalkSelection, InteractionBag_Talk(+Feedback), CoopTalk, Script_Talk y Condition_Interaction_Talk.

**Descripción actual del MCP:** Talk workspace only. Create every talk's linked rows across TalkSelection, InteractionBag_Talk (+Feedback), CoopTalk, Script_Talk and Condition_Interaction_Talk; ids, icons, animation/voice pools and StringTable entries are generated. Prefer this over modkit_set_data. ⚠️ Each call mints new ids, so repeating the same talks duplicates rows. Put every talk in one `talks` array. A call can succeed with `skipped_entries`: the other talks were written, so fix and resend only the skipped ones.

**Cuándo usarla:** Al autorar conversaciones (talks) completas con sus interacciones asociadas.

**Requisitos:** Un workspace Talk abierto.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Talk workspace item ID
- `talks` (array, obligatorio) — Every talk for this call

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_set_data`

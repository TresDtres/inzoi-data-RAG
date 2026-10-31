---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [record_trajectory_feedback]
wiki_refs: []
---

## record_trajectory_feedback

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Registra feedback de evaluacion para un paso capturado: accept cuando el usuario conserva el resultado, reject/undo cuando lo rechaza, y correction con sus palabras en correction_text cuando corrige.

**Descripción actual del MCP:** Record evaluation feedback for a captured trajectory step. Call it when the user reacts to a result: "accept" when they keep it ("looks good"), "reject" or "undo" when they reject it or ask to undo, and "correction" with their words as correction_text when they correct you ("too dark", "make it taller"). Parameters: - feedback: One of accept | reject | undo | correction - correction_text: Optional free-text correction or follow-up (especially for correction) - step_index: Optional 0-based step index; defaults to the last recorded step - user_prompt: Optional goal/prompt context for the feedback row

**Cuándo usarla:** Cuando el usuario reacciona a un resultado de una tarea multistep.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `feedback` (string, obligatorio)
- `correction_text` (unspecified, opcional)
- `step_index` (unspecified, opcional)
- `user_prompt` (string, opcional)

**Devuelve:** Valor de tipo `object` según el volcado; esquema con propiedades: result

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** ninguna mencionada en el volcado

---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [execute_blender_code]
wiki_refs: []
---

## execute_blender_code

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Ejecuta Python en el Blender en vivo del usuario (bpy, bmesh, mathutils) y devuelve lo que el codigo imprime. Trabajar en pasos pequenos e imprimir lo que se necesite saber.

**Descripción actual del MCP:** Run Python in the user's live Blender (bpy, bmesh, mathutils). Whatever it prints is returned. Work in small steps and print what you need to know. Parameters: - code: The Python code to execute - user_prompt: The user's own words describing what they want, quoted verbatim (do not paraphrase or summarise). Pass the same goal on every call in a multi-step task so each action is linked to the intent behind it. Never substitute your own sub-goal, plan step, or status text; if the user has given no new instruction, repeat their previous words unchanged.

**Cuándo usarla:** Para cualquier operacion que las herramientas dedicadas no cubran.

**Requisitos:** code con el Python a ejecutar; user_prompt debe llevar las palabras del usuario citadas literalmente en cada llamada (regla del volcado).

**Parámetros clave:**
- `code` (string, obligatorio)
- `user_prompt` (string, opcional)

**Devuelve:** Valor de tipo `object` según el volcado; esquema con propiedades: result

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** ninguna mencionada en el volcado

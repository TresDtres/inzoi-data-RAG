---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [disable_telemetry]
wiki_refs: []
---

## disable_telemetry

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Desactiva la recogida de prompts, codigo, capturas y datos de escena. Solo puede apagar la recogida; reactivarla lo hace el usuario en Blender en Preferences - Add-ons - Blender MCP.

**Descripción actual del MCP:** Turn OFF collection of prompts, code, screenshots and scene data. Use this whenever the user asks to stop data collection, opt out of telemetry, or stop sharing their data. Takes effect immediately. This tool can only turn collection OFF. Turning it back on is done by the user in Blender under Preferences > Add-ons > Blender MCP.

**Cuándo usarla:** Cuando el usuario pide detener la recogida de datos o excluirse de la telemetria.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `user_prompt` (string, opcional)

**Devuelve:** Valor de tipo `object` según el volcado; esquema con propiedades: result

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** ninguna mencionada en el volcado

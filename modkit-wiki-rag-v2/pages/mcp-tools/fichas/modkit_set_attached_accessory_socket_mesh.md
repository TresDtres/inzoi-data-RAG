---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_attached_accessory_socket_mesh]
wiki_refs: []
---

## modkit_set_attached_accessory_socket_mesh

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija o limpia el StaticMesh de un socket de accesorio acoplado (Attached Accessory) en un workspace CAZ. Con mesh vacio se elimina la entrada.

**Descripción actual del MCP:** Set or clear the StaticMesh on a CAZ Attached Accessory socket.

**Cuándo usarla:** Al configurar el mesh de un socket de accesorio en un Zoi.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Attached Accessory workspace id
- `socket` (string, obligatorio) — Socket enum name (e.g. Glasses, Head, NoseUpper, L_Ear4)
- `mesh` (string, opcional) — StaticMesh asset path; empty clears the socket

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** ninguna mencionada en el volcado

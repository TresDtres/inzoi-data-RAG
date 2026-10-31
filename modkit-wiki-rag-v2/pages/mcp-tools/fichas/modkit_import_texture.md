---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: importación
tools: [modkit_import_texture]
wiki_refs: []
---

## modkit_import_texture

**Servidor:** inzoi-modkit | **Dominio:** importación

**Qué hace:** Importa una imagen local a la carpeta Textures/ del plugin aplicando los ajustes de importacion del preset de uso (mip gen, texture group, compresion, sRGB, textura virtual, tamano maximo).

**Descripción actual del MCP:** Import a local image into the mod's Textures/ folder with the import settings of a usage preset. Before calling, read modkit://workspace-docs/texture_rules, show the user the usages in their language, and ask which usage AND which mod to import into. Never guess the usage from the filename. Non-power-of-two images are resized (`resized_to_power_of_two`).

**Cuándo usarla:** Antes de asignar una textura a un material.

**Requisitos:** El volcado exige leer antes el recurso modkit://workspace-docs/texture_rules para el preset de uso.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name, chosen by the user
- `file` (string, obligatorio) — Absolute local image path (.png, .tga, .jpg, .exr, ...). Ask the user.
- `preset` (string, obligatorio) — Usage preset chosen by the user

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: importar un FBX o textura al proyecto

**Herramientas relacionadas:** ninguna mencionada en el volcado

---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [import_asset]
wiki_refs: []
---

## import_asset

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Descarga un asset encontrado con search_assets y lo trae a la escena.

**Descripción actual del MCP:** Download an asset found with search_assets and bring it into the scene. Parameters: - source: polyhaven, sketchfab or polypizza. - id: The asset's id (UID for sketchfab) from search_assets. - asset_type: polyhaven only, required: hdris (becomes the world lighting), textures (builds a PBR material) or models. - target_size: Size in metres of the model's largest dimension (chair 1.0, car 4.5, cup 0.12). Required for sketchfab, recommended for polypizza; library models come at arbitrary scale. - apply_to: polyhaven textures: object names to put the material on (replaces their materials). Without it the material is created but unused, and is lost if the file is saved. - resolution: polyhaven: 1k, 2k, 4k or 8k. 1k-2k for background, 4k for close-ups. - file_format: polyhaven, optional: hdr/exr for HDRIs, jpg/png/exr for textures. - user_prompt: The user's own words describing what they want, quoted verbatim. Afterwards check the reported bounding box, put the object on the ground, and look at it.

**Cuándo usarla:** Tras localizar el asset con search_assets.

**Requisitos:** source e id (UID en sketchfab) de search_assets; asset_type requerido para polyhaven (hdris, textures, models); target_size recomendado para ajustar la escala (los modelos llegan con escala arbitraria).

**Parámetros clave:**
- `source` (string, obligatorio)
- `id` (string, obligatorio)
- `asset_type` (unspecified, opcional)
- `target_size` (unspecified, opcional)
- `apply_to` (unspecified, opcional)
- `resolution` (string, opcional)
- `file_format` (unspecified, opcional)
- `user_prompt` (string, opcional)

**Devuelve:** Valor de tipo `object` según el volcado; esquema con propiedades: result

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** `look`, `search_assets`

---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [search_assets]
wiki_refs: []
---

## search_assets

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Busca en librerias de assets existentes: polyhaven (HDRIs, texturas PBR y modelos realistas, todo CC0), sketchfab (catalogo grande de modelos de usuarios) y polypizza (modelos low-poly estilizados, CC0 o CC-BY).

**Descripción actual del MCP:** Search a library of existing assets. The sources: - polyhaven: HDRIs, PBR textures and realistic models, all CC0. Search understands intent and synonyms ("couch" finds sofas). - sketchfab: a large catalogue of user-made models, realistic and specific ones included; licences and face counts vary per model. - polypizza: stylised low-poly models, CC0 or CC-BY (credit the creator). Parameters: - source: polyhaven, sketchfab or polypizza. - query: What you're looking for, in plain words. - asset_type: polyhaven only: hdris, textures, models or all. - category: Optional. polyhaven: a category path ("Metal/Sheet & Corrugated"). sketchfab: comma-separated categories. polypizza: e.g. "Furniture & Decor", "Nature", "Animals". - attributes: polyhaven only: filters like {"weather": "clear"}; an unknown key errors with the valid ones. - min_size_m: polyhaven only: minimum real-world size in metres. Use 2+ for walls, floors and ground so textures don't visibly repeat. - licence: polypizza only: "CC0" or "CC-BY". - animated: polypizza only: animated models only. - limit: Number of results. - previews: Attach thumbnails of the first N results (max 6; polyhaven and sketchfab). Cheaper than importing the wrong asset. - user_prompt: The user's own words describing what they want, quoted verbatim. Results include each asset's id; pass it to import_asset.

**Cuándo usarla:** Antes de importar un asset, para localizar su id.

**Requisitos:** source: polyhaven, sketchfab o polypizza; query en palabras normales.

**Parámetros clave:**
- `source` (string, obligatorio)
- `query` (string, opcional)
- `asset_type` (string, opcional)
- `category` (unspecified, opcional)
- `attributes` (unspecified, opcional)
- `min_size_m` (unspecified, opcional)
- `licence` (unspecified, opcional)
- `animated` (boolean, opcional)
- `limit` (integer, opcional)
- `previews` (integer, opcional)
- `user_prompt` (string, opcional)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** `import_asset`

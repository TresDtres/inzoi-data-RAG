---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [get_scene_info]
wiki_refs: []
---

## get_scene_info

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Devuelve hechos de la escena como texto: que hay, donde, cuanto mide y como de sanos estan los meshes y rigs. Una linea de cabecera con conteos y una linea por objeto con los campos pedidos (fields); root y query acotan la jerarquia o filtran por nombre.

**Descripción actual del MCP:** Facts about the scene as text: what's there, where, how big, and how healthy meshes and rigs are. No image; to see the scene, use look. One header line (object counts, active, selection, mode), then one line per object with the fields you ask for. Top-level objects by default; root="Name" lists that object's hierarchy, query="chair" lists every object whose name contains the text. For anything else about an object, read it with execute_blender_code. Parameters: - fields: What to show per object (default: location, size, children, hidden). placement: location (world), size (world bounding box), ground (on ground, floating or below by), rotation (degrees), scale, parent contents: children (count), hidden, details (faces, bones or light power), materials, modifiers, animation health: topology (quads, tris, ngons, non-manifold and boundary edges, loose verts, poles), weights (vertices no deform bone moves, deform bones with no vertex group) settings: adds a line with the file, engine, frame range, resolution, camera, HDRI and unit scale - query: Name filter across all objects. - root: Object whose hierarchy to list. - limit: Maximum object lines (default 20). - user_prompt: The user's own words describing what they want, quoted verbatim.

**Cuándo usarla:** Cuando se necesitan conteos, tamanos y posiciones; para ver la escena visualmente existe look.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `user_prompt` (string, opcional)
- `query` (unspecified, opcional)
- `root` (unspecified, opcional)
- `fields` (unspecified, opcional)
- `limit` (integer, opcional)

**Devuelve:** Valor de tipo `object` según el volcado; esquema con propiedades: result

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** `execute_blender_code`, `look`

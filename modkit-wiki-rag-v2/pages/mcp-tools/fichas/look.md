---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [look]
wiki_refs: []
---

## look

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Muestra la escena como una imagen. Elige desde donde (mode: viewport, camera, angles, frames) y como se dibuja (shading: solid, material, rendered, wireframe, xray). Con image muestra una imagen concreta en vez de la escena.

**Descripción actual del MCP:** See the scene as one image. For counts, sizes and positions, use get_scene_info. Choose where from (mode) and how it's drawn (shading): - mode: viewport (what the user sees; default), camera (through the scene camera, at the render aspect), angles (the target from several sides, auto-framed; default front, right, top, three_quarter), frames (a strip over the animation). - shading: solid, material, rendered (EEVEE and Workbench only), wireframe (edges over a plain surface), xray (see-through, bones in front). Default: the viewport's. - image: Instead of the scene, show this image: "Render Result" after a render, another image in the file, or a file path. Parameters: - target: Object names to frame (children included). Default: every visible object. - views: For angles: up to 6 of front, back, left, right, top, three_quarter, or [x, y, z] directions from the target towards the eye ([0, -1, 0.2] is front, slightly above). - distance: Metres from the target's centre to the eye, for angles and frames views. Default: far enough to fit it; closer for detail or to stand inside a room. - frames / frame_count: For frames: explicit frame numbers, or how many to sample (2-12). - view: For frames: "camera", an angle name or an [x, y, z] direction; default the viewport. - max_size: Longest side in pixels (default 768). Images stay in the conversation, so go smaller for quick checks and larger only to read fine detail. - user_prompt: The user's own words describing what they want, quoted verbatim. Every setting changed to take the picture is restored afterwards.

**Cuándo usarla:** Cuando hace falta ver el resultado visual; para conteos y medidas existe get_scene_info.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `mode` (unspecified, opcional)
- `target` (unspecified, opcional)
- `views` (unspecified, opcional)
- `distance` (unspecified, opcional)
- `shading` (unspecified, opcional)
- `frames` (unspecified, opcional)
- `frame_count` (integer, opcional)
- `view` (unspecified, opcional)
- `image` (unspecified, opcional)
- `max_size` (integer, opcional)
- `user_prompt` (string, opcional)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** `get_scene_info`

---
source: mcp-tools
categoria: workflow
nivel: avanzado
experimental: true
tools: [game_get_state, smartbuild_shape, smartbuild_import_and_place_mesh, smartbuild_set_floor_texture, smartbuild_set_wall_texture, smartbuild_set_object_texture, smartbuild_preview_object, smartbuild_preview_floor, smartbuild_preview_room_walls, smartbuild_preview_wall, smartbuild_preview_commit, smartbuild_preview_clear, smartbuild_pick_surface_at_screen, screenshot_capture, look]
wiki_refs: [pages/wiki/cli/smartbuild/smartbuild-shape.md, pages/wiki/cli/smartbuild/smartbuild-import-and-place-mesh.md, pages/wiki/cli/smartbuild/smartbuild-set-wall-texture.md, pages/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen.md]
dump_version: volcados 2026-10-09 sin cambios | inzoi-game 2024-11-05 (412) | blender 2024-11-05 (9)
generado: 2026-10-09
---

# WF-17: Prototipar rapido con SmartBuild (formas, meshes y texturas en vivo)

**Objetivo:** construir y texturizar rapidamente en el mundo del juego en ejecucion, con vistas previas de arrastre, sin pasar por el ModKit.
**EN:** build and texture quickly in the running game world with drag previews, without going through the ModKit (SmartBuild).
**Nivel:** avanzado
**Ruta:** juego-en-vivo (con apoyo blender opcional)

**Pasos:**

1. `game_get_state` (inzoi-game) — partida activa y sin bloqueos.
2. `smartbuild_shape` (inzoi-game) — coloca primitivas (cube/sphere/cylinder/cone/plane) en coordenadas del mundo. Resultado esperado: forma en escena.
3. (Opcional, con Blender) `get_scene_info` / `look` (blender) para preparar o verificar un modelo; `execute_blender_code` para exportarlo a .glb/.gltf. VERIFICADO EN VIVO (2026-10-09): `bpy.ops.export_scene.gltf(filepath=<ruta>, export_format='GLB')` funciona (Blender 5.2, con Draco y MeshOptimizer disponibles).
4. `smartbuild_import_and_place_mesh` (inzoi-game) — importa en runtime un .glb/.gltf y lo coloca en el mundo. Resultado esperado: mesh importado y colocado.
5. Aplicar texturas del usuario (PNG/JPG):
   - Suelo/techo: `smartbuild_set_floor_texture`.
   - Pared: `smartbuild_set_wall_texture`.
   - Objeto: `smartbuild_set_object_texture`.
6. Vistas previas de arrastre (temporal, sin confirmar):
   - `smartbuild_preview_wall` / `smartbuild_preview_floor` / `smartbuild_preview_room_walls` (todas las paredes interiores de una habitacion) / `smartbuild_preview_object`.
   - `smartbuild_pick_surface_at_screen` — ray-cast desde un pixel de pantalla para elegir la superficie bajo el cursor.
   - Confirmar: `smartbuild_preview_commit` — la vista previa se vuelve cambio real.
   - Descartar: `smartbuild_preview_clear` — restaura el snapshot de la vista previa.
7. `screenshot_capture` (inzoi-game) — verificacion visual del resultado.

**Advertencias (obligatorias):**
- Los 12 comandos smartbuild.* estan marcados **[EXPERIMENTAL]** en el volcado.
- VERIFICADO EN VIVO (2026-10-09): las shapes de smartbuild NO sobreviven a una recarga sin guardado — tras un ciclo game.goto_lobby -> game.load, `smartbuild_shape action=list` devolvio "0 shape(s) tracked" (el cubo colocado antes del ciclo desaparecio). Ademas la interfaz real es por `action` (list | spawn | spawn_at_screen | set_transform | set_color | destroy) con `Handle` para operar cada shape, y `smartbuild_import_and_place_mesh` responde "import_started" (asincrono, sin estado final consultable por CLI). No prometer persistencia sin un guardado previo.
- Retornos de smartbuild no publicitados por el servidor (completar tras prueba en vivo); las paginas wiki citadas documentan parametros y uso.

**Herramientas:** game_get_state, smartbuild_shape, smartbuild_import_and_place_mesh, smartbuild_set_floor_texture, smartbuild_set_wall_texture, smartbuild_set_object_texture, smartbuild_preview_object, smartbuild_preview_floor, smartbuild_preview_room_walls, smartbuild_preview_wall, smartbuild_preview_commit, smartbuild_preview_clear, smartbuild_pick_surface_at_screen, screenshot_capture (inzoi-game); look, get_scene_info, execute_blender_code (blender)

**Categorias CLI tocadas:** smartbuild-prototipado, camara-visual-y-capturas, partida-guardados-y-flujo, mundo-entidades-y-escena

**Wiki:** pages/wiki/cli/smartbuild/smartbuild-shape.md, pages/wiki/cli/smartbuild/smartbuild-import-and-place-mesh.md, pages/wiki/cli/smartbuild/smartbuild-set-wall-texture.md, pages/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen.md
## English version (EN)

**Goal:** build and texture quickly in the running game's world, with drag previews, without going through the ModKit.

**Level:** advanced. **Route:** live game (with optional Blender support).

**Steps:**

1. `game_get_state` (inzoi-game) — active session, no blocks.
2. `smartbuild_shape` (inzoi-game) — places primitives (cube/sphere/cylinder/cone/plane) at world coordinates. Expected: shape in scene.
3. (Optional, with Blender) `get_scene_info` / `look` (blender) to prepare or verify a model; `execute_blender_code` to export it to .glb/.gltf. VERIFIED LIVE (2026-10-09): `bpy.ops.export_scene.gltf(filepath=<path>, export_format='GLB')` works (Blender 5.2, with Draco and MeshOptimizer available).
4. `smartbuild_import_and_place_mesh` (inzoi-game) — imports a .glb/.gltf at runtime and places it in the world. Expected: mesh imported and placed.
5. Applying user textures (PNG/JPG):
   - Floor/ceiling: `smartbuild_set_floor_texture`.
   - Wall: `smartbuild_set_wall_texture`.
   - Object: `smartbuild_set_object_texture`.
6. Drag previews (temporary, unconfirmed):
   - `smartbuild_preview_wall` / `smartbuild_preview_floor` / `smartbuild_preview_room_walls` (all interior walls of a room) / `smartbuild_preview_object`.
   - `smartbuild_pick_surface_at_screen` — screen-pixel ray-cast to pick the surface under the cursor.
   - Confirm: `smartbuild_preview_commit` — the preview becomes a real change.
   - Discard: `smartbuild_preview_clear` — restores the preview snapshot.
7. `screenshot_capture` (inzoi-game) — visual verification of the result.

**Warnings (mandatory):**
- The 12 smartbuild.* commands are marked **[EXPERIMENTAL]** in the dump.
- VERIFIED LIVE (2026-10-09): smartbuild shapes do NOT survive a reload without saving — after a game.goto_lobby -> game.load cycle, `smartbuild_shape action=list` returned "0 shape(s) tracked" (the cube placed before the cycle was gone). Also the real interface is via `action` (list | spawn | spawn_at_screen | set_transform | set_color | destroy) with `Handle` to operate each shape, and `smartbuild_import_and_place_mesh` answers "import_started" (async, no final state queryable via CLI). Do not promise persistence without a prior save.
- smartbuild returns are not advertised by the server (to complete after live testing); the cited wiki pages document parameters and usage.

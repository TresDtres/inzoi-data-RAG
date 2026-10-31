---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [game_get_state, entity_get_possessed, entity_scan_characters, movement_teleport, movement_summon, movement_teleport_to, movement_go_home, movement_approach, camera_get_settings, camera_set_fov, camera_set_sensitivity, visual_free_camera, visual_first_person, movement_reset_zoi, screenshot_capture]
wiki_refs: [pages/wiki/cli/movement/movement-teleport.md, pages/wiki/cli/camera/camera-set-fov.md, pages/wiki/cli/visual/visual-free-camera.md]
dump_version: volcados 2026-10-09 sin cambios | inzoi-game 2024-11-05 (412)
generado: 2026-10-09
---

# WF-11: Sesion de soporte guiada: teleport, mover y camara

**Objetivo:** guiar a un usuario atascado o curioso ("tr'aeme aqui", "¿donde esta mi Zoi?", "pon la camara mas amplia") con comandos CLI de movimiento y camara.
**EN:** teleport a stuck or lost Zoi, find out where it is, or move the camera with CLI commands.
**Nivel:** principiante
**Ruta:** juego-en-vivo

**Pasos:**

1. `game_get_state` (inzoi-game) — partida activa y sin bloqueos. Resultado esperado: phase 'in_game'.
2. `entity_get_possessed` (inzoi-game) — entity_id del Zoi controlado (referencia para casi todo lo demas).
3. Localizar al objetivo: `entity_scan_characters` — personajes cercanos relativos a la direccion de camara (angle: negativo izquierda, positivo derecha, segun la instruccion del servidor). Resultado esperado: lista con entity_id. Si no aparece: girar la camara o ampliar el rango del escaneo.
4. Teleports (segun lo que pida el usuario):
   - Mover al poseido cerca de alguien: `movement_teleport_to`.
   - Traer a alguien cerca del poseido: `movement_summon`; en lote: `movement_summon_batch`.
   - Mover a un NPC cerca de otro: `movement_teleport_npc_to`.
   - Enviar a casa: `movement_go_home`.
   - Destino libre (solar o coordenadas): `movement_teleport`.
   Resultado esperado: el personaje aparece en el destino. Si no: verificar entity_id y que el destino sea valido.
5. Camara:
   - `camera_get_settings` — FOV, sensibilidad y rueda actuales (leer antes de cambiar).
   - `camera_set_fov` (tipico 60-120) y `camera_set_sensitivity` (0-100).
   - `visual_free_camera` (camara libre), `visual_first_person` (primera persona).
6. Caminar en vez de teleportar: `movement_approach` — el poseido camina hacia la entidad objetivo.
7. Recuperacion de un Zoi atascado: `movement_reset_zoi` — limpia interacciones en curso y en cola.
8. `screenshot_capture` — confirmacion visual del resultado para el usuario.

**Advertencias:**
- Todos los comandos de movimiento son activos (modifican el mundo); confirmar la intencion del usuario antes de teleportar.
- Retornos: los de movement/camera no estan declarados en su mayoria (no publicitado — completar tras prueba en vivo); los estados de camara si (camera.get_settings/get_view documentados en wiki).

**Herramientas:** game_get_state, entity_get_possessed, entity_scan_characters, movement_teleport, movement_summon, movement_teleport_to, movement_go_home, movement_approach, camera_get_settings, camera_set_fov, camera_set_sensitivity, visual_free_camera, visual_first_person, movement_reset_zoi, screenshot_capture (inzoi-game)

**Categorias CLI tocadas:** partida-guardados-y-flujo, mundo-entidades-y-escena, movimiento-teleport-y-grupos, camara-visual-y-capturas

**Wiki:** pages/wiki/cli/movement/movement-teleport.md, pages/wiki/cli/camera/camera-set-fov.md, pages/wiki/cli/visual/visual-free-camera.md
## English version (EN)

**Goal:** guide a stuck or curious user ("bring them here", "where is my Zoi?", "make the camera wider") with movement and camera CLI commands.

**Level:** beginner. **Route:** live game.

**Steps:**

1. `game_get_state` (inzoi-game) — active session and no blocks. Expected: phase 'in_game'.
2. `entity_get_possessed` (inzoi-game) — entity_id of the controlled Zoi (the reference for almost everything else).
3. Locate the target: `entity_scan_characters` — nearby characters relative to the camera direction (angle: negative left, positive right, per the server instructions). Expected: a list with entity_id. If missing: turn the camera or widen the scan range.
4. Teleports (depending on what the user asks):
   - Move the possessed near someone: `movement_teleport_to`.
   - Bring someone near the possessed: `movement_summon`; in batch: `movement_summon_batch`.
   - Move an NPC near another: `movement_teleport_npc_to`.
   - Send home: `movement_go_home`.
   - Free destination (lot or coordinates): `movement_teleport`.
   Expected: the character appears at the destination. If not: verify entity_id and that the destination is valid.
5. Camera:
   - `camera_get_settings` — current FOV, sensitivity and wheel (read before changing).
   - `camera_set_fov` (typically 60-120) and `camera_set_sensitivity` (0-100).
   - `visual_free_camera` (free camera), `visual_first_person` (first person).
6. Walk instead of teleporting: `movement_approach` — the possessed walks toward the target entity.
7. Recovering a stuck Zoi: `movement_reset_zoi` — clears in-progress and queued interactions.
8. `screenshot_capture` — visual confirmation of the result for the user.

**Warnings:**
- All movement commands are active (they modify the world); confirm the user's intent before teleporting.
- Returns: most movement/camera ones are undeclared (not advertised — to complete after live testing); camera states are (camera.get_settings/get_view documented in the wiki).

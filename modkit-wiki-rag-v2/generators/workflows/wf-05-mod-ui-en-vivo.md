---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [game_get_state, uimod_scaffold, uimod_write_file, uimod_read_file, uimod_list, uimod_list_disabled, uimod_mount, uimod_remount, uimod_apps, uimod_set_app, ui_get_blocking, ui_dismiss, screenshot_capture]
wiki_refs: [pages/modkit/project/uimod/03-workspace.chunks/part-002.md, pages/wiki/cli/uimod.md, pages/wiki/cli/uimod/uimod-mount.md, pages/wiki/cli/uimod/uimod-remount.md]
dump_version: volcados 2026-10-09 sin cambios | inzoi-game 2024-11-05 (412)
generado: 2026-10-09
---

# WF-05: Crear un mod de UI EN VIVO (juego en marcha)

**Objetivo:** crear una app de UI, editarla y verla funcionando dentro del juego en ejecucion.
**EN:** create a UI app, edit its files and see it working inside the running game (hot reload).
**Nivel:** principiante
**Ruta:** juego-en-vivo

**Pasos:**

1. `game_get_state` (inzoi-game) — confirma phase 'in_game'. La UI solo se puede ver con el juego en partida.
2. Decidir el destino (regla del volcado del scaffold): ¿mod UI nuevo (mod_name) o app nueva en un mod multi-app existente (mod_id + app_name)? Antes de decidir, `uimod_list` para enumerar los mods padre montados y preguntar al usuario explicitamente.
3. `uimod_scaffold` (inzoi-game) — crea el mod o la app: .uplugin, mod_manifest.json, ui/uimod_apps.json y la carpeta de la app (uimod_manifest.json, index.html, app.js, window.js). Resultado esperado: archivos en Documents/inZOI/Mods/InGame/{mod_id}/.
4. `uimod_read_file` (inzoi-game) — revisa index.html/app.js antes de editarlos. Si falla: path relativo a la raiz del mod.
5. `uimod_write_file` (inzoi-game) — escribe HTML/JS/CSS. Regla del volcado: antes de escribir cualquier inzoi.cli.execute(...) en app.js, confirmar el id y los parametros del comando (en la ruta ModKit existen modkit_list_uimod_cli_commands/modkit_get_uimod_cli_command; en la ruta en vivo se verifica con los comandos del propio juego: `cli_list` lista los 405 comandos con su nivel de acceso y `cli_help` devuelve id, categoria, params, aliases, returns y flag experimental — VERIFICADO EN VIVO 2026-10-09, no hace falta cli_catalog.json).
6. `uimod_mount` (inzoi-game) — monta el mod UI. Resultado esperado: mod montado desde Documents/inZOI/Mods/. Si falla: verificar mod_id y que los archivos existen (uimod_list).
7. `uimod_remount` (inzoi-game) — tras cada edicion, desmonta y remonta para recargar. Resultado esperado: cambios reflejados.
8. Verificacion en juego:
   - `uimod_apps` — estado enabled/mounted de cada app del mod.
   - `uimod_set_app` — activa/desactiva apps concretas si el mod es multi-app.
   - `ui_get_blocking` — detecta overlays que tapan la app (coach marks, popups); `ui_dismiss` los cierra.
   - `screenshot_capture` — captura para confirmar visualmente que la app renderiza.
9. `uimod_list` (inzoi-game) — verificacion final: el mod aparece montado con su agrupacion por padre.
10. Limpieza: `uimod_remount` no borra; para desmontar existe `uimod_unmount`. Los mods deshabilitados se ven con `uimod_list_disabled`.

**Advertencias:**
- `uimod_scaffold` exige decidir antes mod nuevo vs app en mod existente y preguntarlo al usuario (regla del volcado).
- El acceso al catalogo CLI (cli_catalog.json) desde la ruta en vivo no esta documentado en el volcado del juego: verificar en vivo.
- La ruta equivalente por el editor del ModKit (con validacion estatica modkit_validate_uimod y preview controlado) esta en WF-13.

**Herramientas:** game_get_state, uimod_scaffold, uimod_write_file, uimod_read_file, uimod_list, uimod_list_disabled, uimod_mount, uimod_remount, uimod_set_app, uimod_apps, ui_get_blocking, ui_dismiss, screenshot_capture (inzoi-game)

**Categorias CLI tocadas:** mods-de-ui, ui-del-juego, camara-visual-y-capturas, partida-guardados-y-flujo

**Wiki:** pages/modkit/project/uimod/03-workspace.chunks/part-002.md, pages/wiki/cli/uimod.md, pages/wiki/cli/uimod/uimod-mount.md, pages/wiki/cli/uimod/uimod-remount.md
## English version (EN)

**Goal:** create a UI app, edit it and see it working inside the running game.

**Level:** beginner. **Route:** live game.

**Steps:**

1. `game_get_state` (inzoi-game) — confirm phase 'in_game'. UI can only be seen with the game in a session.
2. Decide the target (scaffold dump rule): a new UI mod (mod_name) or a new app inside an existing multi-app mod (mod_id + app_name)? Before deciding, `uimod_list` to enumerate the mounted parent mods and ask the user explicitly.
3. `uimod_scaffold` (inzoi-game) — creates the mod or the app: .uplugin, mod_manifest.json, ui/uimod_apps.json and the app folder (uimod_manifest.json, index.html, app.js, window.js). Expected: files in Documents/inZOI/Mods/InGame/{mod_id}/.
4. `uimod_read_file` (inzoi-game) — review index.html/app.js before editing. If it fails: path must be relative to the mod root.
5. `uimod_write_file` (inzoi-game) — write HTML/JS/CSS. Dump rule: before writing any inzoi.cli.execute(...) in app.js, confirm the command id and parameters (on the ModKit route there are modkit_list_uimod_cli_commands/modkit_get_uimod_cli_command; on the live route verify with the game's own commands: `cli_list` lists the 405 commands with their access level and `cli_help` returns id, category, params, aliases, returns and the experimental flag — VERIFIED LIVE 2026-10-09, no need for cli_catalog.json).
6. `uimod_mount` (inzoi-game) — mount the UI mod. Expected: mod mounted from Documents/inZOI/Mods/. If it fails: verify mod_id and that the files exist (uimod_list).
7. `uimod_remount` (inzoi-game) — after each edit, unmount and remount to reload. Expected: changes reflected.
8. In-game verification:
   - `uimod_apps` — enabled/mounted state of each app in the mod.
   - `uimod_set_app` — enable/disable specific apps if the mod is multi-app.
   - `ui_get_blocking` — detect overlays covering the app (coach marks, popups); `ui_dismiss` closes them.
   - `screenshot_capture` — capture to visually confirm the app renders.
9. `uimod_list` (inzoi-game) — final check: the mod appears mounted, grouped by parent.
10. Cleanup: `uimod_remount` does not delete; to unmount use `uimod_unmount`. Disabled mods show with `uimod_list_disabled`.

**Warnings:**
- `uimod_scaffold` requires deciding new mod vs app in an existing mod first and asking the user (dump rule).
- Access to the CLI catalog (cli_catalog.json) from the live route is not documented in the game dump: verify live.
- The equivalent route through the ModKit editor (with static validation modkit_validate_uimod and controlled preview) is in WF-13.

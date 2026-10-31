---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [modkit_status, modkit_list_projects, modkit_list_workspaces, modkit_inspect_workspace, modkit_validate_workspace, modkit_package, modkit_import_mesh, modkit_import_texture, modkit_save]
wiki_refs: []
dump_version: inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31) | editor verificado en pantalla 2026-10-09 (Utility -> Fix Up Mod Project) | conocimiento de migracion aportado por modder 2026-10-09
generado: 2026-10-31
---

# WF-20: Mi mod dejo de funcionar tras una actualizacion del juego (migracion)

**Objetivo:** recuperar un mod propio (proyecto del ModKit o paquete de CurseForge) que dejo de aplicar o dar errores despues de un parche del juego, distinguiendo el rompimiento por MIGRACION (no es bug del juego) del bug real, y aplicando la ruta correcta: fix-up automatico, re-empaquetado, o recreacion si hubo salto de motor.
**EN:** my mod stopped working after a game update — migration breakage, not a game bug; recovery path: editor Fix Up Mod Project (Material/MPC reference fix-ups), re-package, or recreate the mod after engine jumps (UE 5.5.4 to 5.6.1 broke many CurseForge bakes and mods had to be recreated).
**Nivel:** intermedio
**Ruta:** editor

**El modelo mental (por que pasa):** cuando el juego actualiza, los assets compilados contra la version anterior pueden dejar de resolver referencias (materiales, MPC, rutas de contenido) y el mod falla al aplicar ("Failed to apply mods"), desaparece del navegador o da errores en el proyecto del ModKit. NO es un bug del juego: es rompimiento por migracion. La regla practica: cambio menor de version -> el fix-up automatico y re-empaquetar suelen bastar; salto de MOTOR o cambio grande de data -> asumir que hay que recrear el mod.

**Pasos:**

1. Confirmar el sintoma y descartar bug: el mod "failed to apply", no aparece en el navegador de mods del juego, o el proyecto da errores de referencias tras un parche. Si el problema lo sufre un mod DESCARGADO (jugador): no hay nada que reparar localmente — el modder debe publicar la version migrada; volver a descargar cuando se actualice (y si sigue roto tras dias, revisar la seccion 'mods-rotos-por-migracion' de pages/local/forum-bugs-pendientes.md: es migracion, no bug).
2. `modkit_status` y `modkit_list_projects` (inzoi-modkit) — el puente del editor responde y el proyecto del mod existe. Verificar contra la version nueva del juego: los patch notes oficiales (playinzoi.com/en/news; capturados en state/forum-raw/official/patch-notes.jsonl) dicen si el update cambio version menor o de motor.
3. **Fix Up Mod Project (editor, VERIFICADO EN PANTALLA 2026-10-09):** con el plugin del mod seleccionado en el editor del ModKit: menu Utility -> Fix Up Mod Project — "Run various automated fix-up tasks (e.g. Material/MPC references) for the selected mod plugin project". Es un paso MANUAL del editor (no expuesto como herramienta MCP del volcado): ejecutarlo sobre el proyecto afectado tras cada update que rompa referencias.
4. `modkit_list_workspaces` y `modkit_inspect_workspace` (inzoi-modkit) — verificar que los workspaces del proyecto siguen sanos y que campos requeridos no quedaron vacios por el update.
5. `modkit_validate_workspace` y `modkit_save` (inzoi-modkit) — validacion formal y persistencia del proyecto corregido.
6. Re-empaquetar y republicar: `modkit_package` y, si el mod esta en CurseForge, `modkit_cf_upload_mod_file` / `modkit_cf_publish` (WF-03). Para los jugadores que ya lo tienen instalado: la nueva version sustituye a la rota al actualizar.
7. Si el fix-up NO basta (salto de motor, p.ej. UE 5.5.4 -> 5.6.1): VERIFICADO POR LOS MODDERS (2026-10-09): en ese salto muchos mods no pasaron el bake de CurseForge y hubo que RECREARLOS — proyecto nuevo, re-importar los assets (`modkit_import_mesh`, `modkit_import_texture`), reconstruir materiales (WF-16), rehacer los workflows del item (WF-08 para el workspace) y volver a publicar. No insistir en arreglos sobre un proyecto cuyo bake ya no pasa: recrear sale mas barato.

**Advertencias:**
- Flujo con escrituras sobre el propio proyecto: hacer backup de la carpeta del plugin antes del fix-up/recreacion (y recordar que `modkit_delete_project` deja residuos en disco; ver WF-08).
- Los "mods rotos tras actualizar" se clasifican como 'no-es-bug: mods-rotos-por-migracion' en pages/local/forum-bugs-pendientes.md — no alimentan el informe-devs ni trampas del corpus.
- La solidez del fix-up depende de la magnitud del cambio: tras cada parche grande, re-verificar contra el juego en marcha (montar el mod y probar).

**Herramientas:** modkit_status, modkit_list_projects, modkit_list_workspaces, modkit_inspect_workspace, modkit_validate_workspace, modkit_package, modkit_import_mesh, modkit_import_texture, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna (el fix-up es un paso manual del editor; el empaquetado y publicacion van por WF-03)

**Wiki:** ninguna (paso del editor no documentado en el snapshot de la wiki; verificado en pantalla 2026-10-09)

## English version (EN)

**Goal:** recover your own mod (ModKit project or CurseForge package) that stopped applying or erroring after a game patch, telling migration breakage (NOT a game bug) apart from a real bug, and applying the right route: automatic fix-up, re-package, or full recreation after an engine jump.

**The mental model (why it happens):** when the game updates, assets compiled against the previous version can stop resolving references (materials, MPC, content paths) and the mod fails to apply, disappears from the mod browser, or errors in the ModKit project. It is NOT a game bug: it is migration breakage. Rule of thumb: minor version change -> automatic fix-up plus re-package usually suffices; ENGINE jump or big data change -> assume the mod must be recreated.

**Steps:**

1. Confirm the symptom and rule out a bug: the mod "failed to apply", does not show in the in-game mod browser, or the project throws reference errors after a patch. If it is a DOWNLOADED mod (player side): nothing to fix locally — the modder must publish the migrated version; re-download when updated (and if still broken days later, see the 'mods-rotos-por-migracion' section of pages/local/forum-bugs-pendientes.md: migration, not a bug).
2. `modkit_status` and `modkit_list_projects` (inzoi-modkit) — the editor bridge answers and the mod's project exists. Check against the new game version: official patch notes (playinzoi.com/en/news; captured in state/forum-raw/official/patch-notes.jsonl) say whether the update changed a minor version or the engine.
3. **Fix Up Mod Project (editor, VERIFIED ON SCREEN 2026-10-09):** with the mod plugin selected in the ModKit editor: Utility menu -> Fix Up Mod Project — "Run various automated fix-up tasks (e.g. Material/MPC references) for the selected mod plugin project". This is a MANUAL editor step (not exposed as an MCP tool in the dump): run it on the affected project after every update that breaks references.
4. `modkit_list_workspaces` and `modkit_inspect_workspace` (inzoi-modkit) — verify the project's workspaces are still healthy and no required fields were emptied by the update.
5. `modkit_validate_workspace` and `modkit_save` (inzoi-modkit) — formal validation and persistence of the fixed project.
6. Re-package and republish: `modkit_package` and, if the mod is on CurseForge, `modkit_cf_upload_mod_file` / `modkit_cf_publish` (WF-03). For players who already installed it: the new version replaces the broken one on update.
7. If the fix-up is NOT enough (engine jump, e.g. UE 5.5.4 -> 5.6.1): VERIFIED BY MODDERS (2026-10-09): in that jump many mods failed the CurseForge bake and had to be RECREATED — new project, re-import assets (`modkit_import_mesh`, `modkit_import_texture`), rebuild materials (WF-16), redo the item's workflows (WF-08 for the workspace) and publish again. Do not insist on patching a project whose bake no longer passes: recreating is cheaper.

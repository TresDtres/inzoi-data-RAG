---
source: mcp-tools
categoria: workflow
nivel: avanzado
experimental: true
tools: [game_get_state, game_list_saves, game_continue, game_load, gameplay_set_autosave, gameplay_get_settings, game_new_game, game_cancel_flow, game_goto_lobby, game_move_in, game_list_move_in_sites]
wiki_refs: [pages/wiki/cli/gameplay/gameplay-set-autosave.md]
dump_version: volcados 2026-10-09 sin cambios | inzoi-game 2024-11-05 (412)
generado: 2026-10-09
---

# WF-12: Guardados y flujo de partida (experimental)

**Objetivo:** saber que se puede hacer con los guardados y el flujo de partida por CLI, y que riesgos tiene hacerlo hoy.
**EN:** what can be done today with saves and game flow over CLI, and what the risks are (explicit slot loading, game_continue ignores autosaves).
**Nivel:** avanzado
**Ruta:** juego-en-vivo

**Pasos:**

1. `game_get_state` (inzoi-game) — sondeo maestro: fase (boot, lobby, loading, in_game...), bloqueos y next_hint. Resultado esperado: estado consistente. Es el unico comando de este flujo que la instruccion del servidor designa como poll universal.
2. `game_list_saves` (inzoi-game) — slots ordenados por saved_time descendente. Resultado esperado: un objeto por slot. Sirve para elegir slot antes de cargar.
3. `game_continue` (inzoi-game) — carga el guardado MANUAL mas reciente (NO el autosave mas nuevo; verificado en vivo 2026-10-09, V11). Resultado esperado: {accepted, folder, file, slot} + carga asincrona.
4. `game_load` (inzoi-game) — carga un slot concreto. Resultado esperado: devuelve al iniciar la carga (asincrono); sondear `game_get_state` hasta estar en partida. Si no avanza: el slot puede estar corrupto (el criterio de 'broken' lo documenta la propia lista de saves).
5. `gameplay_set_autosave` (inzoi-game) — activa/desactiva autosave y fija el intervalo (ambos parametros juntos, segun el volcado). Verificar con `gameplay_get_settings`.
6. (Solo flujo automatizado de nueva partida, todos experimentales):
   - `game_new_game` — partida nueva totalmente automatica: Zoi aleatorio, familia, ciudad y lote.
   - `game_list_move_in_sites` + `game_move_in` — mudanza del hogar recien registrado.
   - `game_cancel_flow` — cancela el flujo automatico si el usuario cambia de opinion: si cancelas la creacion automatica de partida nueva a medias, este comando corta el flujo (EN hook: what happens if you cancel the automatic new game creation halfway).
   - `game_goto_lobby` — vuelve al menu principal sin dialogos.
   La secuencia exacta la dicta next_hint de `game_get_state` (boot - lobby - new_game - move_in - in_game). VERIFICADO EN VIVO (2026-10-09), con sorpresas: (1) `game_goto_lobby` NO guarda (respuesta: {accepted:true, saving:false}) y responde error literal "Already in lobby" si ya esta; (2) SORPRESA: `game_continue` cargo el guardado MANUAL mas reciente, NO el autosave mas reciente (el volcado decia 'AutoSave slots included'); (3) `game_load` con Folder/File explicitos restaura la partida exacta; (4) `game_new_game` arranca el flujo automatizado y `game_cancel_flow` cancela SIN ROLLBACK: deja el juego donde paro (quedo en phase character_customize) y el propio texto indica la recuperacion (game.goto_lobby o game.new_game force=true). Todas las transiciones son asincronas y su respuesta incluye la instruccion de polling.

**Advertencias (obligatorias):**

> **ADVERTENCIA VERIFICADA EN VIVO (2026-10-09):** (1) `game_continue` carga el guardado MANUAL mas reciente, NO el autosave mas nuevo — para volver a un autosave concreto usar `game_load` con Folder/File explicitos. (2) `game_cancel_flow` NO hace rollback: deja el juego donde paro el flujo (observado: phase character_customize); recuperacion con `game_goto_lobby` + `game_load`. (3) `game_goto_lobby` NO guarda la partida ({accepted:true, saving:false}). ver pages/local/verificaciones-2026-10-09.md (V5, V11, V12).
- Los 10 comandos game.* estan marcados **[EXPERIMENTAL]** en el volcado: comportamiento sujeto a cambio y sin documentacion oficial en la wiki.
- Riesgos documentados o razonables: `game_load` es asincrono (no reentrar a ciegas), `game_goto_lobby` cierra la sesion sin confirmacion, y `game_cancel_flow` aborta el flujo automatico en curso. Perder progreso no guardado es el riesgo principal de todo el grupo.
- `game_new_game` crea un Zoi y un hogar aleatorios: no hay vuelta atras documentada salvo cargar un guardado anterior.

**Herramientas:** game_get_state, game_list_saves, game_continue, game_load, gameplay_set_autosave, gameplay_get_settings, game_new_game, game_cancel_flow, game_goto_lobby, game_move_in, game_list_move_in_sites (inzoi-game)

**Categorias CLI tocadas:** partida-guardados-y-flujo, ajustes-rendimiento-y-audio (gameplay)

**Wiki:** pages/wiki/cli/gameplay/gameplay-set-autosave.md (ningun comando game.* tiene pagina en el snapshot)
## English version (EN)

**Goal:** know what can be done today with saves and game flow over CLI, and what the risks are.

**Level:** advanced. **Route:** live game.

**Steps:**

1. `game_get_state` (inzoi-game) — master poll: phase (boot, lobby, loading, in_game...), blocks and next_hint. Expected: consistent state. It is the only command in this flow the server instructions designate as the universal poll.
2. `game_list_saves` (inzoi-game) — slots ordered by saved_time descending. Expected: one object per slot. Used to pick a slot before loading.
3. `game_continue` (inzoi-game) — loads the most recent MANUAL save (NOT the newest autosave; verified live 2026-10-09, V11). Expected: {accepted, folder, file, slot} + async load.
4. `game_load` (inzoi-game) — loads a concrete slot. Expected: returns when the load starts (async); poll `game_get_state` until in session. If it does not advance: the slot may be corrupt (the 'broken' criterion is documented by the saves list itself).
5. `gameplay_set_autosave` (inzoi-game) — enables/disables autosave and sets the interval (both parameters together, per the dump). Verify with `gameplay_get_settings`.
6. (New-game automated flow only, all experimental):
   - `game_new_game` — fully automatic new game: random Zoi, family, city and lot.
   - `game_list_move_in_sites` + `game_move_in` — moving in the freshly registered household.
   - `game_cancel_flow` — cancels the automatic flow if the user changes their mind.
   - `game_goto_lobby` — back to the main menu without dialogs.
   The exact sequence is dictated by `game_get_state`'s next_hint (boot - lobby - new_game - move_in - in_game). VERIFIED LIVE (2026-10-09), with surprises: (1) `game_goto_lobby` does NOT save (response: {accepted:true, saving:false}) and answers the literal error "Already in lobby" if already there; (2) SURPRISE: `game_continue` loaded the most recent MANUAL save, NOT the most recent autosave (the dump said 'AutoSave slots included'); (3) `game_load` with explicit Folder/File restores the exact session; (4) `game_new_game` starts the automated flow and `game_cancel_flow` cancels WITHOUT ROLLBACK: it leaves the game where the flow stopped (observed: phase character_customize) and its own text indicates recovery (game.goto_lobby or game.new_game force=true). All transitions are async and their response includes the polling instruction.

**Warnings (mandatory):**

> **LIVE-VERIFIED WARNING (2026-10-09):** (1) `game_continue` loads the most recent MANUAL save, NOT the newest autosave — to return to a concrete autosave use `game_load` with explicit Folder/File. (2) `game_cancel_flow` does NOT roll back: it leaves the game where the flow stopped (observed: phase character_customize); recover with `game_goto_lobby` + `game_load`. (3) `game_goto_lobby` does NOT save the session ({accepted:true, saving:false}). See pages/local/verificaciones-2026-10-09.md (V5, V11, V12).
- The 10 game.* commands are marked **[EXPERIMENTAL]** in the dump: behavior subject to change and without official wiki documentation.
- Documented or reasonable risks: `game_load` is async (do not re-enter blindly), `game_goto_lobby` closes the session without confirmation, and `game_cancel_flow` aborts the in-course automatic flow. Losing unsaved progress is the group's main risk.
- `game_new_game` creates a random Zoi and household: there is no documented way back except loading an earlier save.

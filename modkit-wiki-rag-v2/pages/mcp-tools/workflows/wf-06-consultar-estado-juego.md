---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [game_get_state, entity_get_possessed, entity_get_character_info, stat_get_all, skill_get_all, relationships_list, relationships_get_value, contacts_get_all, emotion_get_current, household_list, household_get_members, environment_get_state, environment_get_time]
wiki_refs: [pages/wiki/cli/entity/entity-get-character-info.md, pages/wiki/cli/stat/stat-get-all.md, pages/wiki/cli/relationships/relationships-list.md, pages/wiki/cli/household/household-list.md]
dump_version: volcados 2026-10-09 sin cambios | inzoi-game 2024-11-05 (412)
generado: 2026-10-09
---

# WF-06: Consultar el estado del juego por CLI y explicarlo al usuario

**Objetivo:** responder preguntas del tipo "¿como esta mi Zoi?" (stats, habilidades, relaciones, emociones) y "¿que hora/dia es?" leyendo el estado por CLI sin modificar nada.
**EN:** answer questions like "how is my Zoi doing?" (stats, skills, relationships, emotions) and "what time/day is it?" by reading game state over CLI, read-only.
**Nivel:** principiante
**Ruta:** juego-en-vivo

**Pasos:**

1. `game_get_state` (inzoi-game) — contexto global: phase, mapa, si hay algo bloqueando la entrada. Resultado esperado: phase 'in_game' y blocking.blocked=false. Si blocked=true: atender los bloqueos (ui_get_blocking) antes de seguir.
2. `entity_get_possessed` (inzoi-game) — entity_id del Zoi controlado; casi todas las consultas posteriores lo usan. Resultado esperado: un entity_id.
3. `entity_get_character_info` (inzoi-game) — ficha del Zoi: nombre, genero, edad, hogar. Resultado esperado: datos del personaje (wiki documenta la forma de retorno).
4. `stat_get_all` (inzoi-game) — todos los stats con valor, min, max, pct y noDecay del personaje. Resultado esperado: coleccion de stats. Nota: el volcado no documenta un getter directo de "necesidades" (los comandos needs son freeze/set); VERIFICADO CON SORPRESA EN VIVO (2026-10-09): `stat_get_all` DEVUELVE las necesidades — Hunger (Hambre), Cleanliness (Higiene), Sleep (Sueno), Toilet (Vejiga), Fun (Diversion), Society (Social), Energy (Energia), ademas de Admit, Weathering, Karma y Homesick, con nombres localizados en stat_names.
5. `skill_get_all` (inzoi-game) — habilidades con nivel actual, maximo y nombre localizado.
6. `relationships_list` (inzoi-game) — todas las relaciones del personaje con cada pareja; con un id concreto, `relationships_get_value` para el valor puntual.
7. `contacts_get_all` (inzoi-game) — contactos del personaje poseido con estado de bloqueo.
8. `emotion_get_current` (inzoi-game) — tipo y nivel de emocion actual.
9. `household_list` y `household_get_members` (inzoi-game) — hogar(s) con miembro y residencia. Nota: no existe getter documentado del dinero del hogar (currency_add_money solo anade); VERIFICADO EN VIVO (2026-10-09): NO existe ruta de lectura del dinero del hogar — data_list_tables no contiene tabla de hogar/dinero (error literal: "Unknown DataTable alias: 'Household'") y household_list no expone dinero.
10. `environment_get_state` / `environment_get_time` (inzoi-game) — hora, dia de la semana y clima, para contextualizar la respuesta.

**Advertencias:**
- Todos los comandos de este flujo son consultivos (ver); ninguno modifica el mundo.
- Verificado en vivo 2026-10-09: las necesidades SI se leen con stat_get_all; el dinero del hogar NO tiene getter (sin tabla en data.list_tables).

**Herramientas:** game_get_state, entity_get_possessed, entity_get_character_info, stat_get_all, skill_get_all, relationships_list, relationships_get_value, contacts_get_all, emotion_get_current, household_list, household_get_members, environment_get_state, environment_get_time (inzoi-game)

**Categorias CLI tocadas:** partida-guardados-y-flujo, mundo-entidades-y-escena, estado-necesidades-y-ciclo-vital, relaciones-familia-y-social, tiempo-clima-y-entorno

**Wiki:** pages/wiki/cli/entity/entity-get-character-info.md, pages/wiki/cli/stat/stat-get-all.md, pages/wiki/cli/relationships/relationships-list.md, pages/wiki/cli/household/household-list.md
## English version (EN)

**Goal:** answer questions like "how is my Zoi doing?" (stats, skills, relationships, emotions) and "what time/day is it?" by reading game state over CLI without changing anything.

**Level:** beginner. **Route:** live game.

**Steps:**

1. `game_get_state` (inzoi-game) — global context: phase, map, whether anything blocks input. Expected: phase 'in_game' and blocking.blocked=false. If blocked=true: handle the blockers (ui_get_blocking) before continuing.
2. `entity_get_possessed` (inzoi-game) — entity_id of the controlled Zoi; almost every later query uses it. Expected: one entity_id.
3. `entity_get_character_info` (inzoi-game) — the Zoi's card: name, gender, age, household. Expected: character data (the wiki documents the return shape).
4. `stat_get_all` (inzoi-game) — all stats with value, min, max, pct and noDecay for the character. Expected: a stats collection. Note: the dump does not document a direct "needs" getter (the needs commands are freeze/set); VERIFIED WITH SURPRISE LIVE (2026-10-09): `stat_get_all` DOES return the needs — Hunger, Cleanliness, Sleep, Toilet, Fun, Society, Energy, plus Admit, Weathering, Karma and Homesick, with localized names in stat_names.
5. `skill_get_all` (inzoi-game) — skills with current level, maximum and localized name.
6. `relationships_list` (inzoi-game) — all the character's relationships with each pair; with a concrete id, `relationships_get_value` for the point value.
7. `contacts_get_all` (inzoi-game) — the possessed character's contacts with blocking state.
8. `emotion_get_current` (inzoi-game) — current emotion type and level.
9. `household_list` and `household_get_members` (inzoi-game) — household(s) with member and residence. Note: there is no documented household money getter (currency_add_money only adds); VERIFIED LIVE (2026-10-09): NO household money read route exists — data_list_tables contains no household/money table (literal error: "Unknown DataTable alias: 'Household'") and household_list exposes no money.
10. `environment_get_state` / `environment_get_time` (inzoi-game) — hour, weekday and weather, to give context to the answer.

**Warnings:**
- Every command in this flow is read-only; none modifies the world.
- Verified live 2026-10-09: needs CAN be read with stat_get_all; household money has NO getter (no table in data.list_tables).

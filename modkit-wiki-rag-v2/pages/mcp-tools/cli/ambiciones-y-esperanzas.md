---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)
generado: 2026-10-15
categoria: cli-intencion
tools: [ambition_play, ambition_complete, ambition_get, hope_set_config, hope_get_config, hope_set_expire, hope_complete, hope_list, hope_force_update, hope_set_fix, hope_deselect_all, hope_deselect, hope_select]
wiki_refs: [pages/wiki/cli/ambition/ambition-complete.md, pages/wiki/cli/ambition/ambition-get.md, pages/wiki/cli/ambition/ambition-play.md, pages/wiki/cli/hope/hope-complete.md, pages/wiki/cli/hope/hope-deselect-all.md, pages/wiki/cli/hope/hope-deselect.md, pages/wiki/cli/hope/hope-force-update.md, pages/wiki/cli/hope/hope-get-config.md, pages/wiki/cli/hope/hope-list.md, pages/wiki/cli/hope/hope-select.md, pages/wiki/cli/hope/hope-set-config.md, pages/wiki/cli/hope/hope-set-expire.md, pages/wiki/cli/hope/hope-set-fix.md]
---

## Ambiciones y esperanzas

13 comandos CLI del servidor inzoi-game para esta intencion. Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.

**EN:** ambitions and desires: CLI commands for current ambition and milestones.

| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |
|---|---|---|---|---|---|
| ambition_play | `ambition.play(entity_id, ambition_item_id, guard)` | Inicia (fija) un elemento de ambicion concreto en el personaje. | [CLI: ambition.play] Starts (sets) a specific ambition item on the target character. Forced by default (valid id only); pass guard=true to require playability (age/condition/not-completed/not-already-playing). | no publicitado — completar tras prueba en vivo | activo |
| ambition_complete | `ambition.complete(entity_id, ambition_item_id)` | Completa al instante un elemento de ambicion del personaje. | [CLI: ambition.complete] Instantly completes a specific ambition item on the target character (cheat; no-op in shipping builds). Use ambition.get to find item ids. | no publicitado — completar tras prueba en vivo | activo |
| ambition_get | `ambition.get(entity_id)` | Devuelve el estado de ambicion del personaje: item en curso y completados. | [CLI: ambition.get] Returns the target character's ambition state: currently playing ambition item, current step, completed count, all-completed flag, and playable ambition item ids. | wiki: Returns a JSON object with the following fields: | consultivo |
| hope_set_config | `hope.set_config(max_hope_size, auto_select_hope_limit, random_select_cooltime, deselect_cooltime, reselect_cooltime)` | Fija la configuracion GLOBAL de generacion de esperanzas (unidades: segundos). | [CLI: hope.set_config] Sets the GLOBAL hope generation config (units: seconds). Affects all characters. random_select_cooltime controls auto-select cadence; auto_select_hope_limit/max_hope_size control how many hopes fill. (RefreshInterval/RandomSelectRangeSec are non-functional and intentionally not exposed.) | no publicitado — completar tras prueba en vivo | activo |
| hope_get_config | `hope.get_config()` | Devuelve la configuracion GLOBAL de generacion de esperanzas (segundos). | [CLI: hope.get_config] Returns the GLOBAL hope generation config (seconds): max slots, auto-select limit, random-select cooldown, de-select/re-select cooldown. | wiki: Returns a JSON object with the following fields: | consultivo |
| hope_set_expire | `hope.set_expire(entity_id, hope_id, remain_seconds)` | Trampaa de prueba: sobrescribe el tiempo restante de una esperanza seleccionada. | [CLI: hope.set_expire] Cheat/test: directly overrides a currently-selected hope's remaining lifetime in in-game seconds, bypassing the hope's table LifeTimeSecond and the GLOBAL deselect_cooltime config (which only apply at selection time). Also unfixes the hope so it can expire. The hope must be selected (see hope.list). | no publicitado — completar tras prueba en vivo | activo |
| hope_complete | `hope.complete(entity_id, hope_id)` | Completa al instante una esperanza seleccionada del personaje. | [CLI: hope.complete] Instantly completes a currently-selected hope on the target character, running its completion reward script and firing the completion popup. The hope must be selected (see hope.list). | no publicitado — completar tras prueba en vivo | activo |
| hope_list | `hope.list(entity_id)` | Devuelve las esperanzas (deseos) seleccionadas del personaje. | [CLI: hope.list] Returns the target character's currently selected hopes (wishes): hope_id, expire tick, fixed flag. | wiki: Returns a JSON object with the following fields: | consultivo |
| hope_force_update | `hope.force_update(entity_id)` | Fuerza un refresco/revaluacion de esperanzas del personaje. | [CLI: hope.force_update] Forces a hope refresh/re-evaluation on the target character. | no publicitado — completar tras prueba en vivo | activo |
| hope_set_fix | `hope.set_fix(entity_id, hope_id, fixed)` | Fija (pinea) o libera una esperanza del personaje. | [CLI: hope.set_fix] Pins or unpins a hope on the target character. fixed=true to pin, false to unpin. | no publicitado — completar tras prueba en vivo | activo |
| hope_deselect_all | `hope.deselect_all(entity_id)` | Deselecciona todas las esperanzas del personaje. | [CLI: hope.deselect_all] Deselects all hopes on the target character. | no publicitado — completar tras prueba en vivo | activo |
| hope_deselect | `hope.deselect(entity_id, slot_index)` | Deselecciona una esperanza por indice de slot. | [CLI: hope.deselect] Deselects a hope by slot index on the target character. | no publicitado — completar tras prueba en vivo | activo |
| hope_select | `hope.select(entity_id, hope_id, Force)` | Selecciona una esperanza del personaje (force=true ignora los limites). | [CLI: hope.select] Selects a hope on the target character. Use force=true to override limits. | no publicitado — completar tras prueba en vivo | activo |

### Enlaces a la wiki oficial

- [pages/wiki/cli/ambition/ambition-complete.md](pages/wiki/cli/ambition/ambition-complete.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-complete
- [pages/wiki/cli/ambition/ambition-get.md](pages/wiki/cli/ambition/ambition-get.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-get
- [pages/wiki/cli/ambition/ambition-play.md](pages/wiki/cli/ambition/ambition-play.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-play
- [pages/wiki/cli/hope/hope-complete.md](pages/wiki/cli/hope/hope-complete.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete
- [pages/wiki/cli/hope/hope-deselect-all.md](pages/wiki/cli/hope/hope-deselect-all.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all
- [pages/wiki/cli/hope/hope-deselect.md](pages/wiki/cli/hope/hope-deselect.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect
- [pages/wiki/cli/hope/hope-force-update.md](pages/wiki/cli/hope/hope-force-update.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update
- [pages/wiki/cli/hope/hope-get-config.md](pages/wiki/cli/hope/hope-get-config.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config
- [pages/wiki/cli/hope/hope-list.md](pages/wiki/cli/hope/hope-list.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list
- [pages/wiki/cli/hope/hope-select.md](pages/wiki/cli/hope/hope-select.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select
- [pages/wiki/cli/hope/hope-set-config.md](pages/wiki/cli/hope/hope-set-config.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config
- [pages/wiki/cli/hope/hope-set-expire.md](pages/wiki/cli/hope/hope-set-expire.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire
- [pages/wiki/cli/hope/hope-set-fix.md](pages/wiki/cli/hope/hope-set-fix.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix

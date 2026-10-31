---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)
generado: 2026-10-15
categoria: cli-intencion
experimental: true
tools: [system_get_info, system_get_paths, event_describe, event_list, cli_help, cli_list]
wiki_refs: [pages/wiki/cli/cli/cli-help.md, pages/wiki/cli/cli/cli-list.md, pages/wiki/cli/event/event-describe.md, pages/wiki/cli/event/event-list.md]
---

## Diagnostico y sistema

6 comandos CLI del servidor inzoi-game para esta intencion. Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.

**EN:** diagnostics and system: cli.list all console commands (407 in the dump, with access level), cli.help for one command's detail, system.get_info game version.

Nota: cli.list lista todos los comandos de consola disponibles (407 en el volcado, con nivel de acceso) y cli.help muestra el detalle de uno concreto; system.get_info devuelve la version del juego.

| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |
|---|---|---|---|---|---|
| system_get_info | `system.get_info()` | Devuelve la version del juego y el UID mostrados en Opciones. | [CLI: system.get_info] Returns the game version string and game UID shown in the Options panel. game_version is the same BUILD_STRING the Version row displays (for example '20260818.8192.W.EDITOR.main'). game_uid is the same GPP user id the Game UID row shows and copies to the clipboard. game_uid is an empty string until GPP login has filled it in (the Options panel then shows a blank UID as well). | sin documentación oficial — el volcado es única fuente; requiere verificación en vivo | consultivo |
| **system_get_paths** | `system.get_paths()` | Devuelve las rutas del proceso del juego en ejecucion. **[EXPERIMENTAL]** | [EXPERIMENTAL] [CLI: system.get_paths] Returns the filesystem locations of the running game process: where its binary lives, where it writes logs, saved data and screenshots, plus the build configuration and engine version. Every path is absolute and uses forward slashes, resolved from the live process rather than guessed. Use this instead of hardcoding paths: the log and saved directories move with the build configuration (the editor writes under the project's own Saved folder, a staged Development build writes under the packaged folder, and an installed Shipping build is redirected to the per-user application data directory), and the log filename itself can be overridden with -log= on the command line. log_file is the exact file currently being appended to, so an external tool can tail it directly. screenshot_dir is where screenshot.capture drops files when given a bare filename. | sin documentación oficial — el volcado es única fuente; requiere verificación en vivo | consultivo |
| event_describe | `event.describe(Name)` | Devuelve el esquema del payload de un evento de juego concreto. | [CLI: event.describe] Returns the payload schema of a specific game event | wiki: Returns a JSON object with the following fields: | consultivo |
| event_list | `event.list()` | Devuelve todos los eventos de juego registrados con sus esquemas de payload. | [CLI: event.list] Returns all registered game events with their payload schemas | wiki: Returns a JSON array; each element is an object with the following fields: | consultivo |
| cli_help | `cli.help(Command)` | Muestra informacion detallada, parametros y alias de un comando CLI concreto. | [CLI: cli.help] Shows detailed info, params, and aliases for a specific CLI command. | no publicitado — completar tras prueba en vivo | consultivo |
| cli_list | `cli.list(Category)` | Lista los comandos CLI registrados, con filtro por categoria opcional. | [CLI: cli.list] Lists registered CLI commands. Optionally filter by category. | wiki: Returns a JSON array; each element is an object with the following fields: | consultivo |

### Enlaces a la wiki oficial

- [pages/wiki/cli/cli/cli-help.md](pages/wiki/cli/cli/cli-help.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/cli/cli-help
- [pages/wiki/cli/cli/cli-list.md](pages/wiki/cli/cli/cli-list.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/cli/cli-list
- [pages/wiki/cli/event/event-describe.md](pages/wiki/cli/event/event-describe.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/event/event-describe
- [pages/wiki/cli/event/event-list.md](pages/wiki/cli/event/event-list.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/event/event-list

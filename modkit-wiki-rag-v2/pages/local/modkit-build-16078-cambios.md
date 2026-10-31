---
source: local
title: "ModKit build 16078 (2026-10-15): ficha de cambios — 125 tools (+4), tools.json fuera, docs Lua v2, AGENTS.md por workspace"
generado: 2026-10-15
---

# ModKit build 16078 — ficha de cambios (2026-10-15)

El ModKit se actualizó el 2026-10-15 08:26/08:30 ANTES del parche del juego
(el juego sigue en exe `20260915.15331.W-325961` — su parche llega hoy según
el calendario oficial). Estado de la revalidación: ficha de build del ModKit
ANTERIOR (15275, 121 tools) queda SUPERADA por esta.

## Cambios verificados [VERIFIED]

| Qué | Antes (15275) | Ahora (16078) |
|---|---|---|
| `Build.txt` | 15275 | **16078** (15-oct 08:26) |
| `tools/list` vivo | 121 tools | **125 tools** |
| Tools nuevas | — | `modkit_discard`, `modkit_set_vehicle_owned_object`, `modkit_set_vehicle_seat_anim`, `modkit_set_vehicle_slot_data` |
| Tools eliminadas | — | ninguna |
| `Data/Tools/mcp/modkit/tools.json` | 121 entradas (inventario estático) | **ELIMINADO** — el inventario estático desaparece; solo queda `tools/list` en vivo |
| `cli_catalog.json` | 542.705 B (6-oct) | 543.394 B (15-oct 08:27) — actualizado |
| `README.md` / `SYSTEM_PROMPT.md` | 6-oct | 15-oct 08:27 — actualizados |
| `workspace_docs/ws_lua_script.md` | v1 | **v2 (15-oct 08:27, 20 KB)** — Binding Model v2 |
| `events_catalog.json` / `inzoi_api_catalog.json` / `inzoi-sdk.js` | 6-oct | SIN CAMBIO (6-oct) |
| `AGENTS.md` en workspace Lua | no existía | **inyectado en CADA `{Plugin}/workspace/lua/AGENTS.md`** (idéntico entre proyectos; convenciones Lua oficiales) |
| `.luarc.json` en workspace Lua | no existía | Lua 5.4; **dos** `workspace.library`: `Documents/inZOI/luals-defs` (juego) + `Content/Data/Lua/luals-defs` (**el ModKit ahora EMBEBE su propia copia de defs**) |
| `lua_workspace.json` | no existía | estado por fichero: `origin` (user), `createdAt`, análisis (errors/warnings/hash) |

## Tools nuevas (4) — pendientes de sondeo

- `modkit_discard` — por el nombre: descartar cambios (¿revert de workspace sin borrar?).
- `modkit_set_vehicle_owned_object` / `modkit_set_vehicle_seat_anim` / `modkit_set_vehicle_slot_data` — ampliación del flujo VEHICLE (slots/props por MCP; antes "details panel" según README).

## Enlaces dentro del RAG

- Convenciones Lua completas: `local/lua-workspace-agents-modkit-16078.md` (AGENTS.md verbatim).
- Doc del workspace Script v2: `local/ws-lua-script-v2-modkit-16078.md` (ws_lua_script.md verbatim).
- Verificación en vivo de callbacks (mismo día): `local/verificacion-lua-2026-10-15.md`.
- Build anterior (121 tools, +39/−1 vs v1 de 83): bitácora de revalidación `D:\BigMan\revalidacion\sesiones\01-build.md`.

## Nota para la revalidación

El cambio de build del ModKit INVALIDA las filas cerradas contra 15275 en lo
que dependa del SERVIDOR MCP (121 tools, schemas). Los veredictos de datos
(tablas vanilla, JsonPatch, game data) no cambian por el ModKit. Pendiente:
diff completo de schemas de las 125 tools + sondeo de las 4 nuevas cuando el
juego se parchee (misma tanda runtime).

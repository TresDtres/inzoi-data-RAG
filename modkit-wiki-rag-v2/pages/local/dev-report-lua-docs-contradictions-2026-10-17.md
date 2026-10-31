---
source: local
title: "QA feedback for the development team: contradictory Lua modding documentation across the ModKit's AI surfaces (live verification, 2026-10-17)"
generado: 2026-10-17
---

# QA Report — Contradictory Lua Modding Documentation Across the ModKit's AI Surfaces

Beta-tester feedback from a static and live audit of every documentation surface that an AI assistant
(or a human) can reach when building a Lua Script Mod with the inZOI ModKit. Every live item was executed
against the ModKit editor's embedded MCP server on 2026-10-17; every quoted string is literal from the
shipped files. Spanish companion report with full audit trail:
[contradicciones-docs-lua-2026-10-17.md](contradicciones-docs-lua-2026-10-17.md).

## Context

- ModKit build 16078 (`Build.txt`, dated 2026-10-15 08:26), editor running.
- ModKit MCP server queried live over HTTP JSON-RPC (`http://127.0.0.1:11213/mcp`):
  `initialize`, `tools/list`, `tools/call`, `resources/list`, `resources/read`.
- Audited surfaces:
  - `Content/Data/CLI/templates_lua/lua/_AGENTS.md` (template; deployed as `AGENTS.md` into every mod's
    `workspace/lua/`) — verified byte-identical in `LuaCallbackProbe_404BB4FA` and `SkillProbe_20261012_4ACA8822`.
  - `Data/Tools/mcp/modkit/workspace_docs/ws_lua_script.md` (served as `modkit://workspace-docs/ws_lua_script`).
  - `Data/Tools/mcp/modkit/SYSTEM_PROMPT.md` (delivered as MCP `instructions`, ~35 KB) and `README.md`.
  - `Content/Data/CLI/lua-api-core.txt`, `lua-patterns.txt`, `lua-quickstart.txt`.
  - `Content/Data/CLI/templates_lua/bindings/{Static,Entity,Component,Manager}.lua` (official scaffolds).
- File timestamps confirm the post-16078 fix did **not** touch any of these files (CLI .txt pack,
  `_AGENTS.md` and scaffolds unchanged since 2026-10-06 18:13; MCP doc pack since 2026-10-15 08:27).

## Executive summary

The same Lua modding contract is described by at least three shipped, hand-maintained documents, and
they disagree on API signatures, lifecycle callbacks, and even on which mechanisms exist. The ModKit MCP
server, which presents itself as the authoritative interface for AI-assisted modding, actively serves one
of the contradictory versions and exposes no way to verify the truth. The result for AI-assisted users —
particularly first-time modders — is code that passes `modkit_validate_lua_script` (`ok: true, errors: 0`,
verified live) and then fails silently at runtime. The failure modes, the evidence, and suggested fixes
are itemized below.

## Findings

### DOC-1. `inzoi.event.off` — two different signatures shipped (high severity)

| Surface | Shipped signature |
|---|---|
| `AGENTS.md` (template + all deployed copies) | `inzoi.event.off(event_id, handle)` — handle returned by `on` |
| `Content/Data/CLI/lua-api-core.txt:17` | `inzoi.event.off(eventId, handle)` — with example: `inzoi.event.off('b2.heartbeat', handle)` |
| `Data/Tools/mcp/modkit/workspace_docs/ws_lua_script.md:249` | `on(event, callback)`, `off(event, callback)` |

Live evidence (2026-10-17):

- `resources/read modkit://workspace-docs/ws_lua_script` returns the document containing
  `| \`inzoi.event\` | \`on(event, callback)\`, \`off(event, callback)\` — subscribe/unsubscribe |`.
- `modkit_list_lua_api_catalog(category="inzoi")` returns **names only** —
  `"event": ["off", "on"]` — no parameter or return information. An AI client has no in-server way to
  determine which signature is correct, so it must trust the workspace doc, which disagrees with the
  CLI reference and the deployed AGENTS.md.

Two of three surfaces agree on `off(event_id, handle)`, so `ws_lua_script.md:249` is presumably the stale
one, but this needs confirmation against the runtime (see "Open questions").

### DOC-2. `M.Override_<Func>` — leading `self` contradiction, and the mechanism is missing from the MCP docs (high severity)

| Surface | Shipped signature |
|---|---|
| `AGENTS.md` | "There is **no leading `self`**." Static/chunk overrides: first parameter is the first C++ argument; call original via `inzoi.<Type>.<Func>(...)`. Per-entity overrides: first parameter is the bound target (`owner`/`comp`/`manager`); call original via `owner:<Func>(...)` |
| `templates_lua/bindings/Static.lua` (official scaffold) | Agrees with AGENTS.md: `M.Override_SomeNativeFunc(...)` with **no** `self` |
| `Content/Data/CLI/lua-patterns.txt:85` | `function M.Override_OnUseBegin(self, fridge, user_character)` — **with** leading `self` |
| `Content/Data/CLI/lua-quickstart.txt:91` | `function M.Override_AddUsingCarriableObject(self, character, entity_id)` — **with** leading `self` |
| `ws_lua_script.md` (MCP doc) | Overrides are **not documented at all** (0 occurrences in the served document) |

The official CLI examples and the shipped AGENTS.md cannot both be right. Whichever way the runtime
actually invokes overrides, one of the two shipped documents teaches an AI the wrong parameter layout,
which produces argument-shifted overrides and super-calls against the wrong object.

### DOC-3. Lifecycle callback list — the MCP contradicts itself (high severity)

- `modkit_list_lua_api_catalog(category="lifecycle")` (live, 2026-10-17) lists **6** callbacks:
  `on_begin, on_tick, on_end, on_lua_message, on_savegame, on_loadgame`.
- `ws_lua_script.md` documents **11**, including `on_possessed`, `on_unpossessed`, `on_emotion_changed`,
  `on_member_enter`, `on_member_leave`, with "type-exclusive" binding rules.
- The MCP's own built-in recipe `Emotion Logger` (`modkit_list_lua_recipes`) uses `on_emotion_changed`,
  which the live catalog does not list.

An AI that trusts the live catalog will "correct" the doc and refuse working callbacks; an AI that trusts
the doc will use callbacks the runtime may never fire, then burn iterations switching binding types.

### DOC-4. `inzoi.getB2Manager` / `getB2Subsystem` missing from AGENTS.md (medium severity)

- Present in the live catalog (`modkit_list_lua_api_catalog(category="inzoi")` returns both) and documented
  in `ws_lua_script.md`, which recommends them over the reflected `inzoi.<Type>.Get()` form.
- Absent from `AGENTS.md`, so any AI (or user) working directly with workspace files never learns these
  exist.

### DOC-5. Lua sandbox restrictions are invisible on the MCP path (medium severity)

The sandbox rules (blocked tables `io`, `debug`, `File`; blocked `dofile`/`loadfile`/`loadstring`;
blocked requires `http`/`socket`/`ssl`; partial `os` with whitelist `time`/`clock`/`date`/`difftime`)
exist **only** in `AGENTS.md`. The MCP-served `ws_lua_script.md` mentions "sandbox" once, in prose, with no
rules. Consequence observed in our own verification (2026-10-15): a probe script using `io.open` failed
static analysis with an error the workspace doc served by the MCP cannot explain.

### DOC-6. Two competing editing contracts in the same context (medium severity)

- `AGENTS.md` addresses an agent that edits files directly ("end files with `return M`", no mention of
  validation or the editor).
- `ws_lua_script.md` / `SYSTEM_PROMPT.md` mandate the `modkit_*` tool flow
  (`modkit_create_lua_script` → `modkit_write_lua_script` → `modkit_validate_lua_script` → `modkit_save`,
  preview only with user confirmation) and state that authoring "ends at `modkit_save`".

An AI client that has both in context (e.g., a CLI agent on the workspace plus the MCP connection)
receives two valid-looking procedures for the same `.lua` files and can silently switch between them.

### DOC-7. Stale inventory in the MCP README (low severity)

`Data/Tools/mcp/modkit/README.md` advertises "Available tools (69)"; `tools/list` on the live server
returns **125** tools (21 of them Lua-related). Minor, but it signals the doc pack is not kept in sync
with the server.

## Impact on AI-assisted users

For a first-time modder using AI through the MCP, the contradictions compound into a failure mode that is
hard to diagnose because:

1. All contradictory variants are syntactically valid Lua, so `modkit_validate_lua_script` returns
   `ok: true, errors: 0` (verified live against project `LuaCallbackProbe_404BB4FA`) and the failure only
   surfaces at runtime, without an actionable message.
2. The contradictory document is the one the MCP serves, so the AI cites official documentation with full
   confidence. From the user's perspective this is not "the AI made a mistake" — it is "the official
   documentation did not work", which erodes trust in modding tooling rather than in the AI.
3. The only sandbox rule violations that static analysis does catch (`io`, blocked `os` members) are the
   ones not documented on the MCP path, so the error message has no served explanation.

## Reproduction (live MCP checks)

With the ModKit editor running (MCP starts automatically on `http://127.0.0.1:11213/mcp`):

```bash
# Served doc carries the "off(event, callback)" signature
curl -s -X POST http://localhost:11213/mcp \
  -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"resources/read","params":{"uri":"modkit://workspace-docs/ws_lua_script"}}'
# → "| `inzoi.event` | `on(event, callback)`, `off(event, callback)` — subscribe/unsubscribe |"

# Catalog exposes names only — no way to verify signatures
curl -s -X POST http://localhost:11213/mcp \
  -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"modkit_list_lua_api_catalog","arguments":{"category":"inzoi"}}}'
# → "event": ["off", "on"]

# Lifecycle catalog lists 6 callbacks
curl -s -X POST http://localhost:11213/mcp \
  -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"modkit_list_lua_api_catalog","arguments":{"category":"lifecycle"}}}'
# → on_begin, on_tick, on_end, on_lua_message, on_savegame, on_loadgame
```

Static checks (no editor required): compare
`Content/Data/CLI/lua-api-core.txt:17` with
`Data/Tools/mcp/modkit/workspace_docs/ws_lua_script.md:249` (DOC-1); compare
`Content/Data/CLI/templates_lua/lua/_AGENTS.md` ("no leading `self`") with
`Content/Data/CLI/lua-patterns.txt:85` and `lua-quickstart.txt:91` (DOC-2).

## Runtime adjudication (in-game probes, 2026-10-17)

We ran the three probes described above against the live game (build 16078, Gangnam_Map, save reloaded
with the preview mounted so the binding scan runs). All three contradictions are now adjudicated with
literal Output evidence:

| Finding | Runtime verdict | Literal evidence (editor Output) |
|---|---|---|
| DOC-1 `inzoi.event.off` | `off(event_id, handle)` is correct. `ws_lua_script.md:249` (`off(event, callback)`) is wrong. AGENTS.md and `lua-api-core.txt` are correct | `off(event,handle) ok=true err=nil` / `off(event,cb) ok=false err=inzoi.event.off expects (eventId:string, handle:integer)` — the runtime itself states the signature in a typed error |
| DOC-2 `Override_<Func>` (per-entity) | The invocation convention is `(self, owner, args...)` with the per-binding `self` table first — exactly what `lua-patterns.txt:85` / `lua-quickstart.txt:91` teach. AGENTS.md ("no leading self"; "first parameter is the bound target") is **wrong for per-entity overrides** | `[OV] Override_AddUsingCarriableObject invoked: nargs=3 first=OTHER(table[0])` — 3 args = (self, owner, InEntityId) for a 1-param C++ function; first arg is a fresh table (the same kind of per-binding `self` that `on_begin` receives: `self=table[0]`), not the module M and not the owner (userdata:FB2Character) |
| DOC-3 lifecycle callbacks | `on_emotion_changed` exists and fires — the live catalog (6 callbacks) is **incomplete**; `ws_lua_script.md` (11 callbacks) is correct on this point | `[CB] on_emotion_changed FIRED nargs=4` — dozens of times on natural emotion changes |

Additional runtime facts discovered by the same probes (all literal Output):

- Event IDs: `lua-api-core.txt`'s `b2.*` event IDs are invalid in the current runtime —
  `on('b2.heartbeat') -> nil`; the MCP's `events_catalog.json` IDs are valid —
  `on('need.state_changed') -> number:237`, and it fires with a 4-field payload table.
- `inzoi.event.on` returns **`nil`** on failure, not `0` as AGENTS.md states.
- `Main.lua`'s `on_tick` **does** receive arguments — `nargs=2 [table, number]` — contradicting
  `lua-quickstart.txt` ("B2/Main.lua callbacks do NOT receive self or owner args"). Binding `on_tick`
  signature confirmed as `on_tick(self, owner, dt)`.
- `on_possessed` / `on_unpossessed` DO exist and fire with signature `(self, owner)` — but only via the
  avatar-possession path (`character_possess` / in-game switch). The low-level `entity_possess` (entity
  control) does NOT fire them. So the live catalog (6 callbacks) is incomplete twice over, and
  `ws_lua_script.md` is correct on the callback list.
- Super-call convention confirmed: `owner:<Func>(args...)` from inside a per-entity override calls the
  original C++ function directly, with no recursion (guarded one-shot test: `ok=true`, no re-entry).
- C++ `FB1EntityId` parameters arrive in overrides as **userdata** (wrapped id), not numbers.
- Binding scale: `Zoi:ResidenceFamily` bound ~74 Zois and `Household:*` bound ~80 households at save load —
  keys operate at neighborhood scale.
- `Main.lua` `on_tick` first call after a save load reports the whole loading duration as dt (178.26 s,
  identical across two loads); mid-session values are normal (0.03–0.05). It is dt, not a timestamp —
  but a very misleading first value.
- Still not tested: `on_member_enter`/`on_member_leave` (no membership change during the window) and
  static/chunk-module overrides (`Static.lua` scaffold convention); DOC-2's verdict applies to per-entity
  overrides.
- **Runtime behavior worth flagging:** manifest bindings churn heavily during normal gameplay
  (hundreds of `on_end`/`on_begin` cycles with different FB2Character instances), and each `on_begin`
  that subscribes without an `off` in `on_end` leaks subscriptions at scale — in our probe, event handles
  climbed from 237 to 390+ within minutes, and leaked subscriptions from churned instances kept firing
  after one instance called `off`. Mods that subscribe in `on_begin` will leak handlers at this rate
  unless the docs tell them to unsubscribe in `on_end`.

### DOC-8. In-editor API browser (Events tab) — useful but carries its own doc bugs (medium severity)

A fourth documentation surface we did not include in the original audit: the Script editor's built-in
API browser (Output -> Preview -> Events). It is the richest of the four surfaces (per-event
descriptions, payload fields with types, usage snippets, "Insert into script" button) and its event set
matches the runtime's `events_catalog.json`. However (build 16078, observed 2026-10-17):

- The per-event usage snippet reads `zoi.event.on("buff.added", function(payload) ... end)` — but `zoi`
  does not exist. Confirmed twice: statically, the kit's own validator flags direct `zoi` access as
  `luacheck-113: accessing undefined variable 'zoi'` (11 errors), and at runtime `rawget(_G, "zoi")`
  returned `nil` in B1 and B2, in the boot module and in bound instances. The "Insert into script"
  button inserts this snippet verbatim, so the editor's own convenience feature generates code
  referencing an undefined global.
- The event tree lists a ghost event `emotion.on` that does not exist in `events_catalog.json` (26 real
  events). Runtime-confirmed: `on('emotion.on') -> nil` on every bound instance.
- Inconsistent id rendering: some entries show the real dotted ids (`buff.added`, `time.hour_changed`)
  while others are flattened (`needstate_changed`, `emotion_level_changed`, `skill_level_changed`,
  `weather_changed`, `season_changed`). Runtime-confirmed: the flattened id fails
  (`on('needstate_changed') -> nil`) while the dotted id works (`need.state_changed` subscription
  succeeded; `character.overlap_begin` in B1 returned handle 398).

Recommended: fix the snippet to `inzoi.event.on`, remove `emotion.on` or implement it, and render all
tree ids with the exact dotted form from `events_catalog.json`.

## Silent no-op class: execution without effect (user feedback, partially evidenced)

A third failure class, distinct from the two documented above ("does not fire" / "fires with the wrong
signature"): a Lua call fires, returns success, and still has no effect on the game — the sandbox
executes it "closed" without the target system acting.

- Verified precedent (in-game CLI, 2026-10-17): `currency.add_money` intermittently returned `ok` with
  an empty payload while the household balance did NOT change; other attempts worked and were confirmed
  only via HUD-widget readback (`ui_find {"Window": "Hud", "Role": "text"}`). A flaky silent drop.
- Community-reported, same class: animations invoked from Lua (e.g. `motion.play`) that run on the Lua
  side but never play on the character, and menu widgets addressable from Lua/uimod whose action never
  executes on the game side.

Implication for AI-assisted users: no shipped surface tells them that a success return is not proof of
effect. We suggest documenting a "readback rule" (verify side-effects by re-querying game state or
observable outcomes) in the Lua docs, and — longer term — returning an operation id / readback token
from state-changing commands so success and effect can be told apart.

## Suggested fixes (updated after adjudication)

1. Fix `ws_lua_script.md:249` → `off(event_id, handle)` (DOC-1, now confirmed against the runtime).
2. Fix the per-entity override section of the `_AGENTS.md` template (and regenerate deployed copies):
   the convention is `(self, owner, args...)`, matching `lua-patterns.txt`/`lua-quickstart.txt`.
3. Reconcile the lifecycle catalog with `ws_lua_script.md` (add at least `on_emotion_changed`).
4. Replace the `b2.*` event IDs in `lua-api-core.txt` with the runtime's real IDs (see `events_catalog.json`);
   fix AGENTS.md's "0 on failure" → `nil on failure`; fix `lua-quickstart.txt`'s Main.lua callback claim.
5. Document the binding-churn behavior and the required `off` in `on_end` pattern in `ws_lua_script.md`.
6. Extend `modkit_list_lua_api_catalog` to return parameter/return signatures for the `inzoi.*` namespace,
   so the server itself can adjudicate signature questions instead of deferring to hand-maintained docs.
7. Document the Override mechanism and the sandbox rules in `ws_lua_script.md`; add `getB2Manager` /
   `getB2Subsystem` to the AGENTS.md template.
8. Update the MCP README tool inventory (69 advertised vs 125 live).

Full audit trail, Spanish companion report and probe source:
[contradicciones-docs-lua-2026-10-17.md](contradicciones-docs-lua-2026-10-17.md). Probe mod:
`LuaCallbackProbe_404BB4FA` (kept in `Mods/` for re-testing after fixes).

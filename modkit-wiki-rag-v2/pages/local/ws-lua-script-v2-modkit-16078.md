---
source: local
title: "ws_lua_script.md v2 (ModKit 16078): Binding Model v2, chunk scripts, preview, API inzoi.*, tipos"
generado: 2026-10-15
---

# ws_lua_script.md — versión v2 del ModKit build 16078 (2026-10-15, fichero interno actualizado)

SUPERA la captura del 2026-10-08 del RAG. Cambios clave: **Binding Model (v2)** manifest-driven
(`bindings` + `chunkScripts` bookkeeping), flujo end-to-end con preview confirmado, tabla de mapping
intento→binding type, API `inzoi.*` con formas EXACTAS, enums. Contenido VERBATIM:

# Lua Script Mod Workspace

Book Class: `Script`
Book Id: `Script` (only book, `AllowInstancing = false`)
Workspace Class: `FModWorkspace_Script` (file-based)
Editor: `ILuaScriptModWorkspace` (custom tab in the `inZOIScriptMod` module)

A **Lua Script Mod** is a collection of Lua scripts that run inside inZOI's Lua sandbox (B2 simulation thread and/or B1 client/render thread). ModKit ships a built-in code editor, syntax highlighter, binding panel, API browser, validation output, and a live preview bridge — but for MCP, everything is reducible to **.lua files on disk** under the plugin's `workspace/lua/` folder plus a binding manifest `lua_manifest.json`.

One mod = one Script workspace (singleton per project). Scripts are organized by environment (`B2`/`B1`) and bound to game entities via the manifest.

Lua Script Mod is **file-based**. Not DataTable. Not UObject deltas. `modkit_set_data` does NOT apply.

## Storage layout

```
{Plugin BaseDir}/workspace/lua/
 ├── lua_manifest.json              # binding manifest (which scripts bind to what)
 ├── workspace.json                 # workspace metadata (origins, analysis state)
 ├── B2/                            # Simulation thread scripts
 │   ├── Main.lua                   # Boot entry point (runs once on load)
 │   ├── Zoi/
 │   │   └── Greeter.lua            # Bound to Zoi entities
 │   └── Components/
 │       └── EmotionTracker.lua     # Bound to a B2 component
 ├── B1/                            # Client/render thread scripts
 │   ├── Main.lua                   # Boot entry point
 │   └── Components/
 │       └── UIHelper.lua
 └── ...
```

## Binding Model (v2)

The v2 Lua binding scheme is **manifest-driven**. Each mod declares bindings in `lua_manifest.json`:

```json
{
  "bindings": {
    "B2": [
      { "type": "Zoi", "key": "*", "script": "Zoi.Greeter" },
      { "type": "Component", "key": "B2AppearanceComponent", "script": "Components.EmotionTracker" }
    ],
    "B1": [
      { "type": "Component", "key": "B1AppearanceComponent", "script": "Components.UIHelper" }
    ]
  },
  "chunkScripts": {
    "B2": ["Actions.B2Action_Buy", "Scripts.FB2Script_Family"],
    "B1": ["Actors.B1GizmoActor"]
  }
}
```

### Two kinds of scripts

| Kind | Manifest section | How it runs |
|---|---|---|
| **Binding** | `bindings` | Matched by runtime LuaHost by `(type, key)`. Receives an owner entity in lifecycle callbacks. |
| **Chunk** | `chunkScripts` | Auto-loaded by module path at runtime. No explicit binding needed. Recorded for bookkeeping. |

### Environments

| Env | Thread | Purpose |
|---|---|---|
| `B2` | Simulation | Game logic, AI, economy, state changes |
| `B1` | Client/Render | Visual effects, UI integration, client-side logic |

### Binding types

Manifest `bindings` accepts the types below (matches the ModKit **Type dropdown**
and `modkit_list_lua_binding_types`):

| Type | B2 | B1 | Key | Description |
|---|:---:|:---:|---|---|
| `Zoi` | Yes | Yes | `EB1CharacterGroupType` or `*` | Character entity |
| `ObjectTemplate` | Yes | Yes | ObjectTemplateId (free-form) or `*` | Game object |
| `Vehicle` | Yes | Yes | `EB1VehicleType` | Vehicle |
| `Component` | Yes | Yes | B2: `EB2ComponentType` · B1: component UClass name | Entity/actor component |
| `Household` | Yes | — | HouseholdDtId (free-form) or `*` | Household |
| `Manager` | Yes | — | `EB2ManagerType` | Simulation manager |

`Static` and `Actors` are **not** manifest binding types. They are chunk-based
modules listed under `chunkScripts` (auto-loaded by module path), never under
`bindings`.

Use `modkit_list_lua_binding_types` for per-env details. Use `modkit_list_lua_binding_keys` for valid key values (enum-driven or free-form). For ObjectTemplate and Household, `keys` includes base-game ids and ids the open plugin added; those plugin ids are also returned in `plugin_added_keys`.

## End-to-End Workflow

```text
# 1. Create the workspace (one-time per mod)
modkit_add_workspace(book_class="Script", book="Script", mode="Duplicate")
  ↓ → workspace ready; workspace/lua/ folder created with B2/Main.lua + B1/Main.lua

# 2. Look up callbacks, binding types, and keys (mandatory — see the RULE below)
modkit_list_lua_api_catalog(category="lifecycle")
modkit_list_lua_binding_types(env="B2")
modkit_list_lua_binding_keys(env="B2", type="Zoi")   # when the type uses enum keys
modkit_list_lua_recipes(include_body=true)

# 3. Create scripts with binding-aware scaffolds
modkit_create_lua_script(plugin, env="B2", module="Zoi.Greeter", type="Zoi", key="*")
  ↓ → creates B2/Zoi/Greeter.lua with on_begin/on_end scaffolds
  ↓ → registers binding in lua_manifest.json automatically

# 4. Edit scripts
modkit_write_lua_script(plugin, path="B2/Zoi/Greeter.lua", content="...")

# 5. Look up CLI commands before using inzoi.cli.execute()
modkit_list_lua_api_catalog(category="cli", query="emotion")
modkit_get_lua_cli_command(command="emotion.set")

# 6. Validate scripts
modkit_validate_lua_script(plugin)

# 7. Save
modkit_save(plugin)

# 8. Preview in running game (confirm with user first)
# modkit_start_lua_preview(plugin)
# modkit_reload_lua_preview(plugin)  ← after edits
# modkit_end_lua_preview(plugin)     ← when done
```

> ⚠️ **RULE — Always query before creating scripts**
>
> Before `modkit_create_lua_script`, call `modkit_list_lua_api_catalog(category="lifecycle")`,
> `modkit_list_lua_binding_types(env=...)`, and `modkit_list_lua_binding_keys(env, type)` when
> the type uses enum keys. Never guess binding types, keys, or callback names. Do not default
> to Main.lua unless the user wants global/event-only logic.

> ⚠️ **RULE — CLI catalog is the single source of truth**
>
> Before writing or modifying **any** `inzoi.cli.execute(...)` call in Lua,
> call `modkit_list_lua_api_catalog(category='cli')` /
> `modkit_get_lua_cli_command` to confirm the **command id**, **required
> params**, and **result shape**. Never invent CLI command ids.

> ⚠️ **RULE — Lua `inzoi.cli.execute` contract (NOT the UI-mod JavaScript form)**
>
> `local success, message, data = inzoi.cli.execute("command key=value ...")`
>
> It takes ONE command-line string (args inline as space-separated `key=value`; quote values
> with spaces) and returns THREE values: `success` (bool), `message` (string), `data`
> (JSON string or nil). Do NOT call `execute(name, {args})` and do NOT index the result as a
> table — that is the UI-mod JS API. To read fields, parse the `data` string.

> ⚠️ **RULE — Lua type annotations (do NOT drop them)**
>
> Annotate every callback/override parameter with its real type so LuaLS hover/type-check works,
> e.g. `---@param self table`, `---@param owner FB2Character` (Zoi; Component key=Stat →
> `FB2StatComponent`, Manager key=Weather → `FB2WeatherManager`). Never write `---@param x any`
> with the real type only in a comment. The type is the C++ export name — take it from the
> binding owner type or `modkit_list_lua_api_catalog`. `modkit_create_lua_script` WITHOUT
> `content` emits these annotations, so scaffold first and edit only the body. If you pass full
> `content`, include the `---@param` lines yourself.

> ⚠️ **RULE — Confirm before preview, never auto-preview**
>
> `modkit_start_lua_preview` is the *publish-into-running-game* step.
> The authoring flow ENDS at `modkit_save`. Then:
>
> 1. **Request includes preview intent** ("test in game", "preview", "run it") → start it directly.
> 2. **Pure authoring** ("make a script mod", "add a binding") → do NOT start it. Ask the user once.
> 3. **Follow-up confirmation** ("yes", "do it") after you offered → start it.
>
> Never bundle the preview call into a multi-step plan presented as one block. While a preview runs,
> use `modkit_reload_lua_preview` after edits and `modkit_end_lua_preview` to stop (or close the workspace).

## Script Module Conventions

### Module structure

Every script follows the module-table pattern:

```lua
local M = {}

function M.on_begin(self, owner)
  -- Called when the binding activates
end

function M.on_tick(self, owner, dt)
  -- Called every tick (only when defined)
end

function M.on_end(self, owner)
  -- Called when the binding deactivates
end

return M
```

Common callback pairings:
- Entity tracking: `on_begin` + `on_possessed` / `on_unpossessed` + `on_end`
- Periodic polling: `on_begin` + `on_tick` + `on_end`
- Event reaction: `on_begin` (subscribe) + `on_end` (unsubscribe)

### Lifecycle callbacks

Use `modkit_list_lua_api_catalog(category="lifecycle")` for the authoritative list. Known callbacks:

| Callback | Signature | Binding type | When |
|---|---|---|---|
| `on_begin` | `(self [, owner/comp/manager])` | **All** | Binding activates |
| `on_tick` | `(self [, owner], dt)` | **All** | Every frame (optional — omit to save perf) |
| `on_end` | `(self [, owner/comp/manager])` | **All** | Binding deactivates |
| `on_possessed` | `(self, owner)` | **Zoi only** | Character is possessed by player |
| `on_unpossessed` | `(self, owner)` | **Zoi only** | Character is unpossessed |
| `on_emotion_changed` | `(self, owner)` | **Zoi only** | Character emotion changes |
| `on_lua_message` | `(self, owner, ...)` | **All** | Cross-env message received |
| `on_savegame` | `(self [, owner])` | **All** | Game is being saved |
| `on_loadgame` | `(self [, owner])` | **All** | Game is being loaded |
| `on_member_enter` | `(self, owner)` | **Household only** | Member enters household |
| `on_member_leave` | `(self, owner)` | **Household only** | Member leaves household |

**Type-exclusive callbacks determine the binding type:**
- User wants `on_possessed` / `on_unpossessed` / `on_emotion_changed` → **must** use Zoi type
- User wants `on_member_enter` / `on_member_leave` → **must** use Household type
- Using these callbacks with the wrong binding type does nothing (the runtime never fires them)

### Mapping user intent to binding type

| User wants | Callback(s) | Binding type | Key |
|---|---|---|---|
| Track possession changes | `on_possessed`, `on_unpossessed` | Zoi | `*` or specific |
| Track emotions | `on_emotion_changed` | Zoi | `*` |
| Global event/CLI hook | top-level code in `Main.lua` | none (boot module) | — |
| Object interaction | `on_begin`, `on_tick` | ObjectTemplate | object id |
| Component tracking | `on_begin`, `on_end` | Component | UClass name |
| Household events | `on_member_enter`, `on_member_leave` | Household | `*` |
| Save/load hooks | `on_savegame`, `on_loadgame` | any binding type | `*` |

**Main.lua is NOT a binding target** — it runs once on load for global setup (event subscriptions, CLI calls). Do not register a manifest binding for Main.lua.

The second argument depends on binding type:
- **Entity types** (Zoi, ObjectTemplate, Household, Vehicle): `owner` entity
- **Component**: `comp` (the bound component instance)
- **Manager**: `manager` (the manager instance)
- **Static / Actors**: chunk modules, not bindings — see the note under Example 2
- **Main.lua**: no second arg (boot module, runs once)

### inzoi.* API

| Namespace | Key methods |
|---|---|
| `inzoi.cli` | `execute(command_line)` → `success, message, data` — run a game CLI command (see the contract RULE above) |
| `inzoi.event` | `on(event, callback)`, `off(event, callback)` — subscribe/unsubscribe |
| `inzoi.message` | `send(...)`, `send_to_sim(...)`, `send_to_client(...)` — cross-env messaging |
| `inzoi.getB2Manager(typeName)` | Return a live B2 **manager** instance, e.g. `getB2Manager("FB2EntityManager")` (B2 only) |
| `inzoi.getB2Subsystem(typeName)` | Return a live B2 **subsystem** instance, e.g. `getB2Subsystem("FB2PopulationSystem")` (B2 only) |

Use `modkit_list_lua_api_catalog` to browse lifecycle callbacks, the `inzoi.*` namespace, CLI ids, and enum names.

**Manager/subsystem access.** Prefer `inzoi.getB2Manager("...")` / `inzoi.getB2Subsystem("...")`
to obtain instances: they validate the type and return the live singleton. The raw reflected
form `inzoi.<Type>.Get()` (e.g. `inzoi.FB2EntityManager.Get()`) resolves to the same instance
but is analyzer-unfriendly — use the `getB2*` helpers in samples and generated code. The
`inzoi.<Type>` namespace is still required to reference a **type/class itself** (not an
instance), e.g. `owner:GetComponentByClass(inzoi.UB1BuildProgressComponent)`. Once you hold a
manager, call its methods directly, e.g. `mgr:GetAllEntities(inzoi.EB2EntityType.Character)`,
`mgr:FindCharacter(entityId)`. `modkit_list_lua_api_catalog` does not list C++ class methods (its
categories are lifecycle / inzoi / cli / enum) — check method calls with `modkit_validate_lua_script`.

### Enums

Engine enums are accessible in Lua under the `inzoi` namespace, e.g.
`inzoi.EB2EntityType.Character` or `inzoi.EB2ManagerType.Weather`.

- `modkit_list_lua_api_catalog(category="enum", query="Entity")` — search enum type names.
- `modkit_get_lua_enum(name="EB2EntityType")` — list an enum's members and integer values.

Never hardcode integer enum values; resolve them by name via `modkit_get_lua_enum`.

## Available MCP Tools

### Workspace lifecycle

| Tool | Purpose |
|---|---|
| `modkit_add_workspace` (with `book_class="Script"`, `book="Script"`) | Create the (singleton) Script workspace for a mod. |
| `modkit_delete_workspace` | Remove the Script workspace. |
| `modkit_save` | Persist the project. |

### Script file CRUD

| Tool | Purpose |
|---|---|
| `modkit_list_lua_scripts` | List all `.lua` files under `workspace/lua/`. Filter by `env`. Returns `{path, size, env, module}`. |
| `modkit_read_lua_script` | Read one file as UTF-8. Path is relative to `workspace/lua/`. |
| `modkit_write_lua_script` | Create or overwrite. Intermediate directories created automatically. |
| `modkit_delete_lua_script` | Delete one file. Does NOT remove bindings — call `modkit_remove_lua_binding` separately. |
| `modkit_create_lua_script` | High-level: creates `.lua` with binding-aware scaffold + optionally registers in manifest. |
| `modkit_rename_lua_script` | Rename/move a file. Does NOT update manifest — update bindings separately. |

Allowed extensions for `write_lua_script`: `.lua`, `.json`, `.txt`, `.md`. Maximum 2 MiB per call.

### Manifest (binding metadata)

| Tool | Purpose |
|---|---|
| `modkit_read_lua_manifest` | Read `lua_manifest.json` + summary counts. |
| `modkit_write_lua_manifest` | Replace entire manifest (validated before writing). |

### Binding management (incremental)

| Tool | Purpose |
|---|---|
| `modkit_list_lua_bindings` | List all bindings + chunk scripts with `file_exists` status. |
| `modkit_add_lua_binding` | Add one binding entry (validates type for env, checks duplicates). |
| `modkit_remove_lua_binding` | Remove by index or by `(type, key, script)` match. |

### Binding reference

| Tool | Purpose |
|---|---|
| `modkit_list_lua_binding_types` | Valid types per env, with key metadata. |
| `modkit_list_lua_binding_keys` | Valid key values for a `(env, type)` pair. ObjectTemplate/Household also return plugin-added ids in `plugin_added_keys`. |

### Validation

| Tool | Purpose |
|---|---|
| `modkit_validate_lua_script` | Run BlueLuaKit analysis. Omit `path` for whole workspace. Returns `{ok, errors, warnings, diagnostics}`. |

### API reference

| Tool | Purpose |
|---|---|
| `modkit_list_lua_recipes` | Built-in example scripts. Set `include_body=true` for full source. |
| `modkit_list_lua_api_catalog` | Lifecycle callbacks, `inzoi.*` API, CLI command ids, enum type names. |
| `modkit_get_lua_cli_command` | Full CLI command info (params, return schema). |
| `modkit_get_lua_enum` | Enum members + integer values (e.g. `EB2EntityType`). |

### Game preview

| Tool | Purpose |
|---|---|
| `modkit_start_lua_preview` | Export `workspace/lua/` to staging and mount in the running game. |
| `modkit_end_lua_preview` | Unmount from the running game. |
| `modkit_reload_lua_preview` | Re-export and re-mount (after edits while preview is active). |

## Usage Examples

### Example 1 — Zoi emotion logger

```text
modkit_add_workspace {
  "plugin": "MyScriptMod_abc",
  "book_class": "Script", "book": "Script",
  "mode": "Duplicate", "name": "My Script Mod"
}
// → item_id: "Script" (singleton)

modkit_create_lua_script {
  "plugin": "MyScriptMod_abc",
  "env": "B2", "module": "Zoi.EmotionLogger",
  "type": "Zoi", "key": "*"
}
// → creates B2/Zoi/EmotionLogger.lua + registers binding

modkit_write_lua_script {
  "plugin": "MyScriptMod_abc",
  "path": "B2/Zoi/EmotionLogger.lua",
  "content": "local M = {}\n\nfunction M.on_begin(self, owner)\n  print('Zoi emotion logger started for: ' .. tostring(owner))\nend\n\nfunction M.on_tick(self, owner, dt)\n  -- poll emotion state\nend\n\nfunction M.on_end(self, owner)\n  print('Zoi emotion logger ended')\nend\n\nreturn M\n"
}

modkit_validate_lua_script { "plugin": "MyScriptMod_abc" }
// → { ok: true, errors: 0, warnings: 0 }

modkit_save { "plugin": "MyScriptMod_abc" }
```

### Example 2 — Browse API and create CLI-driven script

```text
modkit_list_lua_api_catalog { "category": "cli", "query": "weather" }
// → cli_commands: ["environment.control_weather", "environment.override_weather", "weather.list"]

modkit_get_lua_cli_command { "command": "weather.list" }
// → { id, params: [], returns: {...} }

// Global logic goes in the Main.lua boot module (created with the workspace, no binding)
modkit_read_lua_script { "plugin": "MyScriptMod_abc", "path": "B2/Main.lua" }
modkit_write_lua_script {
  "plugin": "MyScriptMod_abc", "path": "B2/Main.lua",
  "content": "local ok, msg, data = inzoi.cli.execute(\"weather.list\")\n"
}
```

`Static` / `Actors` modules are chunk scripts, not bindings. Create them with `chunk=true` **and**
`add_binding=false` — with only `type` set, `add_binding` defaults to true and writes a binding the
runtime never matches.

### Example 3 — Check and fix broken bindings

```text
modkit_list_lua_bindings { "plugin": "MyScriptMod_abc" }
// → bindings: [
//   { env: "B2", type: "Zoi", key: "*", script: "Zoi.OldName", file_exists: false },
//   ...
// ]
// file_exists: false means broken link — script was renamed/deleted

modkit_remove_lua_binding {
  "plugin": "MyScriptMod_abc",
  "env": "B2", "type": "Zoi", "script": "Zoi.OldName"
}

modkit_add_lua_binding {
  "plugin": "MyScriptMod_abc",
  "env": "B2", "type": "Zoi", "key": "*", "script": "Zoi.NewName"
}
```

## Notes

- **Singleton enforcement.** One Script workspace per project. A second `modkit_add_workspace` returns the existing workspace.
- **Main.lua boot modules.** `B2/Main.lua` and `B1/Main.lua` are created automatically when the workspace opens. They run once at mod load with no owner entity — use for global setup (events, CLI, messages).
- **`modkit_create_lua_script` auto-creates the Script workspace** when the project has none (`workspace_auto_created: true`), so `modkit_add_workspace` is optional.
- **Ignored `modkit_add_workspace` arguments:** `category`, `copy_assets`, `base_id`, `dlc`, `source_culture`, `target_culture`. Pass `book="Script"`.
- **`modkit_set_data` does NOT work** on Script workspaces. Use the Lua-specific tools instead.
- **Manifest and files are separate concerns.** Deleting a script file does not remove its manifest binding (and vice versa). Use `modkit_list_lua_bindings` to audit `file_exists` status.
- **Validation uses BlueLuaKit.** The analyzer checks syntax, restricted API usage, and namespace/type correctness against the export tables. Run after edits and before packaging.
- **Preview is pipe-based.** Unlike UIMod (HTTP to the game's MCP port), Lua preview uses the ModKit pipe to communicate with the running game. `modkit_start_lua_preview` exports scripts and sends a mount command; `modkit_reload_lua_preview` re-exports for iterative editing.
- **File encoding is UTF-8 without BOM** for all files written by MCP tools.

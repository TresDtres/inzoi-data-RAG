---
document_id: "07451c56672bdb46e12a858c47c7dbae52ab410e7c03d5e6c5725b617016f0c4"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/uimod/02-files"
title: "Files"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "UI"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:39+00:00"
content_sha256: "def9f6f6edc96b8700ac3c62a9d0711a256421959a1aca88d45d49212cc7c812"
chunk: 2
chunk_count: 3
page_type: "article"
route: "modkit/project/uimod/02-files"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

| `type`Extra field(s)When it fires`always_on`—The panel is always visible. Best with `passthrough`.`keybind``key` (a *single* key, e.g. `"F1"`, `"M"`) and optional `modifiers` (e.g. `["Ctrl"]`)Player presses the key with exactly those modifiers held.`command``command` (e.g. `"mood_panel.toggle"`)Player types the chat/cheat command.`game_mode``mode` (string or array of mode names)The game enters one of the listed modes.`interaction_menu``label_key`A matching interaction is selected.`game_event``event` (e.g. `"zoi.mood_changed"`)The game emits the named event.`ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| --- |
| `always_on`—The panel is always visible. Best with `passthrough`.`keybind``key` (a *single* key, e.g. `"F1"`, `"M"`) and optional `modifiers` (e.g. `["Ctrl"]`)Player presses the key with exactly those modifiers held.`command``command` (e.g. `"mood_panel.toggle"`)Player types the chat/cheat command.`game_mode``mode` (string or array of mode names)The game enters one of the listed modes.`interaction_menu``label_key`A matching interaction is selected.`game_event``event` (e.g. `"zoi.mood_changed"`)The game emits the named event.`ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `keybind``key` (a *single* key, e.g. `"F1"`, `"M"`) and optional `modifiers` (e.g. `["Ctrl"]`)Player presses the key with exactly those modifiers held.`command``command` (e.g. `"mood_panel.toggle"`)Player types the chat/cheat command.`game_mode``mode` (string or array of mode names)The game enters one of the listed modes.`interaction_menu``label_key`A matching interaction is selected.`game_event``event` (e.g. `"zoi.mood_changed"`)The game emits the named event.`ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `command``command` (e.g. `"mood_panel.toggle"`)Player types the chat/cheat command.`game_mode``mode` (string or array of mode names)The game enters one of the listed modes.`interaction_menu``label_key`A matching interaction is selected.`game_event``event` (e.g. `"zoi.mood_changed"`)The game emits the named event.`ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `game_mode``mode` (string or array of mode names)The game enters one of the listed modes.`interaction_menu``label_key`A matching interaction is selected.`game_event``event` (e.g. `"zoi.mood_changed"`)The game emits the named event.`ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `interaction_menu``label_key`A matching interaction is selected.`game_event``event` (e.g. `"zoi.mood_changed"`)The game emits the named event.`ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `game_event``event` (e.g. `"zoi.mood_changed"`)The game emits the named event.`ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `ui_event``event`Another UI emits the named UI event.`ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `ui_injection`advanced runtime fieldsThe game asks for UI to be injected at a known spot. Use only when the target slot contract is known.`manual` / `auto`—Reserved for tooling. Use the explicit types above first. |
| `manual` / `auto`—Reserved for tooling. Use the explicit types above first. |

When you edit the manifest through ModKit's manifest panel or `modkit_write_uimod_manifest`, trigger `id` values are generated on save if you leave them blank. If you write `uimod_manifest.json` directly as a raw file, every trigger must include a unique `id`; the game-side parser rejects triggers without one.

> **Important: `game_mode` uses `mode`, not `modes`.**
>
> The game-side manifest parser reads only the field named `mode`. Use either a single string:
>
> ```
> { "type": "game_mode", "mode": "gameplay" }
> ```
>
> or an array:
>
> ```
> { "type": "game_mode", "mode": ["TopView", "ShoulderView", "Vehicle"] }
> ```
>
> Do **not** write `"modes": []`. The game ignores that field, so the trigger will never match and the UI will stay hidden. The `"gameplay"` alias expands to the common in-world modes: `TopView`, `ShoulderView`, and `Vehicle`.

Use these values for `game_mode`:

| ValueMeaning`gameplay`Recommended default alias. Expands to `TopView`, `ShoulderView`, and `Vehicle`.`TopView`Zoi control in top-view mode.`ShoulderView`Zoi control in shoulder-view mode.`Vehicle`Vehicle control.`Photo`Photo mode.`FreeCamera`Free camera mode.`Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| --- |
| `gameplay`Recommended default alias. Expands to `TopView`, `ShoulderView`, and `Vehicle`.`TopView`Zoi control in top-view mode.`ShoulderView`Zoi control in shoulder-view mode.`Vehicle`Vehicle control.`Photo`Photo mode.`FreeCamera`Free camera mode.`Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `TopView`Zoi control in top-view mode.`ShoulderView`Zoi control in shoulder-view mode.`Vehicle`Vehicle control.`Photo`Photo mode.`FreeCamera`Free camera mode.`Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `ShoulderView`Zoi control in shoulder-view mode.`Vehicle`Vehicle control.`Photo`Photo mode.`FreeCamera`Free camera mode.`Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `Vehicle`Vehicle control.`Photo`Photo mode.`FreeCamera`Free camera mode.`Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `Photo`Photo mode.`FreeCamera`Free camera mode.`Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `FreeCamera`Free camera mode.`Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `Build`Build Studio.`CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `CharacterCustomize`Character Studio.`Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `Map`City/map mode.`None`Common/lobby/no active gameplay mode. |
| `None`Common/lobby/no active gameplay mode. |

#### Trigger Recipes

Use `always_on` for HUDs that should exist immediately:

```
{ "type": "always_on" }
```

Use `keybind` when the player should press a key to open or toggle the panel:

```
{ "type": "keybind", "key": "F1" }
```

For a key combination, put the key in `key` and the held modifiers in `modifiers`:

```
{ "type": "keybind", "key": "M", "modifiers": ["Ctrl"] }
```

> **Important: `"key": "Ctrl+M"` does not work.**
>
> The game-side parser looks `key` up as one key name and does not split `"+"`, so `"Ctrl+M"` resolves to an invalid key and the trigger never fires — silently, with no in-game error. Write the key and the modifiers separately.
>
> `modifiers` must be an array of strings, and only `"Ctrl"`, `"Shift"` and `"Alt"` are recognised — spelled exactly like that, since the game matches them case-sensitively. Matching is exact: with `"modifiers": ["Ctrl"]` the trigger fires on Ctrl+M but not on Ctrl+Shift+M, and a `keybind` with no `modifiers` does *not* fire while Ctrl, Shift or Alt is held.

Use `command` when the player or another tool should open it by command:

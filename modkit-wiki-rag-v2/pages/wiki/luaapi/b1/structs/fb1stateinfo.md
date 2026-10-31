---
document_id: "eef0d90727b7e22d1e1866aa6b01efbb1a998b4bc01d2f701d58dab3338f5294"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateinfo"
title: "FB1StateInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:33+00:00"
content_sha256: "c667f52179fa249d756be00e777f3a9fa7aaf9d6de0fd7c2fb8bedd83440fc07"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1stateinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a named state, the scripts that run on entry and exit, and the visual variations applied.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`DisplayNameTextId``string`(Optional) Overrides the object's display name while this state is active. Falls back to Object.DisplayNameTextId when empty.`EndScriptId``string`The script ID executed when exiting this state.`StartScriptId``string`The script ID executed when entering this state.`StateName``string`The name identifier for this state.`StateVariations``FB1StateVariationInfo[]`The list of visual variations applied when this state is active.`bNeedTickUpdate``boolean`Whether this state requires per-tick updates. |
| --- |
| `DisplayNameTextId``string`(Optional) Overrides the object's display name while this state is active. Falls back to Object.DisplayNameTextId when empty.`EndScriptId``string`The script ID executed when exiting this state.`StartScriptId``string`The script ID executed when entering this state.`StateName``string`The name identifier for this state.`StateVariations``FB1StateVariationInfo[]`The list of visual variations applied when this state is active.`bNeedTickUpdate``boolean`Whether this state requires per-tick updates. |
| `EndScriptId``string`The script ID executed when exiting this state.`StartScriptId``string`The script ID executed when entering this state.`StateName``string`The name identifier for this state.`StateVariations``FB1StateVariationInfo[]`The list of visual variations applied when this state is active.`bNeedTickUpdate``boolean`Whether this state requires per-tick updates. |
| `StartScriptId``string`The script ID executed when entering this state.`StateName``string`The name identifier for this state.`StateVariations``FB1StateVariationInfo[]`The list of visual variations applied when this state is active.`bNeedTickUpdate``boolean`Whether this state requires per-tick updates. |
| `StateName``string`The name identifier for this state.`StateVariations``FB1StateVariationInfo[]`The list of visual variations applied when this state is active.`bNeedTickUpdate``boolean`Whether this state requires per-tick updates. |
| `StateVariations``FB1StateVariationInfo[]`The list of visual variations applied when this state is active.`bNeedTickUpdate``boolean`Whether this state requires per-tick updates. |
| `bNeedTickUpdate``boolean`Whether this state requires per-tick updates. |

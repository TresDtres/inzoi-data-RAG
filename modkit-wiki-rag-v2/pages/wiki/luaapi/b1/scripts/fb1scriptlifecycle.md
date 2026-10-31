---
document_id: "3bf179cb7cbe7be215dc94403da2dc5e0f45865e9459deadf1fb3a2b4c78e5a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1scriptlifecycle"
title: "FB1ScriptLifecycle"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:39:44+00:00"
content_sha256: "4aade59844b6a3ea7b99b9e5e8c6b50d7d6215622ea49590360061c94e317e50"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/scripts/fb1scriptlifecycle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Groups script IDs for the four lifecycle phases (Start, Tick, Finish, Cancel) of a game object interaction. Used within object lifecycle scripts table rows to define per-phase script execution.

# Metadata

| FieldValueKind`script`EnvironmentB1 - PresentationCategory`scripts` |
| --- |
| Kind`script`EnvironmentB1 - PresentationCategory`scripts` |
| EnvironmentB1 - PresentationCategory`scripts` |
| Category`scripts` |

# Properties (4)

| NameTypeDescription`CancelScriptIdList``string[]`Array of script IDs executed when the object interaction is cancelled.`FinishScriptIdList``string[]`Array of script IDs executed when the object interaction finishes successfully.`StartScriptIdList``string[]`Array of script IDs executed when the object interaction starts.`TickScriptIdList``string[]`Array of script IDs executed each tick while the object interaction is active. |
| --- |
| `CancelScriptIdList``string[]`Array of script IDs executed when the object interaction is cancelled.`FinishScriptIdList``string[]`Array of script IDs executed when the object interaction finishes successfully.`StartScriptIdList``string[]`Array of script IDs executed when the object interaction starts.`TickScriptIdList``string[]`Array of script IDs executed each tick while the object interaction is active. |
| `FinishScriptIdList``string[]`Array of script IDs executed when the object interaction finishes successfully.`StartScriptIdList``string[]`Array of script IDs executed when the object interaction starts.`TickScriptIdList``string[]`Array of script IDs executed each tick while the object interaction is active. |
| `StartScriptIdList``string[]`Array of script IDs executed when the object interaction starts.`TickScriptIdList``string[]`Array of script IDs executed each tick while the object interaction is active. |
| `TickScriptIdList``string[]`Array of script IDs executed each tick while the object interaction is active. |

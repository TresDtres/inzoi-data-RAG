---
document_id: "6d3f21e491c6f3a4bd98745ddd35b87b01b6fa5b3abeb91935654f91d9fd4091"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walkaroundlocation"
title: "FB2Action_WalkAroundLocation"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:08+00:00"
content_sha256: "dd0e5b9aa8d7d908678c558ec44a393547e75fccb5dd54bf2a82176e253bbeb4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-walkaroundlocation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- WalkAroundLocation action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends`FB2Action_WalkToLocation` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends`FB2Action_WalkToLocation` |
| EnvironmentB2 - SimulationCategory`actions`Extends`FB2Action_WalkToLocation` |
| Category`actions`Extends`FB2Action_WalkToLocation` |
| Extends`FB2Action_WalkToLocation` |

# Properties (3)

| NameTypeDescription`FindPathRetryCount``integer`Remaining retry attempts for finding a valid random destination/path, initialized from UB1InteractionDataAsset::WalkAroundLocationFindPathRetryCount`MaxRadius``number`Maximum wander radius around InitDestination, set from Action.F1 or F2`MinRadius``number`Minimum wander radius around InitDestination, set from Action.F1 when both F1/F2 are given |
| --- |
| `FindPathRetryCount``integer`Remaining retry attempts for finding a valid random destination/path, initialized from UB1InteractionDataAsset::WalkAroundLocationFindPathRetryCount`MaxRadius``number`Maximum wander radius around InitDestination, set from Action.F1 or F2`MinRadius``number`Minimum wander radius around InitDestination, set from Action.F1 when both F1/F2 are given |
| `MaxRadius``number`Maximum wander radius around InitDestination, set from Action.F1 or F2`MinRadius``number`Minimum wander radius around InitDestination, set from Action.F1 when both F1/F2 are given |
| `MinRadius``number`Minimum wander radius around InitDestination, set from Action.F1 when both F1/F2 are given |

---
document_id: "48ec1a60c87fcd9e98a053b516974f7c7f21ddef9edeea2470d778ac12823c63"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cooptablerow"
title: "FB1CoopTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:34+00:00"
content_sha256: "b13d60dd0ade60e835704b0d13b430c229b869e18fb67774450693f90d3cdd8b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cooptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a cooperative action, including all task steps, roles, start/finish scripts, and timeout duration.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (7)

| NameTypeDescription`FinishScriptIds``string[]`Script IDs executed when the cooperative action finishes.`RoleInfos``FB1RoleInfo[]`List of roles required to execute this cooperative action.`StartHowlingInfos``FB1HowlingTriggerInfo[]`Howling triggers auto-activated when this coop branch starts. Auto-recovered on MainInteraction finish.`StartScriptIds``string[]`Script IDs executed when the cooperative action starts.`TaskInfos``FB1TaskInfo[]`Ordered list of task steps that make up this cooperative action.`TimeOutDuration``integer`Maximum duration before the cooperative action times out (in game-time minutes).`bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |
| --- |
| `FinishScriptIds``string[]`Script IDs executed when the cooperative action finishes.`RoleInfos``FB1RoleInfo[]`List of roles required to execute this cooperative action.`StartHowlingInfos``FB1HowlingTriggerInfo[]`Howling triggers auto-activated when this coop branch starts. Auto-recovered on MainInteraction finish.`StartScriptIds``string[]`Script IDs executed when the cooperative action starts.`TaskInfos``FB1TaskInfo[]`Ordered list of task steps that make up this cooperative action.`TimeOutDuration``integer`Maximum duration before the cooperative action times out (in game-time minutes).`bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |
| `RoleInfos``FB1RoleInfo[]`List of roles required to execute this cooperative action.`StartHowlingInfos``FB1HowlingTriggerInfo[]`Howling triggers auto-activated when this coop branch starts. Auto-recovered on MainInteraction finish.`StartScriptIds``string[]`Script IDs executed when the cooperative action starts.`TaskInfos``FB1TaskInfo[]`Ordered list of task steps that make up this cooperative action.`TimeOutDuration``integer`Maximum duration before the cooperative action times out (in game-time minutes).`bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |
| `StartHowlingInfos``FB1HowlingTriggerInfo[]`Howling triggers auto-activated when this coop branch starts. Auto-recovered on MainInteraction finish.`StartScriptIds``string[]`Script IDs executed when the cooperative action starts.`TaskInfos``FB1TaskInfo[]`Ordered list of task steps that make up this cooperative action.`TimeOutDuration``integer`Maximum duration before the cooperative action times out (in game-time minutes).`bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |
| `StartScriptIds``string[]`Script IDs executed when the cooperative action starts.`TaskInfos``FB1TaskInfo[]`Ordered list of task steps that make up this cooperative action.`TimeOutDuration``integer`Maximum duration before the cooperative action times out (in game-time minutes).`bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |
| `TaskInfos``FB1TaskInfo[]`Ordered list of task steps that make up this cooperative action.`TimeOutDuration``integer`Maximum duration before the cooperative action times out (in game-time minutes).`bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |
| `TimeOutDuration``integer`Maximum duration before the cooperative action times out (in game-time minutes).`bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |
| `bSkipAutoPutDown``boolean`When true, skip auto put-down (empty hands) at the start of this coop. |

---
document_id: "1238137b479c1343f621f9c7de7877b8a01723806506f59ca1532a51814eb2aa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missiontablerow"
title: "FB1MissionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:28+00:00"
content_sha256: "f42706a1810f8c2f9a79d073dc137cc0d947ca76cefa710276f8db755dcfa995"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1missiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining a standard mission and its required conditions. Supports targeting a specific entity for missions that involve interactions with a particular character.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`Conditions``FB1MissionConditionData[]`List of conditions that must all be met to complete this mission.`IsTargetEntityMission``boolean`Whether this mission targets a specific entity for its condition evaluation. |
| --- |
| `Conditions``FB1MissionConditionData[]`List of conditions that must all be met to complete this mission.`IsTargetEntityMission``boolean`Whether this mission targets a specific entity for its condition evaluation. |
| `IsTargetEntityMission``boolean`Whether this mission targets a specific entity for its condition evaluation. |

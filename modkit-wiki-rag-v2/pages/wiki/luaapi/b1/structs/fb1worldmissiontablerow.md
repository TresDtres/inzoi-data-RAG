---
document_id: "ef3b2e0838b1c347316f85ab40f057f4d192757dd2f26970c332af015435cbbf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1worldmissiontablerow"
title: "FB1WorldMissionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:52+00:00"
content_sha256: "c1ed820280f70565d8b0879efe1ce5039dc444b3a69101cc386cd49e2f87693e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1worldmissiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining a world mission, including its check scope, conditions, and completion script. World missions are shared goals that can be triggered when any one character completes them.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`CheckType`[`EB1WorldMissionCheckType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1worldmissionchecktype)Scope at which this world mission is evaluated (Character, Family, or World).`CompleteMissionId``string`ID of the world mission script to execute upon completion.`Conditions``FB1MissionConditionData[]`List of conditions that must all be satisfied to complete this world mission.`PlayingNotOldestFamilySystemMessageId``string`String table key for the system message shown when a non-oldest family member triggers this mission.`RepeatCount``integer`Maximum number of times this mission can repeat; 0 means unlimited.`bIsRepeat``boolean`Whether this mission repeats after completion. |
| --- |
| `CheckType`[`EB1WorldMissionCheckType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1worldmissionchecktype)Scope at which this world mission is evaluated (Character, Family, or World).`CompleteMissionId``string`ID of the world mission script to execute upon completion.`Conditions``FB1MissionConditionData[]`List of conditions that must all be satisfied to complete this world mission.`PlayingNotOldestFamilySystemMessageId``string`String table key for the system message shown when a non-oldest family member triggers this mission.`RepeatCount``integer`Maximum number of times this mission can repeat; 0 means unlimited.`bIsRepeat``boolean`Whether this mission repeats after completion. |
| `CompleteMissionId``string`ID of the world mission script to execute upon completion.`Conditions``FB1MissionConditionData[]`List of conditions that must all be satisfied to complete this world mission.`PlayingNotOldestFamilySystemMessageId``string`String table key for the system message shown when a non-oldest family member triggers this mission.`RepeatCount``integer`Maximum number of times this mission can repeat; 0 means unlimited.`bIsRepeat``boolean`Whether this mission repeats after completion. |
| `Conditions``FB1MissionConditionData[]`List of conditions that must all be satisfied to complete this world mission.`PlayingNotOldestFamilySystemMessageId``string`String table key for the system message shown when a non-oldest family member triggers this mission.`RepeatCount``integer`Maximum number of times this mission can repeat; 0 means unlimited.`bIsRepeat``boolean`Whether this mission repeats after completion. |
| `PlayingNotOldestFamilySystemMessageId``string`String table key for the system message shown when a non-oldest family member triggers this mission.`RepeatCount``integer`Maximum number of times this mission can repeat; 0 means unlimited.`bIsRepeat``boolean`Whether this mission repeats after completion. |
| `RepeatCount``integer`Maximum number of times this mission can repeat; 0 means unlimited.`bIsRepeat``boolean`Whether this mission repeats after completion. |
| `bIsRepeat``boolean`Whether this mission repeats after completion. |

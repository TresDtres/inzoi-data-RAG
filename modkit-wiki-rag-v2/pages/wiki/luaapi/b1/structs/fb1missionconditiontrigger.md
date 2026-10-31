---
document_id: "dbb75649ad8499f98c700b354ec8ef4a660c3dc4317b50450e64a0fc7ce80cdb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditiontrigger"
title: "FB1MissionConditionTrigger"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:28+00:00"
content_sha256: "d024b7d6c205bfe7cd0af70b026a158b09906ce95d79f36300b6befccf4aadc5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1missionconditiontrigger"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Trigger payload carrying a mission condition update event, including the mission ID and count delta. Used to propagate condition changes to the mission tracking system.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`CondData`[`FB1MissionConditionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditiondata)Condition data describing which specific condition is being updated.`Count``integer`Amount of progress to add or remove for the condition.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Identifier of the mission to which this trigger applies.`bIsAdd``boolean`Whether this trigger is adding (true) or removing (false) progress. |
| --- |
| `CondData`[`FB1MissionConditionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditiondata)Condition data describing which specific condition is being updated.`Count``integer`Amount of progress to add or remove for the condition.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Identifier of the mission to which this trigger applies.`bIsAdd``boolean`Whether this trigger is adding (true) or removing (false) progress. |
| `Count``integer`Amount of progress to add or remove for the condition.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Identifier of the mission to which this trigger applies.`bIsAdd``boolean`Whether this trigger is adding (true) or removing (false) progress. |
| `MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Identifier of the mission to which this trigger applies.`bIsAdd``boolean`Whether this trigger is adding (true) or removing (false) progress. |
| `bIsAdd``boolean`Whether this trigger is adding (true) or removing (false) progress. |

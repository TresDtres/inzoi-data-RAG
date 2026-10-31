---
document_id: "5e27d3d7a89dcbfbd09f430201a1927321232c21fb58b641b0286fff170c3911"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1reservequest"
title: "FB1ReserveQuest"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:15+00:00"
content_sha256: "58795ccb82f734aaca1ffa0f008146d2ce781518140e771e167f7890a6a3cab7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1reservequest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A compact version of FB1QuestInfo used for reserving quest execution, storing timing ticks and task identity.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`EndTick``integer`The game tick at which this reserved quest ends.`MissionParam``string`An optional parameter passed to the mission.`MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)The mission type of this reserved quest.`QuestId``string`The quest data table ID for this reserved quest.`QuestTask`[`FB1QuestTask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questtask)The quest task definition for this reserved quest (a quest can use ExpireDay; this holds its tick value).`StartTick``integer`The game tick at which this reserved quest starts. |
| --- |
| `EndTick``integer`The game tick at which this reserved quest ends.`MissionParam``string`An optional parameter passed to the mission.`MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)The mission type of this reserved quest.`QuestId``string`The quest data table ID for this reserved quest.`QuestTask`[`FB1QuestTask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questtask)The quest task definition for this reserved quest (a quest can use ExpireDay; this holds its tick value).`StartTick``integer`The game tick at which this reserved quest starts. |
| `MissionParam``string`An optional parameter passed to the mission.`MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)The mission type of this reserved quest.`QuestId``string`The quest data table ID for this reserved quest.`QuestTask`[`FB1QuestTask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questtask)The quest task definition for this reserved quest (a quest can use ExpireDay; this holds its tick value).`StartTick``integer`The game tick at which this reserved quest starts. |
| `MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)The mission type of this reserved quest.`QuestId``string`The quest data table ID for this reserved quest.`QuestTask`[`FB1QuestTask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questtask)The quest task definition for this reserved quest (a quest can use ExpireDay; this holds its tick value).`StartTick``integer`The game tick at which this reserved quest starts. |
| `QuestId``string`The quest data table ID for this reserved quest.`QuestTask`[`FB1QuestTask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questtask)The quest task definition for this reserved quest (a quest can use ExpireDay; this holds its tick value).`StartTick``integer`The game tick at which this reserved quest starts. |
| `QuestTask`[`FB1QuestTask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questtask)The quest task definition for this reserved quest (a quest can use ExpireDay; this holds its tick value).`StartTick``integer`The game tick at which this reserved quest starts. |
| `StartTick``integer`The game tick at which this reserved quest starts. |

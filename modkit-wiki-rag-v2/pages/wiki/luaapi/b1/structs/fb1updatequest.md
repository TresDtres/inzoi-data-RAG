---
document_id: "9a90861d4f5f5902484c751e96961f1839437d60c28b0d36fb1334ad336493a3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1updatequest"
title: "FB1UpdateQuest"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:45+00:00"
content_sha256: "e86236192b36a959b24e7c685766fdec552f3c38ca7997a636785aa427e81d2f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1updatequest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents an incremental update to a quest's history, identifying the quest, mission, removal state, and updated history element.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`HistoryElement`[`FB1QuestHistoryElement`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questhistoryelement)The updated history element data for this quest task.`IsRemoveQuest``boolean`Whether this update represents the removal of the quest.`MissionDtId``string`The data table ID of the mission within the quest being updated.`QuestId``string`The data table ID of the quest being updated. |
| --- |
| `HistoryElement`[`FB1QuestHistoryElement`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questhistoryelement)The updated history element data for this quest task.`IsRemoveQuest``boolean`Whether this update represents the removal of the quest.`MissionDtId``string`The data table ID of the mission within the quest being updated.`QuestId``string`The data table ID of the quest being updated. |
| `IsRemoveQuest``boolean`Whether this update represents the removal of the quest.`MissionDtId``string`The data table ID of the mission within the quest being updated.`QuestId``string`The data table ID of the quest being updated. |
| `MissionDtId``string`The data table ID of the mission within the quest being updated.`QuestId``string`The data table ID of the quest being updated. |
| `QuestId``string`The data table ID of the quest being updated. |

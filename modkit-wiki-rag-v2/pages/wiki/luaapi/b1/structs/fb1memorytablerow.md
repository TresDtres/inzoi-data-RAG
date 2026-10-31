---
document_id: "2f60ee47fa2008ed8b53610f2df1d76de41a342c0df55d272409e6ccbcc53c52"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorytablerow"
title: "FB1MemoryTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:26+00:00"
content_sha256: "1a029489e8606d560b6bc1325aba3b9da8a8e6218fc7310fea6fb9d9055931c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1memorytablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a memory data table row. Specifies the mood step, relationship category, trigger conditions, target, and display data for a memory.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`DisplayData`[`FB1MemoryDisplayData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorydisplaydata)Display data for this memory shown in the UI.`MoodStep`[`EB1MemoryMoodStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorymoodstep)Conversation mood step that applies when this memory is created.`RelationshipCategory``string`Relationship category associated with this memory.`TriggerData`[`FB1MemoryTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorytriggerdata)Trigger data specifying when and how this memory is added.`TriggerTarget`[`EB1MemoryTriggerTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorytriggertarget)Target entity to receive this memory when triggered by conversation. |
| --- |
| `DisplayData`[`FB1MemoryDisplayData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorydisplaydata)Display data for this memory shown in the UI.`MoodStep`[`EB1MemoryMoodStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorymoodstep)Conversation mood step that applies when this memory is created.`RelationshipCategory``string`Relationship category associated with this memory.`TriggerData`[`FB1MemoryTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorytriggerdata)Trigger data specifying when and how this memory is added.`TriggerTarget`[`EB1MemoryTriggerTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorytriggertarget)Target entity to receive this memory when triggered by conversation. |
| `MoodStep`[`EB1MemoryMoodStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorymoodstep)Conversation mood step that applies when this memory is created.`RelationshipCategory``string`Relationship category associated with this memory.`TriggerData`[`FB1MemoryTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorytriggerdata)Trigger data specifying when and how this memory is added.`TriggerTarget`[`EB1MemoryTriggerTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorytriggertarget)Target entity to receive this memory when triggered by conversation. |
| `RelationshipCategory``string`Relationship category associated with this memory.`TriggerData`[`FB1MemoryTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorytriggerdata)Trigger data specifying when and how this memory is added.`TriggerTarget`[`EB1MemoryTriggerTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorytriggertarget)Target entity to receive this memory when triggered by conversation. |
| `TriggerData`[`FB1MemoryTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1memorytriggerdata)Trigger data specifying when and how this memory is added.`TriggerTarget`[`EB1MemoryTriggerTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorytriggertarget)Target entity to receive this memory when triggered by conversation. |
| `TriggerTarget`[`EB1MemoryTriggerTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1memorytriggertarget)Target entity to receive this memory when triggered by conversation. |

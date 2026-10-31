---
document_id: "4b79fb5f712ac00fec640af96980aead652c57f6cfd4d70332c7b3a98113558a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateventtablerow"
title: "FB1StatEventTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:34+00:00"
content_sha256: "443c6928f796f9c82aa7e7b34487260eab695fcbf21d9a661a0a9e72ed7b6a3d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1stateventtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining a stat-driven event, including trigger data, conditions, and executed effects.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`EventConditions``FB1Condition[]`The list of conditions that must be satisfied for this event to fire.`EventExecutes``FB1Execute[]`The list of effects executed when this stat event fires.`TriggerData`[`FB1StatEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateventtriggerdata)The trigger data defining when and how this stat event fires. |
| --- |
| `EventConditions``FB1Condition[]`The list of conditions that must be satisfied for this event to fire.`EventExecutes``FB1Execute[]`The list of effects executed when this stat event fires.`TriggerData`[`FB1StatEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateventtriggerdata)The trigger data defining when and how this stat event fires. |
| `EventExecutes``FB1Execute[]`The list of effects executed when this stat event fires.`TriggerData`[`FB1StatEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateventtriggerdata)The trigger data defining when and how this stat event fires. |
| `TriggerData`[`FB1StatEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateventtriggerdata)The trigger data defining when and how this stat event fires. |

---
document_id: "e81296cc7919a6746dd6f36e6d74b7307ce6387deb82e8bf198d5222f95ba70d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtablerow"
title: "FB1RelationshipEventTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:13+00:00"
content_sha256: "ec369125684e89ee4b011332adbb9f11ce5e020c416196275efe2967d10565f1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipeventtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DataTable row defining a relationship event, its trigger conditions, and execution scripts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`EventConditions``FB1Condition[]`Additional conditions that must be satisfied for the event to occur.`EventExecutes``FB1Execute[]`Scripts executed when the event fires.`TriggerData`[`FB1RelationshipEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggerdata)The trigger data that determines when this relationship event fires. |
| --- |
| `EventConditions``FB1Condition[]`Additional conditions that must be satisfied for the event to occur.`EventExecutes``FB1Execute[]`Scripts executed when the event fires.`TriggerData`[`FB1RelationshipEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggerdata)The trigger data that determines when this relationship event fires. |
| `EventExecutes``FB1Execute[]`Scripts executed when the event fires.`TriggerData`[`FB1RelationshipEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggerdata)The trigger data that determines when this relationship event fires. |
| `TriggerData`[`FB1RelationshipEventTriggerData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggerdata)The trigger data that determines when this relationship event fires. |

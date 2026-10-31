---
document_id: "08404bac17136d03908fd9225a1902ea6ea69d8619f604b7f67977cd4f5c522c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1hopeslotinfo"
title: "FB1HopeSlotInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:07+00:00"
content_sha256: "9847697c09062cf831597d12133ba703fb3d8d2ad7e8e689c6f6812e3b51a0dc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1hopeslotinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores runtime state for a single hope slot, including the active hope ID, expiry time, fixed-hope flag, mission ID, and the entity that caused the hope.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`HopeExpireTime``integer`Game tick at which this hope expires.`HopeId``string`Identifier of the hope currently occupying this slot.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Mission ID associated with this hope slot.`ReasonTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character that triggered this hope.`bFixedHope``boolean`Whether this hope is fixed and cannot be replaced automatically. |
| --- |
| `HopeExpireTime``integer`Game tick at which this hope expires.`HopeId``string`Identifier of the hope currently occupying this slot.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Mission ID associated with this hope slot.`ReasonTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character that triggered this hope.`bFixedHope``boolean`Whether this hope is fixed and cannot be replaced automatically. |
| `HopeId``string`Identifier of the hope currently occupying this slot.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Mission ID associated with this hope slot.`ReasonTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character that triggered this hope.`bFixedHope``boolean`Whether this hope is fixed and cannot be replaced automatically. |
| `MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Mission ID associated with this hope slot.`ReasonTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character that triggered this hope.`bFixedHope``boolean`Whether this hope is fixed and cannot be replaced automatically. |
| `ReasonTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character that triggered this hope.`bFixedHope``boolean`Whether this hope is fixed and cannot be replaced automatically. |
| `bFixedHope``boolean`Whether this hope is fixed and cannot be replaced automatically. |

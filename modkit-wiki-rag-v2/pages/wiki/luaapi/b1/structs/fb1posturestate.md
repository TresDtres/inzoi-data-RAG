---
document_id: "864fc757225bdd78482fde49d2db8b2b69382672f22fb5040d5fe9fb8e32c3e8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1posturestate"
title: "FB1PostureState"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:05+00:00"
content_sha256: "b3c3fc7ccd04c9fdb211476f595e251124bfb4fa2574ad1f8ecaa4a2715e3312"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1posturestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents the current posture state of a character, storing the posture ID, type, direction, target entity, and occupied slot.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`BaseComponentName``string`The name of the base object component that provides the occupied slot.`Direction`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)The directional orientation of the current posture.`LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`OccupyingSlot``string`The slot name currently occupied by this posture.`PostureId``string`The ID of the current posture.`PostureTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the target object or character this posture is directed toward. |
| --- |
| `BaseComponentName``string`The name of the base object component that provides the occupied slot.`Direction`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)The directional orientation of the current posture.`LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`OccupyingSlot``string`The slot name currently occupied by this posture.`PostureId``string`The ID of the current posture.`PostureTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the target object or character this posture is directed toward. |
| `Direction`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)The directional orientation of the current posture.`LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`OccupyingSlot``string`The slot name currently occupied by this posture.`PostureId``string`The ID of the current posture.`PostureTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the target object or character this posture is directed toward. |
| `LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`OccupyingSlot``string`The slot name currently occupied by this posture.`PostureId``string`The ID of the current posture.`PostureTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the target object or character this posture is directed toward. |
| `OccupyingSlot``string`The slot name currently occupied by this posture.`PostureId``string`The ID of the current posture.`PostureTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the target object or character this posture is directed toward. |
| `PostureId``string`The ID of the current posture.`PostureTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the target object or character this posture is directed toward. |
| `PostureTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the target object or character this posture is directed toward. |

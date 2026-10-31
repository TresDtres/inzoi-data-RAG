---
document_id: "84e8e468dbfe738ef42a18a466dbba7ed2a6760e956cd17bcc6bdb6d1c2bc1f4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1interactionslotdata"
title: "FB1InteractionSlotData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:12+00:00"
content_sha256: "0f87920f6df22942681df226cb214f40ba1e4024a389fe098030dae703f098f0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1interactionslotdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Configuration data for an interaction slot, defining its group, body age requirements, and space requirements.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`BodyAge`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)The body age type required to use this interaction slot.`EnableOnlyInteractionTags``string[]`Tags that restrict this slot to only be enabled during interactions with matching tags.`RequireSpace``boolean`Whether this slot requires physical space around it.`ShowDisabledSlot``boolean`Whether to render the slot even when it is in a disabled state.`ShowRequireSpace`[`EB1ShowRequireSpaceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1showrequirespacetype)How the required space should be visualized when RequireSpace is enabled.`SlotGroupId``string`The group ID this interaction slot belongs to.`SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |
| --- |
| `BodyAge`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)The body age type required to use this interaction slot.`EnableOnlyInteractionTags``string[]`Tags that restrict this slot to only be enabled during interactions with matching tags.`RequireSpace``boolean`Whether this slot requires physical space around it.`ShowDisabledSlot``boolean`Whether to render the slot even when it is in a disabled state.`ShowRequireSpace`[`EB1ShowRequireSpaceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1showrequirespacetype)How the required space should be visualized when RequireSpace is enabled.`SlotGroupId``string`The group ID this interaction slot belongs to.`SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |
| `EnableOnlyInteractionTags``string[]`Tags that restrict this slot to only be enabled during interactions with matching tags.`RequireSpace``boolean`Whether this slot requires physical space around it.`ShowDisabledSlot``boolean`Whether to render the slot even when it is in a disabled state.`ShowRequireSpace`[`EB1ShowRequireSpaceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1showrequirespacetype)How the required space should be visualized when RequireSpace is enabled.`SlotGroupId``string`The group ID this interaction slot belongs to.`SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |
| `RequireSpace``boolean`Whether this slot requires physical space around it.`ShowDisabledSlot``boolean`Whether to render the slot even when it is in a disabled state.`ShowRequireSpace`[`EB1ShowRequireSpaceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1showrequirespacetype)How the required space should be visualized when RequireSpace is enabled.`SlotGroupId``string`The group ID this interaction slot belongs to.`SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |
| `ShowDisabledSlot``boolean`Whether to render the slot even when it is in a disabled state.`ShowRequireSpace`[`EB1ShowRequireSpaceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1showrequirespacetype)How the required space should be visualized when RequireSpace is enabled.`SlotGroupId``string`The group ID this interaction slot belongs to.`SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |
| `ShowRequireSpace`[`EB1ShowRequireSpaceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1showrequirespacetype)How the required space should be visualized when RequireSpace is enabled.`SlotGroupId``string`The group ID this interaction slot belongs to.`SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |
| `SlotGroupId``string`The group ID this interaction slot belongs to.`SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |
| `SlotOwnershipTag``string`The ownership tag assigned to the character occupying this slot. |

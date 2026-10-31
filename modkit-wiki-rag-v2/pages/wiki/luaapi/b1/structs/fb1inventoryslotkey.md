---
document_id: "237a03386ce2c059cc09a948b5afbc1825e6317de20b96a2c75ea31e07e9ce0f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1inventoryslotkey"
title: "FB1InventorySlotKey"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:13+00:00"
content_sha256: "0070f1e2627740108059cc98c75b96239c3d8268fe7320ef8adcf8ca88ba5191"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1inventoryslotkey"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a unique key for an inventory slot. Used to identify and differentiate items in inventory, supporting both stackable and non-stackable items.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the item (used for non-stackable items).`ObjectDtId``string`Data table ID of the object template for this slot key.`ObjectStateGroupId``string`Object state group ID used to differentiate state groups (used for stackable items).`ObjectStateId``string`Object state ID used to distinguish items by state (used for stackable items).`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data used to distinguish items by owner (used for stackable items). |
| --- |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the item (used for non-stackable items).`ObjectDtId``string`Data table ID of the object template for this slot key.`ObjectStateGroupId``string`Object state group ID used to differentiate state groups (used for stackable items).`ObjectStateId``string`Object state ID used to distinguish items by state (used for stackable items).`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data used to distinguish items by owner (used for stackable items). |
| `ObjectDtId``string`Data table ID of the object template for this slot key.`ObjectStateGroupId``string`Object state group ID used to differentiate state groups (used for stackable items).`ObjectStateId``string`Object state ID used to distinguish items by state (used for stackable items).`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data used to distinguish items by owner (used for stackable items). |
| `ObjectStateGroupId``string`Object state group ID used to differentiate state groups (used for stackable items).`ObjectStateId``string`Object state ID used to distinguish items by state (used for stackable items).`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data used to distinguish items by owner (used for stackable items). |
| `ObjectStateId``string`Object state ID used to distinguish items by state (used for stackable items).`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data used to distinguish items by owner (used for stackable items). |
| `OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data used to distinguish items by owner (used for stackable items). |

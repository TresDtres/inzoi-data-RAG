---
document_id: "12a95a17124c5e569f1dff7c6464fc46299b442e7fd4d084c169506ef52f6ec1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1inventoryinfo"
title: "FB1InventoryInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:13+00:00"
content_sha256: "dfe28e4443c489dc9959592c1ce43f49b73324be3c84d6dff16f3b9d1b52ceaf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1inventoryinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that stores runtime inventory information for an entity. Contains the inventory data table ID, the entity IDs, and the list of owned items.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the inventory container itself.`InventoryDtId``string`Data table ID of the inventory definition.`OwnedEntities``FB1InventoryEntityInfo[]`List of entities currently stored in this inventory.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner of this inventory. |
| --- |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the inventory container itself.`InventoryDtId``string`Data table ID of the inventory definition.`OwnedEntities``FB1InventoryEntityInfo[]`List of entities currently stored in this inventory.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner of this inventory. |
| `InventoryDtId``string`Data table ID of the inventory definition.`OwnedEntities``FB1InventoryEntityInfo[]`List of entities currently stored in this inventory.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner of this inventory. |
| `OwnedEntities``FB1InventoryEntityInfo[]`List of entities currently stored in this inventory.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner of this inventory. |
| `OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner of this inventory. |

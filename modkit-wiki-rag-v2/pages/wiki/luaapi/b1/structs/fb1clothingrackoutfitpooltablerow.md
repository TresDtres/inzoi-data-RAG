---
document_id: "0529f40715a30fd84f234b555a3dd0eaf58aeb5ea0dd5d2c7043fee0b5db03b0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1clothingrackoutfitpooltablerow"
title: "FB1ClothingRackOutfitPoolTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:30+00:00"
content_sha256: "a991609e66a0e67f95741f191c7e995cd8eeefa8ec096676b950235a3ac790b8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1clothingrackoutfitpooltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Candidate pool for the clothing rack (outfit-purchase ContentPicker). Filtered by the interaction Execute's S1 (PoolGroupId); if S1 is None, all rows are candidates. One row = one candidate item shown in the ContentPicker. Depending on ItemType, identified as a garment (GarmentType+MeshId) or an attached accessory (MeshId). The thumbnail is not held by the row but taken from the corresponding mesh table row (GarmentMesh/AttachedAccessoryMesh). Behavior: always unlocks the item (CAZ exposure); for purchase+wear, swaps only that part of the currently worn outfit.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`GarmentType`[`EB1GarmentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1garmenttype)Part type of the candidate garment (Top/Bottom/Jacket/Shoes/Hat, etc.). Determines which Garment*Mesh table MeshId belongs to.`ItemType`[`EB1ClothingRackItemType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1clothingrackitemtype)Candidate item kind (garment/accessory). Determines which identification field below (Garment* or Accessory*) is used.`MeshId``string`Mesh (variant) Id of the candidate item. If ItemType=Garment, an Id of the Garment*Mesh table for GarmentType; if ItemType=Accessory, an Id of the AttachedAccessoryMesh table (AccessoryType is derived from that mesh row).`PoolGroupId``string`Clothing-rack group identifier. Only rows matching the interaction Execute's S1 are collected as candidates (if S1=None, all are collected). |
| --- |
| `GarmentType`[`EB1GarmentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1garmenttype)Part type of the candidate garment (Top/Bottom/Jacket/Shoes/Hat, etc.). Determines which Garment*Mesh table MeshId belongs to.`ItemType`[`EB1ClothingRackItemType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1clothingrackitemtype)Candidate item kind (garment/accessory). Determines which identification field below (Garment* or Accessory*) is used.`MeshId``string`Mesh (variant) Id of the candidate item. If ItemType=Garment, an Id of the Garment*Mesh table for GarmentType; if ItemType=Accessory, an Id of the AttachedAccessoryMesh table (AccessoryType is derived from that mesh row).`PoolGroupId``string`Clothing-rack group identifier. Only rows matching the interaction Execute's S1 are collected as candidates (if S1=None, all are collected). |
| `ItemType`[`EB1ClothingRackItemType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1clothingrackitemtype)Candidate item kind (garment/accessory). Determines which identification field below (Garment* or Accessory*) is used.`MeshId``string`Mesh (variant) Id of the candidate item. If ItemType=Garment, an Id of the Garment*Mesh table for GarmentType; if ItemType=Accessory, an Id of the AttachedAccessoryMesh table (AccessoryType is derived from that mesh row).`PoolGroupId``string`Clothing-rack group identifier. Only rows matching the interaction Execute's S1 are collected as candidates (if S1=None, all are collected). |
| `MeshId``string`Mesh (variant) Id of the candidate item. If ItemType=Garment, an Id of the Garment*Mesh table for GarmentType; if ItemType=Accessory, an Id of the AttachedAccessoryMesh table (AccessoryType is derived from that mesh row).`PoolGroupId``string`Clothing-rack group identifier. Only rows matching the interaction Execute's S1 are collected as candidates (if S1=None, all are collected). |
| `PoolGroupId``string`Clothing-rack group identifier. Only rows matching the interaction Execute's S1 are collected as candidates (if S1=None, all are collected). |

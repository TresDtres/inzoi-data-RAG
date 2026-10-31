---
document_id: "9d4a0adb7e91059c4db41265775b234594489ecc5561beca4e458a6deba50e26"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1clothingrackoutfitpooltablerow"
title: "B1ClothingRackOutfitPoolTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:07+00:00"
content_sha256: "6bdbc9f768398eb825ea3d1d0d41920952225aea58dd0b46737052a24b7e8832"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1clothingrackoutfitpooltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Clothing rack candidate pool — one row is one ContentPicker candidate item (garment or attached accessory), filtered by the interaction Execute's S1 (PoolGroupId).

| PropertyTypeDescriptionMetadataPoolGroupIdFNameClothing rack group ID; only rows matching the interaction Execute's S1 are collected (S1=None collects all).Category: B1ClothingRackOutfitPoolTableRowItemTypeEB1ClothingRackItemTypeCandidate item kind (garment/accessory); decides which identity fields (Garment/Accessory) apply.Category: B1ClothingRackOutfitPoolTableRowGarmentTypeEB1GarmentType[ItemType=Garment only] garment part type (Top/Bottom/Jacket/Shoes/Hat...); selects which Garment*Mesh table MeshId belongs to.Category: B1ClothingRackOutfitPoolTableRowMeshIdFNameCandidate item mesh (variant) ID; a Garment*Mesh row ID for Garment, or an AttachedAccessoryMesh row ID for Accessory.Category: B1ClothingRackOutfitPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| PoolGroupIdFNameClothing rack group ID; only rows matching the interaction Execute's S1 are collected (S1=None collects all).Category: B1ClothingRackOutfitPoolTableRowItemTypeEB1ClothingRackItemTypeCandidate item kind (garment/accessory); decides which identity fields (Garment/Accessory) apply.Category: B1ClothingRackOutfitPoolTableRowGarmentTypeEB1GarmentType[ItemType=Garment only] garment part type (Top/Bottom/Jacket/Shoes/Hat...); selects which Garment*Mesh table MeshId belongs to.Category: B1ClothingRackOutfitPoolTableRowMeshIdFNameCandidate item mesh (variant) ID; a Garment*Mesh row ID for Garment, or an AttachedAccessoryMesh row ID for Accessory.Category: B1ClothingRackOutfitPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ItemTypeEB1ClothingRackItemTypeCandidate item kind (garment/accessory); decides which identity fields (Garment/Accessory) apply.Category: B1ClothingRackOutfitPoolTableRowGarmentTypeEB1GarmentType[ItemType=Garment only] garment part type (Top/Bottom/Jacket/Shoes/Hat...); selects which Garment*Mesh table MeshId belongs to.Category: B1ClothingRackOutfitPoolTableRowMeshIdFNameCandidate item mesh (variant) ID; a Garment*Mesh row ID for Garment, or an AttachedAccessoryMesh row ID for Accessory.Category: B1ClothingRackOutfitPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| GarmentTypeEB1GarmentType[ItemType=Garment only] garment part type (Top/Bottom/Jacket/Shoes/Hat...); selects which Garment*Mesh table MeshId belongs to.Category: B1ClothingRackOutfitPoolTableRowMeshIdFNameCandidate item mesh (variant) ID; a Garment*Mesh row ID for Garment, or an AttachedAccessoryMesh row ID for Accessory.Category: B1ClothingRackOutfitPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| MeshIdFNameCandidate item mesh (variant) ID; a Garment*Mesh row ID for Garment, or an AttachedAccessoryMesh row ID for Accessory.Category: B1ClothingRackOutfitPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)

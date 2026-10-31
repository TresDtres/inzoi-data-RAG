---
document_id: "e765303bb2211bc6fbd4b8a0a391acf53bb779330bdab3a0d0d4974a2aa24915"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/attachedaccessorymesh"
title: "📘 AttachedAccessoryMesh Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:20+00:00"
content_sha256: "447827882b963a7d675d7f049ecede43832aca653103376496a6eaae758782c1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/attachedaccessorymesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AttachedAccessoryMeshTableRow

Data for attached accessory mesh equipped on the character.

### Properties

- **Id** (`FName`): Unique identifier for this accessory mesh entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Preview image used in the customization UI. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description of the accessory mesh. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender that this accessory mesh applies to.
- **BodyAgeType** (`EB1BodyAgeType`): Age group that this accessory mesh is valid for.
- **SubCategories** (`TArray<FName>`): UI subcategory filters. *(Foreign = "GarmentSubCategory.Id")*
- **AccessoryType** (`FName`): Type of the attached accessory (e.g., glasses, earrings)
- **OverrideMaterial** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): List of materials that override the default materials for the accessory mesh.
- **SocketByMesh** (`TMap<FName, TSoftObjectPtr<UStaticMesh>>`): Accessory mesh assets for each socket bone where the accessory is attached.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the attached accessory mesh. *(Foreign = "AttachedAccessoryMesh.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the attached accessory mesh. *(Foreign = "AttachedAccessoryMesh.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAttached[AttachedAccessory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/attachedaccessory)[FB1AttachedAccessoryChannelData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachedaccessorychanneldata)[FB1AttachedAccessoryMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachedaccessorymeshtablerow)[FB1AttachedAccessoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachedaccessorytablerow)

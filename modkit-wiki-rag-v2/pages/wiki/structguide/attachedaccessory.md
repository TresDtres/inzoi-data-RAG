---
document_id: "e189cf7bc38e9169aa509f38f142df714a17190de8969ea4f37bd9465969bcd2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/attachedaccessory"
title: "📘 AttachedAccessory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:20+00:00"
content_sha256: "e0a077511b532c10bb35b9052cb9664488e9977d0ea2932302c3b96bbd09420d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/attachedaccessory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AttachedAccessoryTableRow

Data for accessories attached to the character's bone, displayed in the character customization accessory list.

### Properties

- **Id** (`FName`): Unique identifier for this accessory.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for the accessory. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the accessory’s description. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender this accessory is available for.
- **BodyAgeType** (`EB1BodyAgeType`): Body age group that this accessory applies to.
- **SubCategories** (`TArray<FName>`): Subcategory filters used in UI. *(Foreign = "GarmentSubCategory.Id")*
- **AccessoryType** (`FName`): Type of the attached accessory (e.g., glasses, earrings).
- **HiddenFromUI** (`bool`): Whether the accessory is hidden in the character customization accessory list. *(Category = UI)*
- **Variants** (`TArray<FName>`): List of mesh ID variants for the attached accessory, each of which can be equipped on the character. *(Foreign = "AttachedAccessoryMesh.Id")*
- **MaterialSectionGroups** (`TArray<FB1AccessoryMaterialSectionGroup>`): Groups of material sections for customizing the accessory's materials.
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Tags used to filter accessories by outfit category in the character customization accessory list. *(Foreign = "DataFilter.TagList")*
- **OutfitBuffList** (`TArray<FName>`): In-game buffs applied to the character when the accessory is worn. *(Foreign = "Buff.Id")*

## 📚 References

- [FB1AccessoryMaterialSectionGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1accessorymaterialsectiongroup)
- [FB1AttachedAccessoryChannelData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachedaccessorychanneldata)
- [EB1AccessoryMaterialType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1accessorymaterialtype)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)
- [EB1OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1outfitcategory)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAttached[AttachedAccessoryMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/attachedaccessorymesh)[FB1AttachedAccessoryChannelData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachedaccessorychanneldata)[FB1AttachedAccessoryMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachedaccessorymeshtablerow)[FB1AttachedAccessoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachedaccessorytablerow)

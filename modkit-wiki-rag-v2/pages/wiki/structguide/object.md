---
document_id: "194271bca8f9cb032f6141b154cb86c898ae6ae6fe9d641ce471445b8d119b57"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object"
title: "📘 Object Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:54+00:00"
content_sha256: "cc5078bdad97cf0d875d8b01a6ff5121ceea7b825845f2e858789d62b6755b98"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/object"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectTableRow

Defines a placeable or interactive object in the game world, including metadata, asset links, conditions, and pricing.

### Properties

- **Id** (`FName`): Unique identifier for the object. *(L10N_Name = DisplayNameTextId, L10N_Desc = DescriptionTextId)*
- **DisplayNameTextId** (`FString`): Localized name for the object. *(StringTableKey = "Id")*
- **DescriptionTextId** (`FString`): Localized description text. *(StringTableKey = "Id")*
- **StateVariationId** (`FName`): ID linking to visual state variation logic. *(Foreign = "StateVariation.Id")*
- **ObjectTemplateId** (`FName`): Template that provides the base layout and parts. *(Foreign = "ObjectTemplate.Id")*
- **ObjectCategory** (`FName`): Broad category the object belongs to (e.g., Furniture, Structure).
- **FilterCategory** (`FName`): Filter used for UI organization or gameplay restrictions.
- **Asset** (`TSoftObjectPtr<UBlueprint>`): Blueprint asset used to spawn this object.
- **AssetTableId** (`FName`): Row ID in a blueprint asset table (if applicable).
- **DevOnly** (`bool`): If true, the object is only available in development builds.
- **Icon** (`TSoftObjectPtr<UObject>`): Icon shown in placement or inventory UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **ObjectFilterTags** (`TArray<FName>`): Tags for filtering or search functionality.
- **ObjectTags** (`TArray<FName>`): Logical or gameplay tags applied to this object.
- **InitialStatId** (`TArray<FName>`): Stats applied when the object is placed. *(Foreign = "Stat.Id")*
- **AvailableStatId** (`TArray<FName>`): Stats that are monitored while the object is active. *(Foreign = "Stat.Id")*
- **ConditionId** (`FName`): Condition that must be met for this object to appear. *(Foreign = "ObjectCondition.Id")*
- **MaskObjectId** (`FName`): Optional masking rule applied when this object is attached to slots. *(Foreign = "MaskObject.Id")*
- **Quality** (`int32`): Quality level of the object (affects pricing or rewards). *(ClampMin = 0)*
- **Weight** (`int32`): Weight of the object (used for carrying/storage logic). *(ClampMin = 0)*
- **InventoryCount** (`uint8`): Maximum stack count for the inventory. *(ClampMin = 1)*
- **ObjectSoundNotifyId** (`FName`): ID for sound notification rules. *(Foreign = "GameObjectSound.Id")*
- **GrabDtId** (`FName`): Grab data table reference for interaction logic. *(Foreign = "Grab.Id")*
- **TaxId** (`FName`): Identifier for tax classification logic.
- **ObjectWeatheringGroupId** (`FName`): ID for weathering behavior group. *(Foreign = "ObjectWeathering.Id")*
- **PopUpDescriptionId** (`FName`): ID for popup info text. *(Foreign = "ObjectPopUpDescription.Id")*
- **Price** (`int64`): Cost of the object when purchased or placed. *(Private, ClampMin = 0)*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[ObjectBp Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectChangeMeshGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectCustomizeShapeTemplates Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsCustomUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage)[ObjectPartsParamUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartsparamusage)

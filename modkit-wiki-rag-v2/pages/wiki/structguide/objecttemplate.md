---
document_id: "e56dc2c85c4f5704fa0e6081979a851da2cdfd14ea91dc0142f29ceefcd3ca5d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objecttemplate"
title: "📘 ObjectTemplate Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:57+00:00"
content_sha256: "c7b4948c197bafb721bfbc2e27aacc438215c23b0cf031e36c315e6dc20836a4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/objecttemplate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectTemplateTableRow

Defines a reusable template for objects, including their asset, customization settings, and interaction logic.

### Properties

- **Id** (`FName`): Unique identifier for the template.
- **Asset** (`TSoftObjectPtr<UBlueprint>`): Blueprint asset used to instantiate the object.
- **ObjectSelectionSetId** (`FName`): ID of selection set for object replacements. *(Foreign = "ObjectSelectionSet.Id")*
- **ObjectWeatheringGroupId** (`FName`): Weathering behavior group. *(Foreign = "ObjectWeathering.Id")*
- **IsWettable** (`bool`): Whether this object visually reacts to rain or water.
- **CustomizeType** (`EB1ObjectCustomizeType`): Type of customization (e.g., MaterialOnly or Assemble).
- **IsCarriable** (`bool`): If true, this object can be picked up or held.
- **AttachScriptId / DetachScriptId** (`FName`): Scripts run on attach/detach events. *(Foreign = "Script_State.Id")*
- **PlacementFlags** (`int32`): Bitmask flags affecting placement rules. *(BitmaskEnum = EB1PlacementFlag)*
- **FollowSlotRotation** (`bool`): If true, the object aligns to the rotation of its slot.
- **IsDerived** (`bool`): Whether this template inherits from another.
- **ObjectTags** (`TArray<FName>`): Tags applied to this object instance.
- **PlacementGuideTextId** (`FString`): Tooltip or help text when placing the object.
- **OwnershipCategory** (`FName`): Ownership logic category for permissions.
- **bDisableTakeOutOfInventory** (`bool`): If true, prevents removing from inventory.
- **bCanInteractInInventory** (`bool`): If true, allows using this object from the inventory.
- **IgnoreSlotToEntityCheck** (`bool`): Disables validation when occupying a slot.
- **InventroyInteractionBagId** (`FName`): ID of interaction logic when in inventory. *(Foreign = "InteractionBag.Id")*

## 📚 References

- [EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[Object Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object)[ObjectBp Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectChangeMeshGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectCustomizeShapeTemplates Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsCustomUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage)

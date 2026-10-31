---
document_id: "0f721bb1a147a57f73b54ed33433230499c9f25e8bcfae9ac2fa045b331eed65"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/groupedobject"
title: "📘 GroupedObject Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:49+00:00"
content_sha256: "36ba07877283010a8b36112258f2df7ce20bf26680c59568ec18803bba623214"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/groupedobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1GroupedObjectTableRow

Defines an object composed of multiple sub-objects, including visual details and ownership logic.

### Properties

- **Id** (`FName`): Unique identifier for this grouped object.
- **DisplayNameTextId** (`FString`): Localization key for the name of the grouped object. *(StringTableKey = "Id")*
- **DescriptionTextId** (`FString`): Localization key for the description shown in UI. *(StringTableKey = "Id")*
- **ObjectCategory** (`FName`): Main category this object belongs to.
- **FilterCategory** (`FName`): Filter tag used to sort this item in UI.
- **Icon** (`TSoftObjectPtr<UObject>`): Icon displayed in inventory or placement menus. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **ParentObjectId** (`FName`): ID of the base object this entry represents. *(Foreign = "Object.Id")*
- **ChildrenInfos** (`TArray<FB1GroupedChildObjectInfo>`): List of child objects attached to this one.
- **ConditionId** (`FName`): Condition required for this object to appear or become active. *(Foreign = "ObjectCondition.Id")*

## 📚 References

- [FB1GroupedChildObjectInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1groupedchildobjectinfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGrouped[FB1GroupedChildObjectInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1groupedchildobjectinfo)[FB1GroupedObjectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1groupedobjecttablerow)

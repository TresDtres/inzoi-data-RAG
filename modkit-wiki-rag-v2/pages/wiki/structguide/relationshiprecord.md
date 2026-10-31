---
document_id: "07d8f3e98fa3bd63997cec81bed11b7e8696553d59a2001d5100c4a278465717"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshiprecord"
title: "📘 RelationshipRecord Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:01+00:00"
content_sha256: "5ad43a789ed274c6675274b3745d1e1ee58da327fc7d68a739419422ea5e7735"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/relationshiprecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RelationshipRecordTableRow

Defines a record or event that happened between characters in a relationship.

### Properties

- **Id** (`FName`): Unique identifier for the record entry.
- **bIsImportant** (`bool`): If true, this record is flagged as significant.
- **Icon** (`TSoftObjectPtr<UObject>`): Icon displayed with the record. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **TooltipTextId** (`FString`): Localized tooltip text shown in the UI. *(StringTableKey)*
- **DataList** (`TArray<FB1RelationshipRecordBundleData>`): Display text associated with the record.

## 📚 References

- [FB1RelationshipRecordBundleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshiprecordbundledata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRelationship[EB1RelationshipChemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1relationshipchemistry)[Relationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationship)[RelationshipCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcategory)[RelationshipCondition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcondition)[RelationshipEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipevent)[RelationshipGift Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipgift)[RelationshipStat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipstat)[FB1RelationshipAdditionalStatData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipadditionalstatdata)[FB1RelationshipAutoSelectionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipautoselectiondata)[FB1RelationshipBonusMultiplyData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipbonusmultiplydata)[FB1RelationshipCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcategorytablerow)[FB1RelationshipCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcondition)

---
document_id: "b79015a11f9f387b9a9e213f43b0842a4061295d9b58da3ef783562b832524c0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcategory"
title: "📘 RelationshipCategory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:00+00:00"
content_sha256: "b6bebba46bb7502e7036599ec534fef06190af6e9273a4ae941ba305a4bfb558"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/relationshipcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RelationshipCategoryTableRow

Defines metadata for a category of relationships, including exclusivity and decay behavior.

### Properties

- **Id** (`FName`): Unique identifier for the relationship category.
- **IsUniqueInCategory** (`bool`): If true, only one relationship of this category may exist.
- **IsDeleteByDecay** (`bool`): If true, relationships in this category decay and are deleted over time.
- **DescTextId** (`FString`): Localized description for this category. *(StringTableKey = "Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRelationship[EB1RelationshipChemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1relationshipchemistry)[Relationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationship)[RelationshipCondition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcondition)[RelationshipEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipevent)[RelationshipGift Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipgift)[RelationshipRecord Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshiprecord)[RelationshipStat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipstat)[FB1RelationshipAdditionalStatData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipadditionalstatdata)[FB1RelationshipAutoSelectionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipautoselectiondata)[FB1RelationshipBonusMultiplyData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipbonusmultiplydata)[FB1RelationshipCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcategorytablerow)[FB1RelationshipCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcondition)

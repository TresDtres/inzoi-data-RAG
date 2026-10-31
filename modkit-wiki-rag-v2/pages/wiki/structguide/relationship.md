---
document_id: "b2b2f193e30c5e416ed588168f09f9d698f48a069e7f4ed87285eb4ccda4e032"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationship"
title: "📘 Relationship Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:00+00:00"
content_sha256: "1a11c33f84933ba86323b4a979b2ba4f1d6b782b0e2aae7b7f73ed1dc79d242e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/relationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RelationshipTableRow

Defines a relationship type (e.g., Friend, Rival, Partner) with UI and FX data.

### Properties

- **Id** (`FName`): Unique identifier for this relationship.
- **IconId** (`FName`): Icon displayed for this relationship in the UI. *(Foreign = "B1Texture2D.Id")*
- **CategoryId** (`FName`): Relationship category this belongs to. *(Foreign = "RelationshipCategory.Id")*
- **DisplayNameTextId** (`FString`): Localized name for the relationship. *(StringTableKey = "Id")*
- **DescTextId** (`FString`): Localized description of the relationship. *(StringTableKey = "Id")*
- **ColorId1 / ColorId2** (`FName`): UI colors associated with the relationship. *(Foreign = "ColorMapping.Id")*
- **RelationshipFx** (`FB1RelationshipFxSet`): Visual FX triggered by this relationship.

## 📚 References

- [FB1RelationshipFxSet](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipfxset)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRelationship[EB1RelationshipChemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1relationshipchemistry)[RelationshipCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcategory)[RelationshipCondition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcondition)[RelationshipEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipevent)[RelationshipGift Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipgift)[RelationshipRecord Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshiprecord)[RelationshipStat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipstat)[FB1RelationshipAdditionalStatData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipadditionalstatdata)[FB1RelationshipAutoSelectionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipautoselectiondata)[FB1RelationshipBonusMultiplyData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipbonusmultiplydata)[FB1RelationshipCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcategorytablerow)[FB1RelationshipCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcondition)

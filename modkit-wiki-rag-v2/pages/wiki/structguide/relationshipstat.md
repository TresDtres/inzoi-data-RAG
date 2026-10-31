---
document_id: "e08b47e2603a8a931cce24a9f40619fc613656ca7e4f983e53301d5623fc81dd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipstat"
title: "📘 RelationshipStat Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:01+00:00"
content_sha256: "bdaeac8183cb3a5c94edb48a0d7dd94dc27a23c5ef5eb910c34515809c4021a6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/relationshipstat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RelationshipStatTableRow

Defines a relationship stat (e.g., affection, rivalry) and how it changes over time.

### Properties

- **Id** (`FName`): Unique identifier for the stat.
- **DisplayNameTextId** (`FString`): UI label for the stat. *(StringTableKey = "Id")*
- **DefaultDecayValuePerSec** (`float`): How quickly the stat decays over time.
- **GrowthStep** (`EB1GrowthStep`): Age this stat applies to.
- **DecayDataList** (`TArray<FB1RelationshipDecayData>`): Customized decay rules based on thresholds.
- **PositiveAsset / NegativeAsset / BackgroundAsset** (`TSoftObjectPtr<UObject>`): UI visuals effect associated with this stat.

## 📚 References

- [FB1RelationshipDecayData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipdecaydata)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRelationship[EB1RelationshipChemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1relationshipchemistry)[Relationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationship)[RelationshipCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcategory)[RelationshipCondition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcondition)[RelationshipEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipevent)[RelationshipGift Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipgift)[RelationshipRecord Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshiprecord)[FB1RelationshipAdditionalStatData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipadditionalstatdata)[FB1RelationshipAutoSelectionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipautoselectiondata)[FB1RelationshipBonusMultiplyData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipbonusmultiplydata)[FB1RelationshipCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcategorytablerow)[FB1RelationshipCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcondition)

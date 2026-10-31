---
document_id: "d5173468947f46a5081b8b77aed63e46f3bad6dcc4d71405f6df22566824f800"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipgift"
title: "📘 RelationshipGift Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:01+00:00"
content_sha256: "a1d3b2a93867906e4e2e48afdb8e38de55679753860d75d573060484bd44b880"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/relationshipgift"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RelationshipGiftTableRow

Defines a gift that can be sent in a relationship, including object data and reward logic.

### Properties

- **Id** (`FName`): Unique identifier for the gift entry.
- **GiftBoxObjectIds** (`TArray<FName>`): Object IDs used for the gift box. *(Foreign = "Object.Id")*
- **ObjectData** (`FB1RelationshipGiftObjectData`): Item content and quantity of the gift.
- **ConditionData** (`FB1RelationshipGiftConditionData`): Relationship level requirements for gifting.
- **RewardData** (`FB1RelationshipGiftRewardData`): Effects granted upon gifting.

## 📚 References

- [FB1RelationshipGiftObjectData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipgiftobjectdata)
- [FB1RelationshipGiftConditionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipgiftconditiondata)
- [FB1RelationshipGiftRewardData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipgiftrewarddata)
- [EB1CarriableObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1carriableobjecttype)
- [EB1GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gifttype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRelationship[EB1RelationshipChemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1relationshipchemistry)[Relationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationship)[RelationshipCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcategory)[RelationshipCondition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcondition)[RelationshipEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipevent)[RelationshipRecord Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshiprecord)[RelationshipStat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipstat)[FB1RelationshipAdditionalStatData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipadditionalstatdata)[FB1RelationshipAutoSelectionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipautoselectiondata)[FB1RelationshipBonusMultiplyData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipbonusmultiplydata)[FB1RelationshipCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcategorytablerow)[FB1RelationshipCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcondition)

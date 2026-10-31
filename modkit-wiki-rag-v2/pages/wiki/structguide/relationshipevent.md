---
document_id: "d5dc5171af7d49e32c8dfdc75ccb9f7667d0d8fd336baad8f74461a0376f6d52"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipevent"
title: "📘 RelationshipEvent Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:01+00:00"
content_sha256: "2ac13b44855e79db33461b735f1286d837801e348b2f489aa935a37e1bdf2edb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/relationshipevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RelationshipEventTableRow

Defines a relationship event triggered by specific conditions and executed with scripts.

### Properties

- **Id** (`FName`): Unique identifier for the event.
- **TriggerData** (`FB1RelationshipEventTriggerData`): Event trigger information.
- **EventConditions** (`TArray<FB1Condition>`): Conditions that must be met to trigger this event.
- **EventExecutes** (`TArray<FB1Execute>`): List of script applied when the event occurs.

## 📚 References

- [FB1RelationshipEventTriggerData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipeventtriggerdata)
- [FB1RelationshipEventTriggerTargetData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipeventtriggertargetdata)
- [EB1FamilyRelationshipType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familyrelationshiptype)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)
- [FB1Execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1execute)
- [EB1ExecuteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1executetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRelationship[EB1RelationshipChemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1relationshipchemistry)[Relationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationship)[RelationshipCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcategory)[RelationshipCondition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcondition)[RelationshipGift Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipgift)[RelationshipRecord Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshiprecord)[RelationshipStat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipstat)[FB1RelationshipAdditionalStatData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipadditionalstatdata)[FB1RelationshipAutoSelectionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipautoselectiondata)[FB1RelationshipBonusMultiplyData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipbonusmultiplydata)[FB1RelationshipCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcategorytablerow)[FB1RelationshipCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipcondition)

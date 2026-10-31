---
document_id: "f5b19774b9b0751376831f964e9122a627423abfafe2964f420b88f3c52fec61"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasputableobjectonhand"
title: "Condition_HasPutableObjectOnHand"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "c459c3e626eef638b67675e243446164b768c04c16d95cfccab905d1f5255364"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasputableobjectonhand"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the object currently held in the character's right hand can be placed into the character's inventory. The condition verifies both that the character is holding an object and that the inventory can accept it.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the held object can be put into inventorySelfHasPutableObjectOnHandEqualCheck if the held object cannot be put into inventorySelfHasPutableObjectOnHandNotEqualCheck if the target's held object can be put awayTargetHasPutableObjectOnHandEqual |
| --- |
| Check if the held object can be put into inventorySelfHasPutableObjectOnHandEqualCheck if the held object cannot be put into inventorySelfHasPutableObjectOnHandNotEqualCheck if the target's held object can be put awayTargetHasPutableObjectOnHandEqual |
| Check if the held object cannot be put into inventorySelfHasPutableObjectOnHandNotEqualCheck if the target's held object can be put awayTargetHasPutableObjectOnHandEqual |
| Check if the target's held object can be put awayTargetHasPutableObjectOnHandEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

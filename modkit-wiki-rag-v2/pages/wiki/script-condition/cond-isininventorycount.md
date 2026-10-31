---
document_id: "a9ea7a80e49ac9619db606851808d08878316934fca24d321a32001f11823a6b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isininventorycount"
title: "Condition_IsInInventoryCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:34+00:00"
content_sha256: "c7e1437d407ab5531a787261e030d517e55c2d4ae6328cde68a99497d0952319"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isininventorycount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks how many entities are in the inventory.

# Parameters

| ParameterDescriptionBaseObjectThe object to be checked for the conditionCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1Object.json Id to filter by (optional; if omitted, counts all items)F1Quantity threshold to compare againstF2Upper quantity threshold (InRange, OutRange only) |
| --- |
| BaseObjectThe object to be checked for the conditionCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1Object.json Id to filter by (optional; if omitted, counts all items)F1Quantity threshold to compare againstF2Upper quantity threshold (InRange, OutRange only) |
| CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1Object.json Id to filter by (optional; if omitted, counts all items)F1Quantity threshold to compare againstF2Upper quantity threshold (InRange, OutRange only) |
| S1Object.json Id to filter by (optional; if omitted, counts all items)F1Quantity threshold to compare againstF2Upper quantity threshold (InRange, OutRange only) |
| F1Quantity threshold to compare againstF2Upper quantity threshold (InRange, OutRange only) |
| F2Upper quantity threshold (InRange, OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if inventory contains 5 or more objectsSelfIsInInventoryCountGreaterOrEqualCheck if inventory contains 2 or more of a specific objectSelfIsInInventoryCountGreaterOrEqualCheck if inventory contains between 5 and 10 objectsSelfIsInInventoryCountInRangeCheck if Target’s inventory has fewer than 3 objectsTargetIsInInventoryCountLess |
| --- |
| Check if inventory contains 5 or more objectsSelfIsInInventoryCountGreaterOrEqualCheck if inventory contains 2 or more of a specific objectSelfIsInInventoryCountGreaterOrEqualCheck if inventory contains between 5 and 10 objectsSelfIsInInventoryCountInRangeCheck if Target’s inventory has fewer than 3 objectsTargetIsInInventoryCountLess |
| Check if inventory contains 2 or more of a specific objectSelfIsInInventoryCountGreaterOrEqualCheck if inventory contains between 5 and 10 objectsSelfIsInInventoryCountInRangeCheck if Target’s inventory has fewer than 3 objectsTargetIsInInventoryCountLess |
| Check if inventory contains between 5 and 10 objectsSelfIsInInventoryCountInRangeCheck if Target’s inventory has fewer than 3 objectsTargetIsInInventoryCountLess |
| Check if Target’s inventory has fewer than 3 objectsTargetIsInInventoryCountLess |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

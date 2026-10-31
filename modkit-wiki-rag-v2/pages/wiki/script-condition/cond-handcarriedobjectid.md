---
document_id: "42a28ecbd87557e32b4e248be313e8412bdd7ebd35d78ae1f15b210b74eb88ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid"
title: "Condition_HandCarriedObjectId"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:00+00:00"
content_sha256: "11987bd257c7852d02b462592a3272573ad394c7b0e4f394f50352e9dd7635da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-handcarriedobjectid"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the object currently held in the character's hand has the specified ObjectId. During a PutDown action, uses the hand selected in PutDownContext. If UseHand is not specified, checks both hands (right first, then left).

# Parameters

| ParameterDescriptionBaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1The ObjectId to compare against |
| --- |
| BaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1The ObjectId to compare against |
| CompareTypeComparison operator: Equal, NotEqualS1The ObjectId to compare against |
| S1The ObjectId to compare against |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if character holds a specific tray in either handSelfHandCarriedObjectIdEqualTray_Wooden_01Check if character does not hold a specific itemTargetHandCarriedObjectIdNotEqualBox_Paper_01 |
| --- |
| Check if character holds a specific tray in either handSelfHandCarriedObjectIdEqualTray_Wooden_01Check if character does not hold a specific itemTargetHandCarriedObjectIdNotEqualBox_Paper_01 |
| Check if character does not hold a specific itemTargetHandCarriedObjectIdNotEqualBox_Paper_01 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

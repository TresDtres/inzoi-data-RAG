---
document_id: "55af2924b586dd3ca7ef2ca2d70b8a11ec8c1f7d80abf0ec6c51d8c5536743db"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype"
title: "Condition_HandCarriedObjectType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "6d723e27d9a8fc58b1455864e789f048226c8b776912dd6897b63947fd3d6564"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-handcarriedobjecttype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the object currently held in the character's hand matches the specified carriable object type. During a PutDown action, uses the hand selected in PutDownContext; otherwise uses UseHand to determine the hand. If UseHand is not Left or Right, checks both hands (returns true if either hand matches).

# Parameters

| ParameterDescriptionBaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1EB1CarriableObjectType name to compare againstUseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| --- |
| BaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1EB1CarriableObjectType name to compare againstUseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| CompareTypeComparison operator: Equal, NotEqualS1EB1CarriableObjectType name to compare againstUseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| S1EB1CarriableObjectType name to compare againstUseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| UseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1UseHandCheck if right-hand object type is TraySelfHandCarriedObjectTypeEqualTrayRightCheck if left-hand object type is not BoxSelfHandCarriedObjectTypeNotEqualBoxLeftCheck if either hand object type is CupSelfHandCarriedObjectTypeEqualCup |
| --- |
| Check if right-hand object type is TraySelfHandCarriedObjectTypeEqualTrayRightCheck if left-hand object type is not BoxSelfHandCarriedObjectTypeNotEqualBoxLeftCheck if either hand object type is CupSelfHandCarriedObjectTypeEqualCup |
| Check if left-hand object type is not BoxSelfHandCarriedObjectTypeNotEqualBoxLeftCheck if either hand object type is CupSelfHandCarriedObjectTypeEqualCup |
| Check if either hand object type is CupSelfHandCarriedObjectTypeEqualCup |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

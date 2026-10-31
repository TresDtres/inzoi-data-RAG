---
document_id: "953285f50cd883445c8f7c6c891a5e95c2eafc2cff9cc25ee82395697e3095e6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose"
title: "Condition_HandCarriedObjectCreatePurpose"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:00+00:00"
content_sha256: "6b1ab8c813f3b7292cbca66d283ffa821b1dfea60df98965886bf6d2c5e2f321"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-handcarriedobjectcreatepurpose"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the object currently held in the character's hand matches the specified CreatePurpose. During a PutDown action, uses the hand selected in PutDownContext; otherwise uses UseHand to determine the hand. If UseHand is not Left or Right, checks both hands (returns true if either hand matches).

# Parameters

| ParameterDescriptionBaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1EB1ObjectCreatePurpose name to compare against (e.g., Personal, Household, Commercial, FamilyMeal)UseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| --- |
| BaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1EB1ObjectCreatePurpose name to compare against (e.g., Personal, Household, Commercial, FamilyMeal)UseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| CompareTypeComparison operator: Equal, NotEqualS1EB1ObjectCreatePurpose name to compare against (e.g., Personal, Household, Commercial, FamilyMeal)UseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| S1EB1ObjectCreatePurpose name to compare against (e.g., Personal, Household, Commercial, FamilyMeal)UseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |
| UseHandHand selector: Left checks left hand, Right checks right hand; otherwise checks both hands (default) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1UseHandCheck if right-hand object's CreatePurpose is CommercialSelfHandCarriedObjectCreatePurposeEqualCommercialRightCheck if left-hand object's CreatePurpose is not PersonalSelfHandCarriedObjectCreatePurposeNotEqualPersonalLeftCheck if either hand object's CreatePurpose is FamilyMealSelfHandCarriedObjectCreatePurposeEqualFamilyMeal |
| --- |
| Check if right-hand object's CreatePurpose is CommercialSelfHandCarriedObjectCreatePurposeEqualCommercialRightCheck if left-hand object's CreatePurpose is not PersonalSelfHandCarriedObjectCreatePurposeNotEqualPersonalLeftCheck if either hand object's CreatePurpose is FamilyMealSelfHandCarriedObjectCreatePurposeEqualFamilyMeal |
| Check if left-hand object's CreatePurpose is not PersonalSelfHandCarriedObjectCreatePurposeNotEqualPersonalLeftCheck if either hand object's CreatePurpose is FamilyMealSelfHandCarriedObjectCreatePurposeEqualFamilyMeal |
| Check if either hand object's CreatePurpose is FamilyMealSelfHandCarriedObjectCreatePurposeEqualFamilyMeal |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

---
document_id: "b257da507bf1dd39331387cf79f0e550ade018a7c0dfa026bbaeaf14354068bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lefthandcarriedobjectstate"
title: "Condition_LeftHandCarriedObjectState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:51+00:00"
content_sha256: "c755bcedcebc8a93bd96b065b39a3cbc068b19b7a842fe3a134cb1e21eb73856"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-lefthandcarriedobjectstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the object currently held in the character's left hand has the specified state (StateGroupId + StateId). During a PutDown action, uses the hand selected in PutDownContext instead.

# Parameters

| ParameterDescriptionBaseObjectThe character whose left-hand object state will be checkedCompareTypeComparison operator: Equal, NotEqualS1StateGroupId to compare againstS2StateId to compare against |
| --- |
| BaseObjectThe character whose left-hand object state will be checkedCompareTypeComparison operator: Equal, NotEqualS1StateGroupId to compare againstS2StateId to compare against |
| CompareTypeComparison operator: Equal, NotEqualS1StateGroupId to compare againstS2StateId to compare against |
| S1StateGroupId to compare againstS2StateId to compare against |
| S2StateId to compare against |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if left-hand object state is Normal/NormalSelfLeftHandCarriedObjectStateEqualNormalNormalCheck if left-hand object state is not Broken/BrokenSelfLeftHandCarriedObjectStateNotEqualBrokenBroken |
| --- |
| Check if left-hand object state is Normal/NormalSelfLeftHandCarriedObjectStateEqualNormalNormalCheck if left-hand object state is not Broken/BrokenSelfLeftHandCarriedObjectStateNotEqualBrokenBroken |
| Check if left-hand object state is not Broken/BrokenSelfLeftHandCarriedObjectStateNotEqualBrokenBroken |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

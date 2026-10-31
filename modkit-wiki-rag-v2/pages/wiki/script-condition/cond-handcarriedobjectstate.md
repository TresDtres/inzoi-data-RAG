---
document_id: "748408053a9825371b812e89e5dc241ccdc18ebad6d4c2cdce68cb193cab7782"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate"
title: "Condition_HandCarriedObjectState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "db86dcf8582316a13c96f5665de1b609f4e7ea7a2d7dd95f6dd56c6e8ab5ffed"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-handcarriedobjectstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the object currently held in the character's right hand has the specified state (StateGroupId + StateId). During a PutDown action, uses the hand selected in PutDownContext instead. To check the left hand, use Condition_LeftHandCarriedObjectState.

# Parameters

| ParameterDescriptionBaseObjectThe character whose right-hand object state will be checkedCompareTypeComparison operator: Equal, NotEqualS1StateGroupId to compare againstS2StateId to compare against |
| --- |
| BaseObjectThe character whose right-hand object state will be checkedCompareTypeComparison operator: Equal, NotEqualS1StateGroupId to compare againstS2StateId to compare against |
| CompareTypeComparison operator: Equal, NotEqualS1StateGroupId to compare againstS2StateId to compare against |
| S1StateGroupId to compare againstS2StateId to compare against |
| S2StateId to compare against |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if right-hand object state is Normal/NormalSelfHandCarriedObjectStateEqualNormalNormalCheck if right-hand object state is not Broken/BrokenSelfHandCarriedObjectStateNotEqualBrokenBroken |
| --- |
| Check if right-hand object state is Normal/NormalSelfHandCarriedObjectStateEqualNormalNormalCheck if right-hand object state is not Broken/BrokenSelfHandCarriedObjectStateNotEqualBrokenBroken |
| Check if right-hand object state is not Broken/BrokenSelfHandCarriedObjectStateNotEqualBrokenBroken |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

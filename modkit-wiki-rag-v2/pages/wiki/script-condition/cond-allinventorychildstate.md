---
document_id: "d4eddfde617351f7c1a0768560adc05d8555b2fa4e775ba2848843e914aa5553"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate"
title: "Condition_AllInventoryChildState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:45+00:00"
content_sha256: "5f9c126084681f02f59ac0cd58951154b24f38597bb3c7df6aa29be33f164dcf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-allinventorychildstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if all children in the BaseObject's inventory satisfy the specified state condition. Returns true if all children match the state (Equal), or if all children do not match the state (NotEqual).

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner entity whose children are checkedCompareTypeEqual (all children match the state) / NotEqual (all children do not match)S1State Group ID to checkS2State ID to check within the state group |
| --- |
| BaseObjectThe inventory owner entity whose children are checkedCompareTypeEqual (all children match the state) / NotEqual (all children do not match)S1State Group ID to checkS2State ID to check within the state group |
| CompareTypeEqual (all children match the state) / NotEqual (all children do not match)S1State Group ID to checkS2State ID to check within the state group |
| S1State Group ID to checkS2State ID to check within the state group |
| S2State ID to check within the state group |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if all inventory items are in the Normal stateSelfAllInventoryChildStateEqualNormalNormalCheck if all inventory items are not in the Normal stateSelfAllInventoryChildStateNotEqualNormalNormalCheck if all children of Target are in the Broken stateTargetAllInventoryChildStateEqualNormalBroken |
| --- |
| Check if all inventory items are in the Normal stateSelfAllInventoryChildStateEqualNormalNormalCheck if all inventory items are not in the Normal stateSelfAllInventoryChildStateNotEqualNormalNormalCheck if all children of Target are in the Broken stateTargetAllInventoryChildStateEqualNormalBroken |
| Check if all inventory items are not in the Normal stateSelfAllInventoryChildStateNotEqualNormalNormalCheck if all children of Target are in the Broken stateTargetAllInventoryChildStateEqualNormalBroken |
| Check if all children of Target are in the Broken stateTargetAllInventoryChildStateEqualNormalBroken |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

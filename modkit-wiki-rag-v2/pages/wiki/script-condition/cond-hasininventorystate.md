---
document_id: "88526a43e042745463ecef5710b87dfebfa923dfec29ff4fe6a38250f297ecb9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasininventorystate"
title: "Condition_HasInInventoryState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:07+00:00"
content_sha256: "7138826ec0a8bdb10d775c85ad36efc2bf768def71198173e06197fdeba175b5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasininventorystate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if any child in the BaseObject's inventory satisfies the specified state condition. Returns true if at least one child matches the state (Equal), or if at least one child does not match the state (NotEqual).

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner entity whose children are searchedCompareTypeEqual (any child matches the state) / NotEqual (any child does not match the state)S1State Group ID to checkS2State ID to check within the state group |
| --- |
| BaseObjectThe inventory owner entity whose children are searchedCompareTypeEqual (any child matches the state) / NotEqual (any child does not match the state)S1State Group ID to checkS2State ID to check within the state group |
| CompareTypeEqual (any child matches the state) / NotEqual (any child does not match the state)S1State Group ID to checkS2State ID to check within the state group |
| S1State Group ID to checkS2State ID to check within the state group |
| S2State ID to check within the state group |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if any inventory item is in the Normal stateSelfHasInInventoryStateEqualNormalNormalCheck if any inventory item is not in the Normal stateSelfHasInInventoryStateNotEqualNormalNormalCheck if any child of Target is in the Broken stateTargetHasInInventoryStateEqualNormalBroken |
| --- |
| Check if any inventory item is in the Normal stateSelfHasInInventoryStateEqualNormalNormalCheck if any inventory item is not in the Normal stateSelfHasInInventoryStateNotEqualNormalNormalCheck if any child of Target is in the Broken stateTargetHasInInventoryStateEqualNormalBroken |
| Check if any inventory item is not in the Normal stateSelfHasInInventoryStateNotEqualNormalNormalCheck if any child of Target is in the Broken stateTargetHasInInventoryStateEqualNormalBroken |
| Check if any child of Target is in the Broken stateTargetHasInInventoryStateEqualNormalBroken |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

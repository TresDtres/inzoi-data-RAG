---
document_id: "c98afbbc58493e317d476ceb54799cac1c92a0f08cbd86663a288bb1e9ae7103"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasquestrequireditemininventory"
title: "Condition_HasQuestRequiredItemInInventory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "b3421a597f82fd37018b55f6f0d5484b2344ab75a2dd0ad362ec2bcabcd08ce5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasquestrequireditemininventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject's inventory contains the required item for the active freelance quest. Searches the inventory for an item matching the RequestTarget.TargetId of the active freelance order.

# Parameters

| ParameterDescriptionBaseObjectThe character or actor entity whose inventory to check.CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe character or actor entity whose inventory to check.CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has the quest item in their inventorySelfHasQuestRequiredItemInInventoryEqualCheck if Self does not have the quest itemSelfHasQuestRequiredItemInInventoryNotEqualCheck if Target does not have the quest itemTargetHasQuestRequiredItemInInventoryNotEqual |
| --- |
| Check if Self has the quest item in their inventorySelfHasQuestRequiredItemInInventoryEqualCheck if Self does not have the quest itemSelfHasQuestRequiredItemInInventoryNotEqualCheck if Target does not have the quest itemTargetHasQuestRequiredItemInInventoryNotEqual |
| Check if Self does not have the quest itemSelfHasQuestRequiredItemInInventoryNotEqualCheck if Target does not have the quest itemTargetHasQuestRequiredItemInInventoryNotEqual |
| Check if Target does not have the quest itemTargetHasQuestRequiredItemInInventoryNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

---
document_id: "9637e788a6d579c8f5108ca6ee00eee1984572760de48abdfbd3a3621fb369b9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag"
title: "Condition_HasHandOverObjectTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:06+00:00"
content_sha256: "6eed4eed94ea4737a19710b2b6e401f0a2abda7bdb516d230bb68a4f6456a4ad"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hashandoverobjecttag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the object to be handed over in the BaseObject character's active coop hand-over scheduler has the specified object tag.

# Parameters

| ParameterDescriptionBaseObjectThe character with an active hand-over coop scheduler (Self or Target)CompareTypeComparison operator: Equal, NotEqualS1The object tag name to check on the hand-over object |
| --- |
| BaseObjectThe character with an active hand-over coop scheduler (Self or Target)CompareTypeComparison operator: Equal, NotEqualS1The object tag name to check on the hand-over object |
| CompareTypeComparison operator: Equal, NotEqualS1The object tag name to check on the hand-over object |
| S1The object tag name to check on the hand-over object |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self's hand-over object has the Food tagSelfHasHandOverObjectTagEqualFoodCheck if Self's hand-over object does not have the Book tagSelfHasHandOverObjectTagNotEqualBookCheck if Target's hand-over object has the Food_Ingredient tagTargetHasHandOverObjectTagEqualFood_Ingredient |
| --- |
| Check if Self's hand-over object has the Food tagSelfHasHandOverObjectTagEqualFoodCheck if Self's hand-over object does not have the Book tagSelfHasHandOverObjectTagNotEqualBookCheck if Target's hand-over object has the Food_Ingredient tagTargetHasHandOverObjectTagEqualFood_Ingredient |
| Check if Self's hand-over object does not have the Book tagSelfHasHandOverObjectTagNotEqualBookCheck if Target's hand-over object has the Food_Ingredient tagTargetHasHandOverObjectTagEqualFood_Ingredient |
| Check if Target's hand-over object has the Food_Ingredient tagTargetHasHandOverObjectTagEqualFood_Ingredient |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

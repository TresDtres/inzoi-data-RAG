---
document_id: "9726f192c3d52d2084745d0fd8aa448bfd66daaa56590155936a7876ea0ab17f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasininventoryhasremainingfood"
title: "Condition_HasInInventoryHasRemainingFood"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:07+00:00"
content_sha256: "fe93c01de9f98265e6f3409c2fe28a4bfaa2a271619710154cca434b42aad651"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasininventoryhasremainingfood"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if any FoodObject in the BaseObject's inventory has remaining food servings. Optionally filters by a specific state (S1 = StateGroupId, S2 = StateId). If S1 and S2 are empty, only checks whether any food has remaining servings.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to search throughCompareTypeEqual: any food has remaining servings. NotEqual: any food is empty.S1(Optional) StateGroupId to additionally filter food objectsS2(Optional) StateId to additionally filter food objects (must be used together with S1) |
| --- |
| BaseObjectThe inventory owner to search throughCompareTypeEqual: any food has remaining servings. NotEqual: any food is empty.S1(Optional) StateGroupId to additionally filter food objectsS2(Optional) StateId to additionally filter food objects (must be used together with S1) |
| CompareTypeEqual: any food has remaining servings. NotEqual: any food is empty.S1(Optional) StateGroupId to additionally filter food objectsS2(Optional) StateId to additionally filter food objects (must be used together with S1) |
| S1(Optional) StateGroupId to additionally filter food objectsS2(Optional) StateId to additionally filter food objects (must be used together with S1) |
| S2(Optional) StateId to additionally filter food objects (must be used together with S1) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if any food with remaining servings exists in inventorySelfHasInInventoryHasRemainingFoodEqualCheck if any empty food exists in inventorySelfHasInInventoryHasRemainingFoodNotEqualCheck if any food with remaining servings in Normal state existsTargetHasInInventoryHasRemainingFoodEqualNormalNormal |
| --- |
| Check if any food with remaining servings exists in inventorySelfHasInInventoryHasRemainingFoodEqualCheck if any empty food exists in inventorySelfHasInInventoryHasRemainingFoodNotEqualCheck if any food with remaining servings in Normal state existsTargetHasInInventoryHasRemainingFoodEqualNormalNormal |
| Check if any empty food exists in inventorySelfHasInInventoryHasRemainingFoodNotEqualCheck if any food with remaining servings in Normal state existsTargetHasInInventoryHasRemainingFoodEqualNormalNormal |
| Check if any food with remaining servings in Normal state existsTargetHasInInventoryHasRemainingFoodEqualNormalNormal |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

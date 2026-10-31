---
document_id: "1601ed6f31d3ba07291327885865e836fe543a315c2e6fc4559278d0e958398d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasininventoryhasobjecttag"
title: "Condition_HasInInventoryHasObjectTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:07+00:00"
content_sha256: "59fcb027521353a4fa48badf4bb908a05d7701c94baf931e6d9ff72ff4418cf7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasininventoryhasobjecttag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if any child object in the BaseObject's inventory has the specified object tag. With Equal, returns true if any child has the tag; with NotEqual, returns true if any child does not have the tag.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to search throughCompareTypeEqual: any child has the tag. NotEqual: any child does not have the tag.S1Object tag name to search for (e.g., Food_Ingredient) |
| --- |
| BaseObjectThe inventory owner to search throughCompareTypeEqual: any child has the tag. NotEqual: any child does not have the tag.S1Object tag name to search for (e.g., Food_Ingredient) |
| CompareTypeEqual: any child has the tag. NotEqual: any child does not have the tag.S1Object tag name to search for (e.g., Food_Ingredient) |
| S1Object tag name to search for (e.g., Food_Ingredient) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if inventory contains any object with Food_Ingredient tagSelfHasInInventoryHasObjectTagEqualFood_IngredientCheck if inventory contains any object without Food_Ingredient tagTargetHasInInventoryHasObjectTagNotEqualFood_Ingredient |
| --- |
| Check if inventory contains any object with Food_Ingredient tagSelfHasInInventoryHasObjectTagEqualFood_IngredientCheck if inventory contains any object without Food_Ingredient tagTargetHasInInventoryHasObjectTagNotEqualFood_Ingredient |
| Check if inventory contains any object without Food_Ingredient tagTargetHasInInventoryHasObjectTagNotEqualFood_Ingredient |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

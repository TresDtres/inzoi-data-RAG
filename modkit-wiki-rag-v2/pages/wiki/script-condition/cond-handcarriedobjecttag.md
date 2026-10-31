---
document_id: "f22fc6224bf30fa82f87cf66cc332c1517eef83f02a5601b377888e5d540aead"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag"
title: "Condition_HandCarriedObjectTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "1675d6667141aa5ce4e7d74a4723d15add5eaf7979faa4137c5843bfd29906bb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-handcarriedobjecttag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the object currently held in the character's hand has the specified object tag. During a PutDown action, uses the hand selected in PutDownContext. By default (UseHand=Default), checks both hands (right first, then left).

# Parameters

| ParameterDescriptionBaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1Object tag name to check (e.g., Food_Ingredient, Tool_Cleaning) |
| --- |
| BaseObjectThe character whose hand-carried object will be checkedCompareTypeComparison operator: Equal, NotEqualS1Object tag name to check (e.g., Food_Ingredient, Tool_Cleaning) |
| CompareTypeComparison operator: Equal, NotEqualS1Object tag name to check (e.g., Food_Ingredient, Tool_Cleaning) |
| S1Object tag name to check (e.g., Food_Ingredient, Tool_Cleaning) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if either hand's object has Food_Ingredient tagSelfHandCarriedObjectTagEqualFood_IngredientCheck if right-hand object does not have Tool_Cleaning tagSelfHandCarriedObjectTagNotEqualTool_Cleaning |
| --- |
| Check if either hand's object has Food_Ingredient tagSelfHandCarriedObjectTagEqualFood_IngredientCheck if right-hand object does not have Tool_Cleaning tagSelfHandCarriedObjectTagNotEqualTool_Cleaning |
| Check if right-hand object does not have Tool_Cleaning tagSelfHandCarriedObjectTagNotEqualTool_Cleaning |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

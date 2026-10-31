---
document_id: "50c2473ea0cebe753032f9d88d816aba8c54604ded293dd4f35909df9d010103"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasininventoryobjectdetailtype"
title: "Condition_HasInInventoryObjectDetailType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:07+00:00"
content_sha256: "1c1ab84228ad06e0c9eed8a0d6341784112e55b3aaf892fdcd8b8a5eec7763e0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasininventoryobjectdetailtype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if any child object in the BaseObject's inventory matches the specified ObjectDetailType. With Equal, returns true if any child has the given type; with NotEqual, returns true if any child does not have the given type.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to search throughCompareTypeEqual: any child matches the type. NotEqual: any child does not match the type.S1EB2GameObjectDetailType enum name to check against (e.g., Food, Book) |
| --- |
| BaseObjectThe inventory owner to search throughCompareTypeEqual: any child matches the type. NotEqual: any child does not match the type.S1EB2GameObjectDetailType enum name to check against (e.g., Food, Book) |
| CompareTypeEqual: any child matches the type. NotEqual: any child does not match the type.S1EB2GameObjectDetailType enum name to check against (e.g., Food, Book) |
| S1EB2GameObjectDetailType enum name to check against (e.g., Food, Book) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if inventory contains any Food type objectSelfHasInInventoryObjectDetailTypeEqualFoodCheck if inventory contains any non-Book type objectTargetHasInInventoryObjectDetailTypeNotEqualBook |
| --- |
| Check if inventory contains any Food type objectSelfHasInInventoryObjectDetailTypeEqualFoodCheck if inventory contains any non-Book type objectTargetHasInInventoryObjectDetailTypeNotEqualBook |
| Check if inventory contains any non-Book type objectTargetHasInInventoryObjectDetailTypeNotEqualBook |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

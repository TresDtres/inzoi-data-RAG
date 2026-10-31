---
document_id: "0723252f549fe654edac7d29cd7eadb17576524aa4b10352d7a3d428549e360c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype"
title: "Condition_GiftType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:00+00:00"
content_sha256: "01df5fda4ba88463f3d6b26b10e92f557ea978e705b7468682fefa52594938cf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-gifttype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current gift (Target entity) matches the specified gift type (S1). Note: This condition uses the Target entity id from the script context to look up gift data.

# Parameters

| ParameterDescriptionCompareTypeEqual / NotEqualS1Gift type to compare (EB1GiftType: Common, Relationship). |
| --- |
| CompareTypeEqual / NotEqualS1Gift type to compare (EB1GiftType: Common, Relationship). |
| S1Gift type to compare (EB1GiftType: Common, Relationship). |

# Examples

| DescriptionCommandCompareTypeS1Checks whether target gift type is Common.GiftTypeEqualCommonChecks whether target gift type is NOT Relationship.GiftTypeNotEqualRelationship |
| --- |
| Checks whether target gift type is Common.GiftTypeEqualCommonChecks whether target gift type is NOT Relationship.GiftTypeNotEqualRelationship |
| Checks whether target gift type is NOT Relationship.GiftTypeNotEqualRelationship |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

---
document_id: "940f905a16f67a9c49019571a187bb82ae204bbcb63a8af1ec70752108673831"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasitemobjecttoinventory"
title: "Condition_HasItemObjectToInventory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:08+00:00"
content_sha256: "4b88e8c4f9f1bf51d4b149d1f2095b60c71c10e468e66de1915570f798f9dc85"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasitemobjecttoinventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the inventory contains the specified number of objects matching a given Object.json Id.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to checkCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The Id from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| --- |
| BaseObjectThe inventory owner to checkCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The Id from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The Id from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| S1The Id from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| F1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| F2Upper quantity threshold (InRange, OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self’s inventory has 2 or more of a specific itemSelfHasItemObjectToInventoryGreaterOrEqualCheck if Self’s inventory has between 3 and 5 of a specific itemSelfHasItemObjectToInventoryInRangeCheck if Target’s inventory has exactly 1 of a specific itemTargetHasItemObjectToInventoryEqualCheck if Self’s inventory has none of a specific itemSelfHasItemObjectToInventoryEqual |
| --- |
| Check if Self’s inventory has 2 or more of a specific itemSelfHasItemObjectToInventoryGreaterOrEqualCheck if Self’s inventory has between 3 and 5 of a specific itemSelfHasItemObjectToInventoryInRangeCheck if Target’s inventory has exactly 1 of a specific itemTargetHasItemObjectToInventoryEqualCheck if Self’s inventory has none of a specific itemSelfHasItemObjectToInventoryEqual |
| Check if Self’s inventory has between 3 and 5 of a specific itemSelfHasItemObjectToInventoryInRangeCheck if Target’s inventory has exactly 1 of a specific itemTargetHasItemObjectToInventoryEqualCheck if Self’s inventory has none of a specific itemSelfHasItemObjectToInventoryEqual |
| Check if Target’s inventory has exactly 1 of a specific itemTargetHasItemObjectToInventoryEqualCheck if Self’s inventory has none of a specific itemSelfHasItemObjectToInventoryEqual |
| Check if Self’s inventory has none of a specific itemSelfHasItemObjectToInventoryEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

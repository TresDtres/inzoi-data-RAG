---
document_id: "a2a8a7f888e028b829b056f86af4e93ae8dba178ac1060c73ba16a37e64b9719"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasitemobjecttagtoinventory"
title: "Condition_HasItemObjectTagToInventory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:07+00:00"
content_sha256: "4e75909faaaaa09d3b42d30b719f6c2c499580e362051a4ad46117fbf489cce7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasitemobjecttagtoinventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the inventory contains the specified number of objects matching a given ObjectTag.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to checkCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The ObjectTag to match against (defined in Object*.json and ObjectTemplate*.json)F1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| --- |
| BaseObjectThe inventory owner to checkCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The ObjectTag to match against (defined in Object*.json and ObjectTemplate*.json)F1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The ObjectTag to match against (defined in Object*.json and ObjectTemplate*.json)F1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| S1The ObjectTag to match against (defined in Object*.json and ObjectTemplate*.json)F1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| F1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| F2Upper quantity threshold (InRange, OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self’s inventory has 2 or more Giftable itemsSelfHasItemObjectTagToInventoryGreaterOrEqualCheck if Self’s inventory has between 3 and 10 Giftable itemsSelfHasItemObjectTagToInventoryInRangeCheck if Target’s inventory has at least 1 item with the specified tagTargetHasItemObjectTagToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific tagged itemSelfHasItemObjectTagToInventoryEqual |
| --- |
| Check if Self’s inventory has 2 or more Giftable itemsSelfHasItemObjectTagToInventoryGreaterOrEqualCheck if Self’s inventory has between 3 and 10 Giftable itemsSelfHasItemObjectTagToInventoryInRangeCheck if Target’s inventory has at least 1 item with the specified tagTargetHasItemObjectTagToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific tagged itemSelfHasItemObjectTagToInventoryEqual |
| Check if Self’s inventory has between 3 and 10 Giftable itemsSelfHasItemObjectTagToInventoryInRangeCheck if Target’s inventory has at least 1 item with the specified tagTargetHasItemObjectTagToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific tagged itemSelfHasItemObjectTagToInventoryEqual |
| Check if Target’s inventory has at least 1 item with the specified tagTargetHasItemObjectTagToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific tagged itemSelfHasItemObjectTagToInventoryEqual |
| Check if Self’s inventory has none of a specific tagged itemSelfHasItemObjectTagToInventoryEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

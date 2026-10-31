---
document_id: "50038f2e31312e44f424d183872284bbac105c8dbe9513d91db3f51a0a488c48"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasitemobjecttemplatetoinventory"
title: "Condition_HasItemObjectTemplateToInventory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:08+00:00"
content_sha256: "5547d59383552a0a0c692c54c226b9c782345e86c95ef93dc28c179a32aab49b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasitemobjecttemplatetoinventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the inventory contains the specified number of objects belonging to a TemplateObject group.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to checkCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The ObjectTemplateId from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| --- |
| BaseObjectThe inventory owner to checkCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The ObjectTemplateId from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1The ObjectTemplateId from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| S1The ObjectTemplateId from Object.json to match againstF1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| F1The quantity threshold to compare against (must be 0 or greater)F2Upper quantity threshold (InRange, OutRange only) |
| F2Upper quantity threshold (InRange, OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self’s inventory has 2 or more items from a template groupSelfHasItemObjectTemplateToInventoryGreaterOrEqualCheck if Self’s inventory has between 3 and 5 items from a templateSelfHasItemObjectTemplateToInventoryInRangeCheck if Target’s inventory has at least 1 item from a template groupTargetHasItemObjectTemplateToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific template groupSelfHasItemObjectTemplateToInventoryEqual |
| --- |
| Check if Self’s inventory has 2 or more items from a template groupSelfHasItemObjectTemplateToInventoryGreaterOrEqualCheck if Self’s inventory has between 3 and 5 items from a templateSelfHasItemObjectTemplateToInventoryInRangeCheck if Target’s inventory has at least 1 item from a template groupTargetHasItemObjectTemplateToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific template groupSelfHasItemObjectTemplateToInventoryEqual |
| Check if Self’s inventory has between 3 and 5 items from a templateSelfHasItemObjectTemplateToInventoryInRangeCheck if Target’s inventory has at least 1 item from a template groupTargetHasItemObjectTemplateToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific template groupSelfHasItemObjectTemplateToInventoryEqual |
| Check if Target’s inventory has at least 1 item from a template groupTargetHasItemObjectTemplateToInventoryGreaterOrEqualCheck if Self’s inventory has none of a specific template groupSelfHasItemObjectTemplateToInventoryEqual |
| Check if Self’s inventory has none of a specific template groupSelfHasItemObjectTemplateToInventoryEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

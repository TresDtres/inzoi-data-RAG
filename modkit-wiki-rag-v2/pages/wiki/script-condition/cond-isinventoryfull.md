---
document_id: "8c1fc2120ccdab00afab68cf3df09c6d6d4726266dc2ac44220a4878bd689485"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinventoryfull"
title: "Condition_IsInventoryFull"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:34+00:00"
content_sha256: "092d052daaf2d4d12716090afc7293f89c4ce4a500ba531223013cae5d3f8d4a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinventoryfull"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target’s inventory is full.

# Parameters

| ParameterDescriptionBaseObjectThe object to be checked for the conditionCompareTypeEqual, NotEqualS1Omit or leave blank: checks against the default full criteria.Recommended: checks against the recommended capacity criteria. |
| --- |
| BaseObjectThe object to be checked for the conditionCompareTypeEqual, NotEqualS1Omit or leave blank: checks against the default full criteria.Recommended: checks against the recommended capacity criteria. |
| CompareTypeEqual, NotEqualS1Omit or leave blank: checks against the default full criteria.Recommended: checks against the recommended capacity criteria. |
| S1Omit or leave blank: checks against the default full criteria.Recommended: checks against the recommended capacity criteria. |
| Recommended: checks against the recommended capacity criteria. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self’s inventory is not fullSelfIsInventoryFullNotEqualCheck if Self’s inventory is not full (recommended capacity)SelfIsInventoryFullNotEqualCheck if Target’s inventory is fullTargetIsInventoryFullEqual |
| --- |
| Check if Self’s inventory is not fullSelfIsInventoryFullNotEqualCheck if Self’s inventory is not full (recommended capacity)SelfIsInventoryFullNotEqualCheck if Target’s inventory is fullTargetIsInventoryFullEqual |
| Check if Self’s inventory is not full (recommended capacity)SelfIsInventoryFullNotEqualCheck if Target’s inventory is fullTargetIsInventoryFullEqual |
| Check if Target’s inventory is fullTargetIsInventoryFullEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

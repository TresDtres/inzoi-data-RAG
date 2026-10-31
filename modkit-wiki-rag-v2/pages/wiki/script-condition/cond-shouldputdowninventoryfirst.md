---
document_id: "8e43e9aa17b4313599c5503d51973237dd6ad5eb337d234a04e0a43dafe22d29"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-shouldputdowninventoryfirst"
title: "Condition_ShouldPutDownInventoryFirst"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:59+00:00"
content_sha256: "e6ee4bb09e23e89dcda411513e5d40e1a8cda9e763c93f0da93e64890b66a0c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-shouldputdowninventoryfirst"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character should put the hand-carried object into inventory before trying TargetObject placement (B2GameObjectHelper::CanAutoPutDownToInventory). During a PutDown action, uses the hand selected in PutDownContext. If UseHand is not specified, checks both hands (right first, then left).

# Parameters

| ParameterDescriptionBaseObjectThe character to check. Must be Self.CompareTypeComparison operator: Equal, NotEqual |
| --- |
| BaseObjectThe character to check. Must be Self.CompareTypeComparison operator: Equal, NotEqual |
| CompareTypeComparison operator: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the carried object should be put in inventory before surfaceSelfShouldPutDownInventoryFirstEqual |
| --- |
| Check if the carried object should be put in inventory before surfaceSelfShouldPutDownInventoryFirstEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

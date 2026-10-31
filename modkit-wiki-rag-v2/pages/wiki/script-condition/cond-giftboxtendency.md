---
document_id: "b04e43cf04244e18bd8786f67472ee57f30f7936ba68cc5475da5d5773312f5a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency"
title: "Condition_GiftBoxTendency"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:00+00:00"
content_sha256: "043878bc5121397d4c3acc45bce1e1d399dd44dadfcd38a4d4e7fce930f04835"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-giftboxtendency"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the reward tendency (Positive or Negative) of the Target gift box. Returns true if the gift reward value is positive and S1 is "Positive", or if the value is negative and S1 is "Negative".

# Parameters

| ParameterDescriptionBaseObjectNot directly used; gift data is resolved from the Target entity in contextS1Expected tendency: "Positive" (reward value > 0) or "Negative" (reward value < 0) |
| --- |
| BaseObjectNot directly used; gift data is resolved from the Target entity in contextS1Expected tendency: "Positive" (reward value > 0) or "Negative" (reward value < 0) |
| S1Expected tendency: "Positive" (reward value > 0) or "Negative" (reward value < 0) |

# Examples

| DescriptionBaseObjectCommandS1Check if Target gift has a positive reward tendencySelfGiftBoxTendencyPositiveCheck if Target gift has a negative reward tendencySelfGiftBoxTendencyNegative |
| --- |
| Check if Target gift has a positive reward tendencySelfGiftBoxTendencyPositiveCheck if Target gift has a negative reward tendencySelfGiftBoxTendencyNegative |
| Check if Target gift has a negative reward tendencySelfGiftBoxTendencyNegative |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)

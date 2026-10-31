---
document_id: "76db05f0686027b054d1c8bb636e559fd4cf9544bf8166604982b8159596d928"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftboxowner"
title: "Condition_IsGiftBoxOwner"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:30+00:00"
content_sha256: "2455960a3c565980f2b4947bf4b2c10aaa9d5ad2a60f3c91d5c4f4bef73b2089"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isgiftboxowner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self is the designated recipient of the Target gift box. Looks up gift data for the Target entity and compares its ToEntityId against Self's entity id.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; gift data is resolved from the Target entity in contextCompareTypeNot used; always checks if Self is the recipient of the Target gift |
| --- |
| BaseObjectNot directly used; gift data is resolved from the Target entity in contextCompareTypeNot used; always checks if Self is the recipient of the Target gift |
| CompareTypeNot used; always checks if Self is the recipient of the Target gift |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is the intended recipient of Target giftSelfIsGiftBoxOwnerEqualCheck if Target gift box is addressed to SelfTargetIsGiftBoxOwnerEqual |
| --- |
| Check if Self is the intended recipient of Target giftSelfIsGiftBoxOwnerEqualCheck if Target gift box is addressed to SelfTargetIsGiftBoxOwnerEqual |
| Check if Target gift box is addressed to SelfTargetIsGiftBoxOwnerEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)

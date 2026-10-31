---
document_id: "74112736335fbd6db680d0efafb95aff703a80e469b6b3c949d135e33f3323c1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startpurchasedesirepurchase"
title: "Execute_StartPurchaseDesirePurchase"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:00+00:00"
content_sha256: "1bc46a5ba41beae7018c0ba2215ad9ea5c9408b573b36812131c0a7847c086bc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-startpurchasedesirepurchase"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Called from a payment interaction's FinishScript (BaseObject=the customer themselves) to try queuing a purchase interaction toward the customer's preferred purchase target (or a fallback candidate) on the HouseholdBiz located at their current Site. Does nothing if the customer is possessed, has not reached the purchase desire threshold, already has a purchase interaction queued, or no purchasable interaction can be selected.

# Parameters

| ParameterDescriptionBaseObjectThe customer character attempting to start the purchase; must be the payer itself |
| --- |
| BaseObjectThe customer character attempting to start the purchase; must be the payer itself |

# Examples

| DescriptionBaseObjectCommandTry to chain Self into a purchase after finishing paymentSelfStartPurchaseDesirePurchase |
| --- |
| Try to chain Self into a purchase after finishing paymentSelfStartPurchaseDesirePurchase |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)

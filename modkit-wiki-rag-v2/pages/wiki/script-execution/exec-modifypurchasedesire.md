---
document_id: "fb5c067427e4919159253f7d0f55d0426211ffb846221233f691275c5ed58110"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifypurchasedesire"
title: "Execute_ModifyPurchaseDesire"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:33+00:00"
content_sha256: "25e9b460bcd890b8fdedea03fa424d7d2760a5f33e28d47ede11b2f9ffaef8cb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-modifypurchasedesire"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Modifies the BaseObject customer's purchase desire gauge on the HouseholdBiz located at their current Site by the delta amount specified in F1 (positive to increase, negative to decrease). If the delta is positive and the resulting desire is still above zero, the interaction's NonBaseObject target is recorded as the customer's preferred purchase target, so that a later automatic purchase chain (StartPurchaseDesirePurchase) can route the customer to it.

# Parameters

| ParameterDescriptionBaseObjectThe customer character whose purchase desire will be modifiedF1Delta purchase desire; positive values increase desire, negative values decrease it |
| --- |
| BaseObjectThe customer character whose purchase desire will be modifiedF1Delta purchase desire; positive values increase desire, negative values decrease it |
| F1Delta purchase desire; positive values increase desire, negative values decrease it |

# Examples

| DescriptionBaseObjectCommandF1Increase Self's purchase desire after browsing a productSelfModifyPurchaseDesire20Decrease Target's purchase desire after a rejectionTargetModifyPurchaseDesire-15 |
| --- |
| Increase Self's purchase desire after browsing a productSelfModifyPurchaseDesire20Decrease Target's purchase desire after a rejectionTargetModifyPurchaseDesire-15 |
| Decrease Target's purchase desire after a rejectionTargetModifyPurchaseDesire-15 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)

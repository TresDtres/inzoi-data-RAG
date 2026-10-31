---
document_id: "42f01c355effe11c86aa532783677eea077ac3b88f30e9398e1f662d72c5236d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetpurchasedesire"
title: "Execute_ResetPurchaseDesire"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:48+00:00"
content_sha256: "6e551b2daa6ebe5bd88a4a49ffb0d41a9ac2d8ad38bf280f98cc51fdadc6ae39"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-resetpurchasedesire"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Resets the BaseObject customer's purchase desire gauge to zero on the HouseholdBiz located at their current Site (e.g., after a purchase completes or the desire drive expires). No effect if the BaseObject has no valid located Site or HouseholdBiz.

# Parameters

| ParameterDescriptionBaseObjectThe customer character whose purchase desire will be reset to zero |
| --- |
| BaseObjectThe customer character whose purchase desire will be reset to zero |

# Examples

| DescriptionBaseObjectCommandClear Self's purchase desire after checkoutSelfResetPurchaseDesire |
| --- |
| Clear Self's purchase desire after checkoutSelfResetPurchaseDesire |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)

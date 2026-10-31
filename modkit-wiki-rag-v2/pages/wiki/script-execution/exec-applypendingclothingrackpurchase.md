---
document_id: "512de7c6517590d260bcedb8753e03f87cdfcc57d4b22894cfb40f5484945dd0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase"
title: "Execute_ApplyPendingClothingRackPurchase"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:14+00:00"
content_sha256: "b33bd6f353ccfc2ff96a1ff02778152d9ad6cd279ed90b1d0a16db3c5992b3e5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-applypendingclothingrackpurchase"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Applies the clothing-rack purchase the player picked in the ContentPicker. The pick is cached on the current interaction instance's SequenceParam (transferred from the InteractionComponent inbox when the interaction is active — see C_SelectClothingRackOutfit / InitInteractionQueueData). Buys (unlocks, and wears if the pick requested it). Used as a FinishScript of the clothing-rack interaction so the unlock happens only after the interaction completes; a canceled/interrupted interaction drops its SequenceParam, so nothing is applied (BL-57370). Skips silently when there is no pick on this interaction (e.g. picker canceled before selection).

# Parameters

| ParameterDescriptionBaseObjectSelf (the buyer/customer running the interaction). |
| --- |
| BaseObjectSelf (the buyer/customer running the interaction). |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)[ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandompresettomannequin)

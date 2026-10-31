---
document_id: "a36aefaf3e4f7285afcd45a4d7d51ae68181ac7b3cbfb1f1b843b935acb7d800"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdeathreason"
title: "Execute_SetDeathReason"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:54+00:00"
content_sha256: "436e11b8a9b202984ec3d3c18bc9c58441b054d59a9892e4c8dd8a6c522e8c20"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setdeathreason"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Records the death cause phrase on the character so the obituary text message can print it. Death paths that go through a LifeTrigger snapshot the cause on their own, so this is for the death actions that never reach one and would otherwise send the obituary with an empty or stale cause.

# Parameters

| ParameterDescriptionBaseObjectCharacter that is about to dieS1LifeTrigger.Id whose death cause phrase is reused. None clears the recorded cause |
| --- |
| BaseObjectCharacter that is about to dieS1LifeTrigger.Id whose death cause phrase is reused. None clears the recorded cause |
| S1LifeTrigger.Id whose death cause phrase is reused. None clears the recorded cause |

The phrase itself is not written here. Only the LifeTrigger.Id is recorded, and OnDeath resolves it to the entry matching the character's growth step at that moment. The cause therefore stays identical to the one a real LifeTrigger death would print and lives in one place in the data.

# Examples

| DescriptionBaseObjectCommandS1Reuse the drowning cause before the death actionSelfSetDeathReasonFallIntoWaterClear a stale cause left by an earlier triggerSelfSetDeathReasonNone |
| --- |
| Reuse the drowning cause before the death actionSelfSetDeathReasonFallIntoWaterClear a stale cause left by an earlier triggerSelfSetDeathReasonNone |
| Clear a stale cause left by an earlier triggerSelfSetDeathReasonNone |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

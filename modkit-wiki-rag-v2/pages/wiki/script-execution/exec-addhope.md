---
document_id: "9212a6414fd053189946c2ebb5ad09df6a651cc3dc279ba91d119e8d6bba9b6d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope"
title: "Execute_AddHope"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:06+00:00"
content_sha256: "c07d25a0ac1899e919bb511bd4ec2fde59cdd9243ae9a24ac1b0a7853db093fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addhope"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a specific Hope (wish/ambition) to the specified BaseObject's hope slots. The other party (Self or Target) is automatically assigned as the reason/source of this hope.

# Parameters

| ParameterDescriptionBaseObjectThe character to add the hope to (Self or Target).S1The Hope ID to add (e.g., Preference_Cooking, Preference_Piano).F1Delay time (in seconds) before the hope becomes active. |
| --- |
| BaseObjectThe character to add the hope to (Self or Target).S1The Hope ID to add (e.g., Preference_Cooking, Preference_Piano).F1Delay time (in seconds) before the hope becomes active. |
| S1The Hope ID to add (e.g., Preference_Cooking, Preference_Piano).F1Delay time (in seconds) before the hope becomes active. |
| F1Delay time (in seconds) before the hope becomes active. |

# Examples

| DescriptionBaseObjectCommandS1F1Add Cooking hope to Self immediatelySelfAddHopePreference_Cooking0Add Piano hope to Target with a 5-second delayTargetAddHopePreference_Piano5Add Guitar hope to Self with a 10-second delaySelfAddHopePreference_Guitar10Add Cooking hope to Target immediatelyTargetAddHopePreference_Cooking0 |
| --- |
| Add Cooking hope to Self immediatelySelfAddHopePreference_Cooking0Add Piano hope to Target with a 5-second delayTargetAddHopePreference_Piano5Add Guitar hope to Self with a 10-second delaySelfAddHopePreference_Guitar10Add Cooking hope to Target immediatelyTargetAddHopePreference_Cooking0 |
| Add Piano hope to Target with a 5-second delayTargetAddHopePreference_Piano5Add Guitar hope to Self with a 10-second delaySelfAddHopePreference_Guitar10Add Cooking hope to Target immediatelyTargetAddHopePreference_Cooking0 |
| Add Guitar hope to Self with a 10-second delaySelfAddHopePreference_Guitar10Add Cooking hope to Target immediatelyTargetAddHopePreference_Cooking0 |
| Add Cooking hope to Target immediatelyTargetAddHopePreference_Cooking0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)[ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandompresettomannequin)

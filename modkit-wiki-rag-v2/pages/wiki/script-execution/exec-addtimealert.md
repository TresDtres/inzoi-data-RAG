---
document_id: "bf0bd8a234f921aa379806c194240cbac4bf0c6467fdcf291983bf47d5adce2b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert"
title: "Execute_AddTimeAlert"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:11+00:00"
content_sha256: "375acebf5b04337f26ede056b38985f6c13bc5f21ecb8e921b669f7233350369"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addtimealert"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a time alert entry to the TimeAlertUIHandler for the Self entity. The alert triggers when the remaining time reaches the specified alert threshold.

# Note

BaseObject is not used. This action is always applied to the Self entity.

# Parameters

| ParameterDescriptionBaseObjectNot used. Fixed to Self entity.S1TimeAlertDataId that identifies the alert configurationF1Total duration in minutes for the alert timerF2Remaining minutes at which the alert notification triggers |
| --- |
| BaseObjectNot used. Fixed to Self entity.S1TimeAlertDataId that identifies the alert configurationF1Total duration in minutes for the alert timerF2Remaining minutes at which the alert notification triggers |
| S1TimeAlertDataId that identifies the alert configurationF1Total duration in minutes for the alert timerF2Remaining minutes at which the alert notification triggers |
| F1Total duration in minutes for the alert timerF2Remaining minutes at which the alert notification triggers |
| F2Remaining minutes at which the alert notification triggers |

# Examples

| DescriptionBaseObjectCommandS1F1F2Add a 60-minute alert that triggers at 10 minutes remainingAddTimeAlertAlert_QuestDeadline6010Add a 30-minute alert that triggers at 5 minutes remainingAddTimeAlertAlert_EventCountdown305Add a 120-minute alert that triggers at 15 minutes remainingAddTimeAlertAlert_ShopTimer12015 |
| --- |
| Add a 60-minute alert that triggers at 10 minutes remainingAddTimeAlertAlert_QuestDeadline6010Add a 30-minute alert that triggers at 5 minutes remainingAddTimeAlertAlert_EventCountdown305Add a 120-minute alert that triggers at 15 minutes remainingAddTimeAlertAlert_ShopTimer12015 |
| Add a 30-minute alert that triggers at 5 minutes remainingAddTimeAlertAlert_EventCountdown305Add a 120-minute alert that triggers at 15 minutes remainingAddTimeAlertAlert_ShopTimer12015 |
| Add a 120-minute alert that triggers at 15 minutes remainingAddTimeAlertAlert_ShopTimer12015 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)[ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandompresettomannequin)

---
document_id: "e96d19b1c5d9cf6e5313b74ce49900262af29e5a0305f2957084860c83b20fa5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon"
title: "Execute_AddInnerThoughtIcon"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:07+00:00"
content_sha256: "783ffe68a16b737c6ffc58904177a0374c5fc8cb5c068b4f39a3b59141b763e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addinnerthoughticon"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Displays an inner-thought bubble icon on the specified BaseObject. The icon repeats indefinitely until RemoveInnerThoughtIcon is called, or it can be set to display only once. Duration, display mode, and bubble probability during the cooldown are configurable.

# Parameters

| ParameterDescriptionBaseObjectThe entity that will display the inner-thought icon (Self or Target).S1The InnerThoughtIcon ID to display.S2Display mode: omit or leave empty to repeat until removed; set to OneTime to show once.F1Duration in seconds for the icon display cycle (show cooldown).F2Probability (0–1) of showing the actual bubble during the cooldown period. |
| --- |
| BaseObjectThe entity that will display the inner-thought icon (Self or Target).S1The InnerThoughtIcon ID to display.S2Display mode: omit or leave empty to repeat until removed; set to OneTime to show once.F1Duration in seconds for the icon display cycle (show cooldown).F2Probability (0–1) of showing the actual bubble during the cooldown period. |
| S1The InnerThoughtIcon ID to display.S2Display mode: omit or leave empty to repeat until removed; set to OneTime to show once.F1Duration in seconds for the icon display cycle (show cooldown).F2Probability (0–1) of showing the actual bubble during the cooldown period. |
| S2Display mode: omit or leave empty to repeat until removed; set to OneTime to show once.F1Duration in seconds for the icon display cycle (show cooldown).F2Probability (0–1) of showing the actual bubble during the cooldown period. |
| F1Duration in seconds for the icon display cycle (show cooldown).F2Probability (0–1) of showing the actual bubble during the cooldown period. |
| F2Probability (0–1) of showing the actual bubble during the cooldown period. |

# Examples

| DescriptionBaseObjectCommandShow Computer_Use_Negative icon repeatedly with 3s cycle, 70% bubble probSelfAddInnerThoughtIconShow Computer_Use_Positive icon once with 5s cycleSelfAddInnerThoughtIconShow Sad icon on Target repeatedly until removedTargetAddInnerThoughtIcon |
| --- |
| Show Computer_Use_Negative icon repeatedly with 3s cycle, 70% bubble probSelfAddInnerThoughtIconShow Computer_Use_Positive icon once with 5s cycleSelfAddInnerThoughtIconShow Sad icon on Target repeatedly until removedTargetAddInnerThoughtIcon |
| Show Computer_Use_Positive icon once with 5s cycleSelfAddInnerThoughtIconShow Sad icon on Target repeatedly until removedTargetAddInnerThoughtIcon |
| Show Sad icon on Target repeatedly until removedTargetAddInnerThoughtIcon |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)[ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandompresettomannequin)

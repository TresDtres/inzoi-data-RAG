---
document_id: "c97b5dee2b7299b3ce5b0a63ac51b4bb3fb45d2b97b38aeaa782065e97a61cb6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-triggerbirthdaygrowth"
title: "Execute_TriggerBirthdayGrowth"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:03+00:00"
content_sha256: "e7b5658054b23e8f9c037aeeadc04fa138a0e4c0765770457896587bf3b8500d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-triggerbirthdaygrowth"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Triggers the birthday growth process on the BaseObject character. Determines the blow type (Solo, Coop, SelfCelebrate) from S1, defaulting to Solo if not specified, and applies the corresponding growth via the character's BioComponent.

# Parameters

| ParameterDescriptionBaseObjectThe character to trigger birthday growth onS1Optional blow type name (EB1BirthdayBlowType): Solo, Coop, SelfCelebrate. Defaults to Solo |
| --- |
| BaseObjectThe character to trigger birthday growth onS1Optional blow type name (EB1BirthdayBlowType): Solo, Coop, SelfCelebrate. Defaults to Solo |
| S1Optional blow type name (EB1BirthdayBlowType): Solo, Coop, SelfCelebrate. Defaults to Solo |

# Examples

| DescriptionBaseObjectCommandS1Trigger growth after Self blows their own candleSelfTriggerBirthdayGrowthSoloTrigger growth after another character coop-blows Target's candleTargetTriggerBirthdayGrowthCoop |
| --- |
| Trigger growth after Self blows their own candleSelfTriggerBirthdayGrowthSoloTrigger growth after another character coop-blows Target's candleTargetTriggerBirthdayGrowthCoop |
| Trigger growth after another character coop-blows Target's candleTargetTriggerBirthdayGrowthCoop |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

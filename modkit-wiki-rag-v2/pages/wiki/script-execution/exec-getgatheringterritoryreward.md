---
document_id: "5cbaf94470b2d3dc1abc96920f9ede08a634a32d63fdcd06fd39441fe1a1b60c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-getgatheringterritoryreward"
title: "Execute_GetGatheringTerritoryReward"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:29+00:00"
content_sha256: "7515b51878e9e08f98ef5ff61b537de994d33e61bb8bd1f54d1f0ed97f5b9c76"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-getgatheringterritoryreward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Grants a gathering reward item from the current territory to the BaseObject's inventory. Randomly selects a reward from the gathering territory's reward pool at the TargetLocation. When the TargetLocation is outside every fishing territory, falls back to the territory resolved while walking to the fishing spot, then to the nearest fishing territory around BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe entity that will receive the gathering reward in their inventory. |
| --- |
| BaseObjectThe entity that will receive the gathering reward in their inventory. |

# Examples

| DescriptionBaseObjectCommandGive Self a gathering reward from the current territorySelfGetGatheringTerritoryRewardGive Target a gathering reward from the current territoryTargetGetGatheringTerritoryReward |
| --- |
| Give Self a gathering reward from the current territorySelfGetGatheringTerritoryRewardGive Target a gathering reward from the current territoryTargetGetGatheringTerritoryReward |
| Give Target a gathering reward from the current territoryTargetGetGatheringTerritoryReward |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

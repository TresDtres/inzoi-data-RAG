---
document_id: "90b9b5a646306e776856d51715d3f47ce3a72ba4c9743be3e41b883dea80f5fa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-getrewardobjectpool"
title: "Execute_GetRewardObjectPool"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:29+00:00"
content_sha256: "11366f5787d6ae7eb8ab91fcac98f3aebadb9bb1c36f36f7d7fbc9f80a91f4b1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-getrewardobjectpool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Randomly selects an object from the specified reward object pool and spawns it into the BaseObject's inventory. On success, also requests a gathering inner thought icon for the base entity.

# Note

If the pool pick returns an empty result, nothing is generated.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose inventory will receive the randomly picked reward objectS1Reward object pool ID (RewardObjectPool.json Id) used to randomly select an object |
| --- |
| BaseObjectThe entity whose inventory will receive the randomly picked reward objectS1Reward object pool ID (RewardObjectPool.json Id) used to randomly select an object |
| S1Reward object pool ID (RewardObjectPool.json Id) used to randomly select an object |

# Examples

| DescriptionBaseObjectCommandS1Randomly reward Self from "Pool_Fruit"SelfGetRewardObjectPoolPool_FruitGive random reward item to Target from herb poolTargetGetRewardObjectPoolPool_HerbPick random reward from gathering pool for SelfSelfGetRewardObjectPoolPool_Gather |
| --- |
| Randomly reward Self from "Pool_Fruit"SelfGetRewardObjectPoolPool_FruitGive random reward item to Target from herb poolTargetGetRewardObjectPoolPool_HerbPick random reward from gathering pool for SelfSelfGetRewardObjectPoolPool_Gather |
| Give random reward item to Target from herb poolTargetGetRewardObjectPoolPool_HerbPick random reward from gathering pool for SelfSelfGetRewardObjectPoolPool_Gather |
| Pick random reward from gathering pool for SelfSelfGetRewardObjectPoolPool_Gather |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

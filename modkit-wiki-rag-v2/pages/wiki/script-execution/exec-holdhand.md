---
document_id: "2ca7abc537e3700cc23e14d28f437dd8e2bdbcc76a29fdce5702a6dbf0186fb3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-holdhand"
title: "Execute_HoldHand"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:31+00:00"
content_sha256: "aaffce70d372992783ab65dc2938c19d29cfe057e397d84a33883b722c089eef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-holdhand"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Initiates HoldHand between the BaseObject character (main/leader) and the opposite character (sub/follower). Internally calls FB2PostureComponent::TryHoldHand on the leader's PostureComponent which performs the distance/direction validation (max ~150cm, ±90deg) and synchronizes both sides on success.

# Parameters

| ParameterDescriptionBaseObjectThe leader (main) character. The opposite entity is treated as the follower (sub). |
| --- |
| BaseObjectThe leader (main) character. The opposite entity is treated as the follower (sub). |

# Examples

| DescriptionBaseObjectCommandSelf holds hand with Target (Self is leader)SelfHoldHandTarget holds hand with Self (Target is leader)TargetHoldHand |
| --- |
| Self holds hand with Target (Self is leader)SelfHoldHandTarget holds hand with Self (Target is leader)TargetHoldHand |
| Target holds hand with Self (Target is leader)TargetHoldHand |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

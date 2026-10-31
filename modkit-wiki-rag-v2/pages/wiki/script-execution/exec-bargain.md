---
document_id: "d80ba8f3a0eabc1501a16517576248281fe5b27f396220f1055b8f407a3468a9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bargain"
title: "Execute_Bargain"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:16+00:00"
content_sha256: "cb46995a1d4779313b4c4a9eb3ab2990ffbc178aea98e5b1a629eec75d16adc9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-bargain"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Forwards a bargain command to the BargainScheduler connected to the BaseObject character. The command is resolved from S1 into an EB1BargainCommand enum value and then passed to the scheduler's ExecuteBargain method.

# Parameters

| ParameterDescriptionBaseObjectThe character whose connected BargainScheduler will execute the command (Self or Target)S1Bargain command to execute (Start, Accept, Reject, Counter, Cancel) |
| --- |
| BaseObjectThe character whose connected BargainScheduler will execute the command (Self or Target)S1Bargain command to execute (Start, Accept, Reject, Counter, Cancel) |
| S1Bargain command to execute (Start, Accept, Reject, Counter, Cancel) |

# Examples

| DescriptionBaseObjectCommandS1Start a bargain negotiationSelfBargainStartAccept the current bargain offerSelfBargainAcceptReject the current bargain offerSelfBargainRejectMake a counter offer in the negotiationSelfBargainCounter |
| --- |
| Start a bargain negotiationSelfBargainStartAccept the current bargain offerSelfBargainAcceptReject the current bargain offerSelfBargainRejectMake a counter offer in the negotiationSelfBargainCounter |
| Accept the current bargain offerSelfBargainAcceptReject the current bargain offerSelfBargainRejectMake a counter offer in the negotiationSelfBargainCounter |
| Reject the current bargain offerSelfBargainRejectMake a counter offer in the negotiationSelfBargainCounter |
| Make a counter offer in the negotiationSelfBargainCounter |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

---
document_id: "690bb348836b531c0daa495f934d8740c42881b80b77837ecddc4cc0702c1af9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttoaffaircouple"
title: "Execute_RunScriptToAffairCouple"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:50+00:00"
content_sha256: "d43086376b1cd136a7041a2cb50eb3c74dbf05b3ddd6b06779cb08a43951a704"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-runscripttoaffaircouple"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Resolves the affair pair around BaseObject (BaseObject's cheating partner and the mistress/lover they are with) and runs a script on each of them, with BaseObject set as the Target of both script contexts. If the affair pair cannot be resolved (BaseObject's partner is not part of the observed pairing), nothing is executed.

# Parameters

| ParameterDescriptionBaseObjectThe observer used to resolve the affair pair (Self or Target)S1Script ID to run on the cheating partner (Self = cheating partner, Target = BaseObject)S2Script ID to run on the mistress/lover (Self = mistress, Target = BaseObject) |
| --- |
| BaseObjectThe observer used to resolve the affair pair (Self or Target)S1Script ID to run on the cheating partner (Self = cheating partner, Target = BaseObject)S2Script ID to run on the mistress/lover (Self = mistress, Target = BaseObject) |
| S1Script ID to run on the cheating partner (Self = cheating partner, Target = BaseObject)S2Script ID to run on the mistress/lover (Self = mistress, Target = BaseObject) |
| S2Script ID to run on the mistress/lover (Self = mistress, Target = BaseObject) |

# Examples

| DescriptionBaseObjectCommandS1S2Run reaction scripts on both the cheating partner and the mistressSelfRunScriptToAffairCoupleAffair_Partner_ReactionAffair_Mistress_ReactionRun a script only on the cheating partner, none on the mistressSelfRunScriptToAffairCoupleAffair_Partner_Reaction |
| --- |
| Run reaction scripts on both the cheating partner and the mistressSelfRunScriptToAffairCoupleAffair_Partner_ReactionAffair_Mistress_ReactionRun a script only on the cheating partner, none on the mistressSelfRunScriptToAffairCoupleAffair_Partner_Reaction |
| Run a script only on the cheating partner, none on the mistressSelfRunScriptToAffairCoupleAffair_Partner_Reaction |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

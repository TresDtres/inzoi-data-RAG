---
document_id: "e141041d68df14e218847cf2708c41b03f47ce085ee3af6d8c6cd9399030102d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-replacetrait"
title: "Execute_ReplaceTrait"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:48+00:00"
content_sha256: "e9d5d1d7ecba02f432c6a03d31e6f0775ff42bdd7107efd5d3bbc7cf1b4277c8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-replacetrait"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Replaces one trait with another on the BaseObject entity. Removes the old trait (S2) first, then adds the new trait (S1).

# Parameters

| ParameterDescriptionBaseObjectThe entity whose trait will be replaced (Self or Target)S1New Trait ID to add (defined in Trait.json)S2Old Trait ID to remove (defined in Trait.json) |
| --- |
| BaseObjectThe entity whose trait will be replaced (Self or Target)S1New Trait ID to add (defined in Trait.json)S2Old Trait ID to remove (defined in Trait.json) |
| S1New Trait ID to add (defined in Trait.json)S2Old Trait ID to remove (defined in Trait.json) |
| S2Old Trait ID to remove (defined in Trait.json) |

# Examples

| DescriptionBaseObjectCommandS1S2Replace Loyal trait with Flirty on SelfSelfReplaceTraitFlirtyLoyalReplace Perfectionist trait with Clumsy on TargetTargetReplaceTraitClumsyPerfectionist |
| --- |
| Replace Loyal trait with Flirty on SelfSelfReplaceTraitFlirtyLoyalReplace Perfectionist trait with Clumsy on TargetTargetReplaceTraitClumsyPerfectionist |
| Replace Perfectionist trait with Clumsy on TargetTargetReplaceTraitClumsyPerfectionist |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)

---
document_id: "427538aa5a8a1e54d3a769756345287b762854e04c28da2006e137c19a970cce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait"
title: "Execute_AddTrait"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:11+00:00"
content_sha256: "054de0246a5e157cabb161855de212c7d731117fdc5622e9110c8e85205c8703"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addtrait"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Grants an Aptitude-category trait to the BaseObject entity (e.g. from consuming an item such as a CatDonut). Only traits whose Trait.json Category is EB1TraitCategoryType::Aptitude are allowed; a Nature, Characteristic, Ambition, or HopeLife trait is rejected with a warning and skipped so that designers cannot accidentally grant a non-Aptitude trait through a script. The grant is idempotent (FB2TraitComponent::AddTrait no-ops when the trait is already owned) and fires the acquisition notification (activity feed / overhead alert) for the playing household/character.

# Note

This command only registers trait ownership. The trait's own effects (modifiers, buffs, etc.) are applied by the trait's AddTraitScriptId, not by this command.

# Parameters

| ParamsDescriptionBaseObjectTarget entity that will receive the trait (Self or Target)CommandAddTraitS1Trait ID to grant (Trait.json Id); must be Category == Aptitude |
| --- |
| BaseObjectTarget entity that will receive the trait (Self or Target)CommandAddTraitS1Trait ID to grant (Trait.json Id); must be Category == Aptitude |
| CommandAddTraitS1Trait ID to grant (Trait.json Id); must be Category == Aptitude |
| S1Trait ID to grant (Trait.json Id); must be Category == Aptitude |

# Examples

| ExampleBaseObjectCommandCompareTypeS1S2F1F2ProbGrant the CatDonut aptitude trait to SelfSelfAddTraitAptitude_CatDonut |
| --- |
| Grant the CatDonut aptitude trait to SelfSelfAddTraitAptitude_CatDonut |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)[ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandompresettomannequin)

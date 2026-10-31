---
document_id: "f6618201457b8defd88e9eed9b8374ff2a2cf30182ccc6f92dd01c835761dd67"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-toggleautonomyoptionenabled"
title: "Condition_ToggleAutonomyOptionEnabled"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:01+00:00"
content_sha256: "7f672f3648d75fa81795a45fdd167e4c72796b6998247985f1fff9e122757df8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-toggleautonomyoptionenabled"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character's toggle autonomy option (S1) is enabled. Only toggle-type options are supported (AutonomyEnable, DisableTalkInterrupt, FreezeStat, AutoChangeCategorizedStyle). Frequency-type options are rejected.

# Parameters

| ParameterDescriptionBaseObjectThe character whose autonomy option is checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1EB1AutonomyOptionType toggle option name |
| --- |
| BaseObjectThe character whose autonomy option is checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1EB1AutonomyOptionType toggle option name |
| CompareTypeSupported compare types: Equal, NotEqualS1EB1AutonomyOptionType toggle option name |
| S1EB1AutonomyOptionType toggle option name |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has autonomy enabledSelfToggleAutonomyOptionEnabledEqualAutonomyEnableCheck if Target does NOT disable talk interruptTargetToggleAutonomyOptionEnabledNotEqualDisableTalkInterruptCheck if Self has stat freeze enabledSelfToggleAutonomyOptionEnabledEqualFreezeStatCheck if Self has auto-change categorized style enabledSelfToggleAutonomyOptionEnabledEqualAutoChangeCategorizedStyle |
| --- |
| Check if Self has autonomy enabledSelfToggleAutonomyOptionEnabledEqualAutonomyEnableCheck if Target does NOT disable talk interruptTargetToggleAutonomyOptionEnabledNotEqualDisableTalkInterruptCheck if Self has stat freeze enabledSelfToggleAutonomyOptionEnabledEqualFreezeStatCheck if Self has auto-change categorized style enabledSelfToggleAutonomyOptionEnabledEqualAutoChangeCategorizedStyle |
| Check if Target does NOT disable talk interruptTargetToggleAutonomyOptionEnabledNotEqualDisableTalkInterruptCheck if Self has stat freeze enabledSelfToggleAutonomyOptionEnabledEqualFreezeStatCheck if Self has auto-change categorized style enabledSelfToggleAutonomyOptionEnabledEqualAutoChangeCategorizedStyle |
| Check if Self has stat freeze enabledSelfToggleAutonomyOptionEnabledEqualFreezeStatCheck if Self has auto-change categorized style enabledSelfToggleAutonomyOptionEnabledEqualAutoChangeCategorizedStyle |
| Check if Self has auto-change categorized style enabledSelfToggleAutonomyOptionEnabledEqualAutoChangeCategorizedStyle |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)

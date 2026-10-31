---
document_id: "d8bc7a2013301f8fa59197b032f26146b3170b4e3c0e161ba89265be78eff480"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-growthstep"
title: "Condition_GrowthStep"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:00+00:00"
content_sha256: "4039a2902ac46f70db77d998d8a25ed9664debb5d05030c0164265896b0df4e0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-growthstep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the GrowthStep (age group) of the entity specified by BaseObject. Evaluates the character's current GrowthStep and compares it against the expected value(s) using CompareType. S2 is used as the upper bound for range comparisons.

# Note

S2 may be empty when CompareType does not require an upper bound value.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose GrowthStep is checked (Self or Target).CompareTypeComparison operator (Equal, GreaterOrEqual, InRange, OutRange, etc.).S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| --- |
| BaseObjectThe entity whose GrowthStep is checked (Self or Target).CompareTypeComparison operator (Equal, GreaterOrEqual, InRange, OutRange, etc.).S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| CompareTypeComparison operator (Equal, GreaterOrEqual, InRange, OutRange, etc.).S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if self is exactly YouthSelfGrowthStepEqualYouthCheck if target is Adult or olderTargetGrowthStepGreaterOrEqualAdultCheck if self is between LowTeen and AdultSelfGrowthStepInRangeLowTeenAdultCheck if target is not a ChildTargetGrowthStepNotEqualChild |
| --- |
| Check if self is exactly YouthSelfGrowthStepEqualYouthCheck if target is Adult or olderTargetGrowthStepGreaterOrEqualAdultCheck if self is between LowTeen and AdultSelfGrowthStepInRangeLowTeenAdultCheck if target is not a ChildTargetGrowthStepNotEqualChild |
| Check if target is Adult or olderTargetGrowthStepGreaterOrEqualAdultCheck if self is between LowTeen and AdultSelfGrowthStepInRangeLowTeenAdultCheck if target is not a ChildTargetGrowthStepNotEqualChild |
| Check if self is between LowTeen and AdultSelfGrowthStepInRangeLowTeenAdultCheck if target is not a ChildTargetGrowthStepNotEqualChild |
| Check if target is not a ChildTargetGrowthStepNotEqualChild |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)

---
document_id: "120385f290ef8b81ee7cbfc6244baa2d606410f8335ec4cb4f5148aa7ae262d5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkownergrowthstep"
title: "Condition_CheckOwnerGrowthStep"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:53+00:00"
content_sha256: "ed28d257f68ed3329f14da7d6b2c1d85ddf5f0885f92d65ebe21ebe0744ffaf1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checkownergrowthstep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the GrowthStep (age group) of the owner of the entity specified by BaseObject. Resolves the entity’s ownership data to find the owner, fetches the owner’s BioComponent, and compares the owner’s GrowthStep against the expected value(s) using CompareType. This is useful when the evaluated object is not a character itself (e.g., an owned item) but you want to branch logic based on the owning character’s age group.

# Note

S2 may be empty when CompareType does not require an upper bound value.

# Parameters

| ParameterDescriptionBaseObjectThe object whose owner’s GrowthStep is checked (Self or Target).CompareTypeComparison operator (Equal, GreaterOrEqual, InRange, etc.).S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| --- |
| BaseObjectThe object whose owner’s GrowthStep is checked (Self or Target).CompareTypeComparison operator (Equal, GreaterOrEqual, InRange, etc.).S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| CompareTypeComparison operator (Equal, GreaterOrEqual, InRange, etc.).S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| S1Expected GrowthStep or minimum GrowthStep for range (EB1GrowthStep name).S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |
| S2Maximum GrowthStep for range comparisons (e.g., InRange, OutRange). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if the target object’s owner is Youth or olderTargetCheckOwnerGrowthStepGreaterOrEqualYouthCheck if the target object’s owner is exactly AdultTargetCheckOwnerGrowthStepEqualAdultCheck if the self object’s owner is between Youth and AdultSelfCheckOwnerGrowthStepInRangeYouthAdultCheck if the target object’s owner is not a ChildTargetCheckOwnerGrowthStepNotEqualChild |
| --- |
| Check if the target object’s owner is Youth or olderTargetCheckOwnerGrowthStepGreaterOrEqualYouthCheck if the target object’s owner is exactly AdultTargetCheckOwnerGrowthStepEqualAdultCheck if the self object’s owner is between Youth and AdultSelfCheckOwnerGrowthStepInRangeYouthAdultCheck if the target object’s owner is not a ChildTargetCheckOwnerGrowthStepNotEqualChild |
| Check if the target object’s owner is exactly AdultTargetCheckOwnerGrowthStepEqualAdultCheck if the self object’s owner is between Youth and AdultSelfCheckOwnerGrowthStepInRangeYouthAdultCheck if the target object’s owner is not a ChildTargetCheckOwnerGrowthStepNotEqualChild |
| Check if the self object’s owner is between Youth and AdultSelfCheckOwnerGrowthStepInRangeYouthAdultCheck if the target object’s owner is not a ChildTargetCheckOwnerGrowthStepNotEqualChild |
| Check if the target object’s owner is not a ChildTargetCheckOwnerGrowthStepNotEqualChild |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)

---
document_id: "767ff42f46ec2f2275203df7d4b7e302f346579e93eda05f169f6c8d70f30dba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gender"
title: "Condition_Gender"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:59+00:00"
content_sha256: "554973c332b16ef63a7220128a32cca64879a834632591eb4015ad548b87ca41"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-gender"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character's gender matches the given gender type.

# Parameters

| ParameterDescriptionBaseObjectThe character to validate (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Gender type to compare against (Male, Female, Default, Invalid). |
| --- |
| BaseObjectThe character to validate (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Gender type to compare against (Male, Female, Default, Invalid). |
| CompareTypeSupported compare types: Equal, NotEqual.S1Gender type to compare against (Male, Female, Default, Invalid). |
| S1Gender type to compare against (Male, Female, Default, Invalid). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether self is Male.SelfGenderEqualMaleChecks whether self is not Male.SelfGenderNotEqualMaleChecks whether target is Female.TargetGenderEqualFemaleChecks whether target is not Female.TargetGenderNotEqualFemale |
| --- |
| Checks whether self is Male.SelfGenderEqualMaleChecks whether self is not Male.SelfGenderNotEqualMaleChecks whether target is Female.TargetGenderEqualFemaleChecks whether target is not Female.TargetGenderNotEqualFemale |
| Checks whether self is not Male.SelfGenderNotEqualMaleChecks whether target is Female.TargetGenderEqualFemaleChecks whether target is not Female.TargetGenderNotEqualFemale |
| Checks whether target is Female.TargetGenderEqualFemaleChecks whether target is not Female.TargetGenderNotEqualFemale |
| Checks whether target is not Female.TargetGenderNotEqualFemale |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)

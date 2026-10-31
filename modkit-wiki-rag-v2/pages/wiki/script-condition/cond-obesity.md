---
document_id: "a1118836473033ab7f9ce045d596fb3a63b9c77788329d99cdffdf2055c93f84"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-obesity"
title: "Condition_Obesity"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:53+00:00"
content_sha256: "bb36313fa63cbb51011eba3795deb680250930176371d2947bfccac7bbb7b131"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-obesity"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the character's current obesity value against a given threshold or range.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange.F1Obesity value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange.F1Obesity value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange.F1Obesity value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| F1Obesity value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| F2Upper bound of the range for InRange or OutRange comparisons. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks if self has an obesity value of exactly 2.SelfObesityEqual20Checks if self has an obesity value of 3 or more.SelfObesityGreaterOrEqual30Checks if target has an obesity value below 1.TargetObesityLess10Checks if self has an obesity value between 1 and 3.SelfObesityInRange13 |
| --- |
| Checks if self has an obesity value of exactly 2.SelfObesityEqual20Checks if self has an obesity value of 3 or more.SelfObesityGreaterOrEqual30Checks if target has an obesity value below 1.TargetObesityLess10Checks if self has an obesity value between 1 and 3.SelfObesityInRange13 |
| Checks if self has an obesity value of 3 or more.SelfObesityGreaterOrEqual30Checks if target has an obesity value below 1.TargetObesityLess10Checks if self has an obesity value between 1 and 3.SelfObesityInRange13 |
| Checks if target has an obesity value below 1.TargetObesityLess10Checks if self has an obesity value between 1 and 3.SelfObesityInRange13 |
| Checks if self has an obesity value between 1 and 3.SelfObesityInRange13 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)

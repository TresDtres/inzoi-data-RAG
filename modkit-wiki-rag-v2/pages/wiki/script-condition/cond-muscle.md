---
document_id: "461004d59fc8c43445fa5d2bbfe809630cfaa68bf476a8c2f019426879f2ec7e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-muscle"
title: "Condition_Muscle"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:52+00:00"
content_sha256: "f5d795042306783bab5b25cc2e9042c153b9b6dc2f7cbcf3956a90d7cd31d806"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-muscle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the character's current muscle mass value against a given threshold or range.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange.F1Muscle value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange.F1Muscle value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange.F1Muscle value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| F1Muscle value threshold to compare against (cast to integer).F2Upper bound of the range for InRange or OutRange comparisons. |
| F2Upper bound of the range for InRange or OutRange comparisons. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks if self has a muscle value of exactly 3.SelfMuscleEqual30Checks if self has a muscle value of 5 or more.SelfMuscleGreaterOrEqual50Checks if target has a muscle value below 2.TargetMuscleLess20Checks if self has a muscle value between 2 and 4.SelfMuscleInRange24 |
| --- |
| Checks if self has a muscle value of exactly 3.SelfMuscleEqual30Checks if self has a muscle value of 5 or more.SelfMuscleGreaterOrEqual50Checks if target has a muscle value below 2.TargetMuscleLess20Checks if self has a muscle value between 2 and 4.SelfMuscleInRange24 |
| Checks if self has a muscle value of 5 or more.SelfMuscleGreaterOrEqual50Checks if target has a muscle value below 2.TargetMuscleLess20Checks if self has a muscle value between 2 and 4.SelfMuscleInRange24 |
| Checks if target has a muscle value below 2.TargetMuscleLess20Checks if self has a muscle value between 2 and 4.SelfMuscleInRange24 |
| Checks if self has a muscle value between 2 and 4.SelfMuscleInRange24 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)

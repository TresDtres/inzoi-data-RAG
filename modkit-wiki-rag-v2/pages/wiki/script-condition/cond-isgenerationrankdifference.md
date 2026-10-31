---
document_id: "aaac4201cc5ccc783fc6e6118092c21e257afc6b560213fccda0c4132e375f19"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgenerationrankdifference"
title: "Condition_IsGenerationRankDifference"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:30+00:00"
content_sha256: "83ae7239c33ffc225b7c13887a693e8fae75ef583ea622c4b6b76bf3f8c49087"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isgenerationrankdifference"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the generation rank difference between Self and Target in the family tree. Calculates the generational gap by traversing the blood relative path. Each Parent step adds +1 (going up) and each Child step adds -1 (going down). Returns false if no blood-relative path exists between Self and Target.

# Note

Positive value means Target is an ancestor; negative means Target is a descendant; zero means same generation. Only considers blood relatives (EB1FamilyTreeQueryType::BloodRelative).

# Parameters

| ParameterDescriptionBaseObjectSelf is the reference character; Target is the character to compare generation againstCompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeF1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| --- |
| BaseObjectSelf is the reference character; Target is the character to compare generation againstCompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeF1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| CompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeF1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| F1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| F2Maximum value for Range comparison |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Target is Self's parent (1 gen up)SelfIsGenerationRankDifferenceEqualIf Target is Self's child (1 gen down)SelfIsGenerationRankDifferenceEqualIf Target is an older generationSelfIsGenerationRankDifferenceGreaterIf Target is a younger generationSelfIsGenerationRankDifferenceLess |
| --- |
| If Target is Self's parent (1 gen up)SelfIsGenerationRankDifferenceEqualIf Target is Self's child (1 gen down)SelfIsGenerationRankDifferenceEqualIf Target is an older generationSelfIsGenerationRankDifferenceGreaterIf Target is a younger generationSelfIsGenerationRankDifferenceLess |
| If Target is Self's child (1 gen down)SelfIsGenerationRankDifferenceEqualIf Target is an older generationSelfIsGenerationRankDifferenceGreaterIf Target is a younger generationSelfIsGenerationRankDifferenceLess |
| If Target is an older generationSelfIsGenerationRankDifferenceGreaterIf Target is a younger generationSelfIsGenerationRankDifferenceLess |
| If Target is a younger generationSelfIsGenerationRankDifferenceLess |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)

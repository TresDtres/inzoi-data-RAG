---
document_id: "54c31daee49355771a8a7cad78cc32e9944c2c1d0f0086e8397ce3cf4e75c96f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat"
title: "Condition_Stat"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:00+00:00"
content_sha256: "03103bb9ca4be4615f25241df2f1634a54ef15b5e3ddd78753bdf68fb1fa8b75"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-stat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified stat of a target entity satisfies the given comparison condition.

# Parameters

| ParameterDescriptionBaseObjectThe target object whose stat is checked (Self or Target)CompareTypeComparison operator: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeS1The Stat ID to compare (e.g., Cleanliness, Hungry, Energy)F1The value to compare against (or minimum value for InRange/OutRange)F2The maximum value for range comparisons (InRange/OutRange only) |
| --- |
| BaseObjectThe target object whose stat is checked (Self or Target)CompareTypeComparison operator: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeS1The Stat ID to compare (e.g., Cleanliness, Hungry, Energy)F1The value to compare against (or minimum value for InRange/OutRange)F2The maximum value for range comparisons (InRange/OutRange only) |
| CompareTypeComparison operator: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeS1The Stat ID to compare (e.g., Cleanliness, Hungry, Energy)F1The value to compare against (or minimum value for InRange/OutRange)F2The maximum value for range comparisons (InRange/OutRange only) |
| S1The Stat ID to compare (e.g., Cleanliness, Hungry, Energy)F1The value to compare against (or minimum value for InRange/OutRange)F2The maximum value for range comparisons (InRange/OutRange only) |
| F1The value to compare against (or minimum value for InRange/OutRange)F2The maximum value for range comparisons (InRange/OutRange only) |
| F2The maximum value for range comparisons (InRange/OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Self's Cleanliness stat is less than 40SelfStatLessCleanliness40.0Check if Self's Hungry stat equals 0SelfStatEqualHungry0.0Check if Target's Hungry stat is 80 or moreTargetStatGreaterOrEqualHungry80.0Check if Target's Hungry stat is between -10 and 10TargetStatInRangeHungry-10.010.0 |
| --- |
| Check if Self's Cleanliness stat is less than 40SelfStatLessCleanliness40.0Check if Self's Hungry stat equals 0SelfStatEqualHungry0.0Check if Target's Hungry stat is 80 or moreTargetStatGreaterOrEqualHungry80.0Check if Target's Hungry stat is between -10 and 10TargetStatInRangeHungry-10.010.0 |
| Check if Self's Hungry stat equals 0SelfStatEqualHungry0.0Check if Target's Hungry stat is 80 or moreTargetStatGreaterOrEqualHungry80.0Check if Target's Hungry stat is between -10 and 10TargetStatInRangeHungry-10.010.0 |
| Check if Target's Hungry stat is 80 or moreTargetStatGreaterOrEqualHungry80.0Check if Target's Hungry stat is between -10 and 10TargetStatInRangeHungry-10.010.0 |
| Check if Target's Hungry stat is between -10 and 10TargetStatInRangeHungry-10.010.0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)

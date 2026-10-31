---
document_id: "314fa5cdffb439e3f5c7cdc7029ee560e6124ea1abd76dcd6fe79190e1a428e8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff"
title: "Condition_Buff"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:45+00:00"
content_sha256: "c34b129e72ba2cba370c0c69cbe5a29c4c679b14b6a119e75add9c74ff7505fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-buff"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character currently has a buff with the given BuffId. Returns true when CompareType is Equal and the buff is present, or when CompareType is NotEqual and the buff is absent.

# Parameters

| ParameterDescriptionBaseObjectThe character to check for the buff (Self or Target)CompareTypeEqual: buff must be present; NotEqual: buff must be absentS1Buff ID to look up (Buff.json Id) |
| --- |
| BaseObjectThe character to check for the buff (Self or Target)CompareTypeEqual: buff must be present; NotEqual: buff must be absentS1Buff ID to look up (Buff.json Id) |
| CompareTypeEqual: buff must be present; NotEqual: buff must be absentS1Buff ID to look up (Buff.json Id) |
| S1Buff ID to look up (Buff.json Id) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check that self has "Hungry_Stat" buffSelfBuffEqualHungry_StatCheck that target does NOT have "Hungry_Stat" buffTargetBuffNotEqualHungry_StatCheck that self has "Happy" buffSelfBuffEqualHappy |
| --- |
| Check that self has "Hungry_Stat" buffSelfBuffEqualHungry_StatCheck that target does NOT have "Hungry_Stat" buffTargetBuffNotEqualHungry_StatCheck that self has "Happy" buffSelfBuffEqualHappy |
| Check that target does NOT have "Hungry_Stat" buffTargetBuffNotEqualHungry_StatCheck that self has "Happy" buffSelfBuffEqualHappy |
| Check that self has "Happy" buffSelfBuffEqualHappy |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)

---
document_id: "2437fabce520363a70cc6a0583573ba8b266576251c963b22be4ffb76e055a4e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill"
title: "Condition_Skill"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:59+00:00"
content_sha256: "aef77a4c9566e060184409d760e222f8124238a75c7d9db68ef0b56e93655775"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-skill"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if an entity's skill level satisfies the specified comparison condition.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose skill level is checked (Self or Target).CompareTypeThe comparison operation to apply (Equal, NotEqual, Greater, Less, GreaterEqual,LessEqual, Between).S1The skill ID to check (e.g., Charisma, Cooking).F1The primary value to compare against the skill level.F2The upper bound for range comparison (used with Between). |
| --- |
| BaseObjectThe entity whose skill level is checked (Self or Target).CompareTypeThe comparison operation to apply (Equal, NotEqual, Greater, Less, GreaterEqual,LessEqual, Between).S1The skill ID to check (e.g., Charisma, Cooking).F1The primary value to compare against the skill level.F2The upper bound for range comparison (used with Between). |
| CompareTypeThe comparison operation to apply (Equal, NotEqual, Greater, Less, GreaterEqual,LessEqual, Between).S1The skill ID to check (e.g., Charisma, Cooking).F1The primary value to compare against the skill level.F2The upper bound for range comparison (used with Between). |
| LessEqual, Between).S1The skill ID to check (e.g., Charisma, Cooking).F1The primary value to compare against the skill level.F2The upper bound for range comparison (used with Between). |
| S1The skill ID to check (e.g., Charisma, Cooking).F1The primary value to compare against the skill level.F2The upper bound for range comparison (used with Between). |
| F1The primary value to compare against the skill level.F2The upper bound for range comparison (used with Between). |
| F2The upper bound for range comparison (used with Between). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's Charisma skill level is at least 5SelfSkillGreaterEqualCheck if Self's Cooking skill level equals 3SelfSkillEqualCheck if Self's Cooking skill level is between 3 and 7SelfSkillBetweenCheck if Target's Logic skill level is less than 10TargetSkillLess |
| --- |
| Check if Self's Charisma skill level is at least 5SelfSkillGreaterEqualCheck if Self's Cooking skill level equals 3SelfSkillEqualCheck if Self's Cooking skill level is between 3 and 7SelfSkillBetweenCheck if Target's Logic skill level is less than 10TargetSkillLess |
| Check if Self's Cooking skill level equals 3SelfSkillEqualCheck if Self's Cooking skill level is between 3 and 7SelfSkillBetweenCheck if Target's Logic skill level is less than 10TargetSkillLess |
| Check if Self's Cooking skill level is between 3 and 7SelfSkillBetweenCheck if Target's Logic skill level is less than 10TargetSkillLess |
| Check if Target's Logic skill level is less than 10TargetSkillLess |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)

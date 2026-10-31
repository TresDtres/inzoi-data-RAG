---
document_id: "1dbedf2294a5f6e477454ee8cd4a18f1c3f09c9315d3455733369f4b39288cc6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup"
title: "Condition_SkillUp"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:59+00:00"
content_sha256: "9650c8c8b6da6b0ed67c4c59493757e77fda5ebfe55d9b1f7fd31d0130243ad8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-skillup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if an entity's skill leveled up during the current simulation frame.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose skill level-up state is checked (Self or Target).CompareTypeEqual: the skill leveled up this frame; NotEqual: it did not level up.S1The skill ID to check (e.g., Cooking, Charisma). |
| --- |
| BaseObjectThe entity whose skill level-up state is checked (Self or Target).CompareTypeEqual: the skill leveled up this frame; NotEqual: it did not level up.S1The skill ID to check (e.g., Cooking, Charisma). |
| CompareTypeEqual: the skill leveled up this frame; NotEqual: it did not level up.S1The skill ID to check (e.g., Cooking, Charisma). |
| S1The skill ID to check (e.g., Cooking, Charisma). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's Cooking skill leveled upSelfSkillUpEqualCheck if Self's Charisma skill did not level upSelfSkillUpNotEqualCheck if Target's Logic skill leveled upTargetSkillUpEqual |
| --- |
| Check if Self's Cooking skill leveled upSelfSkillUpEqualCheck if Self's Charisma skill did not level upSelfSkillUpNotEqualCheck if Target's Logic skill leveled upTargetSkillUpEqual |
| Check if Self's Charisma skill did not level upSelfSkillUpNotEqualCheck if Target's Logic skill leveled upTargetSkillUpEqual |
| Check if Target's Logic skill leveled upTargetSkillUpEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)

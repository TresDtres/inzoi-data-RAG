---
document_id: "b83d56eef6cfaa95db7a415c7f3dcc7d645e3961961049de52ae4b59ed027fed"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill"
title: "Condition_CompareSkill"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:55+00:00"
content_sha256: "63e3c60baf716cbe544b632efa4551c697f434e13cc10a92ad7ef652f58a308b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-compareskill"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the skill level of the BaseObject entity against the Target entity's skill level.

# Note

Although BaseObject can be set to either Self or Target, validation currently restricts this condition to Self only.

# Parameters

| ParameterDescriptionBaseObjectThe reference entity whose skill level is compared against Target (Self).CompareTypeThe comparison operation applied between BaseObject and Target skill levels(Equal, NotEqual, Greater, Less, GreaterEqual, LessEqual).S1The skill ID to compare (e.g., Cooking, Charisma). |
| --- |
| BaseObjectThe reference entity whose skill level is compared against Target (Self).CompareTypeThe comparison operation applied between BaseObject and Target skill levels(Equal, NotEqual, Greater, Less, GreaterEqual, LessEqual).S1The skill ID to compare (e.g., Cooking, Charisma). |
| CompareTypeThe comparison operation applied between BaseObject and Target skill levels(Equal, NotEqual, Greater, Less, GreaterEqual, LessEqual).S1The skill ID to compare (e.g., Cooking, Charisma). |
| (Equal, NotEqual, Greater, Less, GreaterEqual, LessEqual).S1The skill ID to compare (e.g., Cooking, Charisma). |
| S1The skill ID to compare (e.g., Cooking, Charisma). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's Cooking skill is greater than Target'sSelfCompareSkillGreaterCheck if Self's Charisma skill equals Target'sSelfCompareSkillEqualCheck if Self's Logic skill is less than Target'sSelfCompareSkillLess |
| --- |
| Check if Self's Cooking skill is greater than Target'sSelfCompareSkillGreaterCheck if Self's Charisma skill equals Target'sSelfCompareSkillEqualCheck if Self's Logic skill is less than Target'sSelfCompareSkillLess |
| Check if Self's Charisma skill equals Target'sSelfCompareSkillEqualCheck if Self's Logic skill is less than Target'sSelfCompareSkillLess |
| Check if Self's Logic skill is less than Target'sSelfCompareSkillLess |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)

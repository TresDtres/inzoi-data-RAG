---
document_id: "e251995f8d68030e0efd8db45e55aa6da7f8fe5df954c46664f00ef98c34a323"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state"
title: "Condition_State"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:00+00:00"
content_sha256: "3512a97c19d751e49dfdf50568b7b11946d23c38752178ff9145637654d6b4d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-state"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the state of a game object matches the specified state condition. This condition evaluates the state of the BaseObject game object, which can be either Self or Target. The state group and state to be checked are defined by State Variation data.

# Parameters

| ParameterDescriptionBaseObjectThe game object (Self or Target) whose state is checkedCompareTypeType of comparison operation (Equal / NotEqual)S1State group to check. See StateVariation dataS2State to check within the specified state group |
| --- |
| BaseObjectThe game object (Self or Target) whose state is checkedCompareTypeType of comparison operation (Equal / NotEqual)S1State group to check. See StateVariation dataS2State to check within the specified state group |
| CompareTypeType of comparison operation (Equal / NotEqual)S1State group to check. See StateVariation dataS2State to check within the specified state group |
| S1State group to check. See StateVariation dataS2State to check within the specified state group |
| S2State to check within the specified state group |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks whether the target game object is in the Fire stateTargetStateEqualFireFireChecks whether the self game object is NOT in the Fire stateSelfStateNotEqualFireFire |
| --- |
| Checks whether the target game object is in the Fire stateTargetStateEqualFireFireChecks whether the self game object is NOT in the Fire stateSelfStateNotEqualFireFire |
| Checks whether the self game object is NOT in the Fire stateSelfStateNotEqualFireFire |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)

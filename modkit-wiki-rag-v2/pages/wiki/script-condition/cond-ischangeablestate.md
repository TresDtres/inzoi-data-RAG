---
document_id: "db036c557f3975ffa9309c5acddbc9dc38f6986d0b8fd0f1816aba26973d5718"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate"
title: "Condition_IsChangeableState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:22+00:00"
content_sha256: "dbfcc8bd73c23f5da6e2081d7ef12c81a6b8040da281a537bf81bc853e6570fb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ischangeablestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target object can have a specific state. This condition evaluates if the BaseObject is capable of entering the specified state. The state group and state to be checked are defined by State Variation data.

# Parameters

| ParameterDescriptionBaseObjectThe game object to check the condition againstCompareTypeType of comparison operation (Equal / NotEqual)S1StateGroup Id of the target. See State Variation dataS2State Id to compare within the S1 group. See State Variation data |
| --- |
| BaseObjectThe game object to check the condition againstCompareTypeType of comparison operation (Equal / NotEqual)S1StateGroup Id of the target. See State Variation dataS2State Id to compare within the S1 group. See State Variation data |
| CompareTypeType of comparison operation (Equal / NotEqual)S1StateGroup Id of the target. See State Variation dataS2State Id to compare within the S1 group. See State Variation data |
| S1StateGroup Id of the target. See State Variation dataS2State Id to compare within the S1 group. See State Variation data |
| S2State Id to compare within the S1 group. See State Variation data |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks whether the target can have the Broken stateTargetIsChangeableStateEqualBrokenBrokenChecks whether the target cannot have the Broken stateTargetIsChangeableStateNotEqualBrokenBrokenChecks whether the target can have the Fire stateTargetIsChangeableStateEqualFireFire |
| --- |
| Checks whether the target can have the Broken stateTargetIsChangeableStateEqualBrokenBrokenChecks whether the target cannot have the Broken stateTargetIsChangeableStateNotEqualBrokenBrokenChecks whether the target can have the Fire stateTargetIsChangeableStateEqualFireFire |
| Checks whether the target cannot have the Broken stateTargetIsChangeableStateNotEqualBrokenBrokenChecks whether the target can have the Fire stateTargetIsChangeableStateEqualFireFire |
| Checks whether the target can have the Fire stateTargetIsChangeableStateEqualFireFire |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)

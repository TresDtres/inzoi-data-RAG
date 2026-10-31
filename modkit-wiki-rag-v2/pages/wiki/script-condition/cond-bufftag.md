---
document_id: "f9a45b0a691df6c7973291b25dbad986180edf3b65ce8d823fbffd2eaaede371"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag"
title: "Condition_BuffTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:45+00:00"
content_sha256: "65e8ba6659bda0c17a6b9177b1750b9f50ef73d7aafb77322fe02013fc96e34b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-bufftag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character currently has any buff matching the given BuffTag. Returns true when CompareType is Equal and a tagged buff is present, or when CompareType is NotEqual and no buff with that tag is present.

# Parameters

| ParameterDescriptionBaseObjectThe character to check for tagged buffs (Self or Target)CompareTypeEqual: tagged buff must be present; NotEqual: must be absentS1Buff tag to search for (e.g., BuffTag_Prison, BuffTag_Sleep) |
| --- |
| BaseObjectThe character to check for tagged buffs (Self or Target)CompareTypeEqual: tagged buff must be present; NotEqual: must be absentS1Buff tag to search for (e.g., BuffTag_Prison, BuffTag_Sleep) |
| CompareTypeEqual: tagged buff must be present; NotEqual: must be absentS1Buff tag to search for (e.g., BuffTag_Prison, BuffTag_Sleep) |
| S1Buff tag to search for (e.g., BuffTag_Prison, BuffTag_Sleep) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check that self has a buff tagged BuffTag_PrisonSelfBuffTagEqualBuffTag_PrisonCheck that target does NOT have BuffTag_PrisonTargetBuffTagNotEqualBuffTag_PrisonCheck that self has a buff tagged BuffTag_SleepSelfBuffTagEqualBuffTag_Sleep |
| --- |
| Check that self has a buff tagged BuffTag_PrisonSelfBuffTagEqualBuffTag_PrisonCheck that target does NOT have BuffTag_PrisonTargetBuffTagNotEqualBuffTag_PrisonCheck that self has a buff tagged BuffTag_SleepSelfBuffTagEqualBuffTag_Sleep |
| Check that target does NOT have BuffTag_PrisonTargetBuffTagNotEqualBuffTag_PrisonCheck that self has a buff tagged BuffTag_SleepSelfBuffTagEqualBuffTag_Sleep |
| Check that self has a buff tagged BuffTag_SleepSelfBuffTagEqualBuffTag_Sleep |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[HasOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)

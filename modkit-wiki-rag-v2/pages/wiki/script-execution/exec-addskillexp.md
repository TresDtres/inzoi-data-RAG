---
document_id: "82b326ae1727f98b52f5d27c2a69b1484128a9a1dbd0c6e5a13d98320c3a328c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addskillexp"
title: "Execute_AddSkillExp"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:10+00:00"
content_sha256: "b5b3e50821f7c3ea3930910be7f2c18ccc2d6690ab4183d83873904a8c0f2607"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addskillexp"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds skill experience to the specified entity's skill. The final amount is scaled by a performance factor derived from the target object's quality (ObjectGeneralEffect).

# Note

Final experience added = F1 (original amount) * PerformanceFactor. PerformanceFactor multipliers: Skill_Superb (1.4x), Skill_High (1.2x), Skill_Good (1.0x), Skill_Fair (0.8x), Skill_Bad (0.6x). If F1 is negative the skill level will not decrease.

# Parameters

| ParameterDescriptionBaseObjectThe entity that receives the skill experience.S1The skill ID to add experience to (e.g., Charisma, Cooking).F1The base amount of skill experience to add before applying the factor. |
| --- |
| BaseObjectThe entity that receives the skill experience.S1The skill ID to add experience to (e.g., Charisma, Cooking).F1The base amount of skill experience to add before applying the factor. |
| S1The skill ID to add experience to (e.g., Charisma, Cooking).F1The base amount of skill experience to add before applying the factor. |
| F1The base amount of skill experience to add before applying the factor. |

# Examples

| DescriptionBaseObjectCommandAdd 10 base experience to Self's Charisma skillSelfAddSkillExpAdd 5 base experience to Target's Cooking skillTargetAddSkillExpAdd 20 base experience to Self's Logic skillSelfAddSkillExp |
| --- |
| Add 10 base experience to Self's Charisma skillSelfAddSkillExpAdd 5 base experience to Target's Cooking skillTargetAddSkillExpAdd 20 base experience to Self's Logic skillSelfAddSkillExp |
| Add 5 base experience to Target's Cooking skillTargetAddSkillExpAdd 20 base experience to Self's Logic skillSelfAddSkillExp |
| Add 20 base experience to Self's Logic skillSelfAddSkillExp |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSkill, Job, Quest & Schedule[AddCraftingLoopSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingloopskillexp)[AddInterviewScoreBySkills](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinterviewscorebyskills)[AddLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addlifetrigger)[AddQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addquest)[EndCurrentSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endcurrentschedule)[RemoveLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removelifetrigger)[RemoveQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removequest)[SchedulePromPartnerRequest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-scheduleprompartnerrequest)

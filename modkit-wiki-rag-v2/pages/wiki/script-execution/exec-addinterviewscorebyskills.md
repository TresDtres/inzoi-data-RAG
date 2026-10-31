---
document_id: "27dc167b9a2b2bf06c11a507350fa09070336a5f240fb5d79c2bd5ddc8510483"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinterviewscorebyskills"
title: "Execute_AddInterviewScoreBySkills"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:07+00:00"
content_sha256: "5b1a934489abac98cc89c56d05eabb844da05b20715bf25c3e120c57be9fbb48"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addinterviewscorebyskills"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds interview initial score from the recommended skills of a career. Reads the recommended skill list from the given career data table row, sums score bonuses based on each skill's current level, and adds the total to the interview score stat configured in the career data asset. Skill bonus ranges and the destination stat are read from DA_Career. Returns early without any changes if required data is missing.

# Parameters

| ParameterDescriptionBaseObjectThe character that receives the interview score bonus.S1Career table row ID to look up skill list. |
| --- |
| BaseObjectThe character that receives the interview score bonus.S1Career table row ID to look up skill list. |
| S1Career table row ID to look up skill list. |

# Examples

| DescriptionBaseObjectCommandS1Add interview score by recommended skills for ITcompanySelfAddInterviewScoreBySkillsITcompany |
| --- |
| Add interview score by recommended skills for ITcompanySelfAddInterviewScoreBySkillsITcompany |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSkill, Job, Quest & Schedule[AddCraftingLoopSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingloopskillexp)[AddLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addlifetrigger)[AddQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addquest)[AddSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addskillexp)[EndCurrentSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endcurrentschedule)[RemoveLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removelifetrigger)[RemoveQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removequest)[SchedulePromPartnerRequest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-scheduleprompartnerrequest)

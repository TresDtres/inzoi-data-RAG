---
document_id: "26864e10278d79830dbf454e851af5be514e70c695ef8520237666b5e01d0262"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addlifetrigger"
title: "Execute_AddLifeTrigger"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:07+00:00"
content_sha256: "0cd359f5e882b6013f65661c97ecb9986871207eed01d41f219aab69d268676b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addlifetrigger"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a specific LifeTrigger to the specified BaseObject. A LifeTrigger initiates a life-cycle event or state change based on the LifeTrigger.json Data Table ID.

# Parameters

| ParameterDescriptionBaseObjectThe object to add the LifeTrigger to (Self or Target)S1The LifeTrigger.json Data Table ID (e.g., Aging, Fire) |
| --- |
| BaseObjectThe object to add the LifeTrigger to (Self or Target)S1The LifeTrigger.json Data Table ID (e.g., Aging, Fire) |
| S1The LifeTrigger.json Data Table ID (e.g., Aging, Fire) |

# Examples

| DescriptionBaseObjectCommandAdd a natural death trigger to SelfSelfAddLifeTriggerAdd a fire-related death trigger to TargetTargetAddLifeTriggerAdd an aging trigger to SelfSelfAddLifeTrigger |
| --- |
| Add a natural death trigger to SelfSelfAddLifeTriggerAdd a fire-related death trigger to TargetTargetAddLifeTriggerAdd an aging trigger to SelfSelfAddLifeTrigger |
| Add a fire-related death trigger to TargetTargetAddLifeTriggerAdd an aging trigger to SelfSelfAddLifeTrigger |
| Add an aging trigger to SelfSelfAddLifeTrigger |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSkill, Job, Quest & Schedule[AddCraftingLoopSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingloopskillexp)[AddInterviewScoreBySkills](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinterviewscorebyskills)[AddQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addquest)[AddSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addskillexp)[EndCurrentSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endcurrentschedule)[RemoveLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removelifetrigger)[RemoveQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removequest)[SchedulePromPartnerRequest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-scheduleprompartnerrequest)

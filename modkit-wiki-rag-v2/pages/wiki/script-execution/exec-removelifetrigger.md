---
document_id: "a6949dc062b1441a407b893dc3ec1f701a39791be7625969fe3aa74173d22b03"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removelifetrigger"
title: "Execute_RemoveLifeTrigger"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:45+00:00"
content_sha256: "89e480590b4002535a369e62793f2b40a99a222b6aaa46b8c0bbe7e9a5a4ccd9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removelifetrigger"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes a specific LifeTrigger from the specified BaseObject. Removing a LifeTrigger cancels or prevents that trigger from affecting the character.

# Parameters

| ParameterDescriptionBaseObjectThe object to remove the LifeTrigger from (Self or Target)S1The LifeTrigger.json Data Table ID (e.g., Aging, Fire) |
| --- |
| BaseObjectThe object to remove the LifeTrigger from (Self or Target)S1The LifeTrigger.json Data Table ID (e.g., Aging, Fire) |
| S1The LifeTrigger.json Data Table ID (e.g., Aging, Fire) |

# Examples

| DescriptionBaseObjectCommandRemove a natural death trigger from SelfSelfRemoveLifeTriggerRemove a fire-related death trigger from TargetTargetRemoveLifeTriggerRemove an aging trigger from SelfSelfRemoveLifeTrigger |
| --- |
| Remove a natural death trigger from SelfSelfRemoveLifeTriggerRemove a fire-related death trigger from TargetTargetRemoveLifeTriggerRemove an aging trigger from SelfSelfRemoveLifeTrigger |
| Remove a fire-related death trigger from TargetTargetRemoveLifeTriggerRemove an aging trigger from SelfSelfRemoveLifeTrigger |
| Remove an aging trigger from SelfSelfRemoveLifeTrigger |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSkill, Job, Quest & Schedule[AddCraftingLoopSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingloopskillexp)[AddInterviewScoreBySkills](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinterviewscorebyskills)[AddLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addlifetrigger)[AddQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addquest)[AddSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addskillexp)[EndCurrentSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endcurrentschedule)[RemoveQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removequest)[SchedulePromPartnerRequest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-scheduleprompartnerrequest)

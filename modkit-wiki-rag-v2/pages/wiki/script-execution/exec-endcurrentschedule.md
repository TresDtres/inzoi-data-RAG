---
document_id: "712d88c4be756d51af4e9c9987bcf49562489b77d078857daa4bb6b3c273a988"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endcurrentschedule"
title: "Execute_EndCurrentSchedule"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:27+00:00"
content_sha256: "2c111860c4eaaeb26a7b65ce1cfa88b3d235b67eabd7e1b4270076c54a3e23ae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-endcurrentschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Force-ends the currently active schedule of the BaseObject character. Passing "DeleteCompletely" in S1 will fully delete the schedule rather than just ending it.

# Parameters

| ParameterDescriptionBaseObjectThe character whose current active schedule will be ended (Self or Target)S1Pass "DeleteCompletely" to fully delete the schedule; omit to only end it |
| --- |
| BaseObjectThe character whose current active schedule will be ended (Self or Target)S1Pass "DeleteCompletely" to fully delete the schedule; omit to only end it |
| S1Pass "DeleteCompletely" to fully delete the schedule; omit to only end it |

# Examples

| DescriptionBaseObjectCommandS1End Self's current schedule without deleting itSelfEndCurrentScheduleEnd and completely delete Self's current scheduleSelfEndCurrentScheduleDeleteCompletelyEnd Target's current schedule without deleting itTargetEndCurrentScheduleEnd and completely delete Target's current scheduleTargetEndCurrentScheduleDeleteCompletely |
| --- |
| End Self's current schedule without deleting itSelfEndCurrentScheduleEnd and completely delete Self's current scheduleSelfEndCurrentScheduleDeleteCompletelyEnd Target's current schedule without deleting itTargetEndCurrentScheduleEnd and completely delete Target's current scheduleTargetEndCurrentScheduleDeleteCompletely |
| End and completely delete Self's current scheduleSelfEndCurrentScheduleDeleteCompletelyEnd Target's current schedule without deleting itTargetEndCurrentScheduleEnd and completely delete Target's current scheduleTargetEndCurrentScheduleDeleteCompletely |
| End Target's current schedule without deleting itTargetEndCurrentScheduleEnd and completely delete Target's current scheduleTargetEndCurrentScheduleDeleteCompletely |
| End and completely delete Target's current scheduleTargetEndCurrentScheduleDeleteCompletely |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSkill, Job, Quest & Schedule[AddCraftingLoopSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingloopskillexp)[AddInterviewScoreBySkills](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinterviewscorebyskills)[AddLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addlifetrigger)[AddQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addquest)[AddSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addskillexp)[RemoveLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removelifetrigger)[RemoveQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removequest)[SchedulePromPartnerRequest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-scheduleprompartnerrequest)

---
document_id: "047ea68b000035e2a5c4512c69ff9fed60385eb20de323c9677a083d5873a87c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-scheduleprompartnerrequest"
title: "Execute_SchedulePromPartnerRequest"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:50+00:00"
content_sha256: "dc1a97487507bda31c6b52f61d6b592393b33c040d4a18d2e0ceb59d40d57d7d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-scheduleprompartnerrequest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Schedules a delayed prom partner request response from the owner of the target school locker.

# Parameters

| ParameterDescriptionBaseObjectRequesting character; the non-base object must be the target school lockerS1CustomMobileMessageId or CustomMobileMessagePoolId sent when the locker owner acceptsS2CustomMobileMessageId or CustomMobileMessagePoolId sent when the locker owner rejectsF1Delay in in-game minutes before the response is processed (default: 60) |
| --- |
| BaseObjectRequesting character; the non-base object must be the target school lockerS1CustomMobileMessageId or CustomMobileMessagePoolId sent when the locker owner acceptsS2CustomMobileMessageId or CustomMobileMessagePoolId sent when the locker owner rejectsF1Delay in in-game minutes before the response is processed (default: 60) |
| S1CustomMobileMessageId or CustomMobileMessagePoolId sent when the locker owner acceptsS2CustomMobileMessageId or CustomMobileMessagePoolId sent when the locker owner rejectsF1Delay in in-game minutes before the response is processed (default: 60) |
| S2CustomMobileMessageId or CustomMobileMessagePoolId sent when the locker owner rejectsF1Delay in in-game minutes before the response is processed (default: 60) |
| F1Delay in in-game minutes before the response is processed (default: 60) |

# Examples

| DescriptionBaseObjectCommandS1S2F1Schedule a prom partner request from a lockerSelfSchedulePromPartnerRequestPromPartnerRequest_Accept_PoolPromPartnerRequest_Reject_Pool60 |
| --- |
| Schedule a prom partner request from a lockerSelfSchedulePromPartnerRequestPromPartnerRequest_Accept_PoolPromPartnerRequest_Reject_Pool60 |

# Notes

The acceptance threshold uses UB1SchoolDataAsset::PromPartnerRequestMinimumRomanceValue. If the requester already has a pending PromPartnerRequest for the locker owner, no new task is scheduled. If the requester and locker owner are already PromPartner, no new task is scheduled. When scheduling fails for these reasons after the letter was placed, SecretLoveLetter_Written is moved back from the locker inventory to the requester inventory and a toast is shown. If the requester already has a PromPartner when the delayed response is processed, the locker owner rejects regardless of Romance. The locker owner's existing PromPartner does not cause rejection; on acceptance, existing PromPartner flags for the locker owner are replaced by the requester.

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSkill, Job, Quest & Schedule[AddCraftingLoopSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingloopskillexp)[AddInterviewScoreBySkills](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinterviewscorebyskills)[AddLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addlifetrigger)[AddQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addquest)[AddSkillExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addskillexp)[EndCurrentSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endcurrentschedule)[RemoveLifeTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removelifetrigger)[RemoveQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removequest)

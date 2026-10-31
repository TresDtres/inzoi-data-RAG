---
document_id: "16a259bf9735b42b5266ea7985e3727d7e556c199f62ff340abbb7d080db0eaa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runexamslot"
title: "Execute_RunExamSlot"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:50+00:00"
content_sha256: "3abfff638038bd1ee8495bdca42a6690640c8f2e67364600603556cce7384421"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-runexamslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Runs exam scoring for the BaseObject student and current exam slot. Morning or Afternoon is selected from current HHMM and UB1SchoolDataAsset::ExamSlotMorningCutoffHHMM. FB2School::RunExamSlot provides idempotency for already-attended slots.

# Parameters

| ParameterDescriptionBaseObjectStudent character with an active school career slot. |
| --- |
| BaseObjectStudent character with an active school career slot. |

# Examples

| DescriptionBaseObjectCommandRun exam scoring for SelfSelfRunExamSlot |
| --- |
| Run exam scoring for SelfSelfRunExamSlot |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)

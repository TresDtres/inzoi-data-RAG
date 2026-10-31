---
document_id: "7457ab03a2b790af9265fe237b84fc6a79d3baf98850c2019f9e5658624dd08e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress"
title: "Execute_AddHomeworkProgress"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:06+00:00"
content_sha256: "e8d2740700ba2fd11c5d5c010c19e2e299fea8bb5d55928097debb6b5a20c2b2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addhomeworkprogress"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds progress to the homework object selected by BaseObject. Progress uses HomeworkProgress and the same formula as crafting progress: 100 * F1 / F2.

# Parameters

| ParameterDescriptionBaseObjectHomework object. Usually Target in interaction data.F1Elapsed minutes. RunWithDelta may scale this value. Must be >= 0.F2Total required minutes. Must be greater than zero. |
| --- |
| BaseObjectHomework object. Usually Target in interaction data.F1Elapsed minutes. RunWithDelta may scale this value. Must be >= 0.F2Total required minutes. Must be greater than zero. |
| F1Elapsed minutes. RunWithDelta may scale this value. Must be >= 0.F2Total required minutes. Must be greater than zero. |
| F2Total required minutes. Must be greater than zero. |

# Examples

| DescriptionBaseObjectCommandF1F2Add 30% homework progressTargetAddHomeworkProgress30100Complete the remaining 70%TargetAddHomeworkProgress70100 |
| --- |
| Add 30% homework progressTargetAddHomeworkProgress30100Complete the remaining 70%TargetAddHomeworkProgress70100 |
| Complete the remaining 70%TargetAddHomeworkProgress70100 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

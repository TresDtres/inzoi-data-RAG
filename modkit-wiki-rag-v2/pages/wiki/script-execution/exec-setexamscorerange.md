---
document_id: "36813f7d2ae5c3fb04af458ec27fbe417d27e91cee785e148d395d5e3fcc7515"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setexamscorerange"
title: "Execute_SetExamScoreRange"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:54+00:00"
content_sha256: "c1061fd7e06cb04636f8afd8e486e7d968944f518adc65c5e4a3fd72da0fe7ad"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setexamscorerange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Overrides the BaseObject student's final exam score with a random score in the requested range. This only applies while the student is currently in an exam school phase. Outside exam phase, the execution intentionally does nothing.

# Parameters

| ParameterDescriptionBaseObjectStudent character with an active school career slot.F1Minimum score, inclusive.F2Maximum score, inclusive. |
| --- |
| BaseObjectStudent character with an active school career slot.F1Minimum score, inclusive.F2Maximum score, inclusive. |
| F1Minimum score, inclusive.F2Maximum score, inclusive. |
| F2Maximum score, inclusive. |

# Examples

| DescriptionBaseObjectCommandF1F2Set Self's exam score between 10-20SelfSetExamScoreRange1020 |
| --- |
| Set Self's exam score between 10-20SelfSetExamScoreRange1020 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)

---
document_id: "6ae3cc628b7293b1a84d1fbf861a4479ee93baa2c95cc985fa413917bbf92805"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus"
title: "Execute_AddExamStudyBonus"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:06+00:00"
content_sha256: "f679f065634f8c8561c6a06d5f49da36cd58c088eb994d3e49d0a853763143d7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addexamstudybonus"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds exam study bonus amount to the BaseObject school student. The accumulated bonus is capped by UB1SchoolDataAsset::ExamStudyBonusMaxPerDay.

# Parameters

| ParameterDescriptionBaseObjectStudent character with an active school career slot.F1Amount to add. Positive values consume one dailybonus slot (capped by DA->ExamStudyBonusMaxPerDay).Negative values reduce preparation directly withouttouching the daily counter. |
| --- |
| BaseObjectStudent character with an active school career slot.F1Amount to add. Positive values consume one dailybonus slot (capped by DA->ExamStudyBonusMaxPerDay).Negative values reduce preparation directly withouttouching the daily counter. |
| F1Amount to add. Positive values consume one dailybonus slot (capped by DA->ExamStudyBonusMaxPerDay).Negative values reduce preparation directly withouttouching the daily counter. |
| bonus slot (capped by DA->ExamStudyBonusMaxPerDay).Negative values reduce preparation directly withouttouching the daily counter. |
| Negative values reduce preparation directly withouttouching the daily counter. |
| touching the daily counter. |

# Examples

| DescriptionBaseObjectCommandF1Add one study bonus to SelfSelfAddExamStudyBonus3Reduce preparation on SelfSelfAddExamStudyBonus-3 |
| --- |
| Add one study bonus to SelfSelfAddExamStudyBonus3Reduce preparation on SelfSelfAddExamStudyBonus-3 |
| Reduce preparation on SelfSelfAddExamStudyBonus-3 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

---
document_id: "137fb45fc5d83a4dee392e4317b80324ecd5f93e8c828f0376ea044e98a4c2a5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint"
title: "Execute_AddTeamProjectPoint"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:11+00:00"
content_sha256: "40d73ebb755c00ca21e95f4a1b7efa2ce04e79bc485faec18cc7af94768555f5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addteamprojectpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds team project contribution points for the BaseObject character. Resolves the active team project in the character's career and adds the specified base points, adjusted by the character's skill multiplier. If the accumulated progress reaches the auto-finish threshold, the team project is automatically completed. Returns early if the character has no active team project or the career is invalid. The actual points added may differ from F1 due to skill-based adjustment.

# Parameters

| ParameterDescriptionBaseObjectThe character (member) who contributes points to the team project.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted.F1Base point amount to add (must be greater than 0). |
| --- |
| BaseObjectThe character (member) who contributes points to the team project.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted.F1Base point amount to add (must be greater than 0). |
| S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted.F1Base point amount to add (must be greater than 0). |
| F1Base point amount to add (must be greater than 0). |

# Examples

| DescriptionBaseObjectCommandS1F1Add 10 base team project points for Business careerSelfAddTeamProjectPoint10Add 20 base team project points for School careerSelfAddTeamProjectPointSchool20 |
| --- |
| Add 10 base team project points for Business careerSelfAddTeamProjectPoint10Add 20 base team project points for School careerSelfAddTeamProjectPointSchool20 |
| Add 20 base team project points for School careerSelfAddTeamProjectPointSchool20 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

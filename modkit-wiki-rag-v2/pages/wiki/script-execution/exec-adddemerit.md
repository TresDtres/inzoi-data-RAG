---
document_id: "56c7ddfd628d79bd5988a85d676c21b4e10ad20c54822c66b6d290d90af9739b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit"
title: "Execute_AddDemerit"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:05+00:00"
content_sha256: "df9e1937ee2f1067d742d179accf49a5dc44a39972c003a68fc23676a88af67d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-adddemerit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a demerit point to the BaseObject school student. The amount is looked up from DA->DemeritPointsByReason[S1]. After accumulation, the total is compared to DA->DemeritThresholdForCounseling and a counseling SocialEvent is triggered when reached. Every call posts an activity feed wall message with the current total.

# Parameters

| ParameterDescriptionBaseObjectStudent character with an active school career slot.S1EB1SchoolDemeritReason. Valid values: Deviance, GradeF, Fight. |
| --- |
| BaseObjectStudent character with an active school career slot.S1EB1SchoolDemeritReason. Valid values: Deviance, GradeF, Fight. |
| S1EB1SchoolDemeritReason. Valid values: Deviance, GradeF, Fight. |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

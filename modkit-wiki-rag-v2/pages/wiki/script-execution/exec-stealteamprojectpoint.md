---
document_id: "dea51bb93faad37029de20506a7b813c596e4b4e558fb92eff6f31b8410ae85f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stealteamprojectpoint"
title: "Execute_StealTeamProjectPoint"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:01+00:00"
content_sha256: "65f046d8bc37f944ae22a19bb35dc0e2e5db6bf6a980b8689bf3dd940b5b2e68"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-stealteamprojectpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Steals team project points from the member assigned to the NonBaseObject seat, then adds the same amount to BaseObject (Self). Neither the subtraction nor the addition applies skill bonus.

# Parameters

| ParameterDescriptionBaseObjectThe character who gains contribution points (no skill bonus).S1EB1CareerType (defaults to Business).F1Base point amount (must be > 0). |
| --- |
| BaseObjectThe character who gains contribution points (no skill bonus).S1EB1CareerType (defaults to Business).F1Base point amount (must be > 0). |
| S1EB1CareerType (defaults to Business).F1Base point amount (must be > 0). |
| F1Base point amount (must be > 0). |

# Examples

| DescriptionBaseObjectCommandS1F1Steal 10 pts from seat owner, gain 10 pts (no skill)SelfStealTeamProjectPoint10 |
| --- |
| Steal 10 pts from seat owner, gain 10 pts (no skill)SelfStealTeamProjectPoint10 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)

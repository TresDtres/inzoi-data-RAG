---
document_id: "19a84dc171b7eb6c8028411d0b5b0b9f48f704060378e95bd79d0e7643342814"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent"
title: "Execute_ExpelSchoolStudent"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:28+00:00"
content_sha256: "48935ce040213ace5b301c6c504805bf0c23ee1ac05bb0139ec522da6b391330"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-expelschoolstudent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Expels the BaseObject student from their current school. Triggers RequestLeave (seat/locker release, counseling cleanup, MemberInfo removal, client sync), adds an expulsion record, applies the expulsion buff, and posts the expulsion feedback to the wall. EducationType is resolved from the student's current JobId — no explicit parameter required.

Typical use: counseling SocialEvent failure branch — failing the interview triggers immediate expulsion.

# Parameters

| ParameterDescriptionBaseObjectStudent character with an active school career slot. |
| --- |
| BaseObjectStudent character with an active school career slot. |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

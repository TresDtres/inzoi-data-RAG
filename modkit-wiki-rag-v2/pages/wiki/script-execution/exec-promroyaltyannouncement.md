---
document_id: "fcc90e775461c92093584152ddf4f02444fb4314e62fd29ed327ba2de240131d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement"
title: "Execute_PromRoyaltyAnnouncement"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:40+00:00"
content_sha256: "944e5661bacba8b522e91737093efe1e29baba88d366e993149c17cd75141cd6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-promroyaltyannouncement"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Broadcasts the prom royalty announcement to every member of the Prom-category site event that Self has joined. Resolves Self's currently joined "Prom" site event, looks up the school entity tied to that event (via its CareerEntityId), then calls FB2School::PostPromRoyaltyAnnouncement for each member of the event. Silently no-ops if Self hasn't joined a Prom event or the associated school can't be resolved.

# Parameters

| ParameterDescriptionBaseObjectSelf — used to find the joined Prom site event. |
| --- |
| BaseObjectSelf — used to find the joined Prom site event. |

# Examples

| DescriptionBaseObjectCommandAnnounce prom royalty to all members of Self's joined Prom eventSelfPromRoyaltyAnnouncement |
| --- |
| Announce prom royalty to all members of Self's joined Prom eventSelfPromRoyaltyAnnouncement |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

---
document_id: "a94b44b1a614714fd9a7f01a1d468cbb89da0a1a6c3bf5f4de23d9d952e5efa8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote"
title: "Execute_ExecutePendingPromVote"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:27+00:00"
content_sha256: "4b1cfbc638ae1568675e3427ffcb02e49da429758a853b5c4fef72a42265765e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-executependingpromvote"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Finalizes Self's pending prom vote for the given gender category (e.g. a vote left pending because the target hadn't been resolved yet). Requires Self to be enrolled in a school. Silently no-ops if Self has no school or S1 is not Male/Female.

# Parameters

| ParameterDescriptionBaseObjectSelf — the voter whose pending vote is finalized.S1EB1GenderType (Male/Female) — the prom royalty category to finalize. |
| --- |
| BaseObjectSelf — the voter whose pending vote is finalized.S1EB1GenderType (Male/Female) — the prom royalty category to finalize. |
| S1EB1GenderType (Male/Female) — the prom royalty category to finalize. |

# Examples

| DescriptionBaseObjectCommandS1Finalize Self's pending Male-category prom voteSelfExecutePendingPromVoteMaleFinalize Self's pending Female-category prom voteSelfExecutePendingPromVoteFemale |
| --- |
| Finalize Self's pending Male-category prom voteSelfExecutePendingPromVoteMaleFinalize Self's pending Female-category prom voteSelfExecutePendingPromVoteFemale |
| Finalize Self's pending Female-category prom voteSelfExecutePendingPromVoteFemale |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

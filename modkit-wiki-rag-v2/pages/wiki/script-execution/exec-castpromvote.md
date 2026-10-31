---
document_id: "c53541e57392b880976e73a4a643d4daedcadcd9a9030067737701db412a7ba8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote"
title: "Execute_CastPromVote"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:18+00:00"
content_sha256: "4d033704cb0a0434fd1000e74739fe811758f0f9b1edc662058d71af101a28bb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-castpromvote"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Casts Self's prom vote for the NonBaseObject target in the given gender category. Requires Self to be enrolled in a school and NonBaseObject to resolve to a valid entity. Silently no-ops if Self has no school, the target is unresolved, or S1 is not Male/Female.

# Parameters

| ParameterDescriptionBaseObjectThe voter (Self) — used to resolve the voter's school.NonBaseObjectThe character being voted for (resolved automatically as the opposite of BaseObject).S1EB1GenderType (Male/Female) — the prom royalty category being voted for. |
| --- |
| BaseObjectThe voter (Self) — used to resolve the voter's school.NonBaseObjectThe character being voted for (resolved automatically as the opposite of BaseObject).S1EB1GenderType (Male/Female) — the prom royalty category being voted for. |
| NonBaseObjectThe character being voted for (resolved automatically as the opposite of BaseObject).S1EB1GenderType (Male/Female) — the prom royalty category being voted for. |
| S1EB1GenderType (Male/Female) — the prom royalty category being voted for. |

# Examples

| DescriptionBaseObjectCommandS1Self votes Target for Prom King (Male)SelfCastPromVoteMaleSelf votes Target for Prom Queen (Female)SelfCastPromVoteFemale |
| --- |
| Self votes Target for Prom King (Male)SelfCastPromVoteMaleSelf votes Target for Prom Queen (Female)SelfCastPromVoteFemale |
| Self votes Target for Prom Queen (Female)SelfCastPromVoteFemale |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamPreparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

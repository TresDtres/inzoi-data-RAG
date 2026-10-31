---
document_id: "4801f10e661e19618a3e7831aae8aa998c9923dda1a0c4d5cc5fe3c10e68fb26"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexampreparation"
title: "Execute_AddExamPreparation"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:06+00:00"
content_sha256: "01c69caaa62a65804ae70ab96b34603ffc6bd445fbb338c0762fc2f37e10d5f0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addexampreparation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds exam preparation amount to the BaseObject school student. The character must have an active school career slot.

# Parameters

| ParameterDescriptionBaseObjectStudent character with an active school career slot.F1Amount to add. Negative values reduce preparation(e.g., dozing off, caught cheating). RunWithDelta mayscale this value. Result is clamped to [0, 100]. |
| --- |
| BaseObjectStudent character with an active school career slot.F1Amount to add. Negative values reduce preparation(e.g., dozing off, caught cheating). RunWithDelta mayscale this value. Result is clamped to [0, 100]. |
| F1Amount to add. Negative values reduce preparation(e.g., dozing off, caught cheating). RunWithDelta mayscale this value. Result is clamped to [0, 100]. |
| (e.g., dozing off, caught cheating). RunWithDelta mayscale this value. Result is clamped to [0, 100]. |
| scale this value. Result is clamped to [0, 100]. |

# Examples

| DescriptionBaseObjectCommandF1Add exam preparation to SelfSelfAddExamPreparation1Reduce exam preparation on SelfSelfAddExamPreparation-5 |
| --- |
| Add exam preparation to SelfSelfAddExamPreparation1Reduce exam preparation on SelfSelfAddExamPreparation-5 |
| Reduce exam preparation on SelfSelfAddExamPreparation-5 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSchool & Education[AddDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddemerit)[AddExamStudyBonus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addexamstudybonus)[AddHomeworkProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhomeworkprogress)[AddTeamProjectPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addteamprojectpoint)[ApplySchoolUniformToStyle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyschooluniformtostyle)[CastPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-castpromvote)[ClearSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearschooluniform)[ExecutePendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-executependingpromvote)[ExpelSchoolStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-expelschoolstudent)[OvercomeSchoolExpulsion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-overcomeschoolexpulsion)[PromRoyaltyAnnouncement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-promroyaltyannouncement)[ResetSchoolDemerit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetschooldemerit)

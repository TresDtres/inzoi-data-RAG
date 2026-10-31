---
document_id: "da7da1ec3d58ae7cf3260e03c8eaaa3267f49b7f53f81b12d98af927722edad1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote"
title: "Condition_HasPendingPromVote"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:11+00:00"
content_sha256: "a6f8af46fc137fbe64774f0b6471c27e2305fd8402d6526c23b9502bc51ebf76"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-haspendingpromvote"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject has a pending (not-yet-finalized) prom vote for the given gender category. Returns false (regardless of CompareType) if BaseObject isn't enrolled at a school.

# Parameters

| ParameterDescriptionBaseObjectThe character to check.CompareTypeEqual (has a pending vote) / NotEqual (does not).S1EB1GenderType (Male/Female) — the prom royalty category to check. |
| --- |
| BaseObjectThe character to check.CompareTypeEqual (has a pending vote) / NotEqual (does not).S1EB1GenderType (Male/Female) — the prom royalty category to check. |
| CompareTypeEqual (has a pending vote) / NotEqual (does not).S1EB1GenderType (Male/Female) — the prom royalty category to check. |
| S1EB1GenderType (Male/Female) — the prom royalty category to check. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has a pending Male-category voteSelfHasPendingPromVoteEqualMaleCheck if Self has no pending Female-category voteSelfHasPendingPromVoteNotEqualFemale |
| --- |
| Check if Self has a pending Male-category voteSelfHasPendingPromVoteEqualMaleCheck if Self has no pending Female-category voteSelfHasPendingPromVoteNotEqualFemale |
| Check if Self has no pending Female-category voteSelfHasPendingPromVoteNotEqualFemale |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

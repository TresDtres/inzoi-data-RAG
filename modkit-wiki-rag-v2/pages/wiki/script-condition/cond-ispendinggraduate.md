---
document_id: "07606e05a58a4d38f2c53ec1a7b1255b890740ce7896c810935aad499ba34c6e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate"
title: "Condition_IsPendingGraduate"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:39+00:00"
content_sha256: "0d51a1ffa33b7eb91b0dd20f6007d0a1e71c60895a5847297f46d4c7a9941fe3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ispendinggraduate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject has a pending graduation record in any school (Career-type) entity — i.e. is scheduled to graduate but hasn't completed the process yet. Iterates over every Career-type entity in the world and checks FB2School::HasPendingGraduation.

# Parameters

| ParameterDescriptionBaseObjectThe character to check.CompareTypeEqual (has a pending graduation) / NotEqual (does not). |
| --- |
| BaseObjectThe character to check.CompareTypeEqual (has a pending graduation) / NotEqual (does not). |
| CompareTypeEqual (has a pending graduation) / NotEqual (does not). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has a pending graduationSelfIsPendingGraduateEqualCheck if Self has no pending graduationSelfIsPendingGraduateNotEqual |
| --- |
| Check if Self has a pending graduationSelfIsPendingGraduateEqualCheck if Self has no pending graduationSelfIsPendingGraduateNotEqual |
| Check if Self has no pending graduationSelfIsPendingGraduateNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

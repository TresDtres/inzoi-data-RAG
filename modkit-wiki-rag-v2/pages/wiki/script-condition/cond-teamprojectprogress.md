---
document_id: "32f571f2f8b109368e114e7fc2ee8083b59dd9ced24c8d980f49dac42c57dd4e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-teamprojectprogress"
title: "Condition_TeamProjectProgress"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:00+00:00"
content_sha256: "17bdb6ea50253e50fbc7762d1e40332295d08b84da127accbf27f603d7ed6fa5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-teamprojectprogress"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the active team project's progress percentage for the character's career. Retrieves the progress percentage of the ongoing team project and compares it against the threshold value specified in F1 using the given CompareType.

# Parameters

| ParameterDescriptionBaseObjectThe character whose team project progress will be checked.CompareTypeComparison operator (e.g., GreaterOrEqual, LessOrEqual, Equal).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Progress percentage threshold to compare against (e.g., 30, 50, 80). |
| --- |
| BaseObjectThe character whose team project progress will be checked.CompareTypeComparison operator (e.g., GreaterOrEqual, LessOrEqual, Equal).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Progress percentage threshold to compare against (e.g., 30, 50, 80). |
| CompareTypeComparison operator (e.g., GreaterOrEqual, LessOrEqual, Equal).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Progress percentage threshold to compare against (e.g., 30, 50, 80). |
| S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Progress percentage threshold to compare against (e.g., 30, 50, 80). |
| F1Progress percentage threshold to compare against (e.g., 30, 50, 80). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1Check if Business team project progress is 30% or lessSelfTeamProjectProgressLessOrEqual30Check if Business team project progress is 80% or moreSelfTeamProjectProgressGreaterOrEqual80Check if School team project progress is 50% or moreSelfTeamProjectProgressGreaterOrEqualSchool50 |
| --- |
| Check if Business team project progress is 30% or lessSelfTeamProjectProgressLessOrEqual30Check if Business team project progress is 80% or moreSelfTeamProjectProgressGreaterOrEqual80Check if School team project progress is 50% or moreSelfTeamProjectProgressGreaterOrEqualSchool50 |
| Check if Business team project progress is 80% or moreSelfTeamProjectProgressGreaterOrEqual80Check if School team project progress is 50% or moreSelfTeamProjectProgressGreaterOrEqualSchool50 |
| Check if School team project progress is 50% or moreSelfTeamProjectProgressGreaterOrEqualSchool50 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)

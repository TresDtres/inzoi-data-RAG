---
document_id: "f0297d40e6f9643563a8f68ff1ab0cd9079ee31da85b333267a0fca3d03da026"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare"
title: "Condition_ExamRankCompare"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:58+00:00"
content_sha256: "17bc5ca5b6e84a5e0d6a60704a494eb37d21c6aef0c30f798faa731ebfd93c29"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-examrankcompare"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the latest exam rank gap between BaseObject and the opposite script object. Rank 1 is the highest rank. Greater and GreaterOrEqual mean BaseObject is higher-ranked by the requested gap. Less and LessOrEqual mean BaseObject is lower-ranked by the gap.

# Parameters

| ParameterDescriptionBaseObjectThe student compared against the opposite script object.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.F1Rank gap threshold. |
| --- |
| BaseObjectThe student compared against the opposite script object.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.F1Rank gap threshold. |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.F1Rank gap threshold. |
| F1Rank gap threshold. |

# Notes

The opposite script object is resolved from ScriptContext by BaseObject and is not a table parameter.

# Examples

| DescriptionBaseObjectCommandCompareTypeF1Check if Self ranks above Target by 1+SelfExamRankCompareGreaterOrEqual1Check if Target ranks below Self by 1+TargetExamRankCompareLessOrEqual1 |
| --- |
| Check if Self ranks above Target by 1+SelfExamRankCompareGreaterOrEqual1Check if Target ranks below Self by 1+TargetExamRankCompareLessOrEqual1 |
| Check if Target ranks below Self by 1+TargetExamRankCompareLessOrEqual1 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

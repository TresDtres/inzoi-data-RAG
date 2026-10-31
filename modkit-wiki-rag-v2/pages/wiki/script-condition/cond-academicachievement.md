---
document_id: "bc4f2d28d492bcfddfdea3f8591ea03de9a8cd6adacba88abcc5186cf77b586a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement"
title: "Condition_AcademicAchievement"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:44+00:00"
content_sha256: "9af7bfae4e2ac3d590962d8c46cb7808fa93746acfd6042413286e28b801fb43"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-academicachievement"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the BaseObject student's latest academic achievement grade. The current grade is preferred; if it is not available, the latest weekly history grade is used.

# Parameters

| ParameterDescriptionBaseObjectThe student character to evaluate.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| --- |
| BaseObjectThe student character to evaluate.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if Self has grade A or higherSelfAcademicAchievementGreaterOrEqualACheck if Target's grade is between A and A+TargetAcademicAchievementInRangeAAPlus |
| --- |
| Check if Self has grade A or higherSelfAcademicAchievementGreaterOrEqualACheck if Target's grade is between A and A+TargetAcademicAchievementInRangeAAPlus |
| Check if Target's grade is between A and A+TargetAcademicAchievementInRangeAAPlus |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

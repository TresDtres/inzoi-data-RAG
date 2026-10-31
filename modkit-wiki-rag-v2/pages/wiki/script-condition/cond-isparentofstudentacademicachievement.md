---
document_id: "6804f3927b47d50b38838d807b6a1314016a92850dbfbbeb1ca5f176b11e9dd2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement"
title: "Condition_IsParentOfStudentAcademicAchievement"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:38+00:00"
content_sha256: "9db759e7272346e150565982f80c9f691bbe29adab250fb7fe72399053af28da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isparentofstudentacademicachievement"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the selected talk subject child's latest academic achievement after validating that BaseObject is the child's parent and the opposite object is school staff at that child's school site.

# Parameters

| ParameterDescriptionBaseObjectParent candidate. The opposite object is the staff member.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| --- |
| BaseObjectParent candidate. The opposite object is the staff member.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| S1Grade to compare with. Valid values are F, C, B, A, and APlus.S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |
| S2Maximum grade for InRange. Valid values are F, C, B, A, and APlus. |

# Notes

The selected child is read from the current TalkInstance runtime subject. If the subject is missing, not the BaseObject parent's child, or not an active student at the staff member's school site, this returns false.

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check selected child's grade is A or aboveSelfIsParentOfStudentAcademicAchievementGreaterOrEqualACheck selected child's grade is A to A+SelfIsParentOfStudentAcademicAchievementInRangeAAPlus |
| --- |
| Check selected child's grade is A or aboveSelfIsParentOfStudentAcademicAchievementGreaterOrEqualACheck selected child's grade is A to A+SelfIsParentOfStudentAcademicAchievementInRangeAAPlus |
| Check selected child's grade is A to A+SelfIsParentOfStudentAcademicAchievementInRangeAAPlus |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

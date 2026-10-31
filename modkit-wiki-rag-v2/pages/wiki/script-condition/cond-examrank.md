---
document_id: "ac5a721b9f8ac2e6dbb69b49ab0b6afb06555c2f46931920dd22632e50711174"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank"
title: "Condition_ExamRank"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:58+00:00"
content_sha256: "ea89c3d512f853ec6bd6a992299c2290052254aa39085e2370bd024ccd7ddbe9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-examrank"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the BaseObject student's latest exam rank in their active school. Rank 1 is the highest rank. Greater and GreaterOrEqual mean the student is ranked higher than the threshold, so they are implemented as numeric rank <= N.

# Parameters

| ParameterDescriptionBaseObjectThe student character to evaluate.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.F1Rank threshold. Rank 1 is the highest rank.F2Range maximum for InRange. |
| --- |
| BaseObjectThe student character to evaluate.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.F1Rank threshold. Rank 1 is the highest rank.F2Range maximum for InRange. |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange.F1Rank threshold. Rank 1 is the highest rank.F2Range maximum for InRange. |
| F1Rank threshold. Rank 1 is the highest rank.F2Range maximum for InRange. |
| F2Range maximum for InRange. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Check if Self is exactly 3rdSelfExamRankEqual3Check if Target is top 2TargetExamRankGreaterOrEqual2Check if Self is rank 1 to 3SelfExamRankInRange13 |
| --- |
| Check if Self is exactly 3rdSelfExamRankEqual3Check if Target is top 2TargetExamRankGreaterOrEqual2Check if Self is rank 1 to 3SelfExamRankInRange13 |
| Check if Target is top 2TargetExamRankGreaterOrEqual2Check if Self is rank 1 to 3SelfExamRankInRange13 |
| Check if Self is rank 1 to 3SelfExamRankInRange13 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

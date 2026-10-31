---
document_id: "bfb752d4b6f485ec4634f431bfddd0853c823c9ba2a22f752f3e92a79bb75e07"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-kickedoutschool"
title: "Condition_KickedOutSchool"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:51+00:00"
content_sha256: "7662056c7a6c53d8d951e7112758d23dfd2330a16f7c773fcd2fef1a11133298"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-kickedoutschool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject student has any school expulsion record. S1 can optionally restrict the check to one education type.

# Parameters

| ParameterDescriptionBaseObjectThe student character to check.CompareTypeEqual checks expelled; NotEqual checks not expelled.S1Optional EB1EducationType. Empty checks any expulsion record. |
| --- |
| BaseObjectThe student character to check.CompareTypeEqual checks expelled; NotEqual checks not expelled.S1Optional EB1EducationType. Empty checks any expulsion record. |
| CompareTypeEqual checks expelled; NotEqual checks not expelled.S1Optional EB1EducationType. Empty checks any expulsion record. |
| S1Optional EB1EducationType. Empty checks any expulsion record. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self was kicked outSelfKickedOutSchoolEqualCheck if Target was not kicked from high schoolTargetKickedOutSchoolNotEqualHigh |
| --- |
| Check if Self was kicked outSelfKickedOutSchoolEqualCheck if Target was not kicked from high schoolTargetKickedOutSchoolNotEqualHigh |
| Check if Target was not kicked from high schoolTargetKickedOutSchoolNotEqualHigh |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)

---
document_id: "08ceda2317c18ec1936318ea6346363d46565e1aeb2bd4b9b5aa70a7a5d2e48a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamecurrentschool"
title: "Condition_IsSameCurrentSchool"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:43+00:00"
content_sha256: "3fe463e7da17fe96c91faf32215d63abe510f6754f64b72d2d519fc2a2b76188"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issamecurrentschool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self and BaseObject are currently attending the same school. Uses B2CareerHelper::TryFindSchoolByCharacter which resolves both students and school staff.

# Parameters

| ParameterDescriptionBaseObjectTarget — the character to compare with Self.CompareTypeEqual (same school) / NotEqual (different school). |
| --- |
| BaseObjectTarget — the character to compare with Self.CompareTypeEqual (same school) / NotEqual (different school). |
| CompareTypeEqual (same school) / NotEqual (different school). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Target attends same schoolTargetIsSameCurrentSchoolEqualCheck if Target attends different schoolTargetIsSameCurrentSchoolNotEqual |
| --- |
| Check if Target attends same schoolTargetIsSameCurrentSchoolEqualCheck if Target attends different schoolTargetIsSameCurrentSchoolNotEqual |
| Check if Target attends different schoolTargetIsSameCurrentSchoolNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)

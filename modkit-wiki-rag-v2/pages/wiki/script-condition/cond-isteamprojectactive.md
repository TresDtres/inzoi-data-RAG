---
document_id: "41f5cf8d0b1eca6f47dae1a12c79b925f819496c9b4f119cf49de6b70076333c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isteamprojectactive"
title: "Condition_IsTeamProjectActive"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:48+00:00"
content_sha256: "746f28e793cc66e14a55a7c68750c991e23766a47845a94744042c9d5c4cab35"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isteamprojectactive"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character currently has an active team project.

# Parameters

| ParameterDescriptionBaseObjectThe character whose team project active state will be checked.CompareTypeEqual (team project is active) or NotEqual (team project is not active).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |
| --- |
| BaseObjectThe character whose team project active state will be checked.CompareTypeEqual (team project is active) or NotEqual (team project is not active).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |
| CompareTypeEqual (team project is active) or NotEqual (team project is not active).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |
| S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Business team project is activeSelfIsTeamProjectActiveEqualCheck if Business team project is not activeSelfIsTeamProjectActiveNotEqualCheck if School team project is activeSelfIsTeamProjectActiveEqualSchool |
| --- |
| Check if Business team project is activeSelfIsTeamProjectActiveEqualCheck if Business team project is not activeSelfIsTeamProjectActiveNotEqualCheck if School team project is activeSelfIsTeamProjectActiveEqualSchool |
| Check if Business team project is not activeSelfIsTeamProjectActiveNotEqualCheck if School team project is activeSelfIsTeamProjectActiveEqualSchool |
| Check if School team project is activeSelfIsTeamProjectActiveEqualSchool |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)

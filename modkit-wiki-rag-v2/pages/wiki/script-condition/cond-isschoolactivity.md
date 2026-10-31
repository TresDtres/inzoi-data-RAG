---
document_id: "58c1a51da9085ddca65683c395b43110d6a8ab2dcd6beb7a37e597848ed331a3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isschoolactivity"
title: "Condition_IsSchoolActivity"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:44+00:00"
content_sha256: "85dcb79b78a42c9b28476addfeaebf420a0862646163e1e680e7516668d6dc2b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isschoolactivity"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Script condition function to check whether the BaseObject character is currently in a specific SchoolActivity schedule slot.

# Parameters

| ParameterDescriptionBaseObjectThe school character whose current activity is checked (Self or Target).CompareTypeEqual: character is in the activity; NotEqual: character is not in the activity.S1SchoolActivity table row ID to compare against the current schedule slot. |
| --- |
| BaseObjectThe school character whose current activity is checked (Self or Target).CompareTypeEqual: character is in the activity; NotEqual: character is not in the activity.S1SchoolActivity table row ID to compare against the current schedule slot. |
| CompareTypeEqual: character is in the activity; NotEqual: character is not in the activity.S1SchoolActivity table row ID to compare against the current schedule slot. |
| S1SchoolActivity table row ID to compare against the current schedule slot. |

# Notes

- Returns false if BaseObject cannot resolve to a school member.
- If multiple schedule slots are active, this condition succeeds when any active slot has the requested SchoolActivity ID.

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is in math classSelfIsSchoolActivityEqualSchool_Subject_MathCheck if Target is not in math classTargetIsSchoolActivityNotEqualSchool_Subject_Math |
| --- |
| Check if Self is in math classSelfIsSchoolActivityEqualSchool_Subject_MathCheck if Target is not in math classTargetIsSchoolActivityNotEqualSchool_Subject_Math |
| Check if Target is not in math classTargetIsSchoolActivityNotEqualSchool_Subject_Math |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)

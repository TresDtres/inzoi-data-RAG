---
document_id: "604a505297ce4c1f0e75c8fbf50866897c48903753bb871ecdc5bb6f9c92056d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isschoolphase"
title: "Condition_IsSchoolPhase"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:45+00:00"
content_sha256: "10022297a2502573b27d8d4321b16e11b0a1482c092db2eb41972942663e3b1f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isschoolphase"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the current school phase for the BaseObject character using the character's school class schedule and the current game time.

# Notes

Returns false if BaseObject cannot resolve to a school member. BeforeSchool and AfterSchool are evaluated only on school days (Monday-Friday, excluding holidays).

# Parameters

| ParameterDescriptionBaseObjectThe school character whose current phase is checked (Self or Target).CompareTypeEqual: character is in the phase; NotEqual: character is not in the phase.S1Phase name: Class, LunchBreak, Exam, AfterSchool, or BeforeSchool. |
| --- |
| BaseObjectThe school character whose current phase is checked (Self or Target).CompareTypeEqual: character is in the phase; NotEqual: character is not in the phase.S1Phase name: Class, LunchBreak, Exam, AfterSchool, or BeforeSchool. |
| CompareTypeEqual: character is in the phase; NotEqual: character is not in the phase.S1Phase name: Class, LunchBreak, Exam, AfterSchool, or BeforeSchool. |
| S1Phase name: Class, LunchBreak, Exam, AfterSchool, or BeforeSchool. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is in classSelfIsSchoolPhaseEqualClassCheck if Target is not in lunchTargetIsSchoolPhaseNotEqualLunchBreakCheck if Self is in an exam phaseSelfIsSchoolPhaseEqualExam |
| --- |
| Check if Self is in classSelfIsSchoolPhaseEqualClassCheck if Target is not in lunchTargetIsSchoolPhaseNotEqualLunchBreakCheck if Self is in an exam phaseSelfIsSchoolPhaseEqualExam |
| Check if Target is not in lunchTargetIsSchoolPhaseNotEqualLunchBreakCheck if Self is in an exam phaseSelfIsSchoolPhaseEqualExam |
| Check if Self is in an exam phaseSelfIsSchoolPhaseEqualExam |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)

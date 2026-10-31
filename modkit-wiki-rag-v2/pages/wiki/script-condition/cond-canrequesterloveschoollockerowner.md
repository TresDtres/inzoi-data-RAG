---
document_id: "75346d1e61b8df83ada476ae5d825327bfdb12346cedc48dc77ffdbd9fd2753f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner"
title: "Condition_CanRequesterLoveSchoolLockerOwner"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:50+00:00"
content_sha256: "bf6185e3c8808bbfc02295222e262192560a2c25f9247a5a5e1105a8f4aecaff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canrequesterloveschoollockerowner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the requester character and the owner of the school locker can romantically love each other. The school locker is resolved from NonBaseObject, and the owner is resolved through the school career seat owner path. This condition checks age, kinship, and both characters' romance orientation/target preference.

# Parameters

| ParameterDescriptionBaseObjectRequester character, normally SelfNonBaseObjectSchool locker object, normally TargetCompareTypeType of comparison operation (Equal, NotEqual) |
| --- |
| BaseObjectRequester character, normally SelfNonBaseObjectSchool locker object, normally TargetCompareTypeType of comparison operation (Equal, NotEqual) |
| NonBaseObjectSchool locker object, normally TargetCompareTypeType of comparison operation (Equal, NotEqual) |
| CompareTypeType of comparison operation (Equal, NotEqual) |

# Examples

| DescriptionBaseObjectCommandCompareTypeSelf and the owner of Target school locker can love each otherSelfCanRequesterLoveSchoolLockerOwnerEqualSelf and the owner of Target school locker cannot love each otherSelfCanRequesterLoveSchoolLockerOwnerNotEqual |
| --- |
| Self and the owner of Target school locker can love each otherSelfCanRequesterLoveSchoolLockerOwnerEqualSelf and the owner of Target school locker cannot love each otherSelfCanRequesterLoveSchoolLockerOwnerNotEqual |
| Self and the owner of Target school locker cannot love each otherSelfCanRequesterLoveSchoolLockerOwnerNotEqual |

# Notes

Invalid requester, invalid locker, unassigned locker owner, invalid owner, or self-owned locker returns false without applying NotEqual inversion.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[HasVotedProm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

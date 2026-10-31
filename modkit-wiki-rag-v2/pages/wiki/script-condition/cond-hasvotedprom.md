---
document_id: "ea49c88eeae709963d98978a4488a1ad92679e9a33025f952b5b078a7835f0a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvotedprom"
title: "Condition_HasVotedProm"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:16+00:00"
content_sha256: "d6eca7113dc010cffb1cee0f8c37bbc508518f5a701ca443b81cb6f9455ae2ac"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasvotedprom"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject has already cast a prom vote for the given gender category. Returns false (regardless of CompareType) if BaseObject isn't enrolled at a school.

# Parameters

| ParameterDescriptionBaseObjectThe character to check.CompareTypeEqual (has voted) / NotEqual (has not voted).S1EB1GenderType (Male/Female) — the prom royalty category to check. |
| --- |
| BaseObjectThe character to check.CompareTypeEqual (has voted) / NotEqual (has not voted).S1EB1GenderType (Male/Female) — the prom royalty category to check. |
| CompareTypeEqual (has voted) / NotEqual (has not voted).S1EB1GenderType (Male/Female) — the prom royalty category to check. |
| S1EB1GenderType (Male/Female) — the prom royalty category to check. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has voted for the Male categorySelfHasVotedPromEqualMaleCheck if Self has not voted for the Female categorySelfHasVotedPromNotEqualFemale |
| --- |
| Check if Self has voted for the Male categorySelfHasVotedPromEqualMaleCheck if Self has not voted for the Female categorySelfHasVotedPromNotEqualFemale |
| Check if Self has not voted for the Female categorySelfHasVotedPromNotEqualFemale |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSchool & Education[AcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-academicachievement)[CanRequesterLoveSchoolLockerOwner](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrequesterloveschoollockerowner)[ExamRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrank)[ExamRankCompare](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-examrankcompare)[GraduationSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-graduationschool)[HasPendingPromVote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspendingpromvote)[HasSchoolUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasschooluniform)[IsAbsentSchool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isabsentschool)[IsClassMate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isclassmate)[IsParentOfStudentAcademicAchievement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofstudentacademicachievement)[IsPendingGraduate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendinggraduate)[IsPromRoyalty](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispromroyalty)

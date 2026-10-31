---
document_id: "9e01ff1cfe2effe0881d8d3df25a5d4ca790878dd6bbc7c2745b44cb9021ff47"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank"
title: "Condition_CareerRank"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:52+00:00"
content_sha256: "f2a1fca8f47de71f3bbfea6ee4c7625fb7aeba8871b9968f8fbcda357bb4d758"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-careerrank"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the current career rank of the BaseObject character. Compares the character's career rank against the specified value(s) using CompareType.

# Parameters

| ParameterDescriptionBaseObjectThe character whose career rank will be checked.CompareTypeComparison operator (Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRange).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Rank value to compare against.F2Upper bound rank value for range comparisons (InRange, OutRange). |
| --- |
| BaseObjectThe character whose career rank will be checked.CompareTypeComparison operator (Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRange).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Rank value to compare against.F2Upper bound rank value for range comparisons (InRange, OutRange). |
| CompareTypeComparison operator (Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRange).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Rank value to compare against.F2Upper bound rank value for range comparisons (InRange, OutRange). |
| S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted.F1Rank value to compare against.F2Upper bound rank value for range comparisons (InRange, OutRange). |
| F1Rank value to compare against.F2Upper bound rank value for range comparisons (InRange, OutRange). |
| F2Upper bound rank value for range comparisons (InRange, OutRange). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Business career rank is exactly 3SelfCareerRankEqual3Check if Business career rank is 3 or higherSelfCareerRankGreaterOrEqual3Check if Business career rank is between 2-5SelfCareerRankInRange25Check if School career rank is exactly 1SelfCareerRankEqualSchool1 |
| --- |
| Check if Business career rank is exactly 3SelfCareerRankEqual3Check if Business career rank is 3 or higherSelfCareerRankGreaterOrEqual3Check if Business career rank is between 2-5SelfCareerRankInRange25Check if School career rank is exactly 1SelfCareerRankEqualSchool1 |
| Check if Business career rank is 3 or higherSelfCareerRankGreaterOrEqual3Check if Business career rank is between 2-5SelfCareerRankInRange25Check if School career rank is exactly 1SelfCareerRankEqualSchool1 |
| Check if Business career rank is between 2-5SelfCareerRankInRange25Check if School career rank is exactly 1SelfCareerRankEqualSchool1 |
| Check if School career rank is exactly 1SelfCareerRankEqualSchool1 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

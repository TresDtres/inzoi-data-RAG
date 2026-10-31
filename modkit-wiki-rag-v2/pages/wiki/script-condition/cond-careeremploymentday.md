---
document_id: "1835a36bc6301f43e031aa025e14771dbc9a1ebba0802730501841b9b892c379"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday"
title: "Condition_CareerEmploymentDay"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:51+00:00"
content_sha256: "80aaf890e82ab9faf43e69e0b630248ec69e8c35ad3c65ad5d5d3f7d324fcf7e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-careeremploymentday"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the number of completed workdays (attendance days) for the character's career. Uses AttendanceDays which is incremented each time the member finishes a workday. On the first workday (before it ends): AttendanceDays == 0. After the first workday completes: AttendanceDays == 1.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose career attendance days are checkedCompareTypeEqual, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeS1EB1CareerType (e.g., Business, School). Defaults to Business if omitted.F1Attendance day threshold (or minimum for range comparisons)F2Maximum for InRange/OutRange comparisons only |
| --- |
| BaseObjectCharacter whose career attendance days are checkedCompareTypeEqual, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeS1EB1CareerType (e.g., Business, School). Defaults to Business if omitted.F1Attendance day threshold (or minimum for range comparisons)F2Maximum for InRange/OutRange comparisons only |
| CompareTypeEqual, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeS1EB1CareerType (e.g., Business, School). Defaults to Business if omitted.F1Attendance day threshold (or minimum for range comparisons)F2Maximum for InRange/OutRange comparisons only |
| S1EB1CareerType (e.g., Business, School). Defaults to Business if omitted.F1Attendance day threshold (or minimum for range comparisons)F2Maximum for InRange/OutRange comparisons only |
| F1Attendance day threshold (or minimum for range comparisons)F2Maximum for InRange/OutRange comparisons only |
| F2Maximum for InRange/OutRange comparisons only |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2First workday in progressSelfCareerEmploymentDayEqual0First workday completedSelfCareerEmploymentDayEqual1Worked 7 or more daysSelfCareerEmploymentDayGreaterOrEqual7School career: between 10~30 daysSelfCareerEmploymentDayInRangeSchool1030 |
| --- |
| First workday in progressSelfCareerEmploymentDayEqual0First workday completedSelfCareerEmploymentDayEqual1Worked 7 or more daysSelfCareerEmploymentDayGreaterOrEqual7School career: between 10~30 daysSelfCareerEmploymentDayInRangeSchool1030 |
| First workday completedSelfCareerEmploymentDayEqual1Worked 7 or more daysSelfCareerEmploymentDayGreaterOrEqual7School career: between 10~30 daysSelfCareerEmploymentDayInRangeSchool1030 |
| Worked 7 or more daysSelfCareerEmploymentDayGreaterOrEqual7School career: between 10~30 daysSelfCareerEmploymentDayInRangeSchool1030 |
| School career: between 10~30 daysSelfCareerEmploymentDayInRangeSchool1030 |

# Notes

- Returns false (error) if FB2CareerComponent is missing: this condition must only be used on characters with Career.
- Returns false (error) if CareerEntityId is valid but the Career entity cannot be found: indicates a data inconsistency.
- Returns NotEqual result if the character has no active career of the specified type (S1), or is not registered as a member.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

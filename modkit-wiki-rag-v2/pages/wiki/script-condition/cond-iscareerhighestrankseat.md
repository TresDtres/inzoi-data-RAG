---
document_id: "29bdc9d2394dc5c6eb55bec15600921f729884bcc2dfd4523d37a1191b1585f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareerhighestrankseat"
title: "Condition_IsCareerHighestRankSeat"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:22+00:00"
content_sha256: "e81a5d2945433c8d6b39b157fbee088e6eea7efd1b2bb1a619850df17dcde23b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscareerhighestrankseat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the target seat object is registered at the highest rank of its job. Resolves the seat to its root object via ObjectGrouping. Resolves the career via the character's CareerComponent using the career type specified by S1. Compares the seat's registered rank against the maximum rank defined in CachedJobData.RankList for that job.

# Parameters

| ParameterDescriptionBaseObjectThe character (Self/Target). NonBase is the seat object to check.CompareTypeEqual (is highest rank seat) or NotEqual (is not highest rank seat).S1EB1CareerType (e.g., Business, School). Defaults to Business if omitted. |
| --- |
| BaseObjectThe character (Self/Target). NonBase is the seat object to check.CompareTypeEqual (is highest rank seat) or NotEqual (is not highest rank seat).S1EB1CareerType (e.g., Business, School). Defaults to Business if omitted. |
| CompareTypeEqual (is highest rank seat) or NotEqual (is not highest rank seat).S1EB1CareerType (e.g., Business, School). Defaults to Business if omitted. |
| S1EB1CareerType (e.g., Business, School). Defaults to Business if omitted. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if seat is highest rank seatSelfIsCareerHighestRankSeatEqualCheck if seat is not highest rankSelfIsCareerHighestRankSeatNotEqual |
| --- |
| Check if seat is highest rank seatSelfIsCareerHighestRankSeatEqualCheck if seat is not highest rankSelfIsCareerHighestRankSeatNotEqual |
| Check if seat is not highest rankSelfIsCareerHighestRankSeatNotEqual |

# Notes

- Returns false for invalid entity/component states (unregistered object, not enrolled in career, etc.) regardless of CompareType.
- For all other cases, NotEqual returns the inverse of Equal.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)

---
document_id: "9a14bf274c2d45d34e2751762b6e97bc09e302e92698d3dcf8ba5c1cf72d2e3c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat"
title: "Condition_HasCareerSeat"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:03+00:00"
content_sha256: "be6c7897b78aba81a16d2e71ade5579a4313cf37f5a59c77e3fe4e5335cd2cba"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hascareerseat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character has any assigned career seat for the specified career type. This condition does not compare against a target seat object; it only checks the character's current seat assignment.

# Parameters

| ParameterDescriptionBaseObjectThe character whose assigned career seat will be checked.CompareTypeEqual (has an assigned seat) or NotEqual (does not have an assigned seat).S1Optional EB1CareerType to check (e.g., Business, School). Defaults to Business. |
| --- |
| BaseObjectThe character whose assigned career seat will be checked.CompareTypeEqual (has an assigned seat) or NotEqual (does not have an assigned seat).S1Optional EB1CareerType to check (e.g., Business, School). Defaults to Business. |
| CompareTypeEqual (has an assigned seat) or NotEqual (does not have an assigned seat).S1Optional EB1CareerType to check (e.g., Business, School). Defaults to Business. |
| S1Optional EB1CareerType to check (e.g., Business, School). Defaults to Business. |

# Notes

- If the character has no career of the requested type, the condition treats it as no assigned seat.
- Use IsMyCareerSeat when a specific target seat object must be compared with the character's seat.

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has an assigned Business seatSelfHasCareerSeatEqualCheck if Self has no assigned School seatSelfHasCareerSeatNotEqualSchool |
| --- |
| Check if Self has an assigned Business seatSelfHasCareerSeatEqualCheck if Self has no assigned School seatSelfHasCareerSeatNotEqualSchool |
| Check if Self has no assigned School seatSelfHasCareerSeatNotEqualSchool |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

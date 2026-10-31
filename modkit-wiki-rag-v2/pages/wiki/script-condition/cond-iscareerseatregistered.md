---
document_id: "becfa4d0504c31da30fada470645f209898d18da36858274243d6cda72720e08"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareerseatregistered"
title: "Condition_IsCareerSeatRegistered"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:22+00:00"
content_sha256: "3333b027c50f70bd6231c8f57ab5f4411f9fa42144b549ea914793ff7d9b8b01"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscareerseatregistered"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a career seat object is registered in the character's career. Resolves the seat to its root object via ObjectGrouping and checks whether that seat entity is registered in the character's career seat map. If the seat is a child of an ObjectGrouping component, the root entity is used for the lookup.

# Parameters

| ParameterDescriptionBaseObjectThe seat object (Base); the character is resolved as NonBase.CompareTypeEqual (seat is registered) or NotEqual (seat is not registered).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |
| --- |
| BaseObjectThe seat object (Base); the character is resolved as NonBase.CompareTypeEqual (seat is registered) or NotEqual (seat is not registered).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |
| CompareTypeEqual (seat is registered) or NotEqual (seat is not registered).S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |
| S1EB1CareerType to check (e.g., Business, School); defaults to Business if omitted. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if the Business seat is registeredSelfIsCareerSeatRegisteredEqualCheck if the Business seat is unregisteredSelfIsCareerSeatRegisteredNotEqualCheck if the School seat is registeredSelfIsCareerSeatRegisteredEqualSchool |
| --- |
| Check if the Business seat is registeredSelfIsCareerSeatRegisteredEqualCheck if the Business seat is unregisteredSelfIsCareerSeatRegisteredNotEqualCheck if the School seat is registeredSelfIsCareerSeatRegisteredEqualSchool |
| Check if the Business seat is unregisteredSelfIsCareerSeatRegisteredNotEqualCheck if the School seat is registeredSelfIsCareerSeatRegisteredEqualSchool |
| Check if the School seat is registeredSelfIsCareerSeatRegisteredEqualSchool |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)

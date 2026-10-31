---
document_id: "a229e2bc93d1555251caf713573d741a19b3b20f830e8c24c667e5b88b5d2929"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget"
title: "Condition_CareerRankCompWithTarget"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:52+00:00"
content_sha256: "7b381a05eb321e90798f98642a4368189c229346e08453f084a53c570bf77dd6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-careerrankcompwithtarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the career rank of Self against the career rank of Target. Both must belong to the same career entity; returns false if they differ.

# Parameters

| ParameterDescriptionBaseObjectMust be Self; the condition always compares Self rank vs Target rank.CompareTypeComparison operator applied to (Self rank [op] Target rank).S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |
| --- |
| BaseObjectMust be Self; the condition always compares Self rank vs Target rank.CompareTypeComparison operator applied to (Self rank [op] Target rank).S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |
| CompareTypeComparison operator applied to (Self rank [op] Target rank).S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |
| S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self's rank is higher than Target'sSelfCareerRankCompWithTargetGreaterCheck if Self's rank is equal to Target'sSelfCareerRankCompWithTargetEqualCheck if Self's School rank is higher than Target'sSelfCareerRankCompWithTargetGreaterSchool |
| --- |
| Check if Self's rank is higher than Target'sSelfCareerRankCompWithTargetGreaterCheck if Self's rank is equal to Target'sSelfCareerRankCompWithTargetEqualCheck if Self's School rank is higher than Target'sSelfCareerRankCompWithTargetGreaterSchool |
| Check if Self's rank is equal to Target'sSelfCareerRankCompWithTargetEqualCheck if Self's School rank is higher than Target'sSelfCareerRankCompWithTargetGreaterSchool |
| Check if Self's School rank is higher than Target'sSelfCareerRankCompWithTargetGreaterSchool |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

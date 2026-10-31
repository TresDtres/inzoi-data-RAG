---
document_id: "c884b7c757b5b0e2db7def6873274b3edcf8cc5d1b9783f95deccb3560aab6c7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee"
title: "Condition_IsCareerEmployee"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:21+00:00"
content_sha256: "66d99885a5fe07d901ad999ec90794e667df9a1eccc3dcdb5754b2112caa9d66"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscareeremployee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject character is an employee of a career whose site matches their current location. Uses CareerComponent to look up the character's own career, then compares its site with the current site. S1 specifies the EB1CareerType to check (defaults to Business if omitted).

# Parameters

| ParameterDescriptionBaseObjectThe character to check. Self checks the self entity; Target checks thetarget entity. Uses GetEntityIdByBaseObject() internally.CompareTypeEqual (is a career employee at current site) or NotEqual (is not).S1EB1CareerType to check (defaults to Business if omitted). |
| --- |
| BaseObjectThe character to check. Self checks the self entity; Target checks thetarget entity. Uses GetEntityIdByBaseObject() internally.CompareTypeEqual (is a career employee at current site) or NotEqual (is not).S1EB1CareerType to check (defaults to Business if omitted). |
| target entity. Uses GetEntityIdByBaseObject() internally.CompareTypeEqual (is a career employee at current site) or NotEqual (is not).S1EB1CareerType to check (defaults to Business if omitted). |
| CompareTypeEqual (is a career employee at current site) or NotEqual (is not).S1EB1CareerType to check (defaults to Business if omitted). |
| S1EB1CareerType to check (defaults to Business if omitted). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is a career employeeSelfIsCareerEmployeeEqualCheck if Self is not a career employeeSelfIsCareerEmployeeNotEqualCheck if Target is a career employeeTargetIsCareerEmployeeEqualCheck School career employeeSelfIsCareerEmployeeEqualSchool |
| --- |
| Check if Self is a career employeeSelfIsCareerEmployeeEqualCheck if Self is not a career employeeSelfIsCareerEmployeeNotEqualCheck if Target is a career employeeTargetIsCareerEmployeeEqualCheck School career employeeSelfIsCareerEmployeeEqualSchool |
| Check if Self is not a career employeeSelfIsCareerEmployeeNotEqualCheck if Target is a career employeeTargetIsCareerEmployeeEqualCheck School career employeeSelfIsCareerEmployeeEqualSchool |
| Check if Target is a career employeeTargetIsCareerEmployeeEqualCheck School career employeeSelfIsCareerEmployeeEqualSchool |
| Check School career employeeSelfIsCareerEmployeeEqualSchool |

# Notes

Returns false for invalid entity/component states regardless of CompareType.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)

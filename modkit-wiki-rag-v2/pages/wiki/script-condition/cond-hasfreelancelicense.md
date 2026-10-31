---
document_id: "04f9347a5aed8cd299de6323c688d040cb283606296178b44ea0c50c47a9b32a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense"
title: "Condition_HasFreelanceLicense"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:05+00:00"
content_sha256: "aa2a112d3a2e9a6d192c1d6f89ca5c1ff3bff5c8bf9580d605bf0f7b74e46654"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasfreelancelicense"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has a specific freelance license. Verifies that the character possesses the license identified by S1.

# Parameters

| ParameterDescriptionBaseObjectThe character entity to check license ownership.CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| --- |
| BaseObjectThe character entity to check license ownership.CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| S1LicenseId (refers to License.Id in the data table). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has the Plumbing licenseSelfHasFreelanceLicenseEqualPlumbingCheck if Self does not have the Plumbing licenseSelfHasFreelanceLicenseNotEqualPlumbingCheck if Target does not have the Repair licenseTargetHasFreelanceLicenseNotEqualRepair |
| --- |
| Check if Self has the Plumbing licenseSelfHasFreelanceLicenseEqualPlumbingCheck if Self does not have the Plumbing licenseSelfHasFreelanceLicenseNotEqualPlumbingCheck if Target does not have the Repair licenseTargetHasFreelanceLicenseNotEqualRepair |
| Check if Self does not have the Plumbing licenseSelfHasFreelanceLicenseNotEqualPlumbingCheck if Target does not have the Repair licenseTargetHasFreelanceLicenseNotEqualRepair |
| Check if Target does not have the Repair licenseTargetHasFreelanceLicenseNotEqualRepair |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

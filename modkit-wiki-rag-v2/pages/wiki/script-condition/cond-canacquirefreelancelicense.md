---
document_id: "74729d5d223203107a5332128a860c2d7439b95577936870578aba574f6708e5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense"
title: "Condition_CanAcquireFreelanceLicense"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:46+00:00"
content_sha256: "165d6a29623b4263435e48636b056683ae7d0d4f130d2d092b2433e3d2bf53f1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canacquirefreelancelicense"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character can acquire a specific freelance license. Validates all acquisition conditions defined for the license, including skill requirements and job experience.

# Parameters

| ParameterDescriptionBaseObjectThe character entity to check license acquisition eligibility for.CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| --- |
| BaseObjectThe character entity to check license acquisition eligibility for.CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| S1LicenseId (refers to License.Id in the data table). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self can acquire the Plumbing licenseSelfCanAcquireFreelanceLicenseEqualPlumbingCheck if Self cannot acquire the Plumbing licenseSelfCanAcquireFreelanceLicenseNotEqualPlumbingCheck if Target cannot acquire the Repair licenseTargetCanAcquireFreelanceLicenseNotEqualRepair |
| --- |
| Check if Self can acquire the Plumbing licenseSelfCanAcquireFreelanceLicenseEqualPlumbingCheck if Self cannot acquire the Plumbing licenseSelfCanAcquireFreelanceLicenseNotEqualPlumbingCheck if Target cannot acquire the Repair licenseTargetCanAcquireFreelanceLicenseNotEqualRepair |
| Check if Self cannot acquire the Plumbing licenseSelfCanAcquireFreelanceLicenseNotEqualPlumbingCheck if Target cannot acquire the Repair licenseTargetCanAcquireFreelanceLicenseNotEqualRepair |
| Check if Target cannot acquire the Repair licenseTargetCanAcquireFreelanceLicenseNotEqualRepair |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

---
document_id: "3a270b1054377e5d64a3647cfed5209a71c4c02af1ff0c44677e971eadafd894"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islicenseunderreview"
title: "Condition_IsLicenseUnderReview"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:35+00:00"
content_sha256: "bb52e3f2518406f56551b9bbb2264a1af3f89f2c478103fa52e269900cde31b0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-islicenseunderreview"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character's freelance license is currently under review. Returns true if the character has submitted an application for the license specified by S1 and is awaiting the result.

# Parameters

| ParameterDescriptionBaseObjectThe character entity to check the license review status for.CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| --- |
| BaseObjectThe character entity to check the license review status for.CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| CompareTypeSupported compare types: Equal, NotEqual.S1LicenseId (refers to License.Id in the data table). |
| S1LicenseId (refers to License.Id in the data table). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self's Plumbing license is under reviewSelfIsLicenseUnderReviewEqualPlumbingCheck if Self's Repair license is not under reviewSelfIsLicenseUnderReviewNotEqualRepairCheck if Target's Plumbing license is under reviewTargetIsLicenseUnderReviewEqualPlumbing |
| --- |
| Check if Self's Plumbing license is under reviewSelfIsLicenseUnderReviewEqualPlumbingCheck if Self's Repair license is not under reviewSelfIsLicenseUnderReviewNotEqualRepairCheck if Target's Plumbing license is under reviewTargetIsLicenseUnderReviewEqualPlumbing |
| Check if Self's Repair license is not under reviewSelfIsLicenseUnderReviewNotEqualRepairCheck if Target's Plumbing license is under reviewTargetIsLicenseUnderReviewEqualPlumbing |
| Check if Target's Plumbing license is under reviewTargetIsLicenseUnderReviewEqualPlumbing |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)

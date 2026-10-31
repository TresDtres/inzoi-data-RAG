---
document_id: "86808f11a1bdb4eb9f14b436f1990ea909ae02627e7657ff0590adae165c14a8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense"
title: "Execute_AcquireFreelanceLicense"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:03+00:00"
content_sha256: "da108efed9d8a58d8f0b310d99f47daf99a7011cd85895ce02dbee9daae792de"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-acquirefreelancelicense"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Acquires a freelance license for the BaseObject character. The acquisition fails if the character does not meet requirements or already owns the license. On success, the license is initialized with Beginner grade (1) and a trust score of 0. If acquisition fails, warning logs are generated with detailed failure reasons.

# Parameters

| ParameterDescriptionBaseObjectThe character entity that will acquire the license.S1LicenseId (refers to License.Id in the data table). |
| --- |
| BaseObjectThe character entity that will acquire the license.S1LicenseId (refers to License.Id in the data table). |
| S1LicenseId (refers to License.Id in the data table). |

# Examples

| DescriptionBaseObjectCommandS1Acquire the Plumbing license for SelfSelfAcquireFreelanceLicensePlumbingAcquire the Repair license for TargetTargetAcquireFreelanceLicenseRepair |
| --- |
| Acquire the Plumbing license for SelfSelfAcquireFreelanceLicensePlumbingAcquire the Repair license for TargetTargetAcquireFreelanceLicenseRepair |
| Acquire the Repair license for TargetTargetAcquireFreelanceLicenseRepair |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

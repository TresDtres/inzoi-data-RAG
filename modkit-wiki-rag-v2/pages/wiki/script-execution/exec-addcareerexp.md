---
document_id: "c4945c7038984c7caf99f05efecb36bf4c8ea274539ab5de321b2b8ad1d161b1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp"
title: "Execute_AddCareerExp"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:04+00:00"
content_sha256: "33652849a95f79bc5092355f986dc029b0c8a5883628e39bd7049a21965b066b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addcareerexp"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds career experience (Exp) to the character. The result is clamped between 0 and 100. If the added Exp causes a level-up, the member's rank is automatically updated.

# Parameters

| ParameterDescriptionBaseObjectThe character whose career Exp will be increased.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1The experience amount to add. |
| --- |
| BaseObjectThe character whose career Exp will be increased.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1The experience amount to add. |
| S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1The experience amount to add. |
| F1The experience amount to add. |

# Examples

| DescriptionBaseObjectCommandS1F1Add 10 exp to Business careerSelfAddCareerExpBusiness10.0Add 5 exp to School careerSelfAddCareerExpSchool5.0 |
| --- |
| Add 10 exp to Business careerSelfAddCareerExpBusiness10.0Add 5 exp to School careerSelfAddCareerExpSchool5.0 |
| Add 5 exp to School careerSelfAddCareerExpSchool5.0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

---
document_id: "3b2930e7f260eb911123772890b5739b827523c720fa5f747ad7ca5e95372e53"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcareerexp"
title: "Execute_SetCareerExp"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:53+00:00"
content_sha256: "022b50af27bfe8c38d47a8d994a706071e740a4028c8c45f8546362054b9211f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setcareerexp"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets the career experience (Exp) of the character to a specific value. The value is clamped between 0 and the maximum Exp (100.0).

# Parameters

| ParameterDescriptionBaseObjectThe character whose career Exp will be set.S1EB1CareerType to modify (e.g., Business, School); defaults to Business if omitted.F1The experience value to set (valid range: 0.0 to 100.0). |
| --- |
| BaseObjectThe character whose career Exp will be set.S1EB1CareerType to modify (e.g., Business, School); defaults to Business if omitted.F1The experience value to set (valid range: 0.0 to 100.0). |
| S1EB1CareerType to modify (e.g., Business, School); defaults to Business if omitted.F1The experience value to set (valid range: 0.0 to 100.0). |
| F1The experience value to set (valid range: 0.0 to 100.0). |

# Examples

| DescriptionBaseObjectCommandS1F1Set Business career Exp to 50SelfSetCareerExp50.0Set School career Exp to 75SelfSetCareerExpSchool75.0Set Business career Exp to max (100)SelfSetCareerExpBusiness100.0 |
| --- |
| Set Business career Exp to 50SelfSetCareerExp50.0Set School career Exp to 75SelfSetCareerExpSchool75.0Set Business career Exp to max (100)SelfSetCareerExpBusiness100.0 |
| Set School career Exp to 75SelfSetCareerExpSchool75.0Set Business career Exp to max (100)SelfSetCareerExpBusiness100.0 |
| Set Business career Exp to max (100)SelfSetCareerExpBusiness100.0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

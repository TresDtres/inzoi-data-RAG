---
document_id: "b7dfb5df4fb80cc4bc6a8e2cd5530a3f222de542451e9e3ebf3671b768743322"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation"
title: "Execute_ApplyCareerVacation"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:12+00:00"
content_sha256: "fa3caf6b23373d45303a5a2b1c77f600af8c1b002460d0ad8245a0d514a3cd38"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-applycareervacation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Applies a career vacation for the character. Decrements vacation days (PaidVacation only), sets the next workday as vacation, and updates the schedule accordingly.

# Parameters

| ParameterDescriptionBaseObjectThe character requesting vacation.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.S2EB1CareerVacationType (PaidVacation, UnpaidVacation, SickLeave).F1Vacation day count (0 = use 1 day). Only used when F2 is 0.F2If > 0 and PaidVacation, sends VacationDayPopup to B1. Ignored for other types. |
| --- |
| BaseObjectThe character requesting vacation.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.S2EB1CareerVacationType (PaidVacation, UnpaidVacation, SickLeave).F1Vacation day count (0 = use 1 day). Only used when F2 is 0.F2If > 0 and PaidVacation, sends VacationDayPopup to B1. Ignored for other types. |
| S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.S2EB1CareerVacationType (PaidVacation, UnpaidVacation, SickLeave).F1Vacation day count (0 = use 1 day). Only used when F2 is 0.F2If > 0 and PaidVacation, sends VacationDayPopup to B1. Ignored for other types. |
| S2EB1CareerVacationType (PaidVacation, UnpaidVacation, SickLeave).F1Vacation day count (0 = use 1 day). Only used when F2 is 0.F2If > 0 and PaidVacation, sends VacationDayPopup to B1. Ignored for other types. |
| F1Vacation day count (0 = use 1 day). Only used when F2 is 0.F2If > 0 and PaidVacation, sends VacationDayPopup to B1. Ignored for other types. |
| F2If > 0 and PaidVacation, sends VacationDayPopup to B1. Ignored for other types. |

# Examples

| DescriptionBaseObjectCommandS1S2F1F2Apply 1 day of sick leaveSelfApplyCareerVacationBusinessSickLeaveApply 3 days of paid vacationSelfApplyCareerVacationBusinessPaidVacation3Open day-selection popup for paid vacationSelfApplyCareerVacationBusinessPaidVacation1 |
| --- |
| Apply 1 day of sick leaveSelfApplyCareerVacationBusinessSickLeaveApply 3 days of paid vacationSelfApplyCareerVacationBusinessPaidVacation3Open day-selection popup for paid vacationSelfApplyCareerVacationBusinessPaidVacation1 |
| Apply 3 days of paid vacationSelfApplyCareerVacationBusinessPaidVacation3Open day-selection popup for paid vacationSelfApplyCareerVacationBusinessPaidVacation1 |
| Open day-selection popup for paid vacationSelfApplyCareerVacationBusinessPaidVacation1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

---
document_id: "dc830d429357454076500edce3cb8c9a4685651390e68f5d1bef0f4221707f66"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays"
title: "Execute_AddCareerVacationDays"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:04+00:00"
content_sha256: "4cf0b6e1cc8c42fd3e7b2809e2201c3359aa7b5354040035e040852bb02565ef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addcareervacationdays"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds or subtracts vacation days for the member. Negative values are allowed (subtraction). Result is clamped to 0.

# Parameters

| ParameterDescriptionBaseObjectThe character whose vacation days will be modified.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1Number of days to add (positive) or subtract (negative). |
| --- |
| BaseObjectThe character whose vacation days will be modified.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1Number of days to add (positive) or subtract (negative). |
| S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1Number of days to add (positive) or subtract (negative). |
| F1Number of days to add (positive) or subtract (negative). |

# Examples

| DescriptionBaseObjectCommandS1F1Grant 5 vacation days for Business careerSelfAddCareerVacationDaysBusiness5Deduct 2 vacation days for Business careerSelfAddCareerVacationDaysBusiness-2Grant 3 vacation days for School careerSelfAddCareerVacationDaysSchool3 |
| --- |
| Grant 5 vacation days for Business careerSelfAddCareerVacationDaysBusiness5Deduct 2 vacation days for Business careerSelfAddCareerVacationDaysBusiness-2Grant 3 vacation days for School careerSelfAddCareerVacationDaysSchool3 |
| Deduct 2 vacation days for Business careerSelfAddCareerVacationDaysBusiness-2Grant 3 vacation days for School careerSelfAddCareerVacationDaysSchool3 |
| Grant 3 vacation days for School careerSelfAddCareerVacationDaysSchool3 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

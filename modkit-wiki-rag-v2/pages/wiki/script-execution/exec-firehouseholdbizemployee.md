---
document_id: "7b0fa1e3504e5806900f15c0b57a77935d0368a5801f2320eb0076cc8d9776df"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-firehouseholdbizemployee"
title: "Execute_FireHouseholdBizEmployee"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:28+00:00"
content_sha256: "8cd3bfeeac05a712e365ef59701282d8c39026e8d01e11c98b2dc2a7560f3799"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-firehouseholdbizemployee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Fires or dismisses the BaseObject employee from the HouseholdBiz found at the employee's current site. The NonBaseObject must be the HouseholdBiz manager; if not, this Execute does nothing. S1 determines whether this is a forced dismissal ("Fire") or a voluntary departure ("Depart").

# Parameters

| ParameterDescriptionBaseObjectThe character (employee) to be fired or dismissed; must be located at a HouseholdBiz siteS1Action type: "Fire" to forcibly dismiss the employee, "Depart" for a voluntary departure |
| --- |
| BaseObjectThe character (employee) to be fired or dismissed; must be located at a HouseholdBiz siteS1Action type: "Fire" to forcibly dismiss the employee, "Depart" for a voluntary departure |
| S1Action type: "Fire" to forcibly dismiss the employee, "Depart" for a voluntary departure |

# Examples

| DescriptionBaseObjectCommandManager fires an employee at the current biz siteTargetFireHouseholdBizEmployeeManager processes an employee's voluntary departureTargetFireHouseholdBizEmployee |
| --- |
| Manager fires an employee at the current biz siteTargetFireHouseholdBizEmployeeManager processes an employee's voluntary departureTargetFireHouseholdBizEmployee |
| Manager processes an employee's voluntary departureTargetFireHouseholdBizEmployee |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

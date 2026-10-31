---
document_id: "8254cc2ee68349fba2aa7a3f972bf514a1544efe6f2c28704d2a5212af3e5657"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sethouseholdbizsalarylevel"
title: "Execute_SetHouseholdBizSalaryLevel"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:55+00:00"
content_sha256: "b978dea5dea853bfd216d9b1b5e9116c75d19b9490fce03891cc5d46462c93a4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sethouseholdbizsalarylevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Directly sets the salary level of the BaseObject employee in the HouseholdBiz found at the employee's current site. The NonBaseObject must be the HouseholdBiz manager; if not, this Execute does nothing. S1 must be a valid salary level name; if invalid, this Execute does nothing.

# Parameters

| ParameterDescriptionBaseObjectThe character (employee) whose salary level will be changed; must be at a HouseholdBiz siteS1Target salary level name: "VeryLow", "Low", "Normal", "High", or "VeryHigh" |
| --- |
| BaseObjectThe character (employee) whose salary level will be changed; must be at a HouseholdBiz siteS1Target salary level name: "VeryLow", "Low", "Normal", "High", or "VeryHigh" |
| S1Target salary level name: "VeryLow", "Low", "Normal", "High", or "VeryHigh" |

# Examples

| DescriptionBaseObjectCommandManager sets an employee's salary to NormalTargetSetHouseholdBizSalaryLevelManager raises an employee's salary to VeryHighTargetSetHouseholdBizSalaryLevelManager lowers an employee's salary to VeryLowTargetSetHouseholdBizSalaryLevel |
| --- |
| Manager sets an employee's salary to NormalTargetSetHouseholdBizSalaryLevelManager raises an employee's salary to VeryHighTargetSetHouseholdBizSalaryLevelManager lowers an employee's salary to VeryLowTargetSetHouseholdBizSalaryLevel |
| Manager raises an employee's salary to VeryHighTargetSetHouseholdBizSalaryLevelManager lowers an employee's salary to VeryLowTargetSetHouseholdBizSalaryLevel |
| Manager lowers an employee's salary to VeryLowTargetSetHouseholdBizSalaryLevel |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

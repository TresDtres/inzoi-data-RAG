---
document_id: "d340cf7c65de03941f8b9e0bc07c603c8ce6b59f959598d26cbb982b6c5bfb28"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel"
title: "Execute_AdjustHouseholdBizSalaryLevel"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:12+00:00"
content_sha256: "d3a7a86d3e9cf92f397c69a2fa4dc71971ef58fdb35b48cd80e4b0a1edae93bb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-adjusthouseholdbizsalarylevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Increases or decreases the salary level of the BaseObject employee in the HouseholdBiz found at the employee’s current site. The NonBaseObject must be the manager of that HouseholdBiz. S1 must be "Up" to raise the salary one step (clamped at VeryHigh) or "Down" to lower it one step (clamped at VeryLow). Any other value does nothing.

# Parameters

| ParameterDescriptionBaseObjectA Character (employee) whose salary level at the current site’s HouseholdBiz is adjusted.S1Direction of the salary change: "Up" to raise one step, or "Down" to lower one step. |
| --- |
| BaseObjectA Character (employee) whose salary level at the current site’s HouseholdBiz is adjusted.S1Direction of the salary change: "Up" to raise one step, or "Down" to lower one step. |
| S1Direction of the salary change: "Up" to raise one step, or "Down" to lower one step. |

# Examples

| DescriptionBaseObjectCommandRaise Self’s salary level by one step at the current bizSelfAdjustHouseholdBizSalaryLevelLower Target’s salary level by one step at the current bizTargetAdjustHouseholdBizSalaryLevel |
| --- |
| Raise Self’s salary level by one step at the current bizSelfAdjustHouseholdBizSalaryLevelLower Target’s salary level by one step at the current bizTargetAdjustHouseholdBizSalaryLevel |
| Lower Target’s salary level by one step at the current bizTargetAdjustHouseholdBizSalaryLevel |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

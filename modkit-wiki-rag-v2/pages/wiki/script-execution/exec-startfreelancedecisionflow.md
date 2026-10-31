---
document_id: "dc0b74f8f979a4b81dfc8c0d75715d8e3fe7cc1786d068b7fc98ef8ce1584adf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startfreelancedecisionflow"
title: "Execute_StartFreelanceDecisionFlow"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:00+00:00"
content_sha256: "5ca0e977c43d4adaa49ff642ed3b971e57b093fe61645c848f0b0eaaee04d9fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-startfreelancedecisionflow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Starts the DecisionFlow for the BaseObject's active freelance order. If the BaseObject has an active order with a DecisionFlow, initiates it via FreelanceManager. No-op if there is no active order, or the order has no DecisionFlow, or it is already completed.

# Parameters

| ParameterDescriptionBaseObjectThe character entity whose active freelance order to start flow. |
| --- |
| BaseObjectThe character entity whose active freelance order to start flow. |

# Examples

| DescriptionBaseObjectCommandStart DecisionFlow for Self's active orderSelfStartFreelanceDecisionFlow |
| --- |
| Start DecisionFlow for Self's active orderSelfStartFreelanceDecisionFlow |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

---
document_id: "92b1776896fee8d9aa45135f1a6526c10d70b8f2d947aec0006b73a85cd8b29c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-receivefreelancedeliveryobject"
title: "Execute_ReceiveFreelanceDeliveryObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:42+00:00"
content_sha256: "bb1108ffe59f73a2b265114cca7f162c3949895005a27df6d2a4dfabcae7579e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-receivefreelancedeliveryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Receives the freelance delivery object from the Client and adds it to the BaseObject character's inventory. Finds the active order's RequestTarget.TargetId, generates a GameObject with that ObjectId, and places it in inventory. If item creation or inventory addition fails, the created object is destroyed and a warning is logged.

# Parameters

| ParameterDescriptionBaseObjectThe character entity whose inventory will receive the delivery object. |
| --- |
| BaseObjectThe character entity whose inventory will receive the delivery object. |

# Examples

| DescriptionBaseObjectCommandReceive the delivery object for SelfSelfReceiveFreelanceDeliveryObjectReceive the delivery object for TargetTargetReceiveFreelanceDeliveryObject |
| --- |
| Receive the delivery object for SelfSelfReceiveFreelanceDeliveryObjectReceive the delivery object for TargetTargetReceiveFreelanceDeliveryObject |
| Receive the delivery object for TargetTargetReceiveFreelanceDeliveryObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

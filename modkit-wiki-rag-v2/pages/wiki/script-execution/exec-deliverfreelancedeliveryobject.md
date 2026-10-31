---
document_id: "441b9d444a30011cdafe8f7e2b3606de75ead1dc3d96f42329e9d2a11a6d4926"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject"
title: "Execute_DeliverFreelanceDeliveryObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:24+00:00"
content_sha256: "e448efb05d8c49bfbc382cefc4fd72c282fa586f1b270514e63033d1c6e92019"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-deliverfreelancedeliveryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Delivers the freelance delivery object from the BaseObject's inventory to the Recipient and destroys it. Finds the active order's RequestTarget.TargetId, locates the matching item in inventory, then removes and destroys it.

# Parameters

| ParameterDescriptionBaseObjectThe character or actor entity whose inventory to remove the delivery item from. |
| --- |
| BaseObjectThe character or actor entity whose inventory to remove the delivery item from. |

# Examples

| DescriptionBaseObjectCommandDeliver the delivery object from Self's inventorySelfDeliverFreelanceDeliveryObjectDeliver the delivery object from Target's inventoryTargetDeliverFreelanceDeliveryObject |
| --- |
| Deliver the delivery object from Self's inventorySelfDeliverFreelanceDeliveryObjectDeliver the delivery object from Target's inventoryTargetDeliverFreelanceDeliveryObject |
| Deliver the delivery object from Target's inventoryTargetDeliverFreelanceDeliveryObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

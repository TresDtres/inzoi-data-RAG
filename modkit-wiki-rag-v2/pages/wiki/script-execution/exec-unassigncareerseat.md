---
document_id: "2d4bf352dd0668589bf1217b06d224c2b3bf6add6fc92cb73f20184cec69bd05"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-unassigncareerseat"
title: "Execute_UnassignCareerSeat"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:04+00:00"
content_sha256: "6a0af350ae5d6341baed859fb31e2d240bffb5c28e7d6ea6c5932aa30911bfa0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-unassigncareerseat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Unassigns a character from a career seat. Resolves the seat to its root object via ObjectGrouping and removes the current occupant from that seat. The character is resolved from the script context as Self, and the seat as Target, regardless of the BaseObject parameter. If the seat is a child of an ObjectGrouping component, the root entity is used. For School career seats, transfers all seat inventory objects to the character inventory before unassigning. If the transfer fails, the seat remains assigned. Inventory capacity failures send a failure toast; S2 is sent only after unassignment succeeds. On success, sends the S_UpdateCareerSeatInfo packet.

# Parameters

| ParameterDescriptionBaseObjectNot used directly; character is Self and seat is Target via context.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted.S2Optional toast message id to send only when unassignment succeeds. |
| --- |
| BaseObjectNot used directly; character is Self and seat is Target via context.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted.S2Optional toast message id to send only when unassignment succeeds. |
| S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted.S2Optional toast message id to send only when unassignment succeeds. |
| S2Optional toast message id to send only when unassignment succeeds. |

# Notes

School seat inventory transfer is all-or-nothing. Capacity, invalid inventory, or put-in failures block unassignment and keep objects in the seat inventory.

# Examples

| DescriptionBaseObjectCommandS1Unassign the character from a Business seatSelfUnassignCareerSeatUnassign the character from a School career seatSelfUnassignCareerSeatSchool |
| --- |
| Unassign the character from a Business seatSelfUnassignCareerSeatUnassign the character from a School career seatSelfUnassignCareerSeatSchool |
| Unassign the character from a School career seatSelfUnassignCareerSeatSchool |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

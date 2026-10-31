---
document_id: "13fc6c3d9f2b4bbe15614c5982bdfd7d0512c24e2453f51cbb8d5ec7df638ab2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat"
title: "Execute_AssignCareerSeat"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:15+00:00"
content_sha256: "920e3a2402c10bb972480566def325a2afc41b417b0feaee7385cc90aa536f7e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-assigncareerseat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Assigns a character to a specific career seat. Resolves the seat to its root object via ObjectGrouping and assigns the character to that seat. If another member already occupies the seat, they are swapped. If the seat is a child of an ObjectGrouping component, the root entity is used. On success, sends the S_UpdateCareerSeatInfo packet to synchronize with the client.

# Parameters

| ParameterDescriptionBaseObjectThe character to assign (Base); the seat object is resolved as NonBase.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |
| --- |
| BaseObjectThe character to assign (Base); the seat object is resolved as NonBase.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |
| S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |

# Examples

| DescriptionBaseObjectCommandS1Assign the character to a Business career seatSelfAssignCareerSeatAssign the character to a School career seatSelfAssignCareerSeatSchool |
| --- |
| Assign the character to a Business career seatSelfAssignCareerSeatAssign the character to a School career seatSelfAssignCareerSeatSchool |
| Assign the character to a School career seatSelfAssignCareerSeatSchool |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

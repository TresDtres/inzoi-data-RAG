---
document_id: "626941385d0af9077229c8db07ef2d64f9b715a250e8fa2ea8cb7fcca0fec7d5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcareerseatallowedranks"
title: "Execute_SetCareerSeatAllowedRanks"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:53+00:00"
content_sha256: "445038509ab0185c04c4ea957d1a5a712319c9909693cd38fac1ee1d25f4165a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setcareerseatallowedranks"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Opens a rank picker UI for setting the allowed ranks on a career seat. Resolves the seat to its root object via ObjectGrouping, collects available ranks from the career's job info, and sends an S_OpenCareerSeatRankPicker packet to display the rank selection UI on the client. If the seat is a child of an ObjectGrouping component, the root entity is used. The career icon is resolved from CareerTableRow.Organizations by matching the seat's JobId. The actual rank update happens after the user confirms via the C_SetCareerSeatAllowedRanks packet.

# Parameters

| ParameterDescriptionBaseObjectThe seat object (Base); the character is resolved as NonBase.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |
| --- |
| BaseObjectThe seat object (Base); the character is resolved as NonBase.S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |
| S1EB1CareerType to use (e.g., Business, School); defaults to Business if omitted. |

# Examples

| DescriptionBaseObjectCommandS1Open rank picker for a Business career seatSelfSetCareerSeatAllowedRanksOpen rank picker for a School career seatSelfSetCareerSeatAllowedRanksSchool |
| --- |
| Open rank picker for a Business career seatSelfSetCareerSeatAllowedRanksOpen rank picker for a School career seatSelfSetCareerSeatAllowedRanksSchool |
| Open rank picker for a School career seatSelfSetCareerSeatAllowedRanksSchool |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

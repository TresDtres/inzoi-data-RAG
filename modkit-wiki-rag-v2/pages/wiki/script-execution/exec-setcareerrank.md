---
document_id: "76e740a211006005eaa4fae486730fe3320724df76cd666e7f793281a5baacaf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcareerrank"
title: "Execute_SetCareerRank"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:53+00:00"
content_sha256: "0484da737e3dbaec00685125f1d29f90e4c2f7cdc7fd64960da5a84c9ae3b6bf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setcareerrank"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets a character's career rank to the specified value. Unlike AdvanceCareerRank (which increments by one), this sets the rank directly.

# Parameters

| ParameterDescriptionBaseObjectThe character whose career rank will be set.S1EB1CareerType to set (e.g., Business, School); defaults to Business if omitted.F1The target rank value to set. |
| --- |
| BaseObjectThe character whose career rank will be set.S1EB1CareerType to set (e.g., Business, School); defaults to Business if omitted.F1The target rank value to set. |
| S1EB1CareerType to set (e.g., Business, School); defaults to Business if omitted.F1The target rank value to set. |
| F1The target rank value to set. |

# Examples

| DescriptionBaseObjectCommandS1F1Set Business career rank to 1SelfSetCareerRank1Set School career rank to 3SelfSetCareerRankSchool3 |
| --- |
| Set Business career rank to 1SelfSetCareerRank1Set School career rank to 3SelfSetCareerRankSchool3 |
| Set School career rank to 3SelfSetCareerRankSchool3 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

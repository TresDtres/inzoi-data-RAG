---
document_id: "1242fb331699a9200126d586693c54cbc0613bfad51a584810e87dbc8475f4b7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-joincareerfrominterviewcontext"
title: "Execute_JoinCareerFromInterviewContext"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:32+00:00"
content_sha256: "48d4735aaa13773db2fe67e8dcfa5d81407dd016ac0dc2afbbc2d9e5ee90d416"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-joincareerfrominterviewcontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Joins a career from the current interview event context. If the current SiteEvent is the interview common event, this execute uses the career and job stored in that event context to enroll the character into the career at the specified starting rank. Returns early when the current event context is not a valid interview event. Uses a system-side join flow (EB1CareerJoinReason::System) to avoid re-scheduling the interview.

# Parameters

| ParameterDescriptionBaseObjectThe character to apply the career join result to.F1Starting rank (0-based index) to assign upon joining. |
| --- |
| BaseObjectThe character to apply the career join result to.F1Starting rank (0-based index) to assign upon joining. |
| F1Starting rank (0-based index) to assign upon joining. |

# Examples

| DescriptionBaseObjectCommandF1Confirm interview result and join career at rank 0SelfJoinCareerFromInterviewContext0Confirm interview result and join career at rank 2SelfJoinCareerFromInterviewContext2 |
| --- |
| Confirm interview result and join career at rank 0SelfJoinCareerFromInterviewContext0Confirm interview result and join career at rank 2SelfJoinCareerFromInterviewContext2 |
| Confirm interview result and join career at rank 2SelfJoinCareerFromInterviewContext2 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

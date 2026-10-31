---
document_id: "b961a485a3584fcd56a6c20c2ec278bbe9776551f2ddc3e5ac5607cf173dcd1a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime"
title: "Execute_ExtendCareerEndTime"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:28+00:00"
content_sha256: "24192f0bffb750bfce6bd0dbf252dc135ff1b7d8b9bae5a627874669dc256ee0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-extendcareerendtime"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets overwork end time for the member. The member continues working past the normal end time until the specified time. Capped at next day's start time.

# Parameters

| ParameterDescriptionBaseObjectThe character whose work time will be extended.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1New end time in HHMM format (e.g., 2000 for 20:00). Operates on hourlyprecision (minutes are accepted but evaluated at the top of the hour). |
| --- |
| BaseObjectThe character whose work time will be extended.S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1New end time in HHMM format (e.g., 2000 for 20:00). Operates on hourlyprecision (minutes are accepted but evaluated at the top of the hour). |
| S1EB1CareerType (e.g., Business, School); defaults to Business if omitted.F1New end time in HHMM format (e.g., 2000 for 20:00). Operates on hourlyprecision (minutes are accepted but evaluated at the top of the hour). |
| F1New end time in HHMM format (e.g., 2000 for 20:00). Operates on hourlyprecision (minutes are accepted but evaluated at the top of the hour). |
| precision (minutes are accepted but evaluated at the top of the hour). |

# Examples

| DescriptionBaseObjectCommandS1F1Extend Business work until 20:00SelfExtendCareerEndTimeBusiness2000 |
| --- |
| Extend Business work until 20:00SelfExtendCareerEndTimeBusiness2000 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)

---
document_id: "1cf360c8dafb4bd8f605e15cb831d50ecb656affceb92196c09bc6eb2f9ad243"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent"
title: "Execute_CreateCareerRetirementEvent"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:23+00:00"
content_sha256: "0298a3e0f69d2c83346023dd356e661b218dcfe77f6607eb61e9524f50f68d6f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-createcareerretirementevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates a retirement ceremony SocialEvent for the retiring character. The retiring character (BaseObject) becomes Retirement_Main; the target colleague becomes Retirement_Host. The event is scheduled 1 day from now at the hour set in DA_Career::RetirementSocialEventHour (default 17).

# Parameters

| ParameterDescriptionBaseObjectSelf — the retiring character (Retirement_Main) |
| --- |
| BaseObjectSelf — the retiring character (Retirement_Main) |

# Notes

Target must be the colleague who hosted the retirement phone call (Retirement_Host). Returns early without error if RetirementSocialEventId is not set in DA_Career.

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[AdvanceCareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

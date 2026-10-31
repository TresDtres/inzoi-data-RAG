---
document_id: "dcc8c2603d86fbbb21bb31128ce9db36afcd605797aa02c84abf9e867f61481a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-advancecareerrank"
title: "Execute_AdvanceCareerRank"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:12+00:00"
content_sha256: "0a72a16ffb1532fbae1ae12dc0bd6971017e0ecc3545c57a03b0522c9c0f65af"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-advancecareerrank"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Advances a character's career rank by one. Intended for promotion exam completion or script-driven career progression. Returns early if the character has no career of the specified type or is already at max.

# Parameters

| ParameterDescriptionBaseObjectThe character whose career rank will be advanced.S1EB1CareerType to advance (e.g., Business, School); defaults to Business if omitted. |
| --- |
| BaseObjectThe character whose career rank will be advanced.S1EB1CareerType to advance (e.g., Business, School); defaults to Business if omitted. |
| S1EB1CareerType to advance (e.g., Business, School); defaults to Business if omitted. |

# Examples

| DescriptionBaseObjectCommandS1Advance the Business career rank by oneSelfAdvanceCareerRankAdvance the School career rank by oneSelfAdvanceCareerRankSchool |
| --- |
| Advance the Business career rank by oneSelfAdvanceCareerRankAdvance the School career rank by oneSelfAdvanceCareerRankSchool |
| Advance the School career rank by oneSelfAdvanceCareerRankSchool |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCareer & Freelance[AcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-acquirefreelancelicense)[AddCareerExp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareerexp)[AddCareerVacationDays](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcareervacationdays)[AdjustHouseholdBizSalaryLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adjusthouseholdbizsalarylevel)[ApplyCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycareervacation)[ApplyCompanyVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applycompanyvacation)[AssignCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-assigncareerseat)[CancelCareerVacation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelcareervacation)[CancelFreelanceOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelfreelanceorder)[CreateCareerRetirementEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createcareerretirementevent)[DeliverFreelanceDeliveryObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancedeliveryobject)[ExtendCareerEndTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-extendcareerendtime)

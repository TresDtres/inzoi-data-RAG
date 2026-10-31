---
document_id: "89f5b577291e6071527fb6f756f664337a86f0798938b5e4a1c8b17c7411aa3e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismycareerseat"
title: "Condition_IsMyCareerSeat"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:37+00:00"
content_sha256: "78e172f9b5bc216379cb7a38b6274f6377844497a06a80005867135a6e27b2e2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ismycareerseat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the target seat object is the member's currently assigned career seat. Resolves the seat to its root object via ObjectGrouping, then finds the career associated with the seat's site to perform the membership check.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self = self entity, Target = targetentity). The seat object is resolved via GetEntityIdByNonBase.CompareTypeEqual (is my seat) or NotEqual (is not my seat). |
| --- |
| BaseObjectThe character to check (Self = self entity, Target = targetentity). The seat object is resolved via GetEntityIdByNonBase.CompareTypeEqual (is my seat) or NotEqual (is not my seat). |
| entity). The seat object is resolved via GetEntityIdByNonBase.CompareTypeEqual (is my seat) or NotEqual (is not my seat). |
| CompareTypeEqual (is my seat) or NotEqual (is not my seat). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if object is my seatSelfIsMyCareerSeatEqualCheck if object is not my seatSelfIsMyCareerSeatNotEqual |
| --- |
| Check if object is my seatSelfIsMyCareerSeatEqualCheck if object is not my seatSelfIsMyCareerSeatNotEqual |
| Check if object is not my seatSelfIsMyCareerSeatNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)

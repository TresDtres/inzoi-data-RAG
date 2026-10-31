---
document_id: "c6317d5a541dc94f429996f99644414e51fecc24f99579b1b98af9a37dbfd267"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem"
title: "Condition_CanDeliverFreelanceQuestItem"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:47+00:00"
content_sha256: "13c0cac978dea196ad54a213f4414d5f53436a3a573edb4bafb9569fbc40f090"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-candeliverfreelancequestitem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self can deliver the required item to the Recipient. Returns false if the BaseObject is not the Recipient of Self's active order. Returns false if Self does not have the required item in inventory. When Client and Recipient are the same character (direct delivery order), this condition is not used.

# Parameters

| ParameterDescriptionBaseObjectThe Target NPC to check against the Recipient role of the active order.CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe Target NPC to check against the Recipient role of the active order.CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the deliver item interaction should be availableTargetCanDeliverFreelanceQuestItemEqualCheck if the deliver item interaction should not be availableTargetCanDeliverFreelanceQuestItemNotEqual |
| --- |
| Check if the deliver item interaction should be availableTargetCanDeliverFreelanceQuestItemEqualCheck if the deliver item interaction should not be availableTargetCanDeliverFreelanceQuestItemNotEqual |
| Check if the deliver item interaction should not be availableTargetCanDeliverFreelanceQuestItemNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

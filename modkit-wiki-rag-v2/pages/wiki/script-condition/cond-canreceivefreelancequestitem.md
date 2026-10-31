---
document_id: "0111d361ea7c61f5885bed1553b6d06221b8d4a548e53d93aa1bb76bab253ba3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem"
title: "Condition_CanReceiveFreelanceQuestItem"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:51+00:00"
content_sha256: "baf66cdbbde94c98e95329932b2fb6ea4f9de0ebccc3a7d70801188a2bad25bc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canreceivefreelancequestitem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self can receive the required item from the Client. Returns false when Client and Recipient are the same character, indicating a direct delivery order where no separate item receive step is needed. Also returns false if the BaseObject is not the Client of Self's active order.

# Parameters

| ParameterDescriptionBaseObjectThe Target NPC to check against the Client role of the active order.CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe Target NPC to check against the Client role of the active order.CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the receive item interaction should be shownTargetCanReceiveFreelanceQuestItemEqualCheck if the receive item interaction should not be shownTargetCanReceiveFreelanceQuestItemNotEqual |
| --- |
| Check if the receive item interaction should be shownTargetCanReceiveFreelanceQuestItemEqualCheck if the receive item interaction should not be shownTargetCanReceiveFreelanceQuestItemNotEqual |
| Check if the receive item interaction should not be shownTargetCanReceiveFreelanceQuestItemNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

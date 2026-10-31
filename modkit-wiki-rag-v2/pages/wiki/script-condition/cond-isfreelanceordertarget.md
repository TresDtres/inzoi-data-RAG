---
document_id: "78efc34e5fc7850991ee94c79967b65ef8bf0f2d6c967845339d27dfeea4bdd8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfreelanceordertarget"
title: "Condition_IsFreelanceOrderTarget"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:29+00:00"
content_sha256: "c464995d72f929e14452740a9d249cddd5db8c4d3a512572ac34770d32ec90ed"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfreelanceordertarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is the Client or Recipient of Self's active freelance order. Use S1 to specify which role to check: Client or Recipient.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check against the order Client or Recipient role.CompareTypeSupported compare types: Equal, NotEqual.S1The role to check: "Client" or "Recipient". |
| --- |
| BaseObjectThe entity to check against the order Client or Recipient role.CompareTypeSupported compare types: Equal, NotEqual.S1The role to check: "Client" or "Recipient". |
| CompareTypeSupported compare types: Equal, NotEqual.S1The role to check: "Client" or "Recipient". |
| S1The role to check: "Client" or "Recipient". |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Target NPC is the Client of the active orderTargetIsFreelanceOrderTargetEqualClientCheck if Target NPC is the RecipientTargetIsFreelanceOrderTargetEqualRecipientCheck if Target NPC is not the ClientTargetIsFreelanceOrderTargetNotEqualClient |
| --- |
| Check if Target NPC is the Client of the active orderTargetIsFreelanceOrderTargetEqualClientCheck if Target NPC is the RecipientTargetIsFreelanceOrderTargetEqualRecipientCheck if Target NPC is not the ClientTargetIsFreelanceOrderTargetNotEqualClient |
| Check if Target NPC is the RecipientTargetIsFreelanceOrderTargetEqualRecipientCheck if Target NPC is not the ClientTargetIsFreelanceOrderTargetNotEqualClient |
| Check if Target NPC is not the ClientTargetIsFreelanceOrderTargetNotEqualClient |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)

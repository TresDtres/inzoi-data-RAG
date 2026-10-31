---
document_id: "64a2f591f2c81cf2aa9f6900a138e1e45728dd20dd75e3643cfe20c04ff76e3e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfreelancecreationordernotcrafted"
title: "Condition_IsFreelanceCreationOrderNotCrafted"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:29+00:00"
content_sha256: "998ae461daf7778841ca0e895875f2e13a4fc9a2200e635b5101314bca4df610"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfreelancecreationordernotcrafted"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Checks whether the active freelance order is in the Creation category and no crafted item has been made yet.

- Verifies that the active order's FreelanceOrderTemplate CategoryId is "Creation".
- Verifies that CraftedItemEntityId is Invalid, meaning crafting has not started yet. ===== | Description | BaseObject | Command | CompareType | |----------------------------------------------------------------------|------------|----------------------------------------|-------------| | Check if Self has Creation order without crafted item | Self | IsFreelanceCreationOrderNotCrafted | Equal | | Check if Self does NOT have Creation order without crafted item | Self | IsFreelanceCreationOrderNotCrafted | NotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)

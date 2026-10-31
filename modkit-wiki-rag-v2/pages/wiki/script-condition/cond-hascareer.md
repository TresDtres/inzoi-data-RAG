---
document_id: "b2550a22dc9d7a99b0b622b4309bb17af7bb1535be841cb7f86acecf629f6230"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer"
title: "Condition_HasCareer"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:02+00:00"
content_sha256: "82d903aa34168307bbc3fd5b04e91e473d16d62dfbb0e123abb013e00dd263b5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hascareer"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character has a career of the specified type, optionally filtered by a specific career table ID or by matching the target's career.

# Parameters

| ParameterDescriptionBaseObjectThe character whose career will be checked.CompareTypeEqual (has career) or NotEqual (does not have career).S1EB1CareerType to check (e.g., Business, School).S2Optional career table row ID to match, or "Target" to compare with the other. |
| --- |
| BaseObjectThe character whose career will be checked.CompareTypeEqual (has career) or NotEqual (does not have career).S1EB1CareerType to check (e.g., Business, School).S2Optional career table row ID to match, or "Target" to compare with the other. |
| CompareTypeEqual (has career) or NotEqual (does not have career).S1EB1CareerType to check (e.g., Business, School).S2Optional career table row ID to match, or "Target" to compare with the other. |
| S1EB1CareerType to check (e.g., Business, School).S2Optional career table row ID to match, or "Target" to compare with the other. |
| S2Optional career table row ID to match, or "Target" to compare with the other. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if Self has any Business careerSelfHasCareerEqualBusinessCheck if Self does not have any School careerSelfHasCareerNotEqualSchoolCheck if Self has a specific Business career by table IDSelfHasCareerEqualBusinessSomeCareerTableRowIdCheck if Self has the same career as the TargetSelfHasCareerEqualBusinessTarget |
| --- |
| Check if Self has any Business careerSelfHasCareerEqualBusinessCheck if Self does not have any School careerSelfHasCareerNotEqualSchoolCheck if Self has a specific Business career by table IDSelfHasCareerEqualBusinessSomeCareerTableRowIdCheck if Self has the same career as the TargetSelfHasCareerEqualBusinessTarget |
| Check if Self does not have any School careerSelfHasCareerNotEqualSchoolCheck if Self has a specific Business career by table IDSelfHasCareerEqualBusinessSomeCareerTableRowIdCheck if Self has the same career as the TargetSelfHasCareerEqualBusinessTarget |
| Check if Self has a specific Business career by table IDSelfHasCareerEqualBusinessSomeCareerTableRowIdCheck if Self has the same career as the TargetSelfHasCareerEqualBusinessTarget |
| Check if Self has the same career as the TargetSelfHasCareerEqualBusinessTarget |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)

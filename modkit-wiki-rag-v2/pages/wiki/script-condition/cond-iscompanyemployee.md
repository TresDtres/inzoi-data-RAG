---
document_id: "1e5a4528cd7e4ae3f5e45fcb12f34d0649e1d1b838fd3738d1c4a877f2f5797c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee"
title: "Condition_IsCompanyEmployee"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:24+00:00"
content_sha256: "7e180c89dbd3a2aaadea4aca4f8e7bf79dc8eea610e2e5d04e83e6cce7ec9e57"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscompanyemployee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character is an employee of the company at the currently located site. The condition looks up the site at the character's current location. If the site has a company ID, it checks whether the character's job company entity ID matches that site's entity ID.

# Parameters

| ParameterDescriptionBaseObjectThe character whose employment status is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectThe character whose employment status is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self is an employee of the company at their current siteSelfIsCompanyEmployeeEqualChecks if Target is NOT an employee at their current siteTargetIsCompanyEmployeeNotEqualChecks if Self is an employee at the company site they are standing inSelfIsCompanyEmployeeEqual |
| --- |
| Checks if Self is an employee of the company at their current siteSelfIsCompanyEmployeeEqualChecks if Target is NOT an employee at their current siteTargetIsCompanyEmployeeNotEqualChecks if Self is an employee at the company site they are standing inSelfIsCompanyEmployeeEqual |
| Checks if Target is NOT an employee at their current siteTargetIsCompanyEmployeeNotEqualChecks if Self is an employee at the company site they are standing inSelfIsCompanyEmployeeEqual |
| Checks if Self is an employee at the company site they are standing inSelfIsCompanyEmployeeEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

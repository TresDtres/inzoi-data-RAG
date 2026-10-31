---
document_id: "150bbeecc820dcb664113a2f2479565cd1d0b2ba603bd8c685854f319ae76791"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint"
title: "Condition_IsCompanyEmployeeByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:24+00:00"
content_sha256: "a331675184d9095b75cfacdb93d33e2deb68d5d32c710c340f12c906bfb22be3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscompanyemployeebyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character is an employee of the company at the site located at the impact point (target location). Unlike IsCompanyEmployee, this condition uses the script context's target location instead of the character's current location to look up the site.

# Parameters

| ParameterDescriptionBaseObjectThe character whose employment status is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectThe character whose employment status is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self is an employee of the company at the target impact pointSelfIsCompanyEmployeeByImpactPointEqualChecks if Target is NOT an employee at the impact point companyTargetIsCompanyEmployeeByImpactPointNotEqualChecks if Self is an employee of the company at a clicked locationSelfIsCompanyEmployeeByImpactPointEqual |
| --- |
| Checks if Self is an employee of the company at the target impact pointSelfIsCompanyEmployeeByImpactPointEqualChecks if Target is NOT an employee at the impact point companyTargetIsCompanyEmployeeByImpactPointNotEqualChecks if Self is an employee of the company at a clicked locationSelfIsCompanyEmployeeByImpactPointEqual |
| Checks if Target is NOT an employee at the impact point companyTargetIsCompanyEmployeeByImpactPointNotEqualChecks if Self is an employee of the company at a clicked locationSelfIsCompanyEmployeeByImpactPointEqual |
| Checks if Self is an employee of the company at a clicked locationSelfIsCompanyEmployeeByImpactPointEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

---
document_id: "70a2a84062fdc4d2e84ab2153cc3144d009cf69c64fe9ffcda44aa63783f15f1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime"
title: "Condition_IsMerchantWorkingTime"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:36+00:00"
content_sha256: "36297221bd98fdeb01e8d023b104c871d1001c91e4430cd3c827c2a10da74a04"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ismerchantworkingtime"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the merchant object associated with the BaseObject is currently within its working hours.

# Parameters

| ParameterDescriptionBaseObjectThe object to check (Self or Target).CompareTypeEqual (merchant is currently open), NotEqual (merchant is currently closed). |
| --- |
| BaseObjectThe object to check (Self or Target).CompareTypeEqual (merchant is currently open), NotEqual (merchant is currently closed). |
| CompareTypeEqual (merchant is currently open), NotEqual (merchant is currently closed). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the merchant is currently openTargetIsMerchantWorkingTimeEqualCheck if the merchant is currently closedTargetIsMerchantWorkingTimeNotEqualCheck if Self's merchant is currently openSelfIsMerchantWorkingTimeEqualCheck if Self's merchant is currently closedSelfIsMerchantWorkingTimeNotEqual |
| --- |
| Check if the merchant is currently openTargetIsMerchantWorkingTimeEqualCheck if the merchant is currently closedTargetIsMerchantWorkingTimeNotEqualCheck if Self's merchant is currently openSelfIsMerchantWorkingTimeEqualCheck if Self's merchant is currently closedSelfIsMerchantWorkingTimeNotEqual |
| Check if the merchant is currently closedTargetIsMerchantWorkingTimeNotEqualCheck if Self's merchant is currently openSelfIsMerchantWorkingTimeEqualCheck if Self's merchant is currently closedSelfIsMerchantWorkingTimeNotEqual |
| Check if Self's merchant is currently openSelfIsMerchantWorkingTimeEqualCheck if Self's merchant is currently closedSelfIsMerchantWorkingTimeNotEqual |
| Check if Self's merchant is currently closedSelfIsMerchantWorkingTimeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

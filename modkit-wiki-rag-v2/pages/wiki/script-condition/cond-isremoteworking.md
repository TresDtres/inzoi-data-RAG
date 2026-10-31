---
document_id: "2d196da0103198a00f4021f5bd18d5c8719e2a72637c83fdb36d4a1ef1d8c1c9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking"
title: "Condition_IsRemoteWorking"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:42+00:00"
content_sha256: "74c5196197fba0789d4caf835bca4bbdfdaf3cbba1bc762d47f32a55354e0c58"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isremoteworking"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character's active work mode is Remote for the specified career type. Returns true if the member's current ActiveWorkMode equals EB1WorkMode::Remote.

# Parameters

| ParameterDescriptionBaseObjectThe character whose work mode will be checked.CompareTypeEqual (is remote working) or NotEqual (is not remote working).S1EB1CareerType to check (defaults to Business if omitted). |
| --- |
| BaseObjectThe character whose work mode will be checked.CompareTypeEqual (is remote working) or NotEqual (is not remote working).S1EB1CareerType to check (defaults to Business if omitted). |
| CompareTypeEqual (is remote working) or NotEqual (is not remote working).S1EB1CareerType to check (defaults to Business if omitted). |
| S1EB1CareerType to check (defaults to Business if omitted). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is currently remote workingSelfIsRemoteWorkingEqualBusinessCheck if Self is not remote workingSelfIsRemoteWorkingNotEqualBusiness |
| --- |
| Check if Self is currently remote workingSelfIsRemoteWorkingEqualBusinessCheck if Self is not remote workingSelfIsRemoteWorkingNotEqualBusiness |
| Check if Self is not remote workingSelfIsRemoteWorkingNotEqualBusiness |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

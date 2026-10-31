---
document_id: "f41dd51ff80edc440ef898b180a39fb4710e558ac0ed3bc874d46af4f961ded2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek"
title: "Condition_IsWorkingDayOfWeek"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:51+00:00"
content_sha256: "82b5f68e78554eab8b1692f1508bb71f0d0b0ac8419ea84fe8f48af459c9ad40"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isworkingdayofweek"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current (or predicted) day of the week is a scheduled working day for the character.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose working day schedule is checkedCompareTypeEqual: is a working day, NotEqual: is not a working dayS1EB1CareerType to check (default: Business) |
| --- |
| BaseObjectCharacter whose working day schedule is checkedCompareTypeEqual: is a working day, NotEqual: is not a working dayS1EB1CareerType to check (default: Business) |
| CompareTypeEqual: is a working day, NotEqual: is not a working dayS1EB1CareerType to check (default: Business) |
| S1EB1CareerType to check (default: Business) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if today is a working day for SelfSelfIsWorkingDayOfWeekEqualCheck if today is not a working day for SelfSelfIsWorkingDayOfWeekNotEqualCheck if today is a working day for Target (School)TargetIsWorkingDayOfWeekEqualSchool |
| --- |
| Check if today is a working day for SelfSelfIsWorkingDayOfWeekEqualCheck if today is not a working day for SelfSelfIsWorkingDayOfWeekNotEqualCheck if today is a working day for Target (School)TargetIsWorkingDayOfWeekEqualSchool |
| Check if today is not a working day for SelfSelfIsWorkingDayOfWeekNotEqualCheck if today is a working day for Target (School)TargetIsWorkingDayOfWeekEqualSchool |
| Check if today is a working day for Target (School)TargetIsWorkingDayOfWeekEqualSchool |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)

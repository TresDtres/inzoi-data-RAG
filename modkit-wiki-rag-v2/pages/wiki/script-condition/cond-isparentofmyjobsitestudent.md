---
document_id: "da0d6c1cd8466fba99de344ac2e9fce8a6e828e8d55c303f136fbd12edb3f25c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent"
title: "Condition_IsParentOfMyJobSiteStudent"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:38+00:00"
content_sha256: "e9fdddac92bdca6bb1b38a994d6f40c39f701feee4a7ee135a2fd7f7f4b7c819"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isparentofmyjobsitestudent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject parent is the parent of the selected talk subject and the opposite object is school staff at that selected child's active school site.

# Parameters

| ParameterDescriptionBaseObjectParent candidate. The opposite object is the staff member.CompareTypeEqual only. Invalid or missing talk subject fails.S1Optional staff filter: Principal, Teacher, or Job.Id. |
| --- |
| BaseObjectParent candidate. The opposite object is the staff member.CompareTypeEqual only. Invalid or missing talk subject fails.S1Optional staff filter: Principal, Teacher, or Job.Id. |
| CompareTypeEqual only. Invalid or missing talk subject fails.S1Optional staff filter: Principal, Teacher, or Job.Id. |
| S1Optional staff filter: Principal, Teacher, or Job.Id. |

# Notes

The selected child is read from the current TalkInstance runtime subject. ScriptContext Self/Target is not changed and no aggregate child fallback is used.

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is parent of selected child at Target's schoolSelfIsParentOfMyJobSiteStudentEqualTeacher |
| --- |
| Check if Self is parent of selected child at Target's schoolSelfIsParentOfMyJobSiteStudentEqualTeacher |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

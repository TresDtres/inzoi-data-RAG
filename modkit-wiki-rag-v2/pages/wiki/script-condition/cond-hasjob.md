---
document_id: "214c48e54d8456f798f5c2dd48f16ec70e1075159c6ee65d77c18c853c54d282"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob"
title: "Condition_HasJob"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:08+00:00"
content_sha256: "99ce28aa667b0394bcaddd5c9d00beef612e36983f22befbe937e8f23ff3d18d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasjob"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character currently has a job. Three modes depending on S1: if S1 is empty, checks whether BaseObject has any career (including a MainHouseholdBiz); if S1 is "Target", checks whether BaseObject and the non-base object share the same JobDtId in any of their career slots; otherwise, checks whether BaseObject has a job matching the specific JobDtId given in S1.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose job ownership is checkedCompareTypeEqual (or None): has job, NotEqual: does not have jobS1Empty: any job, "Target": same job as the other object, otherwise: JobDtId |
| --- |
| BaseObjectCharacter whose job ownership is checkedCompareTypeEqual (or None): has job, NotEqual: does not have jobS1Empty: any job, "Target": same job as the other object, otherwise: JobDtId |
| CompareTypeEqual (or None): has job, NotEqual: does not have jobS1Empty: any job, "Target": same job as the other object, otherwise: JobDtId |
| S1Empty: any job, "Target": same job as the other object, otherwise: JobDtId |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has any jobSelfHasJobEqualCheck if Self has no jobSelfHasJobNotEqualCheck if Self and Target share the same JobDtIdSelfHasJobEqualTargetCheck if Self has the specific job "Job_Chef"SelfHasJobEqualJob_Chef |
| --- |
| Check if Self has any jobSelfHasJobEqualCheck if Self has no jobSelfHasJobNotEqualCheck if Self and Target share the same JobDtIdSelfHasJobEqualTargetCheck if Self has the specific job "Job_Chef"SelfHasJobEqualJob_Chef |
| Check if Self has no jobSelfHasJobNotEqualCheck if Self and Target share the same JobDtIdSelfHasJobEqualTargetCheck if Self has the specific job "Job_Chef"SelfHasJobEqualJob_Chef |
| Check if Self and Target share the same JobDtIdSelfHasJobEqualTargetCheck if Self has the specific job "Job_Chef"SelfHasJobEqualJob_Chef |
| Check if Self has the specific job "Job_Chef"SelfHasJobEqualJob_Chef |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

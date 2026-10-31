---
document_id: "a88d2f2d03b60601fbc21cabd4d7021cc4d76a95a50854dc8a1fcfd6a148dfd5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag"
title: "Condition_HasJobTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:08+00:00"
content_sha256: "7f10313eb438643f8c6ad9e0514279237139b1e356da3c0a0856fc5ecbd89227"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasjobtag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has any current job with the specified JobTag. This lets shared interaction data check a semantic job group without referencing DLC-specific Job IDs.

# Parameters

| ParameterDescriptionBaseObjectThe character whose current jobs are checked.S1JobTag to find in the current jobs' `FB1JobTableRow::JobTags`.CompareTypeEqual/None means the tag must be present. NotEqual means absent. |
| --- |
| BaseObjectThe character whose current jobs are checked.S1JobTag to find in the current jobs' `FB1JobTableRow::JobTags`.CompareTypeEqual/None means the tag must be present. NotEqual means absent. |
| S1JobTag to find in the current jobs' `FB1JobTableRow::JobTags`.CompareTypeEqual/None means the tag must be present. NotEqual means absent. |
| CompareTypeEqual/None means the tag must be present. NotEqual means absent. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self currently has a teacher-tagged jobSelfHasJobTagEqualteacherCheck if Target does not currently have a teacher-tagged jobTargetHasJobTagNotEqualteacher |
| --- |
| Check if Self currently has a teacher-tagged jobSelfHasJobTagEqualteacherCheck if Target does not currently have a teacher-tagged jobTargetHasJobTagNotEqualteacher |
| Check if Target does not currently have a teacher-tagged jobTargetHasJobTagNotEqualteacher |

# Notes

The condition scans the character's Career slots and checks the Job row for each current JobDtId. If the character has no CareerComponent, no job, or the Job row has no matching tag, the condition is false before CompareType is applied.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[ComparePreviousJobRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank)[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

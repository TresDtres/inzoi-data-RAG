---
document_id: "a58ba0124ffcb89187866ae02ce9a04d150832599c833a673db4f5c92af0f461"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreviousjobrank"
title: "Condition_ComparePreviousJobRank"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:54+00:00"
content_sha256: "36deef62254306f339e85fcc83b23ef924ba3f34680f0e5284f084905fdc74e5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-comparepreviousjobrank"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the previous JobRank from graduation history. Returns false if the JobId matches a currently active career. Returns false if the JobId is not found in graduation records. If the JobId exists in graduation records, compares the rank with F1 and returns the result.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose graduation history is checkedCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1CareerDtId (CompanyId) of the previous job to look upS2JobId of the previous job to look upF1JobRank value to compare againstF2Maximum JobRank for range comparisons (InRange, OutRange only) |
| --- |
| BaseObjectCharacter whose graduation history is checkedCompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1CareerDtId (CompanyId) of the previous job to look upS2JobId of the previous job to look upF1JobRank value to compare againstF2Maximum JobRank for range comparisons (InRange, OutRange only) |
| CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRangeS1CareerDtId (CompanyId) of the previous job to look upS2JobId of the previous job to look upF1JobRank value to compare againstF2Maximum JobRank for range comparisons (InRange, OutRange only) |
| S1CareerDtId (CompanyId) of the previous job to look upS2JobId of the previous job to look upF1JobRank value to compare againstF2Maximum JobRank for range comparisons (InRange, OutRange only) |
| S2JobId of the previous job to look upF1JobRank value to compare againstF2Maximum JobRank for range comparisons (InRange, OutRange only) |
| F1JobRank value to compare againstF2Maximum JobRank for range comparisons (InRange, OutRange only) |
| F2Maximum JobRank for range comparisons (InRange, OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if recorded rank at Dowon Elementary School is 5 or higherSelfComparePreviousJobRankGreaterOrEqualCheck if recorded rank at Dowon Middle School is less than 3SelfComparePreviousJobRankLessCheck if recorded rank at Blissbay High School is exactly 1SelfComparePreviousJobRankEqualCheck if recorded rank at Blissbay High School is between 2 and 4SelfComparePreviousJobRankInRange |
| --- |
| Check if recorded rank at Dowon Elementary School is 5 or higherSelfComparePreviousJobRankGreaterOrEqualCheck if recorded rank at Dowon Middle School is less than 3SelfComparePreviousJobRankLessCheck if recorded rank at Blissbay High School is exactly 1SelfComparePreviousJobRankEqualCheck if recorded rank at Blissbay High School is between 2 and 4SelfComparePreviousJobRankInRange |
| Check if recorded rank at Dowon Middle School is less than 3SelfComparePreviousJobRankLessCheck if recorded rank at Blissbay High School is exactly 1SelfComparePreviousJobRankEqualCheck if recorded rank at Blissbay High School is between 2 and 4SelfComparePreviousJobRankInRange |
| Check if recorded rank at Blissbay High School is exactly 1SelfComparePreviousJobRankEqualCheck if recorded rank at Blissbay High School is between 2 and 4SelfComparePreviousJobRankInRange |
| Check if recorded rank at Blissbay High School is between 2 and 4SelfComparePreviousJobRankInRange |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoJob & Education[HasJob](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjob)[HasJobTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasjobtag)[IsCompanyEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployee)[IsCompanyEmployeeByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscompanyemployeebyimpactpoint)[IsMerchantWorkingTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismerchantworkingtime)[IsParentOfMyJobSiteStudent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isparentofmyjobsitestudent)[IsRemoteWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremoteworking)[IsWorking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworking)[IsWorkingDayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isworkingdayofweek)

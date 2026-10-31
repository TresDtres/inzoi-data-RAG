---
document_id: "c9b94e3d6a69e3da0f268ceb933b142a63f9c1a8cd3d90ae633ab7a8c61ed630"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-numberofhouseholdinsite"
title: "Condition_NumberOfHouseholdInSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:52+00:00"
content_sha256: "163628cd8e2134551bef3af5c531643d2c1e300a8f3f22a00fc7a196c08ebcf0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-numberofhouseholdinsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Counts household members, excluding BaseObject, who are currently in the same Site as BaseObject. Optionally filters the counted members by GrowthStep before comparing the count with F2.

# Parameters

| ParameterDescriptionBaseObjectThe character used to resolve the current Site and Household (Self or Target).CompareTypeComparison operator: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Filter token: empty for all members, {GrowthStep} to include S2 only, {ExcludeGrowthStep} to exclude S2.S2EB1GrowthStep name used by {GrowthStep}/{ExcludeGrowthStep} (e.g., Baby, Adult). Bitmask values such as Baby work as-is.F1Unused. This command uses Site boundaries instead of distance.F2Number of matching household members to compare against. |
| --- |
| BaseObjectThe character used to resolve the current Site and Household (Self or Target).CompareTypeComparison operator: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Filter token: empty for all members, {GrowthStep} to include S2 only, {ExcludeGrowthStep} to exclude S2.S2EB1GrowthStep name used by {GrowthStep}/{ExcludeGrowthStep} (e.g., Baby, Adult). Bitmask values such as Baby work as-is.F1Unused. This command uses Site boundaries instead of distance.F2Number of matching household members to compare against. |
| CompareTypeComparison operator: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Filter token: empty for all members, {GrowthStep} to include S2 only, {ExcludeGrowthStep} to exclude S2.S2EB1GrowthStep name used by {GrowthStep}/{ExcludeGrowthStep} (e.g., Baby, Adult). Bitmask values such as Baby work as-is.F1Unused. This command uses Site boundaries instead of distance.F2Number of matching household members to compare against. |
| S1Filter token: empty for all members, {GrowthStep} to include S2 only, {ExcludeGrowthStep} to exclude S2.S2EB1GrowthStep name used by {GrowthStep}/{ExcludeGrowthStep} (e.g., Baby, Adult). Bitmask values such as Baby work as-is.F1Unused. This command uses Site boundaries instead of distance.F2Number of matching household members to compare against. |
| S2EB1GrowthStep name used by {GrowthStep}/{ExcludeGrowthStep} (e.g., Baby, Adult). Bitmask values such as Baby work as-is.F1Unused. This command uses Site boundaries instead of distance.F2Number of matching household members to compare against. |
| F1Unused. This command uses Site boundaries instead of distance.F2Number of matching household members to compare against. |
| F2Number of matching household members to compare against. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2F1F2Check if there is at least 1 cohabiting family member in the current Site excluding BabySelfNumberOfHouseholdInSiteGreaterOrEqual{ExcludeGrowthStep}Baby1Check if no other household member is currently in the same SiteSelfNumberOfHouseholdInSiteEqual0 |
| --- |
| Check if there is at least 1 cohabiting family member in the current Site excluding BabySelfNumberOfHouseholdInSiteGreaterOrEqual{ExcludeGrowthStep}Baby1Check if no other household member is currently in the same SiteSelfNumberOfHouseholdInSiteEqual0 |
| Check if no other household member is currently in the same SiteSelfNumberOfHouseholdInSiteEqual0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

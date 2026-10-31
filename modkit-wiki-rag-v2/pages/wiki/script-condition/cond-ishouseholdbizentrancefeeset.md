---
document_id: "81bc36ebc8ec9e71991714f4023572a9a73ba7ce59567b418b3f298b0837de90"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdbizentrancefeeset"
title: "Condition_IsHouseholdBizEntranceFeeSet"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:32+00:00"
content_sha256: "8d4b440d03fa5822f2d39f5e347ebe56224232b24ef0fe892a247e7dd7359156"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdbizentrancefeeset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether an entrance fee type is configured at BaseObject's main HouseholdBiz. Returns true (Equal) when any valid entrance fee type is set (including Free). Only Invalid is considered "not set". Uses the character's HouseholdBiz profile (not physical location) so that Hope conditions work regardless of where the character is.

# Parameters

| ParameterDescriptionBaseObjectThe character whose main HouseholdBiz is checkedCompareTypeEqual: returns true if an entrance fee is set (including Free); NotEqual: otherwise |
| --- |
| BaseObjectThe character whose main HouseholdBiz is checkedCompareTypeEqual: returns true if an entrance fee is set (including Free); NotEqual: otherwise |
| CompareTypeEqual: returns true if an entrance fee is set (including Free); NotEqual: otherwise |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the biz has any entrance fee configuredSelfIsHouseholdBizEntranceFeeSetEqualCheck if the biz has no entrance fee configuredSelfIsHouseholdBizEntranceFeeSetNotEqual |
| --- |
| Check if the biz has any entrance fee configuredSelfIsHouseholdBizEntranceFeeSetEqualCheck if the biz has no entrance fee configuredSelfIsHouseholdBizEntranceFeeSetNotEqual |
| Check if the biz has no entrance fee configuredSelfIsHouseholdBizEntranceFeeSetNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

---
document_id: "4f495e77646ddceac4be848156d77242e31cd9fe5225148e578748eeed9a4404"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdbizrecipeslotfull"
title: "Condition_IsHouseholdBizRecipeSlotFull"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:32+00:00"
content_sha256: "37105d2797fd377e1afbaf6870c684991d10986c92370562ae7380760f3e4a21"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdbizrecipeslotfull"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the recipe slot count of BaseObject's main HouseholdBiz has reached its maximum. The maximum slot count is provided by F1. Uses the character's HouseholdBiz profile (not physical location) so that Hope conditions work regardless of where the character is.

# Parameters

| ParameterDescriptionBaseObjectThe character whose main HouseholdBiz is checkedCompareTypeEqual: returns true if the recipe slots are full; NotEqual: returns true otherwiseF1Maximum number of recipe slots allowed |
| --- |
| BaseObjectThe character whose main HouseholdBiz is checkedCompareTypeEqual: returns true if the recipe slots are full; NotEqual: returns true otherwiseF1Maximum number of recipe slots allowed |
| CompareTypeEqual: returns true if the recipe slots are full; NotEqual: returns true otherwiseF1Maximum number of recipe slots allowed |
| F1Maximum number of recipe slots allowed |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the biz has no more recipe slots availableSelfIsHouseholdBizRecipeSlotFullEqualCheck if the biz still has room for more recipesSelfIsHouseholdBizRecipeSlotFullNotEqual |
| --- |
| Check if the biz has no more recipe slots availableSelfIsHouseholdBizRecipeSlotFullEqualCheck if the biz still has room for more recipesSelfIsHouseholdBizRecipeSlotFullNotEqual |
| Check if the biz still has room for more recipesSelfIsHouseholdBizRecipeSlotFullNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

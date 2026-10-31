---
document_id: "b56d35fe8643079086b45830c4906602b299c4cb8409bf817b5a27688d9598a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite"
title: "Condition_HouseholdBizRoleTargetSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:18+00:00"
content_sha256: "2e7b098e388712aec57e3e12fb4b426861cf7c9c1965cfdc718f85d5519d7eba"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-householdbizroletargetsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject Character has a specific HouseholdBiz role at the site where the Script Target (an object or actor inside the HouseholdBiz) is located. Unlike Condition_HouseholdBizRole, this condition resolves the HouseholdBiz via the Target's located site rather than the BaseObject's located site.

# Parameters

| ParameterDescriptionBaseObjectThe Character whose role is evaluated against the HouseholdBiz resolved from Target's site.CompareTypeEqual: true if the Character's role matches S1. NotEqual: true if the role does not match S1.S1HouseholdBiz role name to compare against: Customer, Employee, or Manager.S2None includes all business types; ExcludeAccommodation returns false for accommodation businesses. |
| --- |
| BaseObjectThe Character whose role is evaluated against the HouseholdBiz resolved from Target's site.CompareTypeEqual: true if the Character's role matches S1. NotEqual: true if the role does not match S1.S1HouseholdBiz role name to compare against: Customer, Employee, or Manager.S2None includes all business types; ExcludeAccommodation returns false for accommodation businesses. |
| CompareTypeEqual: true if the Character's role matches S1. NotEqual: true if the role does not match S1.S1HouseholdBiz role name to compare against: Customer, Employee, or Manager.S2None includes all business types; ExcludeAccommodation returns false for accommodation businesses. |
| S1HouseholdBiz role name to compare against: Customer, Employee, or Manager.S2None includes all business types; ExcludeAccommodation returns false for accommodation businesses. |
| S2None includes all business types; ExcludeAccommodation returns false for accommodation businesses. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is the Manager of the biz at the Target's siteSelfHouseholdBizRoleTargetSiteEqualCheck if Self is not an Employee of the biz at the Target's siteSelfHouseholdBizRoleTargetSiteNotEqualCheck if Self is a Customer at the biz resolved from Target's siteSelfHouseholdBizRoleTargetSiteEqual |
| --- |
| Check if Self is the Manager of the biz at the Target's siteSelfHouseholdBizRoleTargetSiteEqualCheck if Self is not an Employee of the biz at the Target's siteSelfHouseholdBizRoleTargetSiteNotEqualCheck if Self is a Customer at the biz resolved from Target's siteSelfHouseholdBizRoleTargetSiteEqual |
| Check if Self is not an Employee of the biz at the Target's siteSelfHouseholdBizRoleTargetSiteNotEqualCheck if Self is a Customer at the biz resolved from Target's siteSelfHouseholdBizRoleTargetSiteEqual |
| Check if Self is a Customer at the biz resolved from Target's siteSelfHouseholdBizRoleTargetSiteEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

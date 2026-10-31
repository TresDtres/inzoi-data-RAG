---
document_id: "941e25dd9cf0a52cdb4874ce9781ba018a886e627a3e06f68e7e7f87d46401d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole"
title: "Condition_HouseholdBizRole"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:18+00:00"
content_sha256: "1a12892f9626cdaeb2fe410ae5768581e157871acb4ff8b19fd5fd22cc48cb42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-householdbizrole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the given Character's HouseholdBiz role matches the specified Role. The role is evaluated based on the HouseholdBiz linked to the Site the Character is currently located at.

# Parameters

| ParameterDescriptionBaseObjectThe Character whose current site-based HouseholdBiz role is checked.CompareTypeEqual: true if the Character's role matches S1. NotEqual: true if the role does not match S1.S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |
| --- |
| BaseObjectThe Character whose current site-based HouseholdBiz role is checked.CompareTypeEqual: true if the Character's role matches S1. NotEqual: true if the role does not match S1.S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |
| CompareTypeEqual: true if the Character's role matches S1. NotEqual: true if the role does not match S1.S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |
| S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is a Customer at the current biz siteSelfHouseholdBizRoleEqualCheck if Target is not an Employee at the biz siteTargetHouseholdBizRoleNotEqualCheck if Self is the Manager at the current biz siteSelfHouseholdBizRoleEqual |
| --- |
| Check if Self is a Customer at the current biz siteSelfHouseholdBizRoleEqualCheck if Target is not an Employee at the biz siteTargetHouseholdBizRoleNotEqualCheck if Self is the Manager at the current biz siteSelfHouseholdBizRoleEqual |
| Check if Target is not an Employee at the biz siteTargetHouseholdBizRoleNotEqualCheck if Self is the Manager at the current biz siteSelfHouseholdBizRoleEqual |
| Check if Self is the Manager at the current biz siteSelfHouseholdBizRoleEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)

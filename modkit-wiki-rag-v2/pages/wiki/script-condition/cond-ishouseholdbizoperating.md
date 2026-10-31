---
document_id: "0574b519382997897d64ee4df1aa2c224a8d3fea7fe1de7a07ee070d6c0a5c6d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdbizoperating"
title: "Condition_IsHouseholdBizOperating"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:32+00:00"
content_sha256: "6c508617668abfda928bb190f9cd1c013ff89bdd8979645ec99a890c62f1003d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdbizoperating"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the HouseholdBiz at the BaseObject's current Site is operating. Returns false if no HouseholdBiz is found at the BaseObject's current Site.

# Parameters

| ParameterDescriptionBaseObjectA Character or Object located at a Site linked to a HouseholdBiz whose operating status is checked.CompareTypeEqual: true if the HouseholdBiz at the site is operating. NotEqual: true if it is not operating. |
| --- |
| BaseObjectA Character or Object located at a Site linked to a HouseholdBiz whose operating status is checked.CompareTypeEqual: true if the HouseholdBiz at the site is operating. NotEqual: true if it is not operating. |
| CompareTypeEqual: true if the HouseholdBiz at the site is operating. NotEqual: true if it is not operating. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the biz at Self's current site is operatingSelfIsHouseholdBizOperatingEqualCheck if the biz at Target's site is not currently operatingTargetIsHouseholdBizOperatingNotEqualCheck if Self is located at an active HouseholdBizSelfIsHouseholdBizOperatingEqual |
| --- |
| Check if the biz at Self's current site is operatingSelfIsHouseholdBizOperatingEqualCheck if the biz at Target's site is not currently operatingTargetIsHouseholdBizOperatingNotEqualCheck if Self is located at an active HouseholdBizSelfIsHouseholdBizOperatingEqual |
| Check if the biz at Target's site is not currently operatingTargetIsHouseholdBizOperatingNotEqualCheck if Self is located at an active HouseholdBizSelfIsHouseholdBizOperatingEqual |
| Check if Self is located at an active HouseholdBizSelfIsHouseholdBizOperatingEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

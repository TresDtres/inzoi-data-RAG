---
document_id: "cf6bc2d145596852cf1e22397d3f204f401d2b20952dcd5aeb583982d7ec80c4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz"
title: "Condition_HasHouseholdBiz"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:06+00:00"
content_sha256: "94371d44ff69dfba1ea0d81e1bd82442ca9142c04e87a494a0d5aabda06e1468"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hashouseholdbiz"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the household of the given BaseObject Character owns at least one HouseholdBiz. Equal is true if the household has a HouseholdBiz; NotEqual is true if it does not.

# Parameters

| ParameterDescriptionBaseObjectA Character belonging to a household whose HouseholdBiz ownership is checked.CompareTypeEqual: true if the household has at least one HouseholdBiz. NotEqual: true if none. |
| --- |
| BaseObjectA Character belonging to a household whose HouseholdBiz ownership is checked.CompareTypeEqual: true if the household has at least one HouseholdBiz. NotEqual: true if none. |
| CompareTypeEqual: true if the household has at least one HouseholdBiz. NotEqual: true if none. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's household owns at least one HouseholdBizSelfHasHouseholdBizEqualCheck if Target's household has no HouseholdBizTargetHasHouseholdBizNotEqualCheck if Self's household has any active businessesSelfHasHouseholdBizEqual |
| --- |
| Check if Self's household owns at least one HouseholdBizSelfHasHouseholdBizEqualCheck if Target's household has no HouseholdBizTargetHasHouseholdBizNotEqualCheck if Self's household has any active businessesSelfHasHouseholdBizEqual |
| Check if Target's household has no HouseholdBizTargetHasHouseholdBizNotEqualCheck if Self's household has any active businessesSelfHasHouseholdBizEqual |
| Check if Self's household has any active businessesSelfHasHouseholdBizEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)

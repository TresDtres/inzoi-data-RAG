---
document_id: "5679907ca8e57b7daf34c62063fd50dad68c14a1196540b44fc8d9dc7526d335"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove"
title: "Condition_HasRelationshipFamilyLove"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "a078764eca8878c3fe0b89be6e6146fb820989d7ffbf4fc4b3b8dbf2c098d81d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrelationshipfamilylove"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject is currently living together with at least one household member who belongs to the same family tree. Both must reside at a valid household residence site.

# Parameters

| ParameterDescriptionBaseObjectCharacter to check for co-habitating family members (Self or Target)CompareTypeEqual (has a co-habitating family member), NotEqual (does not have one) |
| --- |
| BaseObjectCharacter to check for co-habitating family members (Self or Target)CompareTypeEqual (has a co-habitating family member), NotEqual (does not have one) |
| CompareTypeEqual (has a co-habitating family member), NotEqual (does not have one) |

# Examples

| DescriptionBaseObjectCommandCompareTypeSelf lives with at least one family memberSelfHasRelationshipFamilyLoveEqualSelf does not live with any family memberSelfHasRelationshipFamilyLoveNotEqualTarget lives with at least one family memberTargetHasRelationshipFamilyLoveEqualTarget does not live with any family memberTargetHasRelationshipFamilyLoveNotEqual |
| --- |
| Self lives with at least one family memberSelfHasRelationshipFamilyLoveEqualSelf does not live with any family memberSelfHasRelationshipFamilyLoveNotEqualTarget lives with at least one family memberTargetHasRelationshipFamilyLoveEqualTarget does not live with any family memberTargetHasRelationshipFamilyLoveNotEqual |
| Self does not live with any family memberSelfHasRelationshipFamilyLoveNotEqualTarget lives with at least one family memberTargetHasRelationshipFamilyLoveEqualTarget does not live with any family memberTargetHasRelationshipFamilyLoveNotEqual |
| Target lives with at least one family memberTargetHasRelationshipFamilyLoveEqualTarget does not live with any family memberTargetHasRelationshipFamilyLoveNotEqual |
| Target does not live with any family memberTargetHasRelationshipFamilyLoveNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)

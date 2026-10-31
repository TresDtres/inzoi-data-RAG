---
document_id: "f64bdac5ae5e2ad48f60f103fa0f1cbd5ee42a05c49d54fabac6f91a47b1bf80"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdbizmanager"
title: "Condition_IsHouseholdBizManager"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:32+00:00"
content_sha256: "2de71f3d8371032989ac352e026860916bcfce408c41b81d5be4d41c80425f11"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdbizmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject is the Manager of their main HouseholdBiz. This condition is profile-based (not site-based): it resolves the Character’s HouseholdBizProfile, loads the Biz using MainHouseholdBizId, and compares BizManagerEntityId against the Character’s EntityId. If S1 is "CheckHouseholdMember", it checks all household members instead of only the BaseObject. Returns false if the BaseObject is not a valid Character or the profile does not reference a valid Biz.

# Parameters

| ParameterDescriptionBaseObjectA Character whose HouseholdBizProfile is checked (or a household member if S1 is "CheckHouseholdMember").CompareTypeEqual: true if the BaseObject (or a household member) is the Biz manager. NotEqual: true if not.S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |
| --- |
| BaseObjectA Character whose HouseholdBizProfile is checked (or a household member if S1 is "CheckHouseholdMember").CompareTypeEqual: true if the BaseObject (or a household member) is the Biz manager. NotEqual: true if not.S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |
| CompareTypeEqual: true if the BaseObject (or a household member) is the Biz manager. NotEqual: true if not.S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |
| S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is the manager of their main HouseholdBizSelfIsHouseholdBizManagerEqualCheck if Target is not the manager of their main HouseholdBizTargetIsHouseholdBizManagerNotEqualCheck if any household member of Self is a biz managerSelfIsHouseholdBizManagerEqual |
| --- |
| Check if Self is the manager of their main HouseholdBizSelfIsHouseholdBizManagerEqualCheck if Target is not the manager of their main HouseholdBizTargetIsHouseholdBizManagerNotEqualCheck if any household member of Self is a biz managerSelfIsHouseholdBizManagerEqual |
| Check if Target is not the manager of their main HouseholdBizTargetIsHouseholdBizManagerNotEqualCheck if any household member of Self is a biz managerSelfIsHouseholdBizManagerEqual |
| Check if any household member of Self is a biz managerSelfIsHouseholdBizManagerEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

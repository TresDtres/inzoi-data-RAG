---
document_id: "6c353ecd969a7899d7430d8dcb9a099f0393ea47d37c7b8f27168a18424fe479"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdbizemployee"
title: "Condition_IsHouseholdBizEmployee"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:32+00:00"
content_sha256: "caef098c27860a959a096cf737003094d9edfb60bb3c6cde95c62dc57bccc916"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdbizemployee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject is an Employee of their main HouseholdBiz. This condition is profile-based (not site-based): it resolves the Character’s HouseholdBizProfile, loads the Biz using MainHouseholdBizId, and checks employee membership via B2HouseholdBizHelper::IsEmployeeOf. If S1 is "CheckHouseholdMember", it checks all household members instead of only the BaseObject. Returns false if the BaseObject is not a valid Character or the profile does not reference a valid Biz.

# Note

This condition uses bExcludeManager = true, so the manager is not treated as an employee.

# Parameters

| ParameterDescriptionBaseObjectA Character whose HouseholdBizProfile is checked (or a household member if S1 is "CheckHouseholdMember").CompareTypeEqual: true if the BaseObject (or a household member) is an employee. NotEqual: true if not.S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |
| --- |
| BaseObjectA Character whose HouseholdBizProfile is checked (or a household member if S1 is "CheckHouseholdMember").CompareTypeEqual: true if the BaseObject (or a household member) is an employee. NotEqual: true if not.S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |
| CompareTypeEqual: true if the BaseObject (or a household member) is an employee. NotEqual: true if not.S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |
| S1Optional. Set to "CheckHouseholdMember" to check all household members instead of only BaseObject; omit otherwise. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is an employee of their main HouseholdBizSelfIsHouseholdBizEmployeeEqualCheck if Target is not an employee of their main HouseholdBizTargetIsHouseholdBizEmployeeNotEqualCheck if any household member of Self is a biz employeeSelfIsHouseholdBizEmployeeEqual |
| --- |
| Check if Self is an employee of their main HouseholdBizSelfIsHouseholdBizEmployeeEqualCheck if Target is not an employee of their main HouseholdBizTargetIsHouseholdBizEmployeeNotEqualCheck if any household member of Self is a biz employeeSelfIsHouseholdBizEmployeeEqual |
| Check if Target is not an employee of their main HouseholdBizTargetIsHouseholdBizEmployeeNotEqualCheck if any household member of Self is a biz employeeSelfIsHouseholdBizEmployeeEqual |
| Check if any household member of Self is a biz employeeSelfIsHouseholdBizEmployeeEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

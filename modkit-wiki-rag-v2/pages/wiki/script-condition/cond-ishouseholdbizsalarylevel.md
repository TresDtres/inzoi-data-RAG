---
document_id: "073cd062e66b24def0fb378bedef263cb8811846dd5a5281b6958f20b59a7feb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdbizsalarylevel"
title: "Condition_IsHouseholdBizSalaryLevel"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:32+00:00"
content_sha256: "ee694d1cb2a48d95c6bf23ad155f70c648e1dcc4b3376e79ec53be35105c9a88"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdbizsalarylevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the Character’s HouseholdBiz Salary Level matches the value provided in S1. The BaseObject must be an employee of a HouseholdBiz at their current site; if not employed, the condition returns false. If S1 is missing or invalid, the function returns false.

# Parameters

| ParameterDescriptionBaseObjectThe Character (employee) whose salary level at the current site’s HouseholdBiz is checked.CompareTypeEqual: true if the Character’s salary level matches S1. NotEqual: true if the salary level does not match.S1The expected HouseholdBiz Salary Level to compare against: VeryLow, Low, Normal, High, or VeryHigh. |
| --- |
| BaseObjectThe Character (employee) whose salary level at the current site’s HouseholdBiz is checked.CompareTypeEqual: true if the Character’s salary level matches S1. NotEqual: true if the salary level does not match.S1The expected HouseholdBiz Salary Level to compare against: VeryLow, Low, Normal, High, or VeryHigh. |
| CompareTypeEqual: true if the Character’s salary level matches S1. NotEqual: true if the salary level does not match.S1The expected HouseholdBiz Salary Level to compare against: VeryLow, Low, Normal, High, or VeryHigh. |
| S1The expected HouseholdBiz Salary Level to compare against: VeryLow, Low, Normal, High, or VeryHigh. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has a Normal salary level at the current bizSelfIsHouseholdBizSalaryLevelEqualCheck if Target does not have a VeryLow salary levelTargetIsHouseholdBizSalaryLevelNotEqualCheck if Self has a High salary level at the current bizSelfIsHouseholdBizSalaryLevelEqual |
| --- |
| Check if Self has a Normal salary level at the current bizSelfIsHouseholdBizSalaryLevelEqualCheck if Target does not have a VeryLow salary levelTargetIsHouseholdBizSalaryLevelNotEqualCheck if Self has a High salary level at the current bizSelfIsHouseholdBizSalaryLevelEqual |
| Check if Target does not have a VeryLow salary levelTargetIsHouseholdBizSalaryLevelNotEqualCheck if Self has a High salary level at the current bizSelfIsHouseholdBizSalaryLevelEqual |
| Check if Self has a High salary level at the current bizSelfIsHouseholdBizSalaryLevelEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

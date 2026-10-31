---
document_id: "b5207f4bcfa4641375707b51007cbef79317fd10debbf8537a06c930868ae1d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishighestleveloperatedhouseholdbiz"
title: "Condition_IsHighestLevelOperatedHouseholdBiz"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:31+00:00"
content_sha256: "d1cdd1afdb563bc8d7a687c3504be0cca42819d8b4ea9169ccd8ecd177733c8e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishighestleveloperatedhouseholdbiz"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the highest HouseholdBiz level among all businesses owned by the BaseObject's household satisfies a comparison against the value provided in F1. The highest level is found by iterating all HouseholdBiz entities owned by the household. F1 is rounded to the nearest integer before comparison. Returns false if the household has no businesses or if the highest level cannot be determined.

# Parameters

| ParameterDescriptionBaseObjectA Character belonging to a household whose owned HouseholdBiz entities are inspected.CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, or LessOrEqual comparison against F1.F1The expected highest HouseholdBiz level as a numeric value (float). Rounded to the nearest integer before comparison. |
| --- |
| BaseObjectA Character belonging to a household whose owned HouseholdBiz entities are inspected.CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, or LessOrEqual comparison against F1.F1The expected highest HouseholdBiz level as a numeric value (float). Rounded to the nearest integer before comparison. |
| CompareTypeEqual, NotEqual, Greater, Less, GreaterOrEqual, or LessOrEqual comparison against F1.F1The expected highest HouseholdBiz level as a numeric value (float). Rounded to the nearest integer before comparison. |
| F1The expected highest HouseholdBiz level as a numeric value (float). Rounded to the nearest integer before comparison. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's household highest biz level equals 3SelfIsHighestLevelOperatedHouseholdBizEqualCheck if Self's household highest biz level is greater than 2SelfIsHighestLevelOperatedHouseholdBizGreaterCheck if Target's household highest biz level is at most 5TargetIsHighestLevelOperatedHouseholdBizLessOrEqualCheck if Self's household highest biz level is not 1SelfIsHighestLevelOperatedHouseholdBizNotEqual |
| --- |
| Check if Self's household highest biz level equals 3SelfIsHighestLevelOperatedHouseholdBizEqualCheck if Self's household highest biz level is greater than 2SelfIsHighestLevelOperatedHouseholdBizGreaterCheck if Target's household highest biz level is at most 5TargetIsHighestLevelOperatedHouseholdBizLessOrEqualCheck if Self's household highest biz level is not 1SelfIsHighestLevelOperatedHouseholdBizNotEqual |
| Check if Self's household highest biz level is greater than 2SelfIsHighestLevelOperatedHouseholdBizGreaterCheck if Target's household highest biz level is at most 5TargetIsHighestLevelOperatedHouseholdBizLessOrEqualCheck if Self's household highest biz level is not 1SelfIsHighestLevelOperatedHouseholdBizNotEqual |
| Check if Target's household highest biz level is at most 5TargetIsHighestLevelOperatedHouseholdBizLessOrEqualCheck if Self's household highest biz level is not 1SelfIsHighestLevelOperatedHouseholdBizNotEqual |
| Check if Self's household highest biz level is not 1SelfIsHighestLevelOperatedHouseholdBizNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

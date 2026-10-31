---
document_id: "4f9e4fc0c555c1f58edfe80604f8df3ce892d48bea80407fc02430b9e3eeb5cb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework"
title: "Condition_HasHomework"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:06+00:00"
content_sha256: "fe39b7060c25bbb8fcb2cd053614763bc98d49f66298cb5daa0bef17703f6177"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hashomework"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has a homework object in either hand or inventory. Homework objects are identified by the Book_Homework tag. The requested state is evaluated from HomeworkProgress.

# Parameters

| ParameterDescriptionBaseObjectThe character whose hand and inventory are inspected.CompareTypeEqual checks that matching homework exists; NotEqual negates.S1Homework state. Valid values are Doing and Completed. |
| --- |
| BaseObjectThe character whose hand and inventory are inspected.CompareTypeEqual checks that matching homework exists; NotEqual negates.S1Homework state. Valid values are Doing and Completed. |
| CompareTypeEqual checks that matching homework exists; NotEqual negates.S1Homework state. Valid values are Doing and Completed. |
| S1Homework state. Valid values are Doing and Completed. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has in-progress homeworkSelfHasHomeworkEqualDoingCheck if Target has completed homeworkTargetHasHomeworkEqualCompleted |
| --- |
| Check if Self has in-progress homeworkSelfHasHomeworkEqualDoingCheck if Target has completed homeworkTargetHasHomeworkEqualCompleted |
| Check if Target has completed homeworkTargetHasHomeworkEqualCompleted |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)

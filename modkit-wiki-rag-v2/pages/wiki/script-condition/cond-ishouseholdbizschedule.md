---
document_id: "adcae7584a02257166d64dd55f7316b7f68b4ac36c883644b30eaa00b88352a7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdbizschedule"
title: "Condition_IsHouseholdBizSchedule"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:32+00:00"
content_sha256: "15b4f98221f5cdfdc9e87b35057bfeb5533006ef78299c4ed078d3b0dd2a8b37"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdbizschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject Character's current schedule is a HouseholdBiz schedule. Checks the TimelineComponent to see if the current schedule has CareerType == HouseholdBiz. If the current schedule is empty, NotEqual returns true.

# Parameters

| ParameterDescriptionBaseObjectA Character whose current TimelineComponent schedule is checked.CompareTypeEqual: true if the current schedule is a HouseholdBiz schedule. NotEqual: true if it is not or if there is no current schedule. |
| --- |
| BaseObjectA Character whose current TimelineComponent schedule is checked.CompareTypeEqual: true if the current schedule is a HouseholdBiz schedule. NotEqual: true if it is not or if there is no current schedule. |
| CompareTypeEqual: true if the current schedule is a HouseholdBiz schedule. NotEqual: true if it is not or if there is no current schedule. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's current schedule is a HouseholdBiz scheduleSelfIsHouseholdBizScheduleEqualCheck if Target's current schedule is not a HouseholdBiz scheduleTargetIsHouseholdBizScheduleNotEqualCheck if Self has an active HouseholdBiz scheduleSelfIsHouseholdBizScheduleEqual |
| --- |
| Check if Self's current schedule is a HouseholdBiz scheduleSelfIsHouseholdBizScheduleEqualCheck if Target's current schedule is not a HouseholdBiz scheduleTargetIsHouseholdBizScheduleNotEqualCheck if Self has an active HouseholdBiz scheduleSelfIsHouseholdBizScheduleEqual |
| Check if Target's current schedule is not a HouseholdBiz scheduleTargetIsHouseholdBizScheduleNotEqualCheck if Self has an active HouseholdBiz scheduleSelfIsHouseholdBizScheduleEqual |
| Check if Self has an active HouseholdBiz scheduleSelfIsHouseholdBizScheduleEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

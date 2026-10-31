---
document_id: "97abe2219fb49a438b9cab4752944e1d5459bdb69ad1b2d138bc92bfd576e2d5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispregnancystate"
title: "Condition_IsPregnancyState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:40+00:00"
content_sha256: "d9f3311336123015cff4d106261a8e2b20c5d14067e8b357be523bfb953c34d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ispregnancystate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the current pregnancy state of the character using DA_Life PregnancyStates. Includes the state before awareness from a pregnancy test (PregnancyTest). If S1 is empty, only Equal/NotEqual are valid (checks whether pregnant at all).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose pregnancy state is checked (Self or Target)CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeS1Pregnancy state ID from DA_Life PregnancyStates; if empty, checks whether pregnant at allS2End state for range comparisons (InRange, OutRange only) |
| --- |
| BaseObjectCharacter whose pregnancy state is checked (Self or Target)CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeS1Pregnancy state ID from DA_Life PregnancyStates; if empty, checks whether pregnant at allS2End state for range comparisons (InRange, OutRange only) |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeS1Pregnancy state ID from DA_Life PregnancyStates; if empty, checks whether pregnant at allS2End state for range comparisons (InRange, OutRange only) |
| S1Pregnancy state ID from DA_Life PregnancyStates; if empty, checks whether pregnant at allS2End state for range comparisons (InRange, OutRange only) |
| S2End state for range comparisons (InRange, OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is not pregnantSelfIsPregnancyStateNotEqualCheck if Self is in early pregnancySelfIsPregnancyStateEqualCheck if Self is in mid pregnancy or laterSelfIsPregnancyStateGreaterOrEqualCheck if Self is between early and mid pregnancy stagesSelfIsPregnancyStateInRange |
| --- |
| Check if Self is not pregnantSelfIsPregnancyStateNotEqualCheck if Self is in early pregnancySelfIsPregnancyStateEqualCheck if Self is in mid pregnancy or laterSelfIsPregnancyStateGreaterOrEqualCheck if Self is between early and mid pregnancy stagesSelfIsPregnancyStateInRange |
| Check if Self is in early pregnancySelfIsPregnancyStateEqualCheck if Self is in mid pregnancy or laterSelfIsPregnancyStateGreaterOrEqualCheck if Self is between early and mid pregnancy stagesSelfIsPregnancyStateInRange |
| Check if Self is in mid pregnancy or laterSelfIsPregnancyStateGreaterOrEqualCheck if Self is between early and mid pregnancy stagesSelfIsPregnancyStateInRange |
| Check if Self is between early and mid pregnancy stagesSelfIsPregnancyStateInRange |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

---
document_id: "592b46833a86489f43c865c92c122aaa7e067520e217f2893ec123a9296d8560"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islocatesiteinbaby"
title: "Condition_IsLocateSiteInBaby"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:36+00:00"
content_sha256: "ceb8d8ee72603f2c0914652e3d0c9b5dc8f88798c2761164539dd706e112bc58"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-islocatesiteinbaby"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject's located site has any baby.

By default, this condition returns true if either:

- The located site has a visiting baby (visitor), OR
- The owner household of the located site has a baby member.

If S1 is specified, the check can be narrowed down:

- S1 = Household : checks only owner household baby members
- S1 = Visitor : checks only visiting babies in the site

# Parameters

| ParameterDescriptionBaseObjectThe actor to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Filter: Household or Visitor. |
| --- |
| BaseObjectThe actor to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Filter: Household or Visitor. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Filter: Household or Visitor. |
| S1(Optional) Filter: Household or Visitor. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether target's located site has any baby.TargetIsLocateSiteInBabyEqualChecks whether target's located site has a baby in owner household.TargetIsLocateSiteInBabyEqualHouseholdChecks whether target's located site has a visiting baby.TargetIsLocateSiteInBabyEqualVisitor |
| --- |
| Checks whether target's located site has any baby.TargetIsLocateSiteInBabyEqualChecks whether target's located site has a baby in owner household.TargetIsLocateSiteInBabyEqualHouseholdChecks whether target's located site has a visiting baby.TargetIsLocateSiteInBabyEqualVisitor |
| Checks whether target's located site has a baby in owner household.TargetIsLocateSiteInBabyEqualHouseholdChecks whether target's located site has a visiting baby.TargetIsLocateSiteInBabyEqualVisitor |
| Checks whether target's located site has a visiting baby.TargetIsLocateSiteInBabyEqualVisitor |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

---
document_id: "a6ab0093d9ef20c396d90363bbfa7b51b614ce78fc0ef9b25bbda1fe8c8233cf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfamilyrelativeownedvehicle"
title: "Condition_IsFamilyRelativeOwnedVehicle"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:28+00:00"
content_sha256: "11a9a0bb12484e2039448efdc5d2b455d162304c01aae6d9034d12c6ed72cab1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfamilyrelativeownedvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target vehicle is owned by any family relative of the current possessed Zoi. Family relatives are determined using FamilyRelationship query (within 4th-degree blood relatives + spouse). Self is included in the check (returns true if Self owns the target vehicle as well).

# Parameters

| ParameterDescriptionBaseObjectThe vehicle used as the reference.CompareTypeThe comparison operation to apply (Equal or NotEqual). |
| --- |
| BaseObjectThe vehicle used as the reference.CompareTypeThe comparison operation to apply (Equal or NotEqual). |
| CompareTypeThe comparison operation to apply (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether the target vehicle is owned by a family relative of the possessed ZoiSelfIsFamilyRelativeOwnedVehicleEqualChecks whether the target vehicle is not owned by any family relativeSelfIsFamilyRelativeOwnedVehicleNotEqual |
| --- |
| Checks whether the target vehicle is owned by a family relative of the possessed ZoiSelfIsFamilyRelativeOwnedVehicleEqualChecks whether the target vehicle is not owned by any family relativeSelfIsFamilyRelativeOwnedVehicleNotEqual |
| Checks whether the target vehicle is not owned by any family relativeSelfIsFamilyRelativeOwnedVehicleNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

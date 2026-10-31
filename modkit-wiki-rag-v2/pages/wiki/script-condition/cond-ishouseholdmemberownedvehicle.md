---
document_id: "2b26ee751f67c21b571e73acbe4a72cc8ec60ebfaa23f6004d9f497cebed9bee"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishouseholdmemberownedvehicle"
title: "Condition_IsHouseholdMemberOwnedVehicle"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:33+00:00"
content_sha256: "c2f85b25a15efade37b32d4108588d784b07aca0b1a77da0910e10d18a4e8691"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishouseholdmemberownedvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target vehicle is owned by any household member (housemate) of the current possessed Zoi. Self is included in the check (returns true if Self owns the target vehicle as well).

# Parameters

| ParameterDescriptionBaseObjectThe vehicle used as the reference.CompareTypeThe comparison operation to apply (Equal or NotEqual). |
| --- |
| BaseObjectThe vehicle used as the reference.CompareTypeThe comparison operation to apply (Equal or NotEqual). |
| CompareTypeThe comparison operation to apply (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether the target vehicle is owned by a household member of possessed ZoiSelfIsHouseholdMemberOwnedVehicleEqualChecks whether the target vehicle is not owned by any household memberSelfIsHouseholdMemberOwnedVehicleNotEqual |
| --- |
| Checks whether the target vehicle is owned by a household member of possessed ZoiSelfIsHouseholdMemberOwnedVehicleEqualChecks whether the target vehicle is not owned by any household memberSelfIsHouseholdMemberOwnedVehicleNotEqual |
| Checks whether the target vehicle is not owned by any household memberSelfIsHouseholdMemberOwnedVehicleNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

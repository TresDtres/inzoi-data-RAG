---
document_id: "2656ab8e0526575f234424715f3f81b92152f2f6a88cfbdf0aaaf4304376539f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship"
title: "Condition_HasFamilyRelationship"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:04+00:00"
content_sha256: "5f87928b81eef49ff5bdf910590bca0738a35ac7e855ea438b6be7f30948c590"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasfamilyrelationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject has any family member of the specified relationship type in the family tree. Unlike IsFamilyRelationship, this does not require a Target; it only checks whether BaseObject has at least one relative of the given type.

# Parameters

| ParameterDescriptionBaseObjectCharacter to check for family membersCompareTypeSupported compare types: Equal, NotEqualS1Family relationship type to look for (EB1FamilyRelationshipType) |
| --- |
| BaseObjectCharacter to check for family membersCompareTypeSupported compare types: Equal, NotEqualS1Family relationship type to look for (EB1FamilyRelationshipType) |
| CompareTypeSupported compare types: Equal, NotEqualS1Family relationship type to look for (EB1FamilyRelationshipType) |
| S1Family relationship type to look for (EB1FamilyRelationshipType) |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self has a parentSelfHasFamilyRelationshipEqualIf Self does not have a childSelfHasFamilyRelationshipNotEqualIf Self has a siblingSelfHasFamilyRelationshipEqualIf Target has a spouseTargetHasFamilyRelationshipEqual |
| --- |
| If Self has a parentSelfHasFamilyRelationshipEqualIf Self does not have a childSelfHasFamilyRelationshipNotEqualIf Self has a siblingSelfHasFamilyRelationshipEqualIf Target has a spouseTargetHasFamilyRelationshipEqual |
| If Self does not have a childSelfHasFamilyRelationshipNotEqualIf Self has a siblingSelfHasFamilyRelationshipEqualIf Target has a spouseTargetHasFamilyRelationshipEqual |
| If Self has a siblingSelfHasFamilyRelationshipEqualIf Target has a spouseTargetHasFamilyRelationshipEqual |
| If Target has a spouseTargetHasFamilyRelationshipEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)

---
document_id: "c278ae32f2701c3dfc081d2739606ccce4485c865e62f63fafd3406f32295ff6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount"
title: "Condition_FamilyRelationshipCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:58+00:00"
content_sha256: "ac421efc8983a729456affcf53e90b672744c30dbdbc21f1c82e769a251d9af4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-familyrelationshipcount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the count of family members of a specific relationship type for the BaseObject. Counts how many relatives of the given type exist in the family tree and compares that count.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose family member count will be evaluatedCompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeS1Family relationship type to count (EB1FamilyRelationshipType)F1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| --- |
| BaseObjectCharacter whose family member count will be evaluatedCompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeS1Family relationship type to count (EB1FamilyRelationshipType)F1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| CompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeS1Family relationship type to count (EB1FamilyRelationshipType)F1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| S1Family relationship type to count (EB1FamilyRelationshipType)F1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| F1Value to compare against (or minimum value for Range)F2Maximum value for Range comparison |
| F2Maximum value for Range comparison |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self has exactly 2 childrenSelfFamilyRelationshipCountEqualIf Self has more than 1 siblingSelfFamilyRelationshipCountGreaterIf Self has no parentsSelfFamilyRelationshipCountEqualIf Target has at least 1 childTargetFamilyRelationshipCountGreaterEqual |
| --- |
| If Self has exactly 2 childrenSelfFamilyRelationshipCountEqualIf Self has more than 1 siblingSelfFamilyRelationshipCountGreaterIf Self has no parentsSelfFamilyRelationshipCountEqualIf Target has at least 1 childTargetFamilyRelationshipCountGreaterEqual |
| If Self has more than 1 siblingSelfFamilyRelationshipCountGreaterIf Self has no parentsSelfFamilyRelationshipCountEqualIf Target has at least 1 childTargetFamilyRelationshipCountGreaterEqual |
| If Self has no parentsSelfFamilyRelationshipCountEqualIf Target has at least 1 childTargetFamilyRelationshipCountGreaterEqual |
| If Target has at least 1 childTargetFamilyRelationshipCountGreaterEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)

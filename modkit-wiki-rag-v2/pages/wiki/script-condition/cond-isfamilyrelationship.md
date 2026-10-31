---
document_id: "d4e052952c2d01947cdc1f5a63af324d16aebd29c6bc0f1a0f212bf31987de15"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfamilyrelationship"
title: "Condition_IsFamilyRelationship"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:27+00:00"
content_sha256: "62cdeaf85a1eba790fcc7c54d001ae3892ac8a29087f444143e25c8e6a0cdff7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfamilyrelationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the Self character has a specific family relationship with the Target character. When S1 is empty, checks if any family relationship exists using RelationshipData. When S1 is specified, checks if the exact family relationship type matches using the FamilyTree.

# Note

S1 empty uses the bIsFamilyRelationship flag in RelationshipComponent; S1 specified uses FamilyTreeManager to resolve the exact relationship type (Parent, Child, Sibling, etc.).

# Parameters

| ParameterDescriptionBaseObjectSelf is the subject character; Target is the character whose relationship is evaluatedCompareTypeSupported compare types: Equal, NotEqualS1Family relationship type (EB1FamilyRelationshipType); if empty, checks for any relation |
| --- |
| BaseObjectSelf is the subject character; Target is the character whose relationship is evaluatedCompareTypeSupported compare types: Equal, NotEqualS1Family relationship type (EB1FamilyRelationshipType); if empty, checks for any relation |
| CompareTypeSupported compare types: Equal, NotEqualS1Family relationship type (EB1FamilyRelationshipType); if empty, checks for any relation |
| S1Family relationship type (EB1FamilyRelationshipType); if empty, checks for any relation |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Target is any family memberSelfIsFamilyRelationshipEqualIf Target is not a family memberSelfIsFamilyRelationshipNotEqualIf Target is Self's parentSelfIsFamilyRelationshipEqualIf Target is Self's childSelfIsFamilyRelationshipEqual |
| --- |
| If Target is any family memberSelfIsFamilyRelationshipEqualIf Target is not a family memberSelfIsFamilyRelationshipNotEqualIf Target is Self's parentSelfIsFamilyRelationshipEqualIf Target is Self's childSelfIsFamilyRelationshipEqual |
| If Target is not a family memberSelfIsFamilyRelationshipNotEqualIf Target is Self's parentSelfIsFamilyRelationshipEqualIf Target is Self's childSelfIsFamilyRelationshipEqual |
| If Target is Self's parentSelfIsFamilyRelationshipEqualIf Target is Self's childSelfIsFamilyRelationshipEqual |
| If Target is Self's childSelfIsFamilyRelationshipEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

---
document_id: "60330e2d6f43512b879894169032831a111f1a221e710aa2efce4535c3f5d3bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-relationshipfamilylove"
title: "Condition_RelationshipFamilyLove"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:57+00:00"
content_sha256: "9d08951ee5ec3d9b008a1a9e382ff20f01c7a195a5edd6dc4fdd6eafbd9ed4b2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-relationshipfamilylove"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the family love type of BaseObject against the specified value(s). Family love type is computed from the average family love stat among same-family-tree members in the same household, and mapped to one of: Worst, Bad, Good, or Best.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose family love type is evaluated (Self or Target)CompareTypeComparison operator (Equal, NotEqual, InRange, OutRange)S1Family love type to compare against (Worst, Bad, Good, Best)S2Maximum family love type for InRange/OutRange comparisons (Worst, Bad, Good, Best) |
| --- |
| BaseObjectCharacter whose family love type is evaluated (Self or Target)CompareTypeComparison operator (Equal, NotEqual, InRange, OutRange)S1Family love type to compare against (Worst, Bad, Good, Best)S2Maximum family love type for InRange/OutRange comparisons (Worst, Bad, Good, Best) |
| CompareTypeComparison operator (Equal, NotEqual, InRange, OutRange)S1Family love type to compare against (Worst, Bad, Good, Best)S2Maximum family love type for InRange/OutRange comparisons (Worst, Bad, Good, Best) |
| S1Family love type to compare against (Worst, Bad, Good, Best)S2Maximum family love type for InRange/OutRange comparisons (Worst, Bad, Good, Best) |
| S2Maximum family love type for InRange/OutRange comparisons (Worst, Bad, Good, Best) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Self's family love is BestSelfRelationshipFamilyLoveEqualBestSelf's family love is not WorstSelfRelationshipFamilyLoveNotEqualWorstSelf's family love is between Bad and GoodSelfRelationshipFamilyLoveInRangeBadGoodTarget's family love is GoodTargetRelationshipFamilyLoveEqualGood |
| --- |
| Self's family love is BestSelfRelationshipFamilyLoveEqualBestSelf's family love is not WorstSelfRelationshipFamilyLoveNotEqualWorstSelf's family love is between Bad and GoodSelfRelationshipFamilyLoveInRangeBadGoodTarget's family love is GoodTargetRelationshipFamilyLoveEqualGood |
| Self's family love is not WorstSelfRelationshipFamilyLoveNotEqualWorstSelf's family love is between Bad and GoodSelfRelationshipFamilyLoveInRangeBadGoodTarget's family love is GoodTargetRelationshipFamilyLoveEqualGood |
| Self's family love is between Bad and GoodSelfRelationshipFamilyLoveInRangeBadGoodTarget's family love is GoodTargetRelationshipFamilyLoveEqualGood |
| Target's family love is GoodTargetRelationshipFamilyLoveEqualGood |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

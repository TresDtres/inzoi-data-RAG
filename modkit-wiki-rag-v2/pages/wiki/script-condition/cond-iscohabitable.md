---
document_id: "e928e729c4b8fe67e06c79d92fb8fc9e62bbfb61ddcd9c79e86f642f558c73c0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscohabitable"
title: "Condition_IsCohabitable"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:24+00:00"
content_sha256: "e1e0cfb466d775dd722ef534a7c30fb17e4e8f1e1b100fad0e44ecd1d57667ea"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscohabitable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if Self can cohabit with Target based on relationship stats and common prerequisites. Common conditions: Self must have a home, Self and Target must not already share a household, neither of them may live in another city (a zoi summoned from a remote city included), and both must be at least Youth age. If those pass, iterates through CohabitPriorityRelationshipStatIds and returns true only if the highest-priority qualifying stat matches S1.

# Note

Returns false regardless of CompareType when common prerequisites are not met. Requires HouseholdDataAsset for cohabitation priority and condition thresholds.

# Parameters

| ParameterDescriptionBaseObjectSelf is the initiating character; Target is the candidate for cohabitationCompareTypeSupported compare types: Equal, None, NotEqualS1Relationship stat name expected as the highest-priority cohabit qualifying reason |
| --- |
| BaseObjectSelf is the initiating character; Target is the candidate for cohabitationCompareTypeSupported compare types: Equal, None, NotEqualS1Relationship stat name expected as the highest-priority cohabit qualifying reason |
| CompareTypeSupported compare types: Equal, None, NotEqualS1Relationship stat name expected as the highest-priority cohabit qualifying reason |
| S1Relationship stat name expected as the highest-priority cohabit qualifying reason |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Target is cohabitable due to romanceSelfIsCohabitableEqualIf Target is cohabitable due to friendshipSelfIsCohabitableEqualIf Target is not cohabitableSelfIsCohabitableNotEqualCheck cohabitability from Target's perspectiveTargetIsCohabitableEqual |
| --- |
| If Target is cohabitable due to romanceSelfIsCohabitableEqualIf Target is cohabitable due to friendshipSelfIsCohabitableEqualIf Target is not cohabitableSelfIsCohabitableNotEqualCheck cohabitability from Target's perspectiveTargetIsCohabitableEqual |
| If Target is cohabitable due to friendshipSelfIsCohabitableEqualIf Target is not cohabitableSelfIsCohabitableNotEqualCheck cohabitability from Target's perspectiveTargetIsCohabitableEqual |
| If Target is not cohabitableSelfIsCohabitableNotEqualCheck cohabitability from Target's perspectiveTargetIsCohabitableEqual |
| Check cohabitability from Target's perspectiveTargetIsCohabitableEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

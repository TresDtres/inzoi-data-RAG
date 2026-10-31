---
document_id: "e4df37da150e2fce1bd370ea8b2b6796e8659b49c5e7b31bbc51950851f56b1d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinsamefamilytree"
title: "Condition_IsInSameFamilyTree"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:34+00:00"
content_sha256: "46f0440fdaa0ba1cd9263add596b255a71b4320060b6d444c61b9d63d6af7615"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinsamefamilytree"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self and Target belong to the same family tree (blood relation). Spouses are included in the same family tree, but a spouse's own family is not.

# Parameters

| ParameterDescriptionBaseObjectSelf and Target are both evaluated; BaseObject is not appliedCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectSelf and Target are both evaluated; BaseObject is not appliedCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self and Target share the same familySelfIsInSameFamilyTreeEqualIf Self and Target do not share a familySelfIsInSameFamilyTreeNotEqualCheck from Target's perspective (same)TargetIsInSameFamilyTreeEqualCheck from Target's perspective (not)TargetIsInSameFamilyTreeNotEqual |
| --- |
| If Self and Target share the same familySelfIsInSameFamilyTreeEqualIf Self and Target do not share a familySelfIsInSameFamilyTreeNotEqualCheck from Target's perspective (same)TargetIsInSameFamilyTreeEqualCheck from Target's perspective (not)TargetIsInSameFamilyTreeNotEqual |
| If Self and Target do not share a familySelfIsInSameFamilyTreeNotEqualCheck from Target's perspective (same)TargetIsInSameFamilyTreeEqualCheck from Target's perspective (not)TargetIsInSameFamilyTreeNotEqual |
| Check from Target's perspective (same)TargetIsInSameFamilyTreeEqualCheck from Target's perspective (not)TargetIsInSameFamilyTreeNotEqual |
| Check from Target's perspective (not)TargetIsInSameFamilyTreeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)

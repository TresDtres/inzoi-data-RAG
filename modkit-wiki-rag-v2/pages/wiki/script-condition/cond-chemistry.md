---
document_id: "4d4717d8350e580a225d8005d77ab102b0320bb9b77883967ddfd3e07888fc34"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry"
title: "Condition_Chemistry"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:53+00:00"
content_sha256: "27029f8f23830a9598fdf020283570025106f6d363badbf6eed137dad7e5170e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-chemistry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the chemistry level of the specified relationship stat between Self and Target against a target chemistry value. Chemistry is determined by trait compatibility and is defined in TraitChemistryReward data.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose perspective the chemistry is evaluated from (Self or Target)CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual)S1Relationship stat name to evaluate chemistry for (must be defined in RelationshipStat)S2Chemistry value to compare against (must be defined in TraitChemistryReward) |
| --- |
| BaseObjectCharacter whose perspective the chemistry is evaluated from (Self or Target)CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual)S1Relationship stat name to evaluate chemistry for (must be defined in RelationshipStat)S2Chemistry value to compare against (must be defined in TraitChemistryReward) |
| CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual)S1Relationship stat name to evaluate chemistry for (must be defined in RelationshipStat)S2Chemistry value to compare against (must be defined in TraitChemistryReward) |
| S1Relationship stat name to evaluate chemistry for (must be defined in RelationshipStat)S2Chemistry value to compare against (must be defined in TraitChemistryReward) |
| S2Chemistry value to compare against (must be defined in TraitChemistryReward) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Friendship chemistry between Self and Target is VeryGoodSelfChemistryEqualFriendshipVeryGoodRomance chemistry between Self and Target is not BadSelfChemistryNotEqualRomanceBadBusiness chemistry from Target's perspective is Good or betterTargetChemistryGreaterOrEqualBusinessGoodFriendship chemistry between the two is not VeryGoodTargetChemistryNotEqualFriendshipVeryGood |
| --- |
| Friendship chemistry between Self and Target is VeryGoodSelfChemistryEqualFriendshipVeryGoodRomance chemistry between Self and Target is not BadSelfChemistryNotEqualRomanceBadBusiness chemistry from Target's perspective is Good or betterTargetChemistryGreaterOrEqualBusinessGoodFriendship chemistry between the two is not VeryGoodTargetChemistryNotEqualFriendshipVeryGood |
| Romance chemistry between Self and Target is not BadSelfChemistryNotEqualRomanceBadBusiness chemistry from Target's perspective is Good or betterTargetChemistryGreaterOrEqualBusinessGoodFriendship chemistry between the two is not VeryGoodTargetChemistryNotEqualFriendshipVeryGood |
| Business chemistry from Target's perspective is Good or betterTargetChemistryGreaterOrEqualBusinessGoodFriendship chemistry between the two is not VeryGoodTargetChemistryNotEqualFriendshipVeryGood |
| Friendship chemistry between the two is not VeryGoodTargetChemistryNotEqualFriendshipVeryGood |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)

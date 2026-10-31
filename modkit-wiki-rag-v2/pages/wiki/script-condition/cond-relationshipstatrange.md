---
document_id: "a8784aa781ae68287304c02743204d46a7a8792a506131c63a1e90768e90b156"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-relationshipstatrange"
title: "Condition_RelationshipStatRange"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:58+00:00"
content_sha256: "e8b8bd48c643d0fab578312f560068050292f0dac00f4603532193799876659d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-relationshipstatrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the relationship stat value between BaseObject and the counterpart falls within the specified [F1, F2] range. Supports the "Any" keyword in S1 to check whether any available stat is within range (OR operation). If a specific stat ID is provided in S1, only that stat is evaluated.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose relationship stat is checked (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship stat ID to check, or "Any" to check all available statsF1Minimum value of the range (inclusive)F2Maximum value of the range (inclusive) |
| --- |
| BaseObjectCharacter whose relationship stat is checked (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship stat ID to check, or "Any" to check all available statsF1Minimum value of the range (inclusive)F2Maximum value of the range (inclusive) |
| CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship stat ID to check, or "Any" to check all available statsF1Minimum value of the range (inclusive)F2Maximum value of the range (inclusive) |
| S1Relationship stat ID to check, or "Any" to check all available statsF1Minimum value of the range (inclusive)F2Maximum value of the range (inclusive) |
| F1Minimum value of the range (inclusive)F2Maximum value of the range (inclusive) |
| F2Maximum value of the range (inclusive) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Friendship with target is between 50 and 100SelfRelationshipStatRangeEqualFriendship50100Any relationship stat with target is NOT between 0 and 30SelfRelationshipStatRangeNotEqualAny030Romance stat with target is in negative range (-50 to -10)SelfRelationshipStatRangeEqualRomance-50-10Target's friendship toward Self is between 20 and 80TargetRelationshipStatRangeEqualFriendship2080 |
| --- |
| Friendship with target is between 50 and 100SelfRelationshipStatRangeEqualFriendship50100Any relationship stat with target is NOT between 0 and 30SelfRelationshipStatRangeNotEqualAny030Romance stat with target is in negative range (-50 to -10)SelfRelationshipStatRangeEqualRomance-50-10Target's friendship toward Self is between 20 and 80TargetRelationshipStatRangeEqualFriendship2080 |
| Any relationship stat with target is NOT between 0 and 30SelfRelationshipStatRangeNotEqualAny030Romance stat with target is in negative range (-50 to -10)SelfRelationshipStatRangeEqualRomance-50-10Target's friendship toward Self is between 20 and 80TargetRelationshipStatRangeEqualFriendship2080 |
| Romance stat with target is in negative range (-50 to -10)SelfRelationshipStatRangeEqualRomance-50-10Target's friendship toward Self is between 20 and 80TargetRelationshipStatRangeEqualFriendship2080 |
| Target's friendship toward Self is between 20 and 80TargetRelationshipStatRangeEqualFriendship2080 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)

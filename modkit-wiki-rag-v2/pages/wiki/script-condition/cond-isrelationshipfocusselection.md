---
document_id: "04689ed53a005facb3407af1e671188224f407cfa993a1c8ca2c1281c884983a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection"
title: "Condition_IsRelationshipFocusSelection"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:43+00:00"
content_sha256: "deb0be08a59406d5e5ad569fc208bc87cd107ddd591787f61d633f1ef683cce2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isrelationshipfocusselection"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified relationship stat between BaseObject and the counterpart is in a focus-selected state. Focus selection indicates that the player has actively chosen this stat as a relationship priority.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose relationship stat focus is checked (Self or Target)CompareTypeEqual (stat is focus-selected), NotEqual (stat is not focus-selected)S1Relationship stat ID to check (e.g., Romance, Friendship, Business) |
| --- |
| BaseObjectCharacter whose relationship stat focus is checked (Self or Target)CompareTypeEqual (stat is focus-selected), NotEqual (stat is not focus-selected)S1Relationship stat ID to check (e.g., Romance, Friendship, Business) |
| CompareTypeEqual (stat is focus-selected), NotEqual (stat is not focus-selected)S1Relationship stat ID to check (e.g., Romance, Friendship, Business) |
| S1Relationship stat ID to check (e.g., Romance, Friendship, Business) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Self's Romance stat with Target is focus-selectedSelfIsRelationshipFocusSelectionEqualRomanceSelf's Friendship stat with Target is not focus-selectedSelfIsRelationshipFocusSelectionNotEqualFriendshipTarget's Business stat with Self is focus-selectedTargetIsRelationshipFocusSelectionEqualBusinessTarget's Romance stat with Self is not focus-selectedTargetIsRelationshipFocusSelectionNotEqualRomance |
| --- |
| Self's Romance stat with Target is focus-selectedSelfIsRelationshipFocusSelectionEqualRomanceSelf's Friendship stat with Target is not focus-selectedSelfIsRelationshipFocusSelectionNotEqualFriendshipTarget's Business stat with Self is focus-selectedTargetIsRelationshipFocusSelectionEqualBusinessTarget's Romance stat with Self is not focus-selectedTargetIsRelationshipFocusSelectionNotEqualRomance |
| Self's Friendship stat with Target is not focus-selectedSelfIsRelationshipFocusSelectionNotEqualFriendshipTarget's Business stat with Self is focus-selectedTargetIsRelationshipFocusSelectionEqualBusinessTarget's Romance stat with Self is not focus-selectedTargetIsRelationshipFocusSelectionNotEqualRomance |
| Target's Business stat with Self is focus-selectedTargetIsRelationshipFocusSelectionEqualBusinessTarget's Romance stat with Self is not focus-selectedTargetIsRelationshipFocusSelectionNotEqualRomance |
| Target's Romance stat with Self is not focus-selectedTargetIsRelationshipFocusSelectionNotEqualRomance |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)

---
document_id: "9575e38f1e488c848d6af4a9043762b3734cfc941f2b0b7115ebf0eb2d3a26ad"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname"
title: "Condition_HasRelationshipName"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:13+00:00"
content_sha256: "97f4701b25b6813b52684b5aa5c4c47eba6a3a48b69fc648e044c3b4e4706c2a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrelationshipname"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject has a specific relationship name with anyone (not just the current target). Unlike Condition_Relationship which checks only Self-Target, this condition scans all relationships the character currently has.

# Note

RelationshipName checks only the relationship with the current target. HasRelationshipName checks all relationships the character has regardless of target.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose relationships are scanned (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship ID to check for (defined in Relationship.json) |
| --- |
| BaseObjectCharacter whose relationships are scanned (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship ID to check for (defined in Relationship.json) |
| CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship ID to check for (defined in Relationship.json) |
| S1Relationship ID to check for (defined in Relationship.json) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Self has an engagement relationship with anyoneSelfHasRelationshipNameEqualengagementSelf does not have an engagement relationship with anyoneSelfHasRelationshipNameNotEqualengagementTarget has a MarriagePartner relationship with anyoneTargetHasRelationshipNameEqualMarriagePartnerTarget does not have a BestFriend relationship with anyoneTargetHasRelationshipNameNotEqualBestFriend |
| --- |
| Self has an engagement relationship with anyoneSelfHasRelationshipNameEqualengagementSelf does not have an engagement relationship with anyoneSelfHasRelationshipNameNotEqualengagementTarget has a MarriagePartner relationship with anyoneTargetHasRelationshipNameEqualMarriagePartnerTarget does not have a BestFriend relationship with anyoneTargetHasRelationshipNameNotEqualBestFriend |
| Self does not have an engagement relationship with anyoneSelfHasRelationshipNameNotEqualengagementTarget has a MarriagePartner relationship with anyoneTargetHasRelationshipNameEqualMarriagePartnerTarget does not have a BestFriend relationship with anyoneTargetHasRelationshipNameNotEqualBestFriend |
| Target has a MarriagePartner relationship with anyoneTargetHasRelationshipNameEqualMarriagePartnerTarget does not have a BestFriend relationship with anyoneTargetHasRelationshipNameNotEqualBestFriend |
| Target does not have a BestFriend relationship with anyoneTargetHasRelationshipNameNotEqualBestFriend |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)

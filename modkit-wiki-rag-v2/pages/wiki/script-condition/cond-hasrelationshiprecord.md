---
document_id: "42e873b5c8582ea88713fbe099372f1d57865f23ed6d9e105a0dc7b6c76a75fc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord"
title: "Condition_HasRelationshipRecord"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:14+00:00"
content_sha256: "9cad96883e73b0a68789afe1f572d919ff417e9e355a7605f2a544b4e7512730"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrelationshiprecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject has a specific relationship record entry with the counterpart entity. Relationship records accumulate over time but older records may be removed when the list grows too large.

# Note

Relationship records are added through Execute_RelationshipTalkRecord and similar actions. The record is stored on the owner side (the entity who performed the action toward the target).

# Parameters

| ParameterDescriptionBaseObjectCharacter on whose record list the check is performed (Self/Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship record ID to look for |
| --- |
| BaseObjectCharacter on whose record list the check is performed (Self/Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship record ID to look for |
| CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship record ID to look for |
| S1Relationship record ID to look for |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Self received a proposal from TargetSelfHasRelationshipRecordEqualPropose_Success_TargetSelf did not receive a proposal from TargetSelfHasRelationshipRecordNotEqualPropose_Success_TargetSelf proposed to TargetSelfHasRelationshipRecordEqualPropose_Success_SelfTarget received a proposal from SelfTargetHasRelationshipRecordEqualPropose_Success_Target |
| --- |
| Self received a proposal from TargetSelfHasRelationshipRecordEqualPropose_Success_TargetSelf did not receive a proposal from TargetSelfHasRelationshipRecordNotEqualPropose_Success_TargetSelf proposed to TargetSelfHasRelationshipRecordEqualPropose_Success_SelfTarget received a proposal from SelfTargetHasRelationshipRecordEqualPropose_Success_Target |
| Self did not receive a proposal from TargetSelfHasRelationshipRecordNotEqualPropose_Success_TargetSelf proposed to TargetSelfHasRelationshipRecordEqualPropose_Success_SelfTarget received a proposal from SelfTargetHasRelationshipRecordEqualPropose_Success_Target |
| Self proposed to TargetSelfHasRelationshipRecordEqualPropose_Success_SelfTarget received a proposal from SelfTargetHasRelationshipRecordEqualPropose_Success_Target |
| Target received a proposal from SelfTargetHasRelationshipRecordEqualPropose_Success_Target |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)

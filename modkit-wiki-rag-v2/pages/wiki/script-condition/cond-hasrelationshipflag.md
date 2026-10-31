---
document_id: "178fd49514871edeac6a6a16b0641173eae875a3d12b32f6aceab8c72bd8a798"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag"
title: "Condition_HasRelationshipFlag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:13+00:00"
content_sha256: "08536ad7414e5f038d72fe1b0701867225d52a9560cc304d50a01bf9a25679a2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrelationshipflag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if BaseObject has the specified relationship flag against the counterpart. S2 controls the scope of the check:

- Single: BaseObject has the flag toward the counterpart only.
- Both: Both BaseObject and the counterpart have the flag toward each other.
- SingleToAny: BaseObject has the flag toward at least one person in the relationship window.

# Parameters

| ParameterDescriptionBaseObjectOwner of the relationship flag to check (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship flag ID to checkS2Scope of the check (Single, Both, SingleToAny) |
| --- |
| BaseObjectOwner of the relationship flag to check (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship flag ID to checkS2Scope of the check (Single, Both, SingleToAny) |
| CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship flag ID to checkS2Scope of the check (Single, Both, SingleToAny) |
| S1Relationship flag ID to checkS2Scope of the check (Single, Both, SingleToAny) |
| S2Scope of the check (Single, Both, SingleToAny) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Self has a crush on TargetSelfHasRelationshipFlagEqualCrushSingleSelf does not have a crush on TargetSelfHasRelationshipFlagNotEqualCrushSingleBoth Self and Target have exchanged presentsSelfHasRelationshipFlagEqualGavePresentBothSelf has a crush on at least someoneSelfHasRelationshipFlagEqualCrushSingleToAny |
| --- |
| Self has a crush on TargetSelfHasRelationshipFlagEqualCrushSingleSelf does not have a crush on TargetSelfHasRelationshipFlagNotEqualCrushSingleBoth Self and Target have exchanged presentsSelfHasRelationshipFlagEqualGavePresentBothSelf has a crush on at least someoneSelfHasRelationshipFlagEqualCrushSingleToAny |
| Self does not have a crush on TargetSelfHasRelationshipFlagNotEqualCrushSingleBoth Self and Target have exchanged presentsSelfHasRelationshipFlagEqualGavePresentBothSelf has a crush on at least someoneSelfHasRelationshipFlagEqualCrushSingleToAny |
| Both Self and Target have exchanged presentsSelfHasRelationshipFlagEqualGavePresentBothSelf has a crush on at least someoneSelfHasRelationshipFlagEqualCrushSingleToAny |
| Self has a crush on at least someoneSelfHasRelationshipFlagEqualCrushSingleToAny |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)

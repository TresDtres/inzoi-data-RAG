---
document_id: "f736aca9908ef5581f87564c4ed6e3a15d29b28002a414e6ee2f4302bc4b4b31"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup"
title: "Condition_HasRelationshipFlagGroup"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:13+00:00"
content_sha256: "68c6187b9cdc2904d3e70898fe62038472c02725b45c2e3018cd0bb99984fb0a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrelationshipflaggroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if BaseObject has relationship flags belonging to the specified flag group against the counterpart. S2 controls both scope and logic:

- SingleOr: BaseObject has at least one flag from the group toward the counterpart.
- SingleAnd: BaseObject has all flags from the group toward the counterpart.
- BothOr: Both BaseObject and the counterpart have at least one flag from the group toward each other.
- BothAnd: Both BaseObject and the counterpart have all flags from the group toward each other.

# Parameters

| ParameterDescriptionBaseObjectOwner of the relationship flags to check (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship flag group ID (defined in RelationshipFlagGroup data)S2Scope and logic of the check (SingleOr, SingleAnd, BothOr, BothAnd) |
| --- |
| BaseObjectOwner of the relationship flags to check (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship flag group ID (defined in RelationshipFlagGroup data)S2Scope and logic of the check (SingleOr, SingleAnd, BothOr, BothAnd) |
| CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship flag group ID (defined in RelationshipFlagGroup data)S2Scope and logic of the check (SingleOr, SingleAnd, BothOr, BothAnd) |
| S1Relationship flag group ID (defined in RelationshipFlagGroup data)S2Scope and logic of the check (SingleOr, SingleAnd, BothOr, BothAnd) |
| S2Scope and logic of the check (SingleOr, SingleAnd, BothOr, BothAnd) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Self has loved Target before (any flag in group)SelfHasRelationshipFlagGroupEqualHasLovedSingleOrTarget has never loved Self (no flags in group)TargetHasRelationshipFlagGroupNotEqualHasLovedSingleOrBoth Self and Target have loved each other (any flag)SelfHasRelationshipFlagGroupEqualHasLovedBothOrSelf has all flags in the HasLoved group toward TargetSelfHasRelationshipFlagGroupEqualHasLovedSingleAnd |
| --- |
| Self has loved Target before (any flag in group)SelfHasRelationshipFlagGroupEqualHasLovedSingleOrTarget has never loved Self (no flags in group)TargetHasRelationshipFlagGroupNotEqualHasLovedSingleOrBoth Self and Target have loved each other (any flag)SelfHasRelationshipFlagGroupEqualHasLovedBothOrSelf has all flags in the HasLoved group toward TargetSelfHasRelationshipFlagGroupEqualHasLovedSingleAnd |
| Target has never loved Self (no flags in group)TargetHasRelationshipFlagGroupNotEqualHasLovedSingleOrBoth Self and Target have loved each other (any flag)SelfHasRelationshipFlagGroupEqualHasLovedBothOrSelf has all flags in the HasLoved group toward TargetSelfHasRelationshipFlagGroupEqualHasLovedSingleAnd |
| Both Self and Target have loved each other (any flag)SelfHasRelationshipFlagGroupEqualHasLovedBothOrSelf has all flags in the HasLoved group toward TargetSelfHasRelationshipFlagGroupEqualHasLovedSingleAnd |
| Self has all flags in the HasLoved group toward TargetSelfHasRelationshipFlagGroupEqualHasLovedSingleAnd |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)

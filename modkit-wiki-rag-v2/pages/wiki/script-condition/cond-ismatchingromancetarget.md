---
document_id: "8b5177203150fc4113654e2bfbd254d04449fcb1e13a5839884c2ab7b3e1b7d2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget"
title: "Condition_IsMatchingRomanceTarget"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:36+00:00"
content_sha256: "7f1cf1b0f2550885f194b39cf783b1a2aa3b6e9b65194d991fbf805aa79244df"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ismatchingromancetarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Determines whether the romantic partner preferences of both Self and Target mutually match. The match is true only when the Target satisfies Self’s conditions AND Self satisfies the Target’s conditions. S1 specifies the expected value of this mutual match result.

# Parameters

| ParameterDescriptionBaseObjectThe character used as the base for context (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Expected value of the mutual romance match result (True or False). |
| --- |
| BaseObjectThe character used as the base for context (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Expected value of the mutual romance match result (True or False). |
| CompareTypeSupported compare types: Equal, NotEqual.S1Expected value of the mutual romance match result (True or False). |
| S1Expected value of the mutual romance match result (True or False). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self and Target are mutually matching romance partnersTargetIsMatchingRomanceTargetEqualTrueCheck if Self and Target are not mutually matching romance partnersTargetIsMatchingRomanceTargetEqualFalseCheck (negated) if Self and Target are mutually matching romance partnersTargetIsMatchingRomanceTargetNotEqualTrue |
| --- |
| Check if Self and Target are mutually matching romance partnersTargetIsMatchingRomanceTargetEqualTrueCheck if Self and Target are not mutually matching romance partnersTargetIsMatchingRomanceTargetEqualFalseCheck (negated) if Self and Target are mutually matching romance partnersTargetIsMatchingRomanceTargetNotEqualTrue |
| Check if Self and Target are not mutually matching romance partnersTargetIsMatchingRomanceTargetEqualFalseCheck (negated) if Self and Target are mutually matching romance partnersTargetIsMatchingRomanceTargetNotEqualTrue |
| Check (negated) if Self and Target are mutually matching romance partnersTargetIsMatchingRomanceTargetNotEqualTrue |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)

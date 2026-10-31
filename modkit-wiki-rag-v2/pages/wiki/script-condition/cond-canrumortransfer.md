---
document_id: "edf3cee4b90300f5a094b9d4e91221474af4b2779445afabfcfd1b142ff54fd7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrumortransfer"
title: "Condition_CanRumorTransfer"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:50+00:00"
content_sha256: "72af1e0b41c7fdadb68c588e129e5a8374523f871f71dd4fc60dec5239f241fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canrumortransfer"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject entity can transfer the rumor at the specified index to the other entity (Self transfers to Target, Target transfers to Self).

# Note

A maximum of 3 rumors can be held, so only index values 0, 1, and 2 are valid. Returns false for any other index.

# Parameters

| ParameterDescriptionBaseObjectThe entity that would propagate the rumor. Self transfers to Target, Target transfers to Self.CompareTypeSupported compare types: Equal (can transfer), NotEqual (cannot transfer).F1Index of the rumor held by the BaseObject to check transferability (valid values: 0, 1, 2). |
| --- |
| BaseObjectThe entity that would propagate the rumor. Self transfers to Target, Target transfers to Self.CompareTypeSupported compare types: Equal (can transfer), NotEqual (cannot transfer).F1Index of the rumor held by the BaseObject to check transferability (valid values: 0, 1, 2). |
| CompareTypeSupported compare types: Equal (can transfer), NotEqual (cannot transfer).F1Index of the rumor held by the BaseObject to check transferability (valid values: 0, 1, 2). |
| F1Index of the rumor held by the BaseObject to check transferability (valid values: 0, 1, 2). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self can transfer its rumor at index 0 to TargetSelfCanRumorTransferEqualCheck if Self cannot transfer its rumor at index 1 to TargetSelfCanRumorTransferNotEqualCheck if Target can transfer its rumor at index 0 to SelfTargetCanRumorTransferEqual |
| --- |
| Check if Self can transfer its rumor at index 0 to TargetSelfCanRumorTransferEqualCheck if Self cannot transfer its rumor at index 1 to TargetSelfCanRumorTransferNotEqualCheck if Target can transfer its rumor at index 0 to SelfTargetCanRumorTransferEqual |
| Check if Self cannot transfer its rumor at index 1 to TargetSelfCanRumorTransferNotEqualCheck if Target can transfer its rumor at index 0 to SelfTargetCanRumorTransferEqual |
| Check if Target can transfer its rumor at index 0 to SelfTargetCanRumorTransferEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRumor[HasRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumor)[HasRumorValidIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumorvalidindex)[HasSameRumorInIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassamerumorinindex)[IsSameRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamerumor)

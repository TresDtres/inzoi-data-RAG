---
document_id: "f3419037349a4d60b3718e071747507ab22ada7b591e801c36f2be092f14a49c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumorvalidindex"
title: "Condition_HasRumorValidIndex"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:14+00:00"
content_sha256: "fd07f7e94bdcb5630afe718ed4fdbdee0967041a5958959271e569b069c7ce6e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrumorvalidindex"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject entity has a valid (non-empty) rumor at the specified index in its rumor list.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose rumor list is checked (Self or Target).CompareTypeSupported compare types: Equal (has a valid rumor at index), NotEqual (does not).F1The index of the rumor slot to check (e.g., 0, 1, 2). |
| --- |
| BaseObjectThe entity whose rumor list is checked (Self or Target).CompareTypeSupported compare types: Equal (has a valid rumor at index), NotEqual (does not).F1The index of the rumor slot to check (e.g., 0, 1, 2). |
| CompareTypeSupported compare types: Equal (has a valid rumor at index), NotEqual (does not).F1The index of the rumor slot to check (e.g., 0, 1, 2). |
| F1The index of the rumor slot to check (e.g., 0, 1, 2). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has a valid rumor at index 0SelfHasRumorValidIndexEqualCheck if Self does not have a valid rumor at index 0SelfHasRumorValidIndexNotEqualCheck if Target has a valid rumor at index 1TargetHasRumorValidIndexEqualCheck if Target does not have a valid rumor at index 1TargetHasRumorValidIndexNotEqual |
| --- |
| Check if Self has a valid rumor at index 0SelfHasRumorValidIndexEqualCheck if Self does not have a valid rumor at index 0SelfHasRumorValidIndexNotEqualCheck if Target has a valid rumor at index 1TargetHasRumorValidIndexEqualCheck if Target does not have a valid rumor at index 1TargetHasRumorValidIndexNotEqual |
| Check if Self does not have a valid rumor at index 0SelfHasRumorValidIndexNotEqualCheck if Target has a valid rumor at index 1TargetHasRumorValidIndexEqualCheck if Target does not have a valid rumor at index 1TargetHasRumorValidIndexNotEqual |
| Check if Target has a valid rumor at index 1TargetHasRumorValidIndexEqualCheck if Target does not have a valid rumor at index 1TargetHasRumorValidIndexNotEqual |
| Check if Target does not have a valid rumor at index 1TargetHasRumorValidIndexNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRumor[CanRumorTransfer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrumortransfer)[HasRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumor)[HasSameRumorInIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassamerumorinindex)[IsSameRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamerumor)

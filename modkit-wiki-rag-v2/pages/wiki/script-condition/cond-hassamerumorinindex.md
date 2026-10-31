---
document_id: "dbb41e9cddfc74ed12672aad472e77219df93294b68166ee281ada666e889c58"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassamerumorinindex"
title: "Condition_HasSameRumorInIndex"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:14+00:00"
content_sha256: "0a22c66ac2bab7c60a18f1bc68003a4a16a6b1557896856e560e7a76b3ae88fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hassamerumorinindex"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the rumor held by the BaseObject at the specified index is the same rumor held by the other entity (Self checks against Target, Target checks against Self).

# Parameters

| ParameterDescriptionBaseObjectThe entity whose rumor at index F1 is compared. Self compares against Target, and vice versa.CompareTypeSupported compare types: Equal (same rumor at index), NotEqual (different rumor at index).F1The index of the rumor slot to compare (e.g., 0, 1, 2). |
| --- |
| BaseObjectThe entity whose rumor at index F1 is compared. Self compares against Target, and vice versa.CompareTypeSupported compare types: Equal (same rumor at index), NotEqual (different rumor at index).F1The index of the rumor slot to compare (e.g., 0, 1, 2). |
| CompareTypeSupported compare types: Equal (same rumor at index), NotEqual (different rumor at index).F1The index of the rumor slot to compare (e.g., 0, 1, 2). |
| F1The index of the rumor slot to compare (e.g., 0, 1, 2). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's rumor at index 0 is the same as Target'sSelfHasSameRumorInIndexEqualCheck if Self's rumor at index 1 differs from Target'sSelfHasSameRumorInIndexNotEqualCheck if Target's rumor at index 0 is the same as Self'sTargetHasSameRumorInIndexEqual |
| --- |
| Check if Self's rumor at index 0 is the same as Target'sSelfHasSameRumorInIndexEqualCheck if Self's rumor at index 1 differs from Target'sSelfHasSameRumorInIndexNotEqualCheck if Target's rumor at index 0 is the same as Self'sTargetHasSameRumorInIndexEqual |
| Check if Self's rumor at index 1 differs from Target'sSelfHasSameRumorInIndexNotEqualCheck if Target's rumor at index 0 is the same as Self'sTargetHasSameRumorInIndexEqual |
| Check if Target's rumor at index 0 is the same as Self'sTargetHasSameRumorInIndexEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRumor[CanRumorTransfer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrumortransfer)[HasRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumor)[HasRumorValidIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumorvalidindex)[IsSameRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamerumor)

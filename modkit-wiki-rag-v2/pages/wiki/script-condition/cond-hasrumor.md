---
document_id: "0c3e36bc62bc0dc52c324a924930666b457455bdd8e033934c7aa9fbdc74c280"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumor"
title: "Condition_HasRumor"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:14+00:00"
content_sha256: "6881308c27ecca5861e36457826e0e292a253b056e636a2b53ecfc0df7715aa5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrumor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject entity holds a specific rumor identified by the given Rumor ID.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose rumor list is checked (Self or Target).CompareTypeSupported compare types: Equal (has the rumor), NotEqual (does not have the rumor).S1The Rumor ID to check (from RumorTableRowBase). |
| --- |
| BaseObjectThe entity whose rumor list is checked (Self or Target).CompareTypeSupported compare types: Equal (has the rumor), NotEqual (does not have the rumor).S1The Rumor ID to check (from RumorTableRowBase). |
| CompareTypeSupported compare types: Equal (has the rumor), NotEqual (does not have the rumor).S1The Rumor ID to check (from RumorTableRowBase). |
| S1The Rumor ID to check (from RumorTableRowBase). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has the Rumor_Bad_2_KickObject rumorSelfHasRumorEqualCheck if Self does not have the Rumor_Bad_2_KickObject rumorSelfHasRumorNotEqualCheck if Target has the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorEqualCheck if Target does not have the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorNotEqual |
| --- |
| Check if Self has the Rumor_Bad_2_KickObject rumorSelfHasRumorEqualCheck if Self does not have the Rumor_Bad_2_KickObject rumorSelfHasRumorNotEqualCheck if Target has the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorEqualCheck if Target does not have the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorNotEqual |
| Check if Self does not have the Rumor_Bad_2_KickObject rumorSelfHasRumorNotEqualCheck if Target has the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorEqualCheck if Target does not have the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorNotEqual |
| Check if Target has the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorEqualCheck if Target does not have the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorNotEqual |
| Check if Target does not have the Rumor_Bad_1_IgnorePatient rumorTargetHasRumorNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRumor[CanRumorTransfer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canrumortransfer)[HasRumorValidIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrumorvalidindex)[HasSameRumorInIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassamerumorinindex)[IsSameRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamerumor)

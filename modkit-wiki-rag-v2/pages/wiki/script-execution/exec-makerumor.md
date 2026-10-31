---
document_id: "2492de928d343abf609d83e4b27e7cdb5aac0759ad8cf4c05e2e579abadd9a36"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerumor"
title: "Execute_MakeRumor"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:32+00:00"
content_sha256: "5e644707c60b9a615fb339e3246b92806fd319be89850331e5f8c73f51b2605e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-makerumor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates a rumor originating from the Self entity using the specified Rumor ID. The BaseObject parameter is used only to resolve the entity ID; Self is always used as the rumor monger.

# Parameters

| ParameterDescriptionBaseObjectUsed to resolve the base entity; Self is the rumor-originating entity.S1The Rumor ID to create (from RumorTableRowBase). |
| --- |
| BaseObjectUsed to resolve the base entity; Self is the rumor-originating entity.S1The Rumor ID to create (from RumorTableRowBase). |
| S1The Rumor ID to create (from RumorTableRowBase). |

# Examples

| DescriptionBaseObjectCommandSelf creates the Rumor_Bad_2_KickObject rumorSelfMakeRumorTarget creates the Rumor_Bad_1_IgnorePatient rumorTargetMakeRumor |
| --- |
| Self creates the Rumor_Bad_2_KickObject rumorSelfMakeRumorTarget creates the Rumor_Bad_1_IgnorePatient rumorTargetMakeRumor |
| Target creates the Rumor_Bad_1_IgnorePatient rumorTargetMakeRumor |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRumor[RumorEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumorevent)[RumorTransfer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransfer)[RumorTransferByIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransferbyindex)

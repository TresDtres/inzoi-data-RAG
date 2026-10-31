---
document_id: "7d43e07fbaecc6d4ec920a1475b00c82a457433a5f4361f70c3d408496e06a23"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransferbyindex"
title: "Execute_RumorTransferByIndex"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:50+00:00"
content_sha256: "45b6eaab80e08c0ed21009db25ea2654b0f97d157dbc4bcf5d2bb5bcf7acc7c0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-rumortransferbyindex"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Transfers the rumor held at a specific index by the BaseObject entity to the other entity (Self transfers to Target, Target transfers to Self).

# Parameters

| ParameterDescriptionBaseObjectThe entity that holds and passes the rumor. Self transfers to Target, Target transfers to Self.F1The index of the rumor to transfer (valid values: 0, 1, 2). |
| --- |
| BaseObjectThe entity that holds and passes the rumor. Self transfers to Target, Target transfers to Self.F1The index of the rumor to transfer (valid values: 0, 1, 2). |
| F1The index of the rumor to transfer (valid values: 0, 1, 2). |

# Examples

| DescriptionBaseObjectCommandSelf transfers the rumor at index 0 to TargetSelfRumorTransferByIndexSelf transfers the rumor at index 1 to TargetSelfRumorTransferByIndexTarget transfers the rumor at index 0 to SelfTargetRumorTransferByIndex |
| --- |
| Self transfers the rumor at index 0 to TargetSelfRumorTransferByIndexSelf transfers the rumor at index 1 to TargetSelfRumorTransferByIndexTarget transfers the rumor at index 0 to SelfTargetRumorTransferByIndex |
| Self transfers the rumor at index 1 to TargetSelfRumorTransferByIndexTarget transfers the rumor at index 0 to SelfTargetRumorTransferByIndex |
| Target transfers the rumor at index 0 to SelfTargetRumorTransferByIndex |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRumor[MakeRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerumor)[RumorEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumorevent)[RumorTransfer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransfer)

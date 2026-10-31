---
document_id: "05ca0516a50c098747fde4d10672ff5c3b6c4bc650c9be15a5e5f292f6335ffe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransfer"
title: "Execute_RumorTransfer"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:50+00:00"
content_sha256: "e2f179b32d314b3a1aaa3df16bfe10081ab0e05b7aba817c1fa32b2b4e18e21a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-rumortransfer"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Transfers a specific rumor from the BaseObject entity to the other entity (Self transfers to Target, Target transfers to Self).

# Parameters

| ParameterDescriptionBaseObjectThe entity that holds and passes the rumor. Self transfers to Target, Target transfers to Self.S1The Rumor ID to transfer (from RumorTableRowBase). |
| --- |
| BaseObjectThe entity that holds and passes the rumor. Self transfers to Target, Target transfers to Self.S1The Rumor ID to transfer (from RumorTableRowBase). |
| S1The Rumor ID to transfer (from RumorTableRowBase). |

# Examples

| DescriptionBaseObjectCommandSelf transfers a specific rumor to TargetSelfRumorTransferTarget transfers a specific rumor to SelfTargetRumorTransfer |
| --- |
| Self transfers a specific rumor to TargetSelfRumorTransferTarget transfers a specific rumor to SelfTargetRumorTransfer |
| Target transfers a specific rumor to SelfTargetRumorTransfer |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRumor[MakeRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerumor)[RumorEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumorevent)[RumorTransferByIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransferbyindex)

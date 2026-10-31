---
document_id: "9fa7735f8e87873b52ea1c2d1f9122c65d95f3789df4b0a01ac8d505f6378034"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumorevent"
title: "Execute_RumorEvent"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:49+00:00"
content_sha256: "fdbcfa22e857814056f326be8539217eea988e7fcbf78e1f3ea2314227a702c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-rumorevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Triggers a rumor event for the target entity. A rumor event sends a custom message when a certain condition is achieved. The BaseObject is the rumor monger; the other entity (Self if BaseObject is Target, Target if BaseObject is Self) receives the event effect.

# Parameters

| ParameterDescriptionBaseObjectThe rumor-originating entity (monger). Determines which entity is the receiver.S1The Rumor Event ID to trigger (from RumorEventTableRowBase).S2The Rumor Data ID used to look up the RumorParam associated with the monger.F1Additional parameter passed to TryPlayRumorEvent. |
| --- |
| BaseObjectThe rumor-originating entity (monger). Determines which entity is the receiver.S1The Rumor Event ID to trigger (from RumorEventTableRowBase).S2The Rumor Data ID used to look up the RumorParam associated with the monger.F1Additional parameter passed to TryPlayRumorEvent. |
| S1The Rumor Event ID to trigger (from RumorEventTableRowBase).S2The Rumor Data ID used to look up the RumorParam associated with the monger.F1Additional parameter passed to TryPlayRumorEvent. |
| S2The Rumor Data ID used to look up the RumorParam associated with the monger.F1Additional parameter passed to TryPlayRumorEvent. |
| F1Additional parameter passed to TryPlayRumorEvent. |

# Examples

| DescriptionBaseObjectCommandSelf triggers the Positive3 rumor event affecting TargetSelfRumorEventTarget triggers a rumor event affecting SelfTargetRumorEvent |
| --- |
| Self triggers the Positive3 rumor event affecting TargetSelfRumorEventTarget triggers a rumor event affecting SelfTargetRumorEvent |
| Target triggers a rumor event affecting SelfTargetRumorEvent |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRumor[MakeRumor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerumor)[RumorTransfer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransfer)[RumorTransferByIndex](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-rumortransferbyindex)

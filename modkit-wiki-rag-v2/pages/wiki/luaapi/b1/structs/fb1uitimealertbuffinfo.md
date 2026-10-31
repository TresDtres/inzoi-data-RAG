---
document_id: "0b8727756e7b5eb83ad8c25d71fea38de643e9e85d43f79a90ef75c472132fcd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1uitimealertbuffinfo"
title: "FB1UITimeAlertBuffInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:44+00:00"
content_sha256: "01e430ced0f0501ded9cd53154b71eb6c1d4c94b314be1af952d3d1311329793"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1uitimealertbuffinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Buff-linked timer configuration for UI time alerts. When a Zoi receives the specified buff, the timer UI will automatically display.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`BuffId``string`ID of the buff that triggers this time alert.`TimeoutWarningThreshold``number`Threshold ratio (0.0 to 1.0) for triggering a timeout warning when remaining time falls below this value. |
| --- |
| `BuffId``string`ID of the buff that triggers this time alert.`TimeoutWarningThreshold``number`Threshold ratio (0.0 to 1.0) for triggering a timeout warning when remaining time falls below this value. |
| `TimeoutWarningThreshold``number`Threshold ratio (0.0 to 1.0) for triggering a timeout warning when remaining time falls below this value. |

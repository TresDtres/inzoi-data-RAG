---
document_id: "da3a094ceea30c2498702fd7d09abd3840a5d24bcac372ec6a1961423f5e12ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/toast/toast-show"
title: "toast.show"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:19+00:00"
content_sha256: "ef8aaf2c87dfe5471d39778e663bfa95f3757d55d5aecefa20a9d8044ae1ba7f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/toast/toast-show"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Display a transient system-message toast on the local client. Purely presentational: no save, no broadcast, no gameplay effect. Default lifetime is 5 seconds; pass --immediate=true to bypass the queue and display right away.

# Metadata

| FieldValueDisplayShow Toast MessageCategory`toast`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayShow Toast MessageCategory`toast`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`toast`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmessagestringyes—Message text shown in the toast. Any plain string.lifetimefloatno5.0Seconds the toast stays visible. Default: 5.0.immediateboolnofalseIf true, skip the queue and show immediately. Default: false. |
| --- |
| messagestringyes—Message text shown in the toast. Any plain string.lifetimefloatno5.0Seconds the toast stays visible. Default: 5.0.immediateboolnofalseIf true, skip the queue and show immediately. Default: false. |
| lifetimefloatno5.0Seconds the toast stays visible. Default: 5.0.immediateboolnofalseIf true, skip the queue and show immediately. Default: false. |
| immediateboolnofalseIf true, skip the queue and show immediately. Default: false. |

# Usage

```
await inzoi.cli.execute('toast.show', {  message: '',  lifetime: 5.0, // optional  immediate: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsotoast[toast.clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/toast/toast-clear)

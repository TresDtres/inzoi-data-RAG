---
document_id: "8ea92a39de28c2071af954d4f30056301f5b2a2ab5082d2392e76dcd50e0e0c2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/screenshot/screenshot-get-last"
title: "screenshot.get_last"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:14+00:00"
content_sha256: "95f9133b8a081d7e32aef73798eabd10e922de7515957fcd471e1fbce2d59851"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/screenshot/screenshot-get-last"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the status of the most recent screenshot.capture issued in this process: where it is being written, whether the engine has finished writing it, and how long it has taken. Poll this after screenshot.capture until saved == true, then read the file at 'path'. pending == true means the engine has not rendered the capture frame yet — that is normal for the first poll, and can persist for seconds during a map load or while the window is minimised. Cheap to call: the response is a fixed handful of fields, so polling costs almost nothing.

# Metadata

| FieldValueDisplayGet Last Screenshot StatusCategory`screenshot`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Last Screenshot StatusCategory`screenshot`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`screenshot`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('screenshot.get_last');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

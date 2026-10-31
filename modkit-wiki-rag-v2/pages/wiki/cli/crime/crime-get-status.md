---
document_id: "c355f6e6dc82ac520b887e96037bf824f421ecf1b506b40fd8631693cc9fa5fe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/crime/crime-get-status"
title: "crime.get_status"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:54+00:00"
content_sha256: "9b4206d79168100b828df19b112850104cff431762f970d7c75be6dc45e8eb10"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/crime/crime-get-status"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the imprisonment state of a character: whether an imprisonment is deferred (pending mark and its recorded reason/city/time), whether a sentence is currently being served, and the imprisonment/trial counts.

# Metadata

| FieldValueDisplayCrime Get StatusCategory`crime`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayCrime Get StatusCategory`crime`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`crime`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno0Target character entity id (default: possessed). |
| --- |
| entity_identityIdno0Target character entity id (default: possessed). |

# Usage

```
await inzoi.cli.execute('crime.get_status', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

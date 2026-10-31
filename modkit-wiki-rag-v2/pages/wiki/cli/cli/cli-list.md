---
document_id: "5c95909ed90b1c1980647d2b0e6fd055a8342348d28609c9bdf290267b11eb0b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/cli/cli-list"
title: "cli.list"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:53+00:00"
content_sha256: "716a821ae2148adaac3cc4fc4104e261ae23c9cc65447c38d45ebc8b125aa774"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/cli/cli-list"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Lists registered CLI commands. Optionally filter by category.

# Metadata

| FieldValueDisplayList CLI CommandsCategory`cli`Access`Public`Scope`Both`Tags—Aliases— |
| --- |
| DisplayList CLI CommandsCategory`cli`Access`Public`Scope`Both`Tags—Aliases— |
| Category`cli`Access`Public`Scope`Both`Tags—Aliases— |
| Access`Public`Scope`Both`Tags—Aliases— |
| Scope`Both`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncategorystringno—Category filter (e.g. stat, economy) |
| --- |
| categorystringno—Category filter (e.g. stat, economy) |

# Usage

```
await inzoi.cli.execute('cli.list', {  category: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocli[cli.help](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/cli/cli-help)

---
document_id: "6dcec22d6057140caf7224d1d33c40f917d01fb88b4b1925ee1dc14465a9bb18"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-disable"
title: "uimod.disable"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:20+00:00"
content_sha256: "af3092ef54b2bc2172b44859f1af622f30d426056726553de7f613d2820fa535"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod/uimod-disable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Finds an enabled UI-only mod by keyword (name or friendly name), unmounts it if mounted, and sets bEnable=false in mod runtime state for persistence.

# Metadata

| FieldValueDisplayDisable Enabled UI-Only ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayDisable Enabled UI-Only ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionkeywordstringyes—Mod name or friendly name (partial match) |
| --- |
| keywordstringyes—Mod name or friendly name (partial match) |

# Usage

```
await inzoi.cli.execute('uimod.disable', {  keyword: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

---
document_id: "b303e01366723f4091a00afbc281304356353f435bd4ec3be563e1440c6e42a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-find"
title: "ui.find"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:19+00:00"
content_sha256: "97065a786be2cfd22d72c3b146d7d7a908e8f69da250307654e222ec83264a19"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-find"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Searches the visible UMG tree and returns matching widgets with their refs, so you can act on something without pulling down a whole tree first. text matches the displayed (localized) label as a case-insensitive substring; name matches the widget's FName the same way; role must match exactly. Filters combine with AND, and results are limited to interactive widgets and text so an unfiltered search does not dump the tree. Only interactive results carry a ref and a rect. Returns an empty array when there is no world.

# Metadata

| FieldValueDisplayFind UI WidgetCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayFind UI WidgetCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiontextstringno—Substring of the displayed label (case-insensitive).rolestringno—Exact role to match.namestringno—Substring of the widget FName (case-insensitive).windowstringno—Restrict the search to one window (UIType name or window instance name).limitintno20Maximum number of matches [1-200]. |
| --- |
| textstringno—Substring of the displayed label (case-insensitive).rolestringno—Exact role to match.namestringno—Substring of the widget FName (case-insensitive).windowstringno—Restrict the search to one window (UIType name or window instance name).limitintno20Maximum number of matches [1-200]. |
| rolestringno—Exact role to match.namestringno—Substring of the widget FName (case-insensitive).windowstringno—Restrict the search to one window (UIType name or window instance name).limitintno20Maximum number of matches [1-200]. |
| namestringno—Substring of the widget FName (case-insensitive).windowstringno—Restrict the search to one window (UIType name or window instance name).limitintno20Maximum number of matches [1-200]. |
| windowstringno—Restrict the search to one window (UIType name or window instance name).limitintno20Maximum number of matches [1-200]. |
| limitintno20Maximum number of matches [1-200]. |

# Usage

```
await inzoi.cli.execute('ui.find', {  text: '', // optional  role: '', // optional  name: '', // optional  window: '', // optional  limit: 20, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

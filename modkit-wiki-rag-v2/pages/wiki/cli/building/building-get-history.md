---
document_id: "336f289c2fee73218f3479d4cfed09439a817499bfdcc1c3b03fb8366ef314ec"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-history"
title: "building.get_history"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "e6a3ae3f82fa65877c83f2e847898ab82eb89aaef257ed908efa10626c3c6d1d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-get-history"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Returns whether undo/redo are available, plus the build commands issued through the CLI in the current build-mode session. Build commands issued through the game UI are NOT listed - the underlying command objects carry no name, so the real undo history cannot be enumerated. The log holds at most 64 entries and is cleared when build mode is left.

# Metadata

| FieldValueDisplayGet Build HistoryCategory`building`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Build HistoryCategory`building`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionlimitintno20Maximum number of log entries to return, most recent first-in-order (1-64) |
| --- |
| limitintno20Maximum number of log entries to return, most recent first-in-order (1-64) |

# Usage

```
await inzoi.cli.execute('building.get_history', {  limit: 20, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

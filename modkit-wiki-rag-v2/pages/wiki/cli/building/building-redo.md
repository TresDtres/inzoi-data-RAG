---
document_id: "7c0249e3f5c68b2b52831f423eb2d7091c589d3d88fae7ef0b9dadb143577843"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-redo"
title: "building.redo"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "541f3831ceebf5e9ed05e1be8915746a2e76dfd29656d452a1f73e3b035fbb95"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-redo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Re-applies build command(s) that were undone with building.undo. Issuing any new build command clears the redo stack.

# Metadata

| FieldValueDisplayBuild RedoCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayBuild RedoCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncountintno1How many steps to redo (1-64) |
| --- |
| countintno1How many steps to redo (1-64) |

# Usage

```
await inzoi.cli.execute('building.redo', {  count: 1, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

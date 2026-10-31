---
document_id: "0cbfb15c8858850a5ab1ac2a5d42b088c402fb39fbb50eb78c1253d0dcc65e05"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-exit-mode"
title: "build.exit_mode"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "c89ed3ad5d2fd0fc707b603fedbf04170e0080377b78a6d1e23d58cc7dc9bfd6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-exit-mode"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Requests exit from build mode. This is ASYNCHRONOUS: poll build.get_mode_state until phase == 'none'. Leaving ALWAYS commits the current site state to the server - there is no discard option. To revert changes, call building.undo BEFORE exiting, or building.reset_site_to_last_saved to drop the whole session. Requires phase == 'ready'; exiting while still preparing is rejected. Uncommitted in-progress placements are dropped on exit. In the build studio (BuildWorld) this additionally opens a modal confirmation popup, which can block subsequent CLI input until it is dismissed.

# Metadata

| FieldValueDisplayExit Build ModeCategory`build`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayExit Build ModeCategory`build`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`build`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('build.exit_mode');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

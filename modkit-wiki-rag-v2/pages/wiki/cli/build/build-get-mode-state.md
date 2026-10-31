---
document_id: "cb16baadc3390d28e697c327d0f4fe84a83e7d69d9500d150f26f49bf9adfeb1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-mode-state"
title: "build.get_mode_state"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "4b4d3498538a0ddd959c660759e6597a036ff63f4ab5587ffdb53c2df5ef4ab8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-get-mode-state"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns whether build mode is active and which lifecycle phase it is in. Entering is asynchronous (packet round-trip, streaming grid load, scene transition, then object spawn completion), so poll until phase == 'ready' before issuing any building.* command. A transient 'none' can appear during the streaming step before the loading UI is shown; do not immediately re-issue build.enter_mode on a single 'none' reading. If phase stays 'leaving', check the 'stuck' field.

# Metadata

| FieldValueDisplayGet Build Mode StateCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Build Mode StateCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioninclude_optionsboolnofalseAlso embed the build option flags (same set as building.get_options). Only present while a build mode pawn exists. |
| --- |
| include_optionsboolnofalseAlso embed the build option flags (same set as building.get_options). Only present while a build mode pawn exists. |

# Usage

```
await inzoi.cli.execute('build.get_mode_state', {  include_options: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

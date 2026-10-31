---
document_id: "9bd83fbff36327e3e4750a2b9630d8a6f052d20a9f5f88b52c8bbf829b87ac96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-list-windows"
title: "ui.list_windows"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:20+00:00"
content_sha256: "12b54ff0c5e385d85d7f27acd0e0ef488020a1508f8c402a4787ecca680e3d98"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-list-windows"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Lists the top-level UMG windows currently on screen, without any of their contents. This is the cheapest UI query and the intended first step: pick a window here, then call ui.get_tree --window= to see inside it. Windows are ordered top-most first (by UI layer z-order). Each entry carries 'counts' (nodes / interactive / scrollables) so you can tell how big the window's tree is before asking for it, and 'occluded' which is true when a modal above it means clicks cannot reach it. Only windows under the UI manager's root widget are reported; Cohtml-based UI and world-space widget components are not UMG and never appear. Returns an empty list when there is no world. This command never creates a widget, so it is safe to poll. Widgets that were opened this very frame have not been painted yet and show up one poll later.

# Metadata

| FieldValueDisplayList UI WindowsCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayList UI WindowsCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('ui.list_windows');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

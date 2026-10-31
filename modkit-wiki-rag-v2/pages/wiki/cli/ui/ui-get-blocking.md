---
document_id: "43c187a669c1efdc0fa8ce81f20e5fc37019d169fa3c6e7ecbbdd7b1a256451d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-get-blocking"
title: "ui.get_blocking"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:19+00:00"
content_sha256: "b807766fdbefe46c2d246455344270279d74742b12eafdd1d62cbe0a5c80f506"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-get-blocking"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns a snapshot of everything currently blocking gameplay input: loading screens, modal popups, the cat-talk tutorial overlay, coach marks, cutscenes and the ESC (pop) stack. This is the polling command for automation: keep calling it until 'blocked' is false. When 'primary_kind' is 'loading' you must WAIT (it is not dismissable); for anything else call ui.dismiss. Popups and coach marks are reported only for the current world (empty when there is no world). This command never creates a widget, so it is safe to poll tightly. Popup body text is truncated to 200 characters to keep the response small.

# Metadata

| FieldValueDisplayGet Blocking UI StateCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Blocking UI StateCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('ui.get_blocking');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

---
document_id: "0ce6200298d87c1168ac4e6c00aef8221772a21248c6359746c868847cabf069"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-close-coach-mark"
title: "ui.close_coach_mark"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:19+00:00"
content_sha256: "1452adb95a5676f8aaddaefdce1e3897e54e18cb3a9ca60a7011d7d19377958d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-close-coach-mark"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Ends every active coach mark overlay in the current world. With persist=true the coach mark keys are also recorded in the saved config so they will not be shown again on this machine. Fails when there is no world.

# Metadata

| FieldValueDisplayClose Coach MarkCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayClose Coach MarkCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionpersistboolnofalseAlso mark the coach marks as already shown (writes to config) |
| --- |
| persistboolnofalseAlso mark the coach marks as already shown (writes to config) |

# Usage

```
await inzoi.cli.execute('ui.close_coach_mark', {  persist: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

---
document_id: "7780e19a0f2b951b2647e70b3790f5a34b6e0566284199886da6ad4846a9e428"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-freeze"
title: "stat.freeze"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "d626ab24a580547077c5657634947e95987b4700aad0a9fa3af1c28d665444bc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/stat/stat-freeze"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Freezes (enabled=true) or unfreezes stat tick for the target character.

# Metadata

| FieldValueDisplayFreeze StatsCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayFreeze StatsCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)enabledboolyes—true to freeze, false to unfreeze |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)enabledboolyes—true to freeze, false to unfreeze |
| enabledboolyes—true to freeze, false to unfreeze |

# Usage

```
await inzoi.cli.execute('stat.freeze', {  entity_id: 0, // optional  enabled: false,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsostat[stat.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-add)[stat.get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-get-all)[stat.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set)[stat.set_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-all)[stat.set_percent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-percent)

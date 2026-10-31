---
document_id: "e1e520bab4c445578c4774ca50f1d2400d6585002a281fe0d1b7d2be5b09fdb4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set"
title: "stat.set"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "13e09037f453d48119dfbb022c3de1ccfedd7c08c0522d9539cdc65f6eed2626"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/stat/stat-set"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets a stat to the given value on the target character.

# Metadata

| FieldValueDisplaySet StatCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet StatCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)stat_idnameyes—Stat IDvaluefloatyes—Target value |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)stat_idnameyes—Stat IDvaluefloatyes—Target value |
| stat_idnameyes—Stat IDvaluefloatyes—Target value |
| valuefloatyes—Target value |

# Usage

```
await inzoi.cli.execute('stat.set', {  entity_id: 0, // optional  stat_id: '',  value: 0.0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsostat[stat.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-add)[stat.freeze](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-freeze)[stat.get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-get-all)[stat.set_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-all)[stat.set_percent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-percent)

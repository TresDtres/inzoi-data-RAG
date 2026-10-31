---
document_id: "01983497b1b91e9d4601715ffe0a19b3b039c3f88498cdd1f5d2f3f51d1756fe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-add"
title: "stat.add"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "a973e11206a580492bfb751c273ccc5c04807cd289af6a841e3ba93562802d86"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/stat/stat-add"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds the given value to a stat on the target character.

# Metadata

| FieldValueDisplayAdd StatCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayAdd StatCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)stat_idnameyes—Stat ID (e.g. Hunger, Sleep)valuefloatyes—Amount to add |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)stat_idnameyes—Stat ID (e.g. Hunger, Sleep)valuefloatyes—Amount to add |
| stat_idnameyes—Stat ID (e.g. Hunger, Sleep)valuefloatyes—Amount to add |
| valuefloatyes—Amount to add |

# Usage

```
await inzoi.cli.execute('stat.add', {  entity_id: 0, // optional  stat_id: '',  value: 0.0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsostat[stat.freeze](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-freeze)[stat.get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-get-all)[stat.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set)[stat.set_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-all)[stat.set_percent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-percent)

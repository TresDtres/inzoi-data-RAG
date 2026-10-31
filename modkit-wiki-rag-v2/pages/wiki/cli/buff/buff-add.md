---
document_id: "765b0f31f3002b56f76d7d8f162652017d1b89f71478823537706b1648d1b6ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/buff/buff-add"
title: "buff.add"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:47+00:00"
content_sha256: "b5b035df0435dfc7b3429fb59ec6616db207047dd68bbdbd99e2c58122f66c3d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/buff/buff-add"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds a buff to the target character. Optionally overrides its lifetime with duration_minutes (finite-duration buffs only; omit to use the table default).

# Metadata

| FieldValueDisplayAdd BuffCategory`buff`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayAdd BuffCategory`buff`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`buff`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)buff_idnameyes—Buff ID to addduration_minutesintno—Override buff duration in in-game minutes (omit = table default) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)buff_idnameyes—Buff ID to addduration_minutesintno—Override buff duration in in-game minutes (omit = table default) |
| buff_idnameyes—Buff ID to addduration_minutesintno—Override buff duration in in-game minutes (omit = table default) |
| duration_minutesintno—Override buff duration in in-game minutes (omit = table default) |

# Usage

```
await inzoi.cli.execute('buff.add', {  entity_id: 0, // optional  buff_id: '',  duration_minutes: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuff[buff.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/buff/buff-remove)

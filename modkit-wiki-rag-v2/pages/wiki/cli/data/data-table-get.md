---
document_id: "c9ecf1145a734f3d311d0949c8770f54008471dff9ea5637e30e8bd3e22b65c9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-table-get"
title: "data.table_get"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:55+00:00"
content_sha256: "b43a641e76151ffd6748ecabf01eb8569a3a404371918e3867b4207c3b827353"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/data/data-table-get"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns a single DataTable row as JSON. alias: table alias (e.g. Aging), row: row name.

# Metadata

| FieldValueDisplayQuery DataTable RowCategory`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayQuery DataTable RowCategory`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionaliasstringyes—DataTable alias (e.g. 'Aging', 'Stat', 'Site')rowstringyes—Row name (e.g. 'Adult', 'Hunger') |
| --- |
| aliasstringyes—DataTable alias (e.g. 'Aging', 'Stat', 'Site')rowstringyes—Row name (e.g. 'Adult', 'Hunger') |
| rowstringyes—Row name (e.g. 'Adult', 'Hunger') |

# Usage

```
await inzoi.cli.execute('data.table_get', {  alias: '',  row: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsodata[data.asset_get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-asset-get)[data.list_rows](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-list-rows)[data.list_tables](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-list-tables)[data.patch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-patch)[data.table_get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-table-get-all)

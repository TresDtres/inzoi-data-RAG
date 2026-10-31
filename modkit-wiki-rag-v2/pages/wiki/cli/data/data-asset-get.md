---
document_id: "fac893fe574f967d089964a71f03745a977726d0fa55ebe4fc030a4f71962d2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-asset-get"
title: "data.asset_get"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:55+00:00"
content_sha256: "d7e4d5166737590db5f89b9fbc0996680c542121a1b98ed42197b81082c6bb3a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/data/data-asset-get"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns a DataAsset's full content as JSON. alias: asset alias (e.g. GameConfig).

# Metadata

| FieldValueDisplayQuery DataAssetCategory`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayQuery DataAssetCategory`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionaliasstringyes—DataAsset alias (e.g. 'GameConfig') |
| --- |
| aliasstringyes—DataAsset alias (e.g. 'GameConfig') |

# Usage

```
await inzoi.cli.execute('data.asset_get', {  alias: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsodata[data.list_rows](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-list-rows)[data.list_tables](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-list-tables)[data.patch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-patch)[data.table_get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-table-get)[data.table_get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-table-get-all)

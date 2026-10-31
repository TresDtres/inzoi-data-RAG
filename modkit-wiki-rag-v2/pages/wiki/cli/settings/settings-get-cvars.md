---
document_id: "1e7ee750980e322f5c40d4933e57da23b8ad9f3626f81ee7580a14885c2b0221"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-get-cvars"
title: "settings.get_cvars"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:14+00:00"
content_sha256: "10272693f625539e8e1ddcafbf6dbd50186900fee4242fb5e14d76cdccfed9a8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/settings/settings-get-cvars"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get current Unreal Engine console variable values as JSON. Filter by comma-separated category prefixes (e.g. --category=r,sg matches r.* and sg.*). Omit --category to return all console variables. IConsoleCommand entries (no value) are excluded.

# Metadata

| FieldValueDisplayGet Console VariablesCategory`settings`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayGet Console VariablesCategory`settings`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`settings`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncategorystringno—Comma-separated category prefixes, e.g. 'r,sg,scalability'. Omit to return all cvars. |
| --- |
| categorystringno—Comma-separated category prefixes, e.g. 'r,sg,scalability'. Omit to return all cvars. |

# Usage

```
await inzoi.cli.execute('settings.get_cvars', {  category: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosettings[settings.get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-get)[settings.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-set)

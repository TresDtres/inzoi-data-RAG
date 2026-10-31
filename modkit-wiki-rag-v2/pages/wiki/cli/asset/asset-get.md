---
document_id: "82b6d9e8aa38b57ee16a38b1229ffd472e0d7392f6b8d2a5f9c85f14756763be"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/asset/asset-get"
title: "asset.get"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:46+00:00"
content_sha256: "4fb278ef2e9a90e6e840a1e1faf34ab649bac45085c0e65d7fa829b46d68ba2f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/asset/asset-get"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Fetch a single catalog entry by `id` or `path`. Returns the summary fields plus the player-facing technical spec (dimensions/duration/etc.).

# Metadata

| FieldValueDisplayGet Asset Catalog EntryCategory`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Asset Catalog EntryCategory`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionidstringno—Asset basename id (e.g. 'SM_AR_wall_1F_S_V01').pathstringno—UE ObjectPath alternative to id. |
| --- |
| idstringno—Asset basename id (e.g. 'SM_AR_wall_1F_S_V01').pathstringno—UE ObjectPath alternative to id. |
| pathstringno—UE ObjectPath alternative to id. |

# Usage

```
await inzoi.cli.execute('asset.get', {  id: '', // optional  path: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

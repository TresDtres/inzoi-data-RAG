---
document_id: "de493c17595dbf99ac68b728b4edcb52eb5dc07326d3980ce1f6b79160a318c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-get-all"
title: "stat.get_all"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "4eb81d0e6e07d4f2d0f7048f3cd873a7bf9286a796dee93520b5ed8a03b7cce3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/stat/stat-get-all"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all stats with value, min, max, pct, and noDecay for the target character.

# Metadata

| FieldValueDisplayGet All StatsCategory`stat`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet All StatsCategory`stat`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`stat`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('stat.get_all', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsostat[stat.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-add)[stat.freeze](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-freeze)[stat.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set)[stat.set_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-all)[stat.set_percent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-percent)

---
document_id: "ed3dedb486b2eed3086edb1e19819001bb4b566c04dd880e0b79dd6b93fa04be"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-list"
title: "relationships.list"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:13+00:00"
content_sha256: "847c23c08c4b8702011837451105300e76eb32562ee2b12f94eb79cf6d692cf0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/relationships/relationships-list"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all relationships a character has, with each partner's name and relationship stats. Use min_value to filter out weak (e.g. crowd) relationships.

# Metadata

| FieldValueDisplayList RelationshipsCategory`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayList RelationshipsCategory`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionowner_identityIdyes—Owner character entity IDmin_valuefloatno—Only include relationships whose max stat value is >= this (default: 0) |
| --- |
| owner_identityIdyes—Owner character entity IDmin_valuefloatno—Only include relationships whose max stat value is >= this (default: 0) |
| min_valuefloatno—Only include relationships whose max stat value is >= this (default: 0) |

# Usage

```
await inzoi.cli.execute('relationships.list', {  owner_id: 0,  min_value: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsorelationships[relationships.get_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value)[relationships.get_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value-between)[relationships.obliviate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-obliviate)[relationships.set_full](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-full)[relationships.set_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value)[relationships.set_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value-between)[relationships.set_worst](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-worst)[relationships.unlock_profile](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-unlock-profile)

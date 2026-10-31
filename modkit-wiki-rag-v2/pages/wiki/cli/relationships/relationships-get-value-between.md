---
document_id: "551e1d734550503f1cb523a93b29fa1ee12136d80556e1ae322ef0c3a1e85c86"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value-between"
title: "relationships.get_value_between"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:13+00:00"
content_sha256: "82fef445551026a51149963ec5a6b7ac7df7a8eafeb322b2e18a998d56cff3e1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/relationships/relationships-get-value-between"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns relationship stat values from owner toward target. Unlike relationships.get_value, the owner is explicitly specified instead of defaulting to possessed.

# Metadata

| FieldValueDisplayGet Relationship BetweenCategory`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Relationship BetweenCategory`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionowner_identityIdyes—Owner character entity IDtarget_identityIdyes—Target character entity IDrelationship_idnameno—Relationship stat ID (optional, omit for all) |
| --- |
| owner_identityIdyes—Owner character entity IDtarget_identityIdyes—Target character entity IDrelationship_idnameno—Relationship stat ID (optional, omit for all) |
| target_identityIdyes—Target character entity IDrelationship_idnameno—Relationship stat ID (optional, omit for all) |
| relationship_idnameno—Relationship stat ID (optional, omit for all) |

# Usage

```
await inzoi.cli.execute('relationships.get_value_between', {  owner_id: 0,  target_id: 0,  relationship_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsorelationships[relationships.get_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value)[relationships.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-list)[relationships.obliviate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-obliviate)[relationships.set_full](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-full)[relationships.set_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value)[relationships.set_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value-between)[relationships.set_worst](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-worst)[relationships.unlock_profile](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-unlock-profile)

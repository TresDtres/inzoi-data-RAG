---
document_id: "2f8a361ff54afc4103b34e82c143c3e6075bcad4d9374d553b7c57bd81473b1b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value"
title: "relationships.set_value"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:13+00:00"
content_sha256: "5f614e714cb08607557aa792c53dbc3918c4000d6c37e0e4fcf0083d0cb5c8c1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/relationships/relationships-set-value"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set relationship value for an entity.

# Metadata

| FieldValueDisplaySet Relationship ValueCategory`relationships`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetRelationship`, `relationship.set_value` |
| --- |
| DisplaySet Relationship ValueCategory`relationships`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetRelationship`, `relationship.set_value` |
| Category`relationships`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetRelationship`, `relationship.set_value` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetRelationship`, `relationship.set_value` |
| Scope`B2Authority`Tags—Aliases`SetRelationship`, `relationship.set_value` |
| Tags—Aliases`SetRelationship`, `relationship.set_value` |
| Aliases`SetRelationship`, `relationship.set_value` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target entity idvaluefloatyes—Relationship valuerelationship_idnameno—Relationship id (optional) |
| --- |
| entity_identityIdyes—Target entity idvaluefloatyes—Relationship valuerelationship_idnameno—Relationship id (optional) |
| valuefloatyes—Relationship valuerelationship_idnameno—Relationship id (optional) |
| relationship_idnameno—Relationship id (optional) |

# Usage

```
await inzoi.cli.execute('relationships.set_value', {  entity_id: 0,  value: 0.0,  relationship_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsorelationships[relationships.get_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value)[relationships.get_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value-between)[relationships.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-list)[relationships.obliviate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-obliviate)[relationships.set_full](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-full)[relationships.set_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value-between)[relationships.set_worst](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-worst)[relationships.unlock_profile](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-unlock-profile)

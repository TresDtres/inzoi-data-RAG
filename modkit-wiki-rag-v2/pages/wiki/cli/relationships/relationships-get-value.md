---
document_id: "e867585f19cbdc278dafbf41a5125125bf0ff08d3ddb49d2c96b98f3468a906d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value"
title: "relationships.get_value"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:13+00:00"
content_sha256: "496ce5f5c18fb5206ef1dded6be4bf07910d010856ba3943bf71653c3d148c2f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/relationships/relationships-get-value"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns relationship stat values for the target entity.

# Metadata

| FieldValueDisplayGet Relationship ValueCategory`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Relationship ValueCategory`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`relationships`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target entity IDrelationship_idnameno—Relationship stat ID (optional) |
| --- |
| entity_identityIdyes—Target entity IDrelationship_idnameno—Relationship stat ID (optional) |
| relationship_idnameno—Relationship stat ID (optional) |

# Usage

```
await inzoi.cli.execute('relationships.get_value', {  entity_id: 0,  relationship_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsorelationships[relationships.get_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value-between)[relationships.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-list)[relationships.obliviate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-obliviate)[relationships.set_full](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-full)[relationships.set_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value)[relationships.set_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value-between)[relationships.set_worst](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-worst)[relationships.unlock_profile](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-unlock-profile)

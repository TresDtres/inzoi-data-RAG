---
document_id: "6d31903ab3c2c3ac262b1ae260d47274391424dfe120dc41d7da3644542981b0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value-between"
title: "relationships.set_value_between"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:13+00:00"
content_sha256: "fedbd5d2af390382e37fa3b1f0d43b20b6ed50595eabc235e448864ea00079ca"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/relationships/relationships-set-value-between"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets relationship stat value between any two characters (always bidirectional). Romance stat is guarded by IsLovable; family stat requires existing family relationship.

# Metadata

| FieldValueDisplaySet Relationship BetweenCategory`relationships`Access`UserCheat`Scope`B2Authority`Tags—Aliases`relationship.set_value_between` |
| --- |
| DisplaySet Relationship BetweenCategory`relationships`Access`UserCheat`Scope`B2Authority`Tags—Aliases`relationship.set_value_between` |
| Category`relationships`Access`UserCheat`Scope`B2Authority`Tags—Aliases`relationship.set_value_between` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`relationship.set_value_between` |
| Scope`B2Authority`Tags—Aliases`relationship.set_value_between` |
| Tags—Aliases`relationship.set_value_between` |
| Aliases`relationship.set_value_between` |

# Parameters

| NameTypeRequiredDefaultDescriptionowner_identityIdyes—Owner character entity IDtarget_identityIdyes—Target character entity IDvaluefloatyes—Relationship value to setrelationship_idnameno—Relationship stat ID (default: all stats) |
| --- |
| owner_identityIdyes—Owner character entity IDtarget_identityIdyes—Target character entity IDvaluefloatyes—Relationship value to setrelationship_idnameno—Relationship stat ID (default: all stats) |
| target_identityIdyes—Target character entity IDvaluefloatyes—Relationship value to setrelationship_idnameno—Relationship stat ID (default: all stats) |
| valuefloatyes—Relationship value to setrelationship_idnameno—Relationship stat ID (default: all stats) |
| relationship_idnameno—Relationship stat ID (default: all stats) |

# Usage

```
await inzoi.cli.execute('relationships.set_value_between', {  owner_id: 0,  target_id: 0,  value: 0.0,  relationship_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsorelationships[relationships.get_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value)[relationships.get_value_between](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-get-value-between)[relationships.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-list)[relationships.obliviate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-obliviate)[relationships.set_full](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-full)[relationships.set_value](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-value)[relationships.set_worst](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-set-worst)[relationships.unlock_profile](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/relationships/relationships-unlock-profile)

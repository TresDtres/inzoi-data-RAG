---
document_id: "2633e70a5c8d0acb593543caca853dbbf71c8fccfc8f488f4748e1c1ba1d7fb2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/needs/needs-set-full"
title: "needs.set_full"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:11+00:00"
content_sha256: "f5eddb23988afec91369a84038b28cdb1c2e15088c56d92f81f135be6af76a1c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/needs/needs-set-full"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Fills the specified need category on the target character, or all needs when category is empty.

# Metadata

| FieldValueDisplaySet Needs FullCategory`needs`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetNeedsFull` |
| --- |
| DisplaySet Needs FullCategory`needs`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetNeedsFull` |
| Category`needs`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetNeedsFull` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetNeedsFull` |
| Scope`B2Authority`Tags—Aliases`SetNeedsFull` |
| Tags—Aliases`SetNeedsFull` |
| Aliases`SetNeedsFull` |

# Parameters

| NameTypeRequiredDefaultDescriptioncategorystringno—Needs category name, or empty for allentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| categorystringno—Needs category name, or empty for allentity_identityIdno—Target entity ID (default: possessed) |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('needs.set_full', {  category: '', // optional  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoneeds[needs.freeze_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/needs/needs-freeze-all)[needs.freeze_all_system](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/needs/needs-freeze-all-system)

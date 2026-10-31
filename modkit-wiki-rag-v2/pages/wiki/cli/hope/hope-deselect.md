---
document_id: "68ef09493b2493632ab6c544d528e194f7156dd2f1e616641434665bfe2cbaba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect"
title: "hope.deselect"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:02+00:00"
content_sha256: "98e7493c791bacf1e713dbc754db20bd9438a7f01f83a322dee83e4b1ba8871c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/hope/hope-deselect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Deselects a hope by slot index on the target character.

# Metadata

| FieldValueDisplayDeselect HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayDeselect HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)slot_indexintyes—Slot index (-1 for last) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)slot_indexintyes—Slot index (-1 for last) |
| slot_indexintyes—Slot index (-1 for last) |

# Usage

```
await inzoi.cli.execute('hope.deselect', {  entity_id: 0, // optional  slot_index: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohope[hope.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete)[hope.deselect_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all)[hope.force_update](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update)[hope.get_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config)[hope.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list)[hope.select](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select)[hope.set_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config)[hope.set_expire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire)[hope.set_fix](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix)

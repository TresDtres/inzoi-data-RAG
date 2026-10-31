---
document_id: "ada38250ca233ee7c5500488dc2f733857f15ce2dc9d293bae22d60d72bab351"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select"
title: "hope.select"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:02+00:00"
content_sha256: "b5bc10c9cfc1bc52ba8d71c296e480071a602b5cd12534930bb4f72504616b8d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/hope/hope-select"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Selects a hope on the target character. Use force=true to override limits.

# Metadata

| FieldValueDisplaySelect HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySelect HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope IDforceboolyes—Force add (default: false) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope IDforceboolyes—Force add (default: false) |
| hope_idnameyes—Hope IDforceboolyes—Force add (default: false) |
| forceboolyes—Force add (default: false) |

# Usage

```
await inzoi.cli.execute('hope.select', {  entity_id: 0, // optional  hope_id: '',  force: false,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohope[hope.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete)[hope.deselect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect)[hope.deselect_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all)[hope.force_update](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update)[hope.get_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config)[hope.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list)[hope.set_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config)[hope.set_expire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire)[hope.set_fix](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix)

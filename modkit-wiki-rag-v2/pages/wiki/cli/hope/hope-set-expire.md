---
document_id: "b5f9a66f0b88dfd5d29decac8da460a986d3bbd46e218e46c5b3b70945f2a460"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire"
title: "hope.set_expire"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:02+00:00"
content_sha256: "58f2d0d00fcd80561983ca7fede652405e4df12c1c0f691494bd98443a83261c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/hope/hope-set-expire"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Cheat/test: directly overrides a currently-selected hope's remaining lifetime in in-game seconds, bypassing the hope's table LifeTimeSecond and the GLOBAL deselect_cooltime config (which only apply at selection time). Also unfixes the hope so it can expire. The hope must be selected (see hope.list).

# Metadata

| FieldValueDisplaySet Hope ExpireCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Hope ExpireCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope ID to modify (must be currently selected)remain_secondsintyes—New remaining lifetime in in-game seconds (> 0) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope ID to modify (must be currently selected)remain_secondsintyes—New remaining lifetime in in-game seconds (> 0) |
| hope_idnameyes—Hope ID to modify (must be currently selected)remain_secondsintyes—New remaining lifetime in in-game seconds (> 0) |
| remain_secondsintyes—New remaining lifetime in in-game seconds (> 0) |

# Usage

```
await inzoi.cli.execute('hope.set_expire', {  entity_id: 0, // optional  hope_id: '',  remain_seconds: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohope[hope.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete)[hope.deselect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect)[hope.deselect_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all)[hope.force_update](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update)[hope.get_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config)[hope.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list)[hope.select](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select)[hope.set_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config)[hope.set_fix](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix)

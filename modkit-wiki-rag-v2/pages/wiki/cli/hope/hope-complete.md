---
document_id: "a3b51aef220625910c62a8f7de624552b7741416741a67303a5dd9a3ba6c6516"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete"
title: "hope.complete"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:02+00:00"
content_sha256: "e72fd5c8dcb53df3de9e05d1fade0371e48581f220b794e56146eab353b02cc3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/hope/hope-complete"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Instantly completes a currently-selected hope on the target character, running its completion reward script and firing the completion popup. The hope must be selected (see hope.list).

# Metadata

| FieldValueDisplayComplete HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayComplete HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope ID to complete (must be currently selected) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope ID to complete (must be currently selected) |
| hope_idnameyes—Hope ID to complete (must be currently selected) |

# Usage

```
await inzoi.cli.execute('hope.complete', {  entity_id: 0, // optional  hope_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohope[hope.deselect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect)[hope.deselect_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all)[hope.force_update](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update)[hope.get_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config)[hope.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list)[hope.select](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select)[hope.set_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config)[hope.set_expire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire)[hope.set_fix](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix)

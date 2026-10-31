---
document_id: "46bf26be3477800985b09cead7fb2c23a47c5712cfc7726d06766f66c330177a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/buff/buff-remove"
title: "buff.remove"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:47+00:00"
content_sha256: "3946823fb950e347c4329267badad276fbd715e03d40e7b5ab14ab0f7ddcb0f1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/buff/buff-remove"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Removes a buff from the target character.

# Metadata

| FieldValueDisplayRemove BuffCategory`buff`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayRemove BuffCategory`buff`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`buff`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)buff_idnameyes—Buff ID to remove |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)buff_idnameyes—Buff ID to remove |
| buff_idnameyes—Buff ID to remove |

# Usage

```
await inzoi.cli.execute('buff.remove', {  entity_id: 0, // optional  buff_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuff[buff.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/buff/buff-add)

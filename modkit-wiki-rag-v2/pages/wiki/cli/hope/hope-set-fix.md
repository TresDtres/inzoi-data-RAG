---
document_id: "7b8074dc9af998d12e196b83e92b3cc689f2a394d401ac1429a49594132974d4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix"
title: "hope.set_fix"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:02+00:00"
content_sha256: "345bbea374745e4e2d9914005ed2493f3d0064b576f8528f00ddf5295ecc0997"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/hope/hope-set-fix"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Pins or unpins a hope on the target character. fixed=true to pin, false to unpin.

# Metadata

| FieldValueDisplayFix/Unfix HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayFix/Unfix HopeCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope IDfixedboolyes—true to fix, false to unfix |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)hope_idnameyes—Hope IDfixedboolyes—true to fix, false to unfix |
| hope_idnameyes—Hope IDfixedboolyes—true to fix, false to unfix |
| fixedboolyes—true to fix, false to unfix |

# Usage

```
await inzoi.cli.execute('hope.set_fix', {  entity_id: 0, // optional  hope_id: '',  fixed: false,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohope[hope.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete)[hope.deselect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect)[hope.deselect_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all)[hope.force_update](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update)[hope.get_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config)[hope.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list)[hope.select](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select)[hope.set_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config)[hope.set_expire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire)

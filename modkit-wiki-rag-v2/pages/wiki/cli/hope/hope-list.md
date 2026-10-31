---
document_id: "253fadb3be436a835e2508f8a5c38bfc9bfffaca42bbe62694547f676314b170"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list"
title: "hope.list"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:02+00:00"
content_sha256: "007b2bb61831f2e819e07ec87831638bba07522141455b95018e7d4f6b9de54a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/hope/hope-list"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the target character's currently selected hopes (wishes): hope_id, expire tick, fixed flag.

# Metadata

| FieldValueDisplayList HopesCategory`hope`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayList HopesCategory`hope`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`hope`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('hope.list', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohope[hope.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete)[hope.deselect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect)[hope.deselect_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all)[hope.force_update](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update)[hope.get_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config)[hope.select](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select)[hope.set_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config)[hope.set_expire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire)[hope.set_fix](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix)

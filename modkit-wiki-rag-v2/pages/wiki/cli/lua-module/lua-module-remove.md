---
document_id: "5a455706ccecfea439c31a0f3f9693e907c67177adf21a095aae9dc99b4c5979"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/lua-module/lua-module-remove"
title: "lua_module.remove"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:09+00:00"
content_sha256: "3577bcefdd90c705e8cdc41c1c2240bd9a3d3e654aa6939d5ff9fd624cf01e80"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/lua-module/lua-module-remove"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Remove a dynamic Lua module from an entity

# Metadata

| FieldValueDisplayRemove Lua ModuleCategory`lua_module`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayRemove Lua ModuleCategory`lua_module`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`lua_module`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target entity IDnamestringyes—Module name to remove |
| --- |
| entity_identityIdyes—Target entity IDnamestringyes—Module name to remove |
| namestringyes—Module name to remove |

# Usage

```
await inzoi.cli.execute('lua_module.remove', {  entity_id: 0,  name: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsolua-module[lua_module.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/lua-module/lua-module-list)

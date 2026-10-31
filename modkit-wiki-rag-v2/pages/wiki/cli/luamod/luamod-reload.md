---
document_id: "d38e1cb9ffe92fd3811884fbd3ff244ae4941548df5bf9b7e9f0d0583e3e7691"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/luamod/luamod-reload"
title: "luamod.reload"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:08+00:00"
content_sha256: "d8c762c9f7c644c378d4c467eb3a940f69ba80c82d9d45a5eef1b88f4bdca2e1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/luamod/luamod-reload"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Hot-reload Lua script environments. Reloads all mounted Lua mods without restarting. Default reloads both B1+B2.

# Metadata

| FieldValueDisplayReload LuaCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayReload LuaCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiontargetstringnoallWhich environment to reload: all (default), b1, or b2 |
| --- |
| targetstringnoallWhich environment to reload: all (default), b1, or b2 |

# Usage

```
await inzoi.cli.execute('luamod.reload', {  target: 'all', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

---
document_id: "1f5085f2b3198a15aee397b765b30c06bca87eaeeafe9bae067d35aff80fd1d5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/luamod/luamod-mount"
title: "luamod.mount"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:08+00:00"
content_sha256: "f156e2fe9b95dc02d8e57d351ee4c4d85302194723d98fe39c261b48b74d9e2e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/luamod/luamod-mount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Mount a Lua mod's lua/ scripts by mod_id ({UserModDir}/[InGame/]{mod_id}/lua). Loads into B1 immediately and B2 via packet. Use for Lua-only mods that uimod.mount cannot mount.

# Metadata

| FieldValueDisplayMount Lua ModCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayMount Lua ModCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmod_idstringyes—Mod folder name under the user mods directory |
| --- |
| mod_idstringyes—Mod folder name under the user mods directory |

# Usage

```
await inzoi.cli.execute('luamod.mount', {  mod_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

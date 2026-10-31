---
document_id: "45534eb6ddf6d8fafedbb92a512ce19fdc3d791a2ef172b265aa2635aefddb06"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/luamod/luamod-remount"
title: "luamod.remount"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:08+00:00"
content_sha256: "4306458b61bb7eccde78e750cde7f3a6de87a604787c565b969f6083527b5e00"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/luamod/luamod-remount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Unmount then re-mount a Lua mod's lua/ scripts by mod_id. Use after editing scripts to apply changes.

# Metadata

| FieldValueDisplayRemount Lua ModCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayRemount Lua ModCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
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
await inzoi.cli.execute('luamod.remount', {  mod_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

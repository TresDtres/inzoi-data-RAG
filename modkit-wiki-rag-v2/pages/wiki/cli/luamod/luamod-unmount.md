---
document_id: "6f160178c91c9a70be97873c310d741ccf3a24f4a981b668cf8bf14b070944b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/luamod/luamod-unmount"
title: "luamod.unmount"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:08+00:00"
content_sha256: "032b3cc14e1b48319e756cc15648984ad8fb8ea6520e6fa08dbe9888a92729b4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/luamod/luamod-unmount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Unmount a Lua mod's lua/ scripts by mod_id. Removes them from B1 immediately and B2 via packet.

# Metadata

| FieldValueDisplayUnmount Lua ModCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayUnmount Lua ModCategory`luamod`Access`UserCheat`Scope`B1Standalone`Tags—Aliases— |
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
await inzoi.cli.execute('luamod.unmount', {  mod_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

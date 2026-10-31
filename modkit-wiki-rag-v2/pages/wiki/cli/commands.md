---
document_id: "c39f9e0672296a2abcd1203497fe62099fa0dd46c48a3380d06541abf625b09b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands"
title: "CLI Command Finder"
section: "wiki/cli"
breadcrumb: ["ModKit Documentation", "Wiki", "CLI"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:59+00:00"
content_sha256: "b862abbaf88a1e8d1df2163e84af9e03687906bfcbcfa27cca518434fe050ef5"
chunk: 1
chunk_count: 1
page_type: "navigation-index"
route: "wiki/cli/commands"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🔍

# CLI Command Finder

All 318 CLI commands on one page. The category pages list commands one category at a time — this searches across all 66 of them at once.

Check the Access column first

Only **`Public`** commands work in shipping builds. `UserCheat` and `ScriptCheat` are cheat-only and become no-ops for players, so a mod that depends on them will silently do nothing.

How to use this

- **Search** covers the command id, its display name, the description *and* the parameter names — so `entity_id` finds every command that takes one.
- **Category** is a dropdown rather than chips because there are 66 of them.
- **Access** narrows to what you can actually ship. Start with `Public`.
- **Hide Experimental** drops the 52 commands tagged `Experimental`; those can change or disappear between builds.
- In the Parameters column, `*` marks a required parameter.

## Calling a command

Every command is invoked the same way, by id, with a parameter object:

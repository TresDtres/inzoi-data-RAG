---
document_id: "e9999f19f65878dd49db81a68d0358d53cb03aa53f9f6d8ada95c8ffaf077166"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-config"
title: "hope.set_config"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:02+00:00"
content_sha256: "51961dc0ee050003d6be5fc20313cd2f266687e59acab283a411f37c6662c741"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/hope/hope-set-config"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the GLOBAL hope generation config (units: seconds). Affects all characters. random_select_cooltime controls auto-select cadence; auto_select_hope_limit/max_hope_size control how many hopes fill. (RefreshInterval/RandomSelectRangeSec are non-functional and intentionally not exposed.)

# Metadata

| FieldValueDisplaySet Hope ConfigCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Hope ConfigCategory`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`hope`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmax_hope_sizeintno—Max simultaneous hope slotsauto_select_hope_limitintno—Max hopes auto-filled by the systemrandom_select_cooltimeintno—Seconds between auto-selects (generation cadence)deselect_cooltimeintno—Default hope lifetime/expiry in secondsreselect_cooltimeintno—Seconds before a used hope can be re-selected |
| --- |
| max_hope_sizeintno—Max simultaneous hope slotsauto_select_hope_limitintno—Max hopes auto-filled by the systemrandom_select_cooltimeintno—Seconds between auto-selects (generation cadence)deselect_cooltimeintno—Default hope lifetime/expiry in secondsreselect_cooltimeintno—Seconds before a used hope can be re-selected |
| auto_select_hope_limitintno—Max hopes auto-filled by the systemrandom_select_cooltimeintno—Seconds between auto-selects (generation cadence)deselect_cooltimeintno—Default hope lifetime/expiry in secondsreselect_cooltimeintno—Seconds before a used hope can be re-selected |
| random_select_cooltimeintno—Seconds between auto-selects (generation cadence)deselect_cooltimeintno—Default hope lifetime/expiry in secondsreselect_cooltimeintno—Seconds before a used hope can be re-selected |
| deselect_cooltimeintno—Default hope lifetime/expiry in secondsreselect_cooltimeintno—Seconds before a used hope can be re-selected |
| reselect_cooltimeintno—Seconds before a used hope can be re-selected |

# Usage

```
await inzoi.cli.execute('hope.set_config', {  max_hope_size: 0, // optional  auto_select_hope_limit: 0, // optional  random_select_cooltime: 0, // optional  deselect_cooltime: 0, // optional  reselect_cooltime: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohope[hope.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-complete)[hope.deselect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect)[hope.deselect_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-deselect-all)[hope.force_update](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-force-update)[hope.get_config](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-get-config)[hope.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-list)[hope.select](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-select)[hope.set_expire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-expire)[hope.set_fix](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/hope/hope-set-fix)

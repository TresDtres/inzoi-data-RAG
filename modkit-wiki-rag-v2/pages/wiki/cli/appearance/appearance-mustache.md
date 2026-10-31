---
document_id: "7ba28fa19bc7c93bc1938dae81b914889caa09df6213a67541016b3d97b92ce6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache"
title: "appearance.mustache"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:44+00:00"
content_sha256: "91ff2d3441738e4c157de767361f31918f20aaaf7a56d3a3cf864631e9441f66"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-mustache"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manage mustache. action=get (default): show current info. add: equip random. change: switch to different. remove: take off.

# Metadata

| FieldValueDisplayMustacheCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplayMustacheCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), add, change, removeidnameno—Specific face hair ID to equip (for add/change). Omit for random. |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), add, change, removeidnameno—Specific face hair ID to equip (for add/change). Omit for random. |
| actionstringnogetget (default), add, change, removeidnameno—Specific face hair ID to equip (for add/change). Omit for random. |
| idnameno—Specific face hair ID to equip (for add/change). Omit for random. |

# Usage

```
await inzoi.cli.execute('appearance.mustache', {  entity_id: 0, // optional  action: 'get', // optional  id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)[appearance.scan_garments](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-scan-garments)

---
document_id: "76d2b059799d98134dd2d45e0a03a2e14bcd0ee334cfef878ca2becf24256f1b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair"
title: "appearance.hair"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:44+00:00"
content_sha256: "a1281c9fe3818b6b11184eb5662bf139919ffe4298d3735c6389f8ec8cb9c38f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-hair"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manage hairstyle. action=get (default): show current hair info. change: switch to random different hairstyle. Hair always exists, so add/remove are not supported.

# Metadata

| FieldValueDisplayHairCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplayHairCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), changeidnameno—Specific hair mesh ID to equip (for change). Omit for random. |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), changeidnameno—Specific hair mesh ID to equip (for change). Omit for random. |
| actionstringnogetget (default), changeidnameno—Specific hair mesh ID to equip (for change). Omit for random. |
| idnameno—Specific hair mesh ID to equip (for change). Omit for random. |

# Usage

```
await inzoi.cli.execute('appearance.hair', {  entity_id: 0, // optional  action: 'get', // optional  id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)[appearance.scan_garments](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-scan-garments)

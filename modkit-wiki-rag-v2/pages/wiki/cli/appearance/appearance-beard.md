---
document_id: "db21a6d601f2c55f3fe3c1c85c06d7afecfb694bc5dea32cabe3be1e42c0f287"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard"
title: "appearance.beard"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:44+00:00"
content_sha256: "13d7cd1a9edde87e9706356df13931825d2e9a75dcb080d4ae9c00d2b6639a7f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-beard"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manage beard. action=get (default): show current info. add: equip random. change: switch to different. remove: take off.

# Metadata

| FieldValueDisplayBeardCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplayBeardCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
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
await inzoi.cli.execute('appearance.beard', {  entity_id: 0, // optional  action: 'get', // optional  id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)[appearance.scan_garments](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-scan-garments)

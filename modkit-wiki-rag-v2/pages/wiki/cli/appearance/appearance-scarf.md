---
document_id: "b7e2fc1b15d8ed5426c6cc577636b91379ad6c68f97c06ef732f6e7d7d7c6ad5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-scarf"
title: "appearance.scarf"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "d62aa3b994b1ab6e6cc77ee7c98124e435d43f8d7f4dd493bc72c7b38ed90925"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-scarf"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manage scarf. action=get (default): show current info. add: equip random. change: switch to different. remove: take off.

# Metadata

| FieldValueDisplayScarfCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplayScarfCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), add, change, removeidnameno—Specific mesh ID to equip (for add/change). Omit for random. |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), add, change, removeidnameno—Specific mesh ID to equip (for add/change). Omit for random. |
| actionstringnogetget (default), add, change, removeidnameno—Specific mesh ID to equip (for add/change). Omit for random. |
| idnameno—Specific mesh ID to equip (for add/change). Omit for random. |

# Usage

```
await inzoi.cli.execute('appearance.scarf', {  entity_id: 0, // optional  action: 'get', // optional  id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)

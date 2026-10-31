---
document_id: "04bcdffcadc80d4fb5771bd919294c2faaa0fa93fa02b15d91511c33aea48f83"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-body-shape"
title: "appearance.set_body_shape"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "3bf7727bf1c6507ab78e78d06e01a2b48c2acb6f47faf9b905f15b7689520c8f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-body-shape"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adjust body shape by named group (e.g. Belly, Arm) or raw parameter index. action=list shows groups, action=get reads values, action=set changes them. Value range: -1.0 to 1.0.

# Metadata

| FieldValueDisplaySet Body ShapeCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplaySet Body ShapeCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnolistlist (default), get, or setgroupstringno—Gizmo group name (e.g. Belly, Arm). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnolistlist (default), get, or setgroupstringno—Gizmo group name (e.g. Belly, Arm). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| actionstringnolistlist (default), get, or setgroupstringno—Gizmo group name (e.g. Belly, Arm). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| groupstringno—Gizmo group name (e.g. Belly, Arm). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| valuefloatno—Shape value: -1.0 to 1.0 |

# Usage

```
await inzoi.cli.execute('appearance.set_body_shape', {  entity_id: 0, // optional  action: 'list', // optional  group: '', // optional  index: 0, // optional  value: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)

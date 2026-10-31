---
document_id: "a2a560b860e3033fdca8010900bf64e0a24a5e48f979657214dc964788fc545e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-face-shape"
title: "appearance.set_face_shape"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "af3b7719dd862da7e47a75f1d0c79097e5611cb1037b450e927f0de031c0c8f4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-face-shape"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adjust face shape by named group (e.g. Nose, Jaw, Eye) or raw parameter index. action=list shows groups, action=get reads values, action=set changes them. Value range: -1.0 to 1.0.

# Metadata

| FieldValueDisplaySet Face ShapeCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplaySet Face ShapeCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnolistlist (default), get, or setgroupstringno—Gizmo group name (e.g. Nose, Jaw). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnolistlist (default), get, or setgroupstringno—Gizmo group name (e.g. Nose, Jaw). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| actionstringnolistlist (default), get, or setgroupstringno—Gizmo group name (e.g. Nose, Jaw). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| groupstringno—Gizmo group name (e.g. Nose, Jaw). Use action=list to see all.indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| indexintno—Raw parameter index (alternative to group)valuefloatno—Shape value: -1.0 to 1.0 |
| valuefloatno—Shape value: -1.0 to 1.0 |

# Usage

```
await inzoi.cli.execute('appearance.set_face_shape', {  entity_id: 0, // optional  action: 'list', // optional  group: '', // optional  index: 0, // optional  value: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)

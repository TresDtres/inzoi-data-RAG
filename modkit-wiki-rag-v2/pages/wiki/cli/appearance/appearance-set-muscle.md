---
document_id: "00adbf947d4d76c5522c47acf7e3676fd218004e2138a758b2e6a5106f5dc930"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-muscle"
title: "appearance.set_muscle"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "cb1475d4759952d88510dd191a2a1ab16675315157faf75d8068886622db2f0d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-muscle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get or set muscle mass. 0.0 = no muscle, 1.0 = max muscle. Use action=get to read current value.

# Metadata

| FieldValueDisplaySet MuscleCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplaySet MuscleCategory`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default) or setvaluefloatno—Muscle mass: 0.0 (none) to 1.0 (max) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default) or setvaluefloatno—Muscle mass: 0.0 (none) to 1.0 (max) |
| actionstringnogetget (default) or setvaluefloatno—Muscle mass: 0.0 (none) to 1.0 (max) |
| valuefloatno—Muscle mass: 0.0 (none) to 1.0 (max) |

# Usage

```
await inzoi.cli.execute('appearance.set_muscle', {  entity_id: 0, // optional  action: 'get', // optional  value: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)

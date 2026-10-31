---
document_id: "ccfec21b54c5ba794e91661913f0eeaceb61ee6a9c361d9f2b11dbc7b9adb8de"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-growth-step"
title: "appearance.set_growth_step"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "1c477e0658430199530238398533fa1314714facc7d94df8f6b132abeef98148"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-growth-step"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Changes the character's growth step by setting their age to the start of that step.

# Metadata

| FieldValueDisplaySet Growth StepCategory`appearance`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Growth StepCategory`appearance`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`appearance`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)growth_stepstringyes—Growth step name: Infant, Toddler, Child, LowTeen, HighTeen, Youth, Adult, Old, Elderly |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)growth_stepstringyes—Growth step name: Infant, Toddler, Child, LowTeen, HighTeen, Youth, Adult, Old, Elderly |
| growth_stepstringyes—Growth step name: Infant, Toddler, Child, LowTeen, HighTeen, Youth, Adult, Old, Elderly |

# Usage

```
await inzoi.cli.execute('appearance.set_growth_step', {  entity_id: 0, // optional  growth_step: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)

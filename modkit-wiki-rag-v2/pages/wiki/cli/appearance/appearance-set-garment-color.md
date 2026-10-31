---
document_id: "01e148908f673ee7d26aedf048dc8dbd399ace322529e730bc1679a4afb80b29"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-garment-color"
title: "appearance.set_garment_color"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "24bc099f36f9f5ea3306e41cfa92946127035fe606b88713fa13d58bc769fa1e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-garment-color"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change a garment's custom color (same path as Character Studio's color picker). garment_type: top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf. color: #RRGGBB / #RRGGBBAA or a named color (red, blue, white, ...). parts_button_index selects between multiple color zones on the same garment (default: 0).

# Metadata

| FieldValueDisplaySet Garment ColorCategory`appearance`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet Garment ColorCategory`appearance`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)garment_typestringyes—Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf)colorstringyes—Color string: #RRGGBB / #RRGGBBAA or named (red, blue, white, ...)parts_button_indexintno—Color zone index on the garment (default: 0; try 0/1/2 if the first zone does nothing)skip_commitboolno—Debug: skip server commit to isolate local-vs-network issues (default: false) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)garment_typestringyes—Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf)colorstringyes—Color string: #RRGGBB / #RRGGBBAA or named (red, blue, white, ...)parts_button_indexintno—Color zone index on the garment (default: 0; try 0/1/2 if the first zone does nothing)skip_commitboolno—Debug: skip server commit to isolate local-vs-network issues (default: false) |
| garment_typestringyes—Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf)colorstringyes—Color string: #RRGGBB / #RRGGBBAA or named (red, blue, white, ...)parts_button_indexintno—Color zone index on the garment (default: 0; try 0/1/2 if the first zone does nothing)skip_commitboolno—Debug: skip server commit to isolate local-vs-network issues (default: false) |
| colorstringyes—Color string: #RRGGBB / #RRGGBBAA or named (red, blue, white, ...)parts_button_indexintno—Color zone index on the garment (default: 0; try 0/1/2 if the first zone does nothing)skip_commitboolno—Debug: skip server commit to isolate local-vs-network issues (default: false) |
| parts_button_indexintno—Color zone index on the garment (default: 0; try 0/1/2 if the first zone does nothing)skip_commitboolno—Debug: skip server commit to isolate local-vs-network issues (default: false) |
| skip_commitboolno—Debug: skip server commit to isolate local-vs-network issues (default: false) |

# Usage

```
await inzoi.cli.execute('appearance.set_garment_color', {  entity_id: 0, // optional  garment_type: '',  color: '',  parts_button_index: 0, // optional  skip_commit: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)

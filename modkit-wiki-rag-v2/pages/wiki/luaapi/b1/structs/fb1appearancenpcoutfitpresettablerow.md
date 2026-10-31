---
document_id: "25cbe95ab266ae4eed810888f056179d322880cc1fdb3bc641bb001deb8f021f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancenpcoutfitpresettablerow"
title: "FB1AppearanceNpcOutfitPresetTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "e565ae02cb759eae318e99855474ae75223f7a832e538a441d2ce356dfd469f0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1appearancenpcoutfitpresettablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining an outfit preset for NPC characters. Includes gender, age, outfit configuration, tags, aging conditions, and random-pick flags.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (8)

| NameTypeDescription`Age``integer`Age applied when this NPC preset is selected.`AgingConditionFlags``integer`Bitmask for valid growth steps during random selection.`CityTags``EB1DiversityCity[]`City tags used for NPC outfit distribution.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender applied when this NPC preset is selected.`OutfitCategoryTags``EB1OutfitCategory[]`Outfit categories used to filter this preset.`OutfitPreset`[`FB1OutfitPresetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitpresetdata)Outfit configuration for this NPC preset.`OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| --- |
| `Age``integer`Age applied when this NPC preset is selected.`AgingConditionFlags``integer`Bitmask for valid growth steps during random selection.`CityTags``EB1DiversityCity[]`City tags used for NPC outfit distribution.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender applied when this NPC preset is selected.`OutfitCategoryTags``EB1OutfitCategory[]`Outfit categories used to filter this preset.`OutfitPreset`[`FB1OutfitPresetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitpresetdata)Outfit configuration for this NPC preset.`OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| `AgingConditionFlags``integer`Bitmask for valid growth steps during random selection.`CityTags``EB1DiversityCity[]`City tags used for NPC outfit distribution.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender applied when this NPC preset is selected.`OutfitCategoryTags``EB1OutfitCategory[]`Outfit categories used to filter this preset.`OutfitPreset`[`FB1OutfitPresetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitpresetdata)Outfit configuration for this NPC preset.`OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| `CityTags``EB1DiversityCity[]`City tags used for NPC outfit distribution.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender applied when this NPC preset is selected.`OutfitCategoryTags``EB1OutfitCategory[]`Outfit categories used to filter this preset.`OutfitPreset`[`FB1OutfitPresetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitpresetdata)Outfit configuration for this NPC preset.`OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| `GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender applied when this NPC preset is selected.`OutfitCategoryTags``EB1OutfitCategory[]`Outfit categories used to filter this preset.`OutfitPreset`[`FB1OutfitPresetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitpresetdata)Outfit configuration for this NPC preset.`OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| `OutfitCategoryTags``EB1OutfitCategory[]`Outfit categories used to filter this preset.`OutfitPreset`[`FB1OutfitPresetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitpresetdata)Outfit configuration for this NPC preset.`OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| `OutfitPreset`[`FB1OutfitPresetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitpresetdata)Outfit configuration for this NPC preset.`OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| `OutfitTags``string[]`Additional tags used for NPC outfit filtering.`bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |
| `bFilterCrowdRandomPick``boolean`Flag indicating whether this preset is excluded from crowd random pick. |

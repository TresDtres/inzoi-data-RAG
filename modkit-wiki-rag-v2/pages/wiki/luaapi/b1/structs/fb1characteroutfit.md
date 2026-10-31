---
document_id: "099e78c79c0a59efea91b8b3dd94e151bfc46cd6aac4afb794acc2daaa8c9221"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1characteroutfit"
title: "FB1CharacterOutfit"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:23+00:00"
content_sha256: "6fe21a31aa1283fc38cdd02d2ea68ff2d4aff144bd25177499b43d2977996246"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1characteroutfit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages a character's layered outfit state, including base style, active style list, and per-category outfits, along with the current base style category.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`ActiveStyleList``FB1StyleSetting[]`Ordered list of active outfit overrides; higher indices override lower ones and the base style for duplicate keys.`AuthorName``string`Author name for the current outfit.`BaseStyle`[`FB1StyleSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stylesetting)Base outfit style applied when no active overrides are present.`BaseStyleCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)The currently active base style category (may change based on weather).`CategorizedStyles``table<EB1OutfitCategory, FB1CategorizedStyleData>`Per-category style settings used for weather/occasion-based outfit switching. Each category can have up to 5 style slots. |
| --- |
| `ActiveStyleList``FB1StyleSetting[]`Ordered list of active outfit overrides; higher indices override lower ones and the base style for duplicate keys.`AuthorName``string`Author name for the current outfit.`BaseStyle`[`FB1StyleSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stylesetting)Base outfit style applied when no active overrides are present.`BaseStyleCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)The currently active base style category (may change based on weather).`CategorizedStyles``table<EB1OutfitCategory, FB1CategorizedStyleData>`Per-category style settings used for weather/occasion-based outfit switching. Each category can have up to 5 style slots. |
| `AuthorName``string`Author name for the current outfit.`BaseStyle`[`FB1StyleSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stylesetting)Base outfit style applied when no active overrides are present.`BaseStyleCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)The currently active base style category (may change based on weather).`CategorizedStyles``table<EB1OutfitCategory, FB1CategorizedStyleData>`Per-category style settings used for weather/occasion-based outfit switching. Each category can have up to 5 style slots. |
| `BaseStyle`[`FB1StyleSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stylesetting)Base outfit style applied when no active overrides are present.`BaseStyleCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)The currently active base style category (may change based on weather).`CategorizedStyles``table<EB1OutfitCategory, FB1CategorizedStyleData>`Per-category style settings used for weather/occasion-based outfit switching. Each category can have up to 5 style slots. |
| `BaseStyleCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)The currently active base style category (may change based on weather).`CategorizedStyles``table<EB1OutfitCategory, FB1CategorizedStyleData>`Per-category style settings used for weather/occasion-based outfit switching. Each category can have up to 5 style slots. |
| `CategorizedStyles``table<EB1OutfitCategory, FB1CategorizedStyleData>`Per-category style settings used for weather/occasion-based outfit switching. Each category can have up to 5 style slots. |

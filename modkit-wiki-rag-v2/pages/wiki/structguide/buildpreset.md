---
document_id: "71ee11fc66116e7630a7ffdb40f03963a8dd157dc6ab1080bbbac1ceeac875ba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/buildpreset"
title: "📘 BuildPreset Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:22+00:00"
content_sha256: "a27287a362da0d2761eeb29e55470c0ad3071583be80cbb2b2b0c298cc757eec"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/buildpreset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1BuildPresetRow

Defines a complete build preset used in house or building placement, including metadata and resource counts.

### Properties

- **Id** (`FName`): Unique identifier for this preset.
- **DisplayNameTextId** (`FString`): Localization key for the name of the preset. *(StringTableKey = "Id")*
- **DescriptionTextId** (`FString`): Localization key for the description. *(StringTableKey = "Id")*
- **PresetAsset** (`TSoftObjectPtr<UDataTable>`): Data table that contains the build components.
- **Icon** (`TSoftObjectPtr<UObject>`): Icon representing the preset. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **BedNum** (`int32`): Number of beds included in the preset.
- **ToiletNum** (`int32`): Number of toilets included in the preset.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoBuild[BuildModePresetCategoryFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/buildmodepresetcategoryfilter)[FB1BuildModeGameObjectData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buildmodegameobjectdata)[FB1BuildModePresetCategoryFilterTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buildmodepresetcategoryfiltertablerow)[FB1BuildPresetRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buildpresetrow)

---
document_id: "dc7a26ebf137c1c2b7b2fbbe65fe3c288f58e07d025b27b761b14611594ff65c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditstability"
title: "📘 CityEditStability Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:23+00:00"
content_sha256: "ebe2020672d9ecebec8be4a52339103d76fff22e15390d5e3beea98de88b723c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/cityeditstability"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CityEditStabilityTableRow

Defines stability values and visual/UI controls for city edit sliders.

### Properties

- **Id** (`FName`): Unique identifier for this stability entry.
- **DisplayTextId** (`FString`): UI label shown for this slider. *(StringTableKey = "Id")*
- **DescriptionTextId** (`FString`): Description shown in tooltips or side panels. *(StringTableKey = "Id")*
- **ModifierInfos** (`TArray<FB1CityEditStabilityModifierInfo>`): Modifiers affecting stability based on decoration, time, etc.
- **DefaultMinRate** (`float`): Default minimum value allowed for this slider.
- **DefaultMaxRate** (`float`): Default maximum value allowed for this slider.
- **DefaultSliderValue** (`float`): Initial slider value (0.0–1.0). *(ClampMin = 0, ClampMax = 1)*
- **bMPCType** (`bool`): If true, this slider modifies a Material Parameter Collection (MPC).
- **MPCParamName** (`FName`): Name of the MPC parameter affected by this slider.

## 📚 References

- [FB1CityEditStabilityModifierInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditstabilitymodifierinfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCity[EB1CityAudioResourceType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1cityaudioresourcetype)[CityAudioResources Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityaudioresources)[CityEdit Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityedit)[CityEditMenu Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditmenu)[CityEditReport Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditreport)[CitySeasonWeather Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityseasonweather)[FB1CityAudioResourcesTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityaudioresourcestablerow)[FB1CityEditChangeList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditchangelist)[FB1CityEditChangeListInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditchangelistinfo)[FB1CityEditLowQualityChangeList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditlowqualitychangelist)[FB1CityEditMenu](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditmenu)[FB1CityEditMenuSubTab](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditmenusubtab)

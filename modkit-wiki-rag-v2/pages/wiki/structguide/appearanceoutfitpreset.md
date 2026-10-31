---
document_id: "8c3f88b72f0f7ad90295cd8ea8377f0c98cf557ceb0d4b3a285e6e6040e9690f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceoutfitpreset"
title: "📘 AppearanceOutfitPreset Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:19+00:00"
content_sha256: "b21e69e20e382a74550ba5568701bdd14c19ca3416b180391ee140153b5e40b1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearanceoutfitpreset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Outfit presets are split into two row types: one for player-facing presets and one for NPC/crowd generation.

## 🧩 Struct: FB1AppearancePlayerOutfitPresetTableRow

Preset outfits offered to the player in character customization.

### Properties

- **Id** (`FName`): Unique identifier for this outfit preset entry.
- **SubCategories** (`TArray<FName>`): Sub-category ids this preset is listed under.
- **GenderType** (`EB1GenderType`): Gender this outfit applies to.
- **Age** (`int32`): Approximate age value associated with this preset.
- **Tags** (`TArray<FName>`): Free-form tags used for filtering.
- **HiddenFromUI** (`bool`): If true, the preset is not shown in the customization UI.
- **IsLockedItem** (`bool`): If true, the preset requires unlocking.
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Categories this preset belongs to.

## 🧩 Struct: FB1AppearanceNpcOutfitPresetTableRow

Preset outfits used when generating NPCs and crowds.

### Properties

- **Id** (`FName`): Unique identifier for this outfit preset entry.
- **GenderType** (`EB1GenderType`): Gender this outfit applies to.
- **Age** (`int32`): Approximate age value associated with this preset.
- **AgingConditionFlags** (`int32`): Bitmask of growth stages this preset supports. *(BitmaskEnum = EB1GrowthStep)*
- **CityTags** (`TArray<EB1DiversityCity>`): Cities / diversity regions where this outfit is used.
- **bFilterCrowdRandomPick** (`bool`): If true, excluded from random crowd assignment.
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Categories this preset belongs to.
- **OutfitTags** (`TArray<FName>`): Free-form tags used for filtering.

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1DiversityCity](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1diversitycity)
- [EB1OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1outfitcategory)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)

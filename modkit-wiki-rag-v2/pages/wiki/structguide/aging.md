---
document_id: "5a3fa9a9aa3a37fbed1dd04a96cb0db56da7656a3507f0a2275036ae1c7a6450"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/aging"
title: "📘 Aging Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:16+00:00"
content_sha256: "0ac5d4dc2f10f5f5a9d1312dcc06d709f7381b235f4e437b11aa3182e8054df5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/aging"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AgingTableRow

A table row struct that stores data for each aging stage. It includes information such as stat ranges, appearance presets, taxes, and more for each age stage.

### Properties

- **Id** (`FName`): Unique identifier for this aging entry. *(L10N_Name = DisplayTextId, L10N_Desc = DescTextId)*
- **DisplayTextId** (`FString`): Localization key for the display name. *(StringTableKey = "Id")*
- **DescTextId** (`FString`): Localization key for the age stage description. *(StringTableKey = "Id")*
- **TimeToNextAge** (`int32`): Time in seconds required to transition to the next growth stage.
- **StatMax** (`float`): Maximum stat value reachable during this age stage.
- **StatMin** (`float`): Minimum stat value for this age stage.
- **NPCStatMin** (`float`): Minimum stat value for NPCs in this age stage.
- **ContentAvailableSlot** (`TMap<FString, int32>`): Map defining available content slots for this age stage..
- **AppearancePreset** (`TMap<EB1GenderType, FName>`): Preset appearances based on gender type.
- **StandardWeight** (`TMap<EB1GenderType, float>`): Standard weight based on gender type.
- **TaxPerPerson** (`int32`): Tax amount per person in this age stage.

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAging[FB1AgingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1agingtablerow)

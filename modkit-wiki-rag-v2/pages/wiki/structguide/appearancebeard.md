---
document_id: "e11996ed1e723e364e8ad0eb40f669bb828e91cbfe11f7a6a77a3f839353a225"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard"
title: "📘 AppearanceBeard Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:17+00:00"
content_sha256: "4c883aa641cdec3a81708a74d4f343e4e700405ff78bfebeaa403bf85e7de1c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancebeard"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceBeardTableRow

Defines a beard mesh appearance entry with display settings, gender/age filters, and remapping for UI and customization.

### Properties

- **Id** (`FName`): Unique identifier for the appearance entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image shown in the UI for this appearance option. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description of this appearance. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender that this appearance is valid for (e.g., Male, Female).
- **BodyAgeType** (`EB1BodyAgeType`): Body age group that this appearance is valid for.
- **SubCategories** (`TArray<FName>`): List of subcategory IDs used to filter this appearance in UI. *(Foreign = "GarmentSubCategory.Id")*
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh asset used for this beard appearance.
- **bHiddenFromUI** (`bool`): If true, this appearance is hidden from UI menus.
- **PartsId** (`FName`): Part ID associated with this beard (e.g., for logic grouping or replacement).
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Map of alternate appearance IDs to use when gender is changed. *(Foreign = "AppearanceBeard.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Map of alternate appearance IDs to use when body age changes. *(Foreign = "AppearanceBeard.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)

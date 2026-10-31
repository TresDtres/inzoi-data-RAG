---
document_id: "0bdbc2672de4fbc571907bde717e7e58a08de9101ba2d7c40c323424da24f27a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/map"
title: "📘 Map Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:52+00:00"
content_sha256: "654de842e0b4b1a4dbef68707d67114557b02d0fa5308914a5e0ed94ac75a6f9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/map"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1MapTableRow

Defines information about a playable map or world, including metadata, visual assets, currency, and localization.

### Properties

- **Id** (`FName`): Unique identifier for this map.
- **LevelName** (`FName`): Name of the game level or persistent level used.
- **NameTextId** (`FString`): Localization key for the map's display name. *(StringTableKey)*
- **DescriptionTextId** (`FString`): Localization key for the map's description text. *(StringTableKey)*
- **CharacterNameFormat** (`EB1CharacterNameFormatType`): Naming convention for characters in this map (e.g., FirstNameLastName, or LastNameFirstName).
- **CurrencyId** (`FName`): Currency used in this map. *(Foreign = "Currency.Id")*
- **MapImg** (`TSoftObjectPtr<UObject>`): Image asset used to represent this map in the UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **bRelease** (`bool`): If true, this map is available in released builds.
- **EducationDtId** (`FName`): Education table associated with this map. *(Foreign = "Education.Id")*
- **bBuildWorld** (`bool`): If true, this map supports user world editing/building.
- **bSkipCheckParkingStation** (`bool`): If true, skips parking station checks during validation process.
- **DlcId** (`FName`): Identifier for the DLC this map belongs to.

## 📚 References

- [EB1CharacterNameFormatType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1characternameformattype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMap[EB1MapNavigatorMenuType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1mapnavigatormenutype)[MapNavigatorMainMenu Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mapnavigatormainmenu)[FB1MapNavigatorMainMenuInfoTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mapnavigatormainmenuinfotablerow)[FB1MapNavigatorSubMenuInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mapnavigatorsubmenuinfo)[FB1MapTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1maptablerow)

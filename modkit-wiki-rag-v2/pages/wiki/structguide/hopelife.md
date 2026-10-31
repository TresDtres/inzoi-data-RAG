---
document_id: "4fe07ea9ffb850a2629178f4c19ee37cb40a703e2e9b2ad6c63c5f39205b2e18"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/hopelife"
title: "📘 HopeLife Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:49+00:00"
content_sha256: "bd9c3a644d8f2216f81977c7fbad493ec3ca8cb7654f137a16cd10cb747a0123"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/hopelife"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1HopeLifeTableRow

Defines a broad "life hope" concept used for long-term aspirations, often visualized in UI or trait systems.

### Properties

- **Id** (`FName`): Unique identifier for the life hope.
- **Image** (`TSoftObjectPtr<UObject>`): Image displayed for this hope. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **TitleTextId** (`FString`): UI title. *(StringTableKey)*
- **DescriptionTextId** (`FString`): Main description text. *(StringTableKey)*
- **InfoTextId** (`FString`): Additional detail or tooltip text. *(StringTableKey)*
- **LinkedTraitId** (`FName`): Trait associated with this life hope. *(Foreign = "TraitHopeLife.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoHope[Hope Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/hope)[FB1HopeLifeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopelifetablerow)[FB1HopeSlotDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopeslotdefine)[FB1HopeSlotInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopeslotinfo)[FB1HopeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopetablerow)

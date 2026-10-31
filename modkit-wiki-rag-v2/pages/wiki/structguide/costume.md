---
document_id: "eb36f2a11b191f013ad168d49ad12265a810ef59d8fd2c5172f14b594d035956"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/costume"
title: "📘 Costume Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:24+00:00"
content_sha256: "d8b81cd4549bf812792a0c873757d1049bd254b0c9803f1ed5d5d106a9217e03"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/costume"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CostumeTableRow

Defines a complete costume set, including costume tags and per-gender/age configuration.

### Properties

- **Id** (`FName`): Unique identifier for the costume.
- **CostumeTags** (`TArray<FName>`): List of tags associated with this costume (used for filtering or logic).
- **CostumeInfo** (`TArray<FB1CostumeInfo>`): List of costume configurations filtered by gender and age. *(Category = Body)*

## 📚 References

- [FB1CostumeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1costumeinfo)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCostume[CostumeEditParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/costumeeditparts)[FB1CostumeEditPartsTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1costumeeditpartstablerow)[FB1CostumeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1costumeinfo)[FB1CostumeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1costumetablerow)

---
document_id: "884cd47233af70600c38bcf0e999eeeff489edbbbbaf3814aec847529d9df28c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sku"
title: "📘 Sku Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:04+00:00"
content_sha256: "1aae646cc30edd7da0d289c1f546a1b44d486fb919e0ccf6b0ffcfce0e733f49"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/sku"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SkuTableRow

Defines a store product (SKU), typically bundling multiple appearance preset items for sale or presentation.

### Properties

- **Id** (`FName`): Unique identifier for the SKU.
- **DescriptionTextId** (`FString`): Localized description for this SKU. *(StringTableKey)*
- **ItemIds** (`TArray<FName>`): IDs of bundled appearance items. *(Foreign = "AppearancePreset.Id")*
- **Categories** (`TArray<FString>`): UI or filter categories this SKU belongs to.
- **GenderType** (`TArray<FString>`): Genders this SKU supports.
- **BodyType** (`TArray<FString>`): Body types associated with this SKU.
- **GrowthStep** (`TArray<FString>`): Growth stages supported by this SKU.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSku[FB1SkuTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skutablerow)

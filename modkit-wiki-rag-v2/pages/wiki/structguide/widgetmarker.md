---
document_id: "7fc5933be2ec735fcb56cec50eebc3404d9de8c1cf70df1059021a96dfe71d77"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/widgetmarker"
title: "📘 WidgetMarker Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:59+00:00"
content_sha256: "ad5d2dd21afff01ac1d34f33180e335f9968510614ec7a0338e4d0c5f645faf0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/widgetmarker"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1WidgetMarkerTableRow

Defines visual markers shown in the UI for widget-based interactions.

### Properties

- **Id** (`FName`): Unique identifier for the marker.
- **DisplayNameTextId** (`FString`): Localized name shown for the marker. *(StringTableKey = "Id")*
- **ColorId** (`FName`): Color mapping ID for the marker. *(Foreign = "ColorMapping.Id")*
- **IconId** (`FName`): Icon asset for the marker. *(Foreign = "B1Texture2D.Id")*
- **bIsKarmaIcon** (`bool`): If true, this marker is used in the karma system.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoWidget[EB1WidgetCreationType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1widgetcreationtype)[FB1WidgetMarkerTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1widgetmarkertablerow)

---
document_id: "86ecc656dfa1ef46851c847d29a1f45cb6de2d3d0e92d28ce798f15aa0bbb45d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dlcuiinfotablerow"
title: "FB1DLCUIInfoTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:42+00:00"
content_sha256: "cea566778667c954486b1015ae6545c07e804e3b1e4b218374e3f50a026f9a72"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1dlcuiinfotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DLC information that must be included in the base game. Used when the game needs to display DLC info even without the DLC installed. Table row containing base-game DLC display information such as title, icon, and display order. Used to show DLC content in the base game even when the DLC is not installed.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`DisplayOrder``integer`Relative display order among DLC items. Higher values appear earlier. Assign sequentially from 1 per release order.`DisplayTextId``string`Localized DLC title text ID (e.g., "Island Getaway").`Icon``UObject`Soft reference to the unique icon asset for this DLC (e.g., a palm tree icon). |
| --- |
| `DisplayOrder``integer`Relative display order among DLC items. Higher values appear earlier. Assign sequentially from 1 per release order.`DisplayTextId``string`Localized DLC title text ID (e.g., "Island Getaway").`Icon``UObject`Soft reference to the unique icon asset for this DLC (e.g., a palm tree icon). |
| `DisplayTextId``string`Localized DLC title text ID (e.g., "Island Getaway").`Icon``UObject`Soft reference to the unique icon asset for this DLC (e.g., a palm tree icon). |
| `Icon``UObject`Soft reference to the unique icon asset for this DLC (e.g., a palm tree icon). |

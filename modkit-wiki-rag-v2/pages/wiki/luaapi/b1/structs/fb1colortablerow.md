---
document_id: "cbcf7865e8b381ba8897c94c373de61e0cd86df0976055cba88aad202576ab36"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1colortablerow"
title: "FB1ColorTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:31+00:00"
content_sha256: "02b7d9476166bcbc973a52a8dac985e4cd95259cb02e03ab329b2a5c24790a83"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1colortablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row storing a hex color string and its computed linear color value for use in the UI color system.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`ColorString``string`Hex color string (e.g., "FF0000FF") used to define the color.`VisibleColor``FLinearColor`Computed linear color value derived from ColorString; updated automatically on load and edit. |
| --- |
| `ColorString``string`Hex color string (e.g., "FF0000FF") used to define the color.`VisibleColor``FLinearColor`Computed linear color value derived from ColorString; updated automatically on load and edit. |
| `VisibleColor``FLinearColor`Computed linear color value derived from ColorString; updated automatically on load and edit. |

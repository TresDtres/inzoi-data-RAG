---
document_id: "337ffbd65e794781bca979bde5558229097c6e8796e3fac45f9867cd4c73749d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dreamtablerow"
title: "FB1DreamTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:45+00:00"
content_sha256: "26130c17e2c9f84183bb666210548792e89db46813fa9d307cf218bd60723dd2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1dreamtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a dream entry with aging condition flags and the dream pool selection info used to pick dreams for a character.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`AgingConditionFlags``integer`Bitmask of aging/growth step conditions required for this dream to be valid.`DreamInfo`[`FB1DreamInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dreaminfo)Dream pool selection info used to determine which dream pool to use. |
| --- |
| `AgingConditionFlags``integer`Bitmask of aging/growth step conditions required for this dream to be valid.`DreamInfo`[`FB1DreamInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dreaminfo)Dream pool selection info used to determine which dream pool to use. |
| `DreamInfo`[`FB1DreamInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dreaminfo)Dream pool selection info used to determine which dream pool to use. |

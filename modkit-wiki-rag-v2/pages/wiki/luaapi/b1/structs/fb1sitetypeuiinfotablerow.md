---
document_id: "f0bd3eb3c990f34dd09c3550f5f5b7cf0e184187b79da9d701ff9790ee108f7f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitetypeuiinfotablerow"
title: "FB1SiteTypeUIInfoTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:29+00:00"
content_sha256: "009d773bbd595085b7966f0cd0fb036d74c35f253c0e32e2aec5a59d0205f55d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1sitetypeuiinfotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a site type UI info table row. Associates a site type with its per-state UI info entries and filter configuration.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`FilterInfo`[`FB1SiteTypeFilterInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitetypefilterinfo)Filter display info for this site type in the map filter UI.`Infos``FB1SiteTypeUIInfo[]`List of UI info entries, one per site state.`SiteType`[`EB1SiteType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1sitetype)Site type this table row defines UI info for. |
| --- |
| `FilterInfo`[`FB1SiteTypeFilterInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitetypefilterinfo)Filter display info for this site type in the map filter UI.`Infos``FB1SiteTypeUIInfo[]`List of UI info entries, one per site state.`SiteType`[`EB1SiteType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1sitetype)Site type this table row defines UI info for. |
| `Infos``FB1SiteTypeUIInfo[]`List of UI info entries, one per site state.`SiteType`[`EB1SiteType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1sitetype)Site type this table row defines UI info for. |
| `SiteType`[`EB1SiteType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1sitetype)Site type this table row defines UI info for. |

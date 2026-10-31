---
document_id: "50fba86c03eb6e6d7471740afd4726180522c1112c0a1f8c4a2d8e140f71b7a1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitedetailinfotablerow"
title: "FB1SiteDetailInfoTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:26+00:00"
content_sha256: "9331aa61892988128582e53bbfd5bfb6b0377d764211ec6f4c048ceba61a40dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1sitedetailinfotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a site detail info table row. Specifies resident capacity limits and the list of required objects for this site type.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`RequiredObjects``FB1SiteRequiredObjectInfo[]`List of required object entries that must be placed in this site.`ResidentMaxCount``integer`Maximum number of residents this site can accommodate.`ResidentMinCount``integer`Minimum number of residents required to occupy this site. |
| --- |
| `RequiredObjects``FB1SiteRequiredObjectInfo[]`List of required object entries that must be placed in this site.`ResidentMaxCount``integer`Maximum number of residents this site can accommodate.`ResidentMinCount``integer`Minimum number of residents required to occupy this site. |
| `ResidentMaxCount``integer`Maximum number of residents this site can accommodate.`ResidentMinCount``integer`Minimum number of residents required to occupy this site. |
| `ResidentMinCount``integer`Minimum number of residents required to occupy this site. |

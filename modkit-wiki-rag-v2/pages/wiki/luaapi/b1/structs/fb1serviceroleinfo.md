---
document_id: "b0c1135e63c6cdfa411e9b3a09571ae0b4d71e00e6e0215f534ab6a0e05604da"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1serviceroleinfo"
title: "FB1ServiceRoleInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:22+00:00"
content_sha256: "a76530491db1293e3f971c11fe721975e72ecd54a13122b265c34fc6f6cabcd3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1serviceroleinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-role configuration for a service definition, specifying the role ID, timeline, and company/job constraints.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`CompanyId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The optional company ID used to qualify or restrict candidates for this role.`JobId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The optional job ID used to qualify or restrict candidates for this role.`ServiceRoleId``string`The service role identifier (e.g., clerk, driver) for this role slot.`TimelineId``string`The timeline ID bound to this role for executing its sequence. |
| --- |
| `CompanyId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The optional company ID used to qualify or restrict candidates for this role.`JobId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The optional job ID used to qualify or restrict candidates for this role.`ServiceRoleId``string`The service role identifier (e.g., clerk, driver) for this role slot.`TimelineId``string`The timeline ID bound to this role for executing its sequence. |
| `JobId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The optional job ID used to qualify or restrict candidates for this role.`ServiceRoleId``string`The service role identifier (e.g., clerk, driver) for this role slot.`TimelineId``string`The timeline ID bound to this role for executing its sequence. |
| `ServiceRoleId``string`The service role identifier (e.g., clerk, driver) for this role slot.`TimelineId``string`The timeline ID bound to this role for executing its sequence. |
| `TimelineId``string`The timeline ID bound to this role for executing its sequence. |

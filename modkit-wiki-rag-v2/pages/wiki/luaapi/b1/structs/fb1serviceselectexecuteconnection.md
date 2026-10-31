---
document_id: "153176df0252c0ca03d6bb33ea81cf56bd3e8a92cfc1e05be52eac5b5e78ecc1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1serviceselectexecuteconnection"
title: "FB1ServiceSelectExecuteConnection"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:22+00:00"
content_sha256: "138f18346e29bda7c01a695f1d92df41e573c9a6b76225e356d54157f7b0f68c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1serviceselectexecuteconnection"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Links a service selection context to its corresponding execution context for correlation tracking.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`ExecuteContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The context ID for the execution phase of this service.`SelectContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The context ID for the selection phase of this service.`ServiceId``string`The service ID shared by both the select and execute contexts. |
| --- |
| `ExecuteContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The context ID for the execution phase of this service.`SelectContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The context ID for the selection phase of this service.`ServiceId``string`The service ID shared by both the select and execute contexts. |
| `SelectContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The context ID for the selection phase of this service.`ServiceId``string`The service ID shared by both the select and execute contexts. |
| `ServiceId``string`The service ID shared by both the select and execute contexts. |

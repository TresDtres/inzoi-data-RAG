---
document_id: "c716e4fb38871e6923ddd9814f9ac24f989880a9dfb059d3eef7e14d58b6ff5b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1serviceselectcontext"
title: "FB1ServiceSelectContext"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:22+00:00"
content_sha256: "e59c43b2b4dc5cd5bb823586840e610a7b3a9e8e3f863e3bafb3d8d747e79372"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1serviceselectcontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Context for the selection phase of a service, carrying the context ID and request details. Correlates selection work and bridges from FB1ServiceRequestContext to the execution phase.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`ContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The unique context ID for this selection scope, stable for its lifetime.`ServiceId``string`The ID of the service being selected.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where the service takes place.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service request. |
| --- |
| `ContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The unique context ID for this selection scope, stable for its lifetime.`ServiceId``string`The ID of the service being selected.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where the service takes place.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service request. |
| `ServiceId``string`The ID of the service being selected.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where the service takes place.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service request. |
| `SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where the service takes place.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service request. |
| `TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service request. |

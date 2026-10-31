---
document_id: "242451c48a15315aec150859b93f644a2cf4a8e53ffff3f226a3f9c0e82a0d49"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1serviceexecutecontext"
title: "FB1ServiceExecuteContext"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:22+00:00"
content_sha256: "cceba64dfd2eb1a05537f2998408a8b6b9270e47f25362d131110d07ed4e6242"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1serviceexecutecontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Context for the execution phase of a service, including executing entities and timeout policy. Tracks and correlates all runtime operations for one logical service execution scope.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`ContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The unique context ID for this execution scope, stable for its lifetime.`ExecutingEntityIds``FB1EntityId[]`The list of entity IDs currently executing roles in this service.`ServiceId``string`The ID of the service being executed.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where this service is executing.`TimeOutTicks``integer`The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service.`bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |
| --- |
| `ContextId`[`FB1ServiceContextId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1servicecontextid)The unique context ID for this execution scope, stable for its lifetime.`ExecutingEntityIds``FB1EntityId[]`The list of entity IDs currently executing roles in this service.`ServiceId``string`The ID of the service being executed.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where this service is executing.`TimeOutTicks``integer`The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service.`bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |
| `ExecutingEntityIds``FB1EntityId[]`The list of entity IDs currently executing roles in this service.`ServiceId``string`The ID of the service being executed.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where this service is executing.`TimeOutTicks``integer`The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service.`bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |
| `ServiceId``string`The ID of the service being executed.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where this service is executing.`TimeOutTicks``integer`The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service.`bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |
| `SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site where this service is executing.`TimeOutTicks``integer`The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service.`bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |
| `TimeOutTicks``integer`The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.`TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service.`bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |
| `TriggerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the entity that triggered this service.`bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |
| `bPendingFinish``boolean`Whether this execution context is waiting to be finalized. |

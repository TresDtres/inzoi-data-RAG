---
document_id: "44e22054979c587c42fcc635c8140601cfe02e948d772459148e52ce358dff33"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceexecutecontext"
title: "B1ServiceExecuteContext"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:37+00:00"
content_sha256: "77daf2897a96efdaceb819f67061e3c944bbc5aeeddd7bf935504eeb4c441016"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1serviceexecutecontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Context for the execution phase of a service, including executing entities and timeout policy. * Tracks and correlates all runtime operations for one logical service execution scope.

| PropertyTypeDescriptionMetadataServiceIdFNameThe ID of the service being executed.TriggerEntityIdFB1EntityIdThe entity ID of the entity that triggered this service.SiteEntityIdFB1EntityIdThe entity ID of the site where this service is executing.ExecutingEntityIdsTArrayThe list of entity IDs currently executing roles in this service.ContextIdFB1ServiceContextIdThe unique context ID for this execution scope, stable for its lifetime.TimeOutTicksint64The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.bPendingFinishboolWhether this execution context is waiting to be finalized. |
| --- |
| ServiceIdFNameThe ID of the service being executed.TriggerEntityIdFB1EntityIdThe entity ID of the entity that triggered this service.SiteEntityIdFB1EntityIdThe entity ID of the site where this service is executing.ExecutingEntityIdsTArrayThe list of entity IDs currently executing roles in this service.ContextIdFB1ServiceContextIdThe unique context ID for this execution scope, stable for its lifetime.TimeOutTicksint64The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.bPendingFinishboolWhether this execution context is waiting to be finalized. |
| TriggerEntityIdFB1EntityIdThe entity ID of the entity that triggered this service.SiteEntityIdFB1EntityIdThe entity ID of the site where this service is executing.ExecutingEntityIdsTArrayThe list of entity IDs currently executing roles in this service.ContextIdFB1ServiceContextIdThe unique context ID for this execution scope, stable for its lifetime.TimeOutTicksint64The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.bPendingFinishboolWhether this execution context is waiting to be finalized. |
| SiteEntityIdFB1EntityIdThe entity ID of the site where this service is executing.ExecutingEntityIdsTArrayThe list of entity IDs currently executing roles in this service.ContextIdFB1ServiceContextIdThe unique context ID for this execution scope, stable for its lifetime.TimeOutTicksint64The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.bPendingFinishboolWhether this execution context is waiting to be finalized. |
| ExecutingEntityIdsTArrayThe list of entity IDs currently executing roles in this service.ContextIdFB1ServiceContextIdThe unique context ID for this execution scope, stable for its lifetime.TimeOutTicksint64The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.bPendingFinishboolWhether this execution context is waiting to be finalized. |
| ContextIdFB1ServiceContextIdThe unique context ID for this execution scope, stable for its lifetime.TimeOutTicksint64The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.bPendingFinishboolWhether this execution context is waiting to be finalized. |
| TimeOutTicksint64The timeout in game ticks; use INSTANT_TIMEOUT or NO_TIMEOUT sentinel values for special cases.bPendingFinishboolWhether this execution context is waiting to be finalized. |
| bPendingFinishboolWhether this execution context is waiting to be finalized. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoService[EB1ServiceVisitType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1servicevisittype)[Service Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/service)[FB1ServiceContextId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicecontextid)[FB1ServicePriceSatisfactionRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicepricesatisfactionrange)[FB1ServiceRoleInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceroleinfo)[FB1ServiceSelectContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceselectcontext)[FB1ServiceSelectExecuteConnection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceselectexecuteconnection)[FB1ServiceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicetablerow)[FB1ServiceVehicleDescriptionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicevehicledescriptioninfo)

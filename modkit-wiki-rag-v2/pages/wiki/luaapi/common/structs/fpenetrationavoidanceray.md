---
document_id: "d950d171c64be46a8fba933ae9ccfe08456986c8164aa366e021ec0a85ab6994"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/common/structs/fpenetrationavoidanceray"
title: "FPenetrationAvoidanceRay"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:47:45+00:00"
content_sha256: "4074237f15685dbaaad6094c50c60d034570833512a890c50683e94cb23c4f96"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/common/structs/fpenetrationavoidanceray"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Struct defining a feeler ray used for camera penetration avoidance.

# Metadata

| FieldValueKind`struct`EnvironmentCommon / EngineCategory`structs` |
| --- |
| Kind`struct`EnvironmentCommon / EngineCategory`structs` |
| EnvironmentCommon / EngineCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`AdjustmentRot``FRotator`FRotator describing deviance from main ray`FramesUntilNextTrace``integer`number of frames since this feeler was used`Radius``number`extent to use for collision when tracing this feeler`TraceInterval``integer`minimum frame interval between traces with this feeler if nothing was hit last frame`WorldWeight``number`how much this feeler affects the final position if it hits the world`bEnabled``boolean``bPrimaryRay``boolean` |
| --- |
| `AdjustmentRot``FRotator`FRotator describing deviance from main ray`FramesUntilNextTrace``integer`number of frames since this feeler was used`Radius``number`extent to use for collision when tracing this feeler`TraceInterval``integer`minimum frame interval between traces with this feeler if nothing was hit last frame`WorldWeight``number`how much this feeler affects the final position if it hits the world`bEnabled``boolean``bPrimaryRay``boolean` |
| `FramesUntilNextTrace``integer`number of frames since this feeler was used`Radius``number`extent to use for collision when tracing this feeler`TraceInterval``integer`minimum frame interval between traces with this feeler if nothing was hit last frame`WorldWeight``number`how much this feeler affects the final position if it hits the world`bEnabled``boolean``bPrimaryRay``boolean` |
| `Radius``number`extent to use for collision when tracing this feeler`TraceInterval``integer`minimum frame interval between traces with this feeler if nothing was hit last frame`WorldWeight``number`how much this feeler affects the final position if it hits the world`bEnabled``boolean``bPrimaryRay``boolean` |
| `TraceInterval``integer`minimum frame interval between traces with this feeler if nothing was hit last frame`WorldWeight``number`how much this feeler affects the final position if it hits the world`bEnabled``boolean``bPrimaryRay``boolean` |
| `WorldWeight``number`how much this feeler affects the final position if it hits the world`bEnabled``boolean``bPrimaryRay``boolean` |
| `bEnabled``boolean``bPrimaryRay``boolean` |
| `bPrimaryRay``boolean` |

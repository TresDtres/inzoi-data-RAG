---
document_id: "f7038ebe46f0dbc0b33278b50965e75b0ad9cd42f674fc9cf57b76cc3d99e902"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleownercontext"
title: "FB1VehicleOwnerContext"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:47+00:00"
content_sha256: "b2bb3869ba8fda626c4979b8c9d7bfcf49574fd892418c142194e814640db854"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vehicleownercontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Tracks ownership context for a vehicle, including owner entity, ownerless flag, and stolen driving state.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who owns this vehicle.`bIsOwnerlessVehicle``boolean`True if this vehicle has no owner (e.g., a public or rental vehicle).`bIsStolenDriving``boolean`True if the vehicle is being driven by someone other than the owner without permission. |
| --- |
| `OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who owns this vehicle.`bIsOwnerlessVehicle``boolean`True if this vehicle has no owner (e.g., a public or rental vehicle).`bIsStolenDriving``boolean`True if the vehicle is being driven by someone other than the owner without permission. |
| `bIsOwnerlessVehicle``boolean`True if this vehicle has no owner (e.g., a public or rental vehicle).`bIsStolenDriving``boolean`True if the vehicle is being driven by someone other than the owner without permission. |
| `bIsStolenDriving``boolean`True if the vehicle is being driven by someone other than the owner without permission. |

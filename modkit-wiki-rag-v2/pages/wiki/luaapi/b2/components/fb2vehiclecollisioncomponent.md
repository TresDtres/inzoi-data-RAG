---
document_id: "66cb60a05d8ba01524cb8881618bb1e1394372e6a49c3dbccd5ba5d44d8434dc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2vehiclecollisioncomponent"
title: "FB2VehicleCollisionComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:16+00:00"
content_sha256: "01d5515d1683ed85d5ccf319fb974c346c3765700944fdcd04a6305b5f7141e1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2vehiclecollisioncomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that handles vehicle collision.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleCollisionComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleCollisionComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleCollisionComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleCollisionComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleCollisionComponent')` |
| Require`require('Components.B2VehicleCollisionComponent')` |

# Properties (1)

| NameTypeDescription`CollidedEntityMap``table<FB1EntityId, any>`UPROPERTY(Transient) |
| --- |
| `CollidedEntityMap``table<FB1EntityId, any>`UPROPERTY(Transient) |

# Functions (1)

| FunctionParametersReturnsDescription`ClearCollidedEntity``-``-`Clears Collided Entity. |
| --- |
| `ClearCollidedEntity``-``-`Clears Collided Entity. |

# Override points (1)

Implement these in Lua as `FB2VehicleCollisionComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ClearCollidedEntity``-``-`Clears Collided Entity. |
| --- |
| `Override_ClearCollidedEntity``-``-`Clears Collided Entity. |

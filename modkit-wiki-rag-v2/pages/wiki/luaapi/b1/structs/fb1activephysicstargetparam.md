---
document_id: "42abbfa682650b928c0030dd7264e624dc9ee8cb19e75b07d62db053422c390f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activephysicstargetparam"
title: "FB1ActivePhysicsTargetParam"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "6244e0ae7eb6cee6595c92e11e8b0ebe22e6a1b0568bb7cf76f8aa5ce49b2bfa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1activephysicstargetparam"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-target entry pairing an active-physics object entity with the physics params to apply to it. Sent (as a list) from B1 to B2 so B2 drives the object's physics.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`ActivePhysicsLifecycleRevision``integer`B2-authoritative lifecycle revision echoed by B1 sleep notifications. B1 request packets leave this as zero.`GameObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target game object that receives the physics impulse.`PhysicsParam`[`FB1ActivePhysicsParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activephysicsparam)Physics spawn/launch parameters applied to this target.`bReapplyImpulse``boolean`If true, allows B2 to re-apply a new impulse instead of rejecting it even when the target is already in ActivePhysics (rolling). Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false). |
| --- |
| `ActivePhysicsLifecycleRevision``integer`B2-authoritative lifecycle revision echoed by B1 sleep notifications. B1 request packets leave this as zero.`GameObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target game object that receives the physics impulse.`PhysicsParam`[`FB1ActivePhysicsParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activephysicsparam)Physics spawn/launch parameters applied to this target.`bReapplyImpulse``boolean`If true, allows B2 to re-apply a new impulse instead of rejecting it even when the target is already in ActivePhysics (rolling). Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false). |
| `GameObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target game object that receives the physics impulse.`PhysicsParam`[`FB1ActivePhysicsParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activephysicsparam)Physics spawn/launch parameters applied to this target.`bReapplyImpulse``boolean`If true, allows B2 to re-apply a new impulse instead of rejecting it even when the target is already in ActivePhysics (rolling). Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false). |
| `PhysicsParam`[`FB1ActivePhysicsParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activephysicsparam)Physics spawn/launch parameters applied to this target.`bReapplyImpulse``boolean`If true, allows B2 to re-apply a new impulse instead of rejecting it even when the target is already in ActivePhysics (rolling). Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false). |
| `bReapplyImpulse``boolean`If true, allows B2 to re-apply a new impulse instead of rejecting it even when the target is already in ActivePhysics (rolling). Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false). |

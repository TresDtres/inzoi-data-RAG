---
document_id: "615dafb6fcbadaf050e29c04a69b7f39570287d25656d89482a5c399ff9bd408"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activephysicstargetparam"
title: "B1ActivePhysicsTargetParam"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:08+00:00"
content_sha256: "25bada22526d99c8572d63076c67d3c810cb6285b990fd4d56e05d301c4aa816"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1activephysicstargetparam"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Per-target entry pairing an active-physics object entity with the physics params to apply to it. * Sent (as a list) from B1 to B2 so B2 drives the object's physics.

| PropertyTypeDescriptionMetadataGameObjectEntityIdFB1EntityIdEntity ID of the target game object that receives the physics impulse.PhysicsParamFB1ActivePhysicsParamPhysics spawn/launch parameters applied to this target.bReapplyImpulseboolIf true, B2 does not reject the request even when the target is already in ActivePhysics (rolling); it passes the occupancy/attach gate and reapplies a fresh impulse. Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false).ActivePhysicsLifecycleRevisionuint32B2-authoritative lifecycle revision echoed by B1 sleep notifications. B1 request packets leave this as zero. |
| --- |
| GameObjectEntityIdFB1EntityIdEntity ID of the target game object that receives the physics impulse.PhysicsParamFB1ActivePhysicsParamPhysics spawn/launch parameters applied to this target.bReapplyImpulseboolIf true, B2 does not reject the request even when the target is already in ActivePhysics (rolling); it passes the occupancy/attach gate and reapplies a fresh impulse. Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false).ActivePhysicsLifecycleRevisionuint32B2-authoritative lifecycle revision echoed by B1 sleep notifications. B1 request packets leave this as zero. |
| PhysicsParamFB1ActivePhysicsParamPhysics spawn/launch parameters applied to this target.bReapplyImpulseboolIf true, B2 does not reject the request even when the target is already in ActivePhysics (rolling); it passes the occupancy/attach gate and reapplies a fresh impulse. Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false).ActivePhysicsLifecycleRevisionuint32B2-authoritative lifecycle revision echoed by B1 sleep notifications. B1 request packets leave this as zero. |
| bReapplyImpulseboolIf true, B2 does not reject the request even when the target is already in ActivePhysics (rolling); it passes the occupancy/attach gate and reapplies a fresh impulse. Set only by intentional kicks (B1AnimNotify_KickObject). The walk-into overlap path keeps the default (false).ActivePhysicsLifecycleRevisionuint32B2-authoritative lifecycle revision echoed by B1 sleep notifications. B1 request packets leave this as zero. |
| ActivePhysicsLifecycleRevisionuint32B2-authoritative lifecycle revision echoed by B1 sleep notifications. B1 request packets leave this as zero. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoActive[FB1ActiveCalendarEventSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activecalendareventschedule)[FB1ActiveInteractionEffectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activeinteractioneffecttablerow)[FB1ActiveInteractionProfileTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activeinteractionprofiletablerow)[FB1ActivePhysicsParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activephysicsparam)[FB1ActiveWorldCalendarEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activeworldcalendarevent)

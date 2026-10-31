---
document_id: "07d96545fc827f377de0d85a3d0478157c583a6cca1b9628f8da5c6c840bc2bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2actor"
title: "FB2Actor"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:29+00:00"
content_sha256: "e5e93ab7d4f2622c6af103408cb7c4a3d4d05117060d9be18272bef888b04298"
chunk: 19
chunk_count: 19
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2actor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

e`DeltaTime: `number``-` |
| `SetRelativeTransformOnlySimul`InTransform: `FTransform`, bRefreshWorldTransform: `boolean``-`Sets Relative Transform Only Simul.`SetRescuing`bInRescuing: `boolean``-`Sets Rescuing.`SetRotationOnlySimul`InRotation: `FRotator``-`Sets Rotation Only Simul.`StopAllAnimInstance``-``-`Stops All Anim Instance.`UdpateAnimInstance`DeltaTime: `number``-` |
| `SetRescuing`bInRescuing: `boolean``-`Sets Rescuing.`SetRotationOnlySimul`InRotation: `FRotator``-`Sets Rotation Only Simul.`StopAllAnimInstance``-``-`Stops All Anim Instance.`UdpateAnimInstance`DeltaTime: `number``-` |
| `SetRotationOnlySimul`InRotation: `FRotator``-`Sets Rotation Only Simul.`StopAllAnimInstance``-``-`Stops All Anim Instance.`UdpateAnimInstance`DeltaTime: `number``-` |
| `StopAllAnimInstance``-``-`Stops All Anim Instance.`UdpateAnimInstance`DeltaTime: `number``-` |
| `UdpateAnimInstance`DeltaTime: `number``-` |

# Override points (8)

Implement these in Lua as `FB2Actor.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddHowling`InHowlingDtId: `string`, InHowlingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Manages AttachedHowling.`Override_ApplyDeferredChildRelativeTransform``-``-`Applies Deferred Child Relative Transform.`Override_GenerateAnimInstance`InPlayingComponentName: `string``-`Generates Anim Instance.`Override_RemoveHowling`InHowlingDtId: `string``-`Removes Howling.`Override_RequestAddChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAttachRule: [`EB1EntityAttachRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1entityattachrule), InExtraRelativeTransform: `FTransform``boolean`Requests Add Child Entity.`Override_RequestRemoveChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Remove Child Entity.`Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| --- |
| `Override_AddHowling`InHowlingDtId: `string`, InHowlingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Manages AttachedHowling.`Override_ApplyDeferredChildRelativeTransform``-``-`Applies Deferred Child Relative Transform.`Override_GenerateAnimInstance`InPlayingComponentName: `string``-`Generates Anim Instance.`Override_RemoveHowling`InHowlingDtId: `string``-`Removes Howling.`Override_RequestAddChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAttachRule: [`EB1EntityAttachRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1entityattachrule), InExtraRelativeTransform: `FTransform``boolean`Requests Add Child Entity.`Override_RequestRemoveChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Remove Child Entity.`Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| `Override_ApplyDeferredChildRelativeTransform``-``-`Applies Deferred Child Relative Transform.`Override_GenerateAnimInstance`InPlayingComponentName: `string``-`Generates Anim Instance.`Override_RemoveHowling`InHowlingDtId: `string``-`Removes Howling.`Override_RequestAddChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAttachRule: [`EB1EntityAttachRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1entityattachrule), InExtraRelativeTransform: `FTransform``boolean`Requests Add Child Entity.`Override_RequestRemoveChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Remove Child Entity.`Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| `Override_GenerateAnimInstance`InPlayingComponentName: `string``-`Generates Anim Instance.`Override_RemoveHowling`InHowlingDtId: `string``-`Removes Howling.`Override_RequestAddChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAttachRule: [`EB1EntityAttachRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1entityattachrule), InExtraRelativeTransform: `FTransform``boolean`Requests Add Child Entity.`Override_RequestRemoveChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Remove Child Entity.`Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| `Override_RemoveHowling`InHowlingDtId: `string``-`Removes Howling.`Override_RequestAddChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAttachRule: [`EB1EntityAttachRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1entityattachrule), InExtraRelativeTransform: `FTransform``boolean`Requests Add Child Entity.`Override_RequestRemoveChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Remove Child Entity.`Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| `Override_RequestAddChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAttachRule: [`EB1EntityAttachRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1entityattachrule), InExtraRelativeTransform: `FTransform``boolean`Requests Add Child Entity.`Override_RequestRemoveChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Remove Child Entity.`Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| `Override_RequestRemoveChildEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Remove Child Entity.`Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| `Override_StopAllAnimInstance``-``-`Stops All Anim Instance.`Override_UdpateAnimInstance`DeltaTime: `number``-` |
| `Override_UdpateAnimInstance`DeltaTime: `number``-` |

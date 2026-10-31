---
document_id: "e0a9af275493015e98b963e240e6ef3b7d8ad2c58ed75165f1269865ee3df21b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent"
title: "UB1AnimPlayerComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:34+00:00"
content_sha256: "7559f5ae4a7427c78b42c5e93e65383e8a35a87128247a1dde6863417c74e5cc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/components/ub1animplayercomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- B1 actor component responsible for animation playback.

# Metadata

| FieldValueKind`component`EnvironmentB1 - PresentationCategory`components`Extends`UActorComponent`Require`require('Components.B1AnimPlayerComponent')` |
| --- |
| Kind`component`EnvironmentB1 - PresentationCategory`components`Extends`UActorComponent`Require`require('Components.B1AnimPlayerComponent')` |
| EnvironmentB1 - PresentationCategory`components`Extends`UActorComponent`Require`require('Components.B1AnimPlayerComponent')` |
| Category`components`Extends`UActorComponent`Require`require('Components.B1AnimPlayerComponent')` |
| Extends`UActorComponent`Require`require('Components.B1AnimPlayerComponent')` |
| Require`require('Components.B1AnimPlayerComponent')` |

# Functions (4)

| FunctionParametersReturnsDescription`IsLoadingComplete`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Returns whether Loading Complete.`PlayAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Plays Anim.`StopAllAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops All Anim.`StopAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops Anim. |
| --- |
| `IsLoadingComplete`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Returns whether Loading Complete.`PlayAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Plays Anim.`StopAllAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops All Anim.`StopAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops Anim. |
| `PlayAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Plays Anim.`StopAllAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops All Anim.`StopAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops Anim. |
| `StopAllAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops All Anim.`StopAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops Anim. |
| `StopAnim`Self: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent)`-`Stops Anim. |

# Override points (4)

Implement these in Lua as `UB1AnimPlayerComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnMontageBlendingOut`Montage: `Montage`, bInterrupted: `bInterrupted``-`Callback invoked on Montage Blending Out.`Override_OnMontageEnded`Montage: `Montage`, bInterrupted: `bInterrupted``-`Callback invoked on Montage Ended.`Override_PlayAnim`InAnimId: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent), InSectionName: `InSectionName`, InOwnerEntityId: `InOwnerEntityId`, InTargetEntityId: `InTargetEntityId`, InAnimTag: `InAnimTag`, InPosition: `InPosition`, bInWithMotionWarp: `bInWithMotionWarp`, bInWithoutBlend: `bInWithoutBlend``-`Plays Anim.`Override_StopAllAnim``-``-`Stops All Anim. |
| --- |
| `Override_OnMontageBlendingOut`Montage: `Montage`, bInterrupted: `bInterrupted``-`Callback invoked on Montage Blending Out.`Override_OnMontageEnded`Montage: `Montage`, bInterrupted: `bInterrupted``-`Callback invoked on Montage Ended.`Override_PlayAnim`InAnimId: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent), InSectionName: `InSectionName`, InOwnerEntityId: `InOwnerEntityId`, InTargetEntityId: `InTargetEntityId`, InAnimTag: `InAnimTag`, InPosition: `InPosition`, bInWithMotionWarp: `bInWithMotionWarp`, bInWithoutBlend: `bInWithoutBlend``-`Plays Anim.`Override_StopAllAnim``-``-`Stops All Anim. |
| `Override_OnMontageEnded`Montage: `Montage`, bInterrupted: `bInterrupted``-`Callback invoked on Montage Ended.`Override_PlayAnim`InAnimId: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent), InSectionName: `InSectionName`, InOwnerEntityId: `InOwnerEntityId`, InTargetEntityId: `InTargetEntityId`, InAnimTag: `InAnimTag`, InPosition: `InPosition`, bInWithMotionWarp: `bInWithMotionWarp`, bInWithoutBlend: `bInWithoutBlend``-`Plays Anim.`Override_StopAllAnim``-``-`Stops All Anim. |
| `Override_PlayAnim`InAnimId: [`UB1AnimPlayerComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1animplayercomponent), InSectionName: `InSectionName`, InOwnerEntityId: `InOwnerEntityId`, InTargetEntityId: `InTargetEntityId`, InAnimTag: `InAnimTag`, InPosition: `InPosition`, bInWithMotionWarp: `bInWithMotionWarp`, bInWithoutBlend: `bInWithoutBlend``-`Plays Anim.`Override_StopAllAnim``-``-`Stops All Anim. |
| `Override_StopAllAnim``-``-`Stops All Anim. |

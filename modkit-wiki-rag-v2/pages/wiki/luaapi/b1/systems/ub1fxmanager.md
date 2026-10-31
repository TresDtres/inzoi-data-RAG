---
document_id: "5b4347c43f89e56c93eb69f86d8b26bae2a64c9525bfe2e55c89a5d53e026cf5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1fxmanager"
title: "UB1FXManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:55+00:00"
content_sha256: "8d1a589b782d6a282ebc2d98249e11215d1e88534f023abe2a990c4debeb65ff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/ub1fxmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- B1 manager for FX (effects).

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1FXManager')` |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1FXManager')` |
| EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1FXManager')` |
| Category`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1FXManager')` |
| Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1FXManager')` |
| Require`require('Framework.B1FXManager')` |

# Properties (1)

| NameTypeDescription`PreloadedPlumbobFxAssets``any[]` |
| --- |
| `PreloadedPlumbobFxAssets``any[]` |

# Functions (5)

| FunctionParametersReturnsDescription`PlayFXAtLocation`FXClassPath: `string`, Position: `FVector``-`Plays FXAt Location.`ResetTimeScale``-``-`Resets Time Scale.`SetFXVisible``-``-`Sets FXVisible.`SetTimeScale``-``-`Sets Time Scale.`StopFX``-``-`Stops FX. |
| --- |
| `PlayFXAtLocation`FXClassPath: `string`, Position: `FVector``-`Plays FXAt Location.`ResetTimeScale``-``-`Resets Time Scale.`SetFXVisible``-``-`Sets FXVisible.`SetTimeScale``-``-`Sets Time Scale.`StopFX``-``-`Stops FX. |
| `ResetTimeScale``-``-`Resets Time Scale.`SetFXVisible``-``-`Sets FXVisible.`SetTimeScale``-``-`Sets Time Scale.`StopFX``-``-`Stops FX. |
| `SetFXVisible``-``-`Sets FXVisible.`SetTimeScale``-``-`Sets Time Scale.`StopFX``-``-`Stops FX. |
| `SetTimeScale``-``-`Sets Time Scale.`StopFX``-``-`Stops FX. |
| `StopFX``-``-`Stops FX. |

# Override points (4)

Implement these in Lua as `UB1FXManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ForceSetTimeScale`InFXHandleId: `InFXHandleId`, TimeScale: `TimeScale``-``Override_ResetTimeScale`InFXHandleId: `InFXHandleId``-`Resets Time Scale.`Override_SetFXVisible`bVisible: `bVisible``-`Sets FXVisible.`Override_StopFX`InWorldContext: `InWorldContext`, InFXHandleId: `InFXHandleId`, bImmediate: `bImmediate``-`Stops FX. |
| --- |
| `Override_ForceSetTimeScale`InFXHandleId: `InFXHandleId`, TimeScale: `TimeScale``-``Override_ResetTimeScale`InFXHandleId: `InFXHandleId``-`Resets Time Scale.`Override_SetFXVisible`bVisible: `bVisible``-`Sets FXVisible.`Override_StopFX`InWorldContext: `InWorldContext`, InFXHandleId: `InFXHandleId`, bImmediate: `bImmediate``-`Stops FX. |
| `Override_ResetTimeScale`InFXHandleId: `InFXHandleId``-`Resets Time Scale.`Override_SetFXVisible`bVisible: `bVisible``-`Sets FXVisible.`Override_StopFX`InWorldContext: `InWorldContext`, InFXHandleId: `InFXHandleId`, bImmediate: `bImmediate``-`Stops FX. |
| `Override_SetFXVisible`bVisible: `bVisible``-`Sets FXVisible.`Override_StopFX`InWorldContext: `InWorldContext`, InFXHandleId: `InFXHandleId`, bImmediate: `bImmediate``-`Stops FX. |
| `Override_StopFX`InWorldContext: `InWorldContext`, InFXHandleId: `InFXHandleId`, bImmediate: `bImmediate``-`Stops FX. |

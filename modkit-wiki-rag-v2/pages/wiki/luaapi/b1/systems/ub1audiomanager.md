---
document_id: "76db41f5ea22c0e33a4916e6792e5d6aa4a55ab9d85afdf67e009b995598abb4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1audiomanager"
title: "UB1AudioManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:54+00:00"
content_sha256: "3688942eb6552fd24da13e3297f89fac45faa0c37c92478523a12ddc90376f97"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/ub1audiomanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- B1 manager for audio (sound/BGM).

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1AudioManager')` |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1AudioManager')` |
| EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1AudioManager')` |
| Category`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1AudioManager')` |
| Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase)Require`require('Framework.B1AudioManager')` |
| Require`require('Framework.B1AudioManager')` |

# Properties (4)

| NameTypeDescription`CachedLoadingAudioComponent``any``ControlledSound2DDatas``FB1ControlledSound2DData[]``PausableAudioComponents``any[]``SoundCacheMap``table<string, any>` |
| --- |
| `CachedLoadingAudioComponent``any``ControlledSound2DDatas``FB1ControlledSound2DData[]``PausableAudioComponents``any[]``SoundCacheMap``table<string, any>` |
| `ControlledSound2DDatas``FB1ControlledSound2DData[]``PausableAudioComponents``any[]``SoundCacheMap``table<string, any>` |
| `PausableAudioComponents``any[]``SoundCacheMap``table<string, any>` |
| `SoundCacheMap``table<string, any>` |

# Functions (4)

| FunctionParametersReturnsDescription`PlaySound2D`AudioId: `string``-`Plays Sound2 D.`PlaySoundAtLocation`AudioId: `string`, Position: `FVector``-`Plays Sound At Location.`SetVolumeMix``-``-`Sets Volume Mix.`SpawnSoundAtLocation`AudioId: `string`, Position: `FVector``-`Spawns Sound At Location. |
| --- |
| `PlaySound2D`AudioId: `string``-`Plays Sound2 D.`PlaySoundAtLocation`AudioId: `string`, Position: `FVector``-`Plays Sound At Location.`SetVolumeMix``-``-`Sets Volume Mix.`SpawnSoundAtLocation`AudioId: `string`, Position: `FVector``-`Spawns Sound At Location. |
| `PlaySoundAtLocation`AudioId: `string`, Position: `FVector``-`Plays Sound At Location.`SetVolumeMix``-``-`Sets Volume Mix.`SpawnSoundAtLocation`AudioId: `string`, Position: `FVector``-`Spawns Sound At Location. |
| `SetVolumeMix``-``-`Sets Volume Mix.`SpawnSoundAtLocation`AudioId: `string`, Position: `FVector``-`Spawns Sound At Location. |
| `SpawnSoundAtLocation`AudioId: `string`, Position: `FVector``-`Spawns Sound At Location. |

# Override points (3)

Implement these in Lua as `UB1AudioManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_PlaySound2D`InAudioId: `string``-`Plays Sound2 D.`Override_PlaySoundAtLocation`InOwner: `string`, InAudioId: `FVector`, InLocation: `InLocation`, InRotation: `InRotation``-`Plays Sound At Location.`Override_SetVolumeMix`InGroupType: `InGroupType`, InVolumeValue: `InVolumeValue``-`Sets Volume Mix. |
| --- |
| `Override_PlaySound2D`InAudioId: `string``-`Plays Sound2 D.`Override_PlaySoundAtLocation`InOwner: `string`, InAudioId: `FVector`, InLocation: `InLocation`, InRotation: `InRotation``-`Plays Sound At Location.`Override_SetVolumeMix`InGroupType: `InGroupType`, InVolumeValue: `InVolumeValue``-`Sets Volume Mix. |
| `Override_PlaySoundAtLocation`InOwner: `string`, InAudioId: `FVector`, InLocation: `InLocation`, InRotation: `InRotation``-`Plays Sound At Location.`Override_SetVolumeMix`InGroupType: `InGroupType`, InVolumeValue: `InVolumeValue``-`Sets Volume Mix. |
| `Override_SetVolumeMix`InGroupType: `InGroupType`, InVolumeValue: `InVolumeValue``-`Sets Volume Mix. |

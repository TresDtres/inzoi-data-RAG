---
document_id: "974b109f4357719f9c30c020920a9dd69a40db9fa7a2487f96b12d0e54f35ed4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1simulationconfigdataasset"
title: "UB1SimulationConfigDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:15+00:00"
content_sha256: "d3c35bf2f13be6488174d879b52fc40211060ea907e5c7bc9596c03fac4a59f3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1simulationconfigdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset for simulation system configuration, controlling PIE overrides and data export options.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (8)

| NameTypeDescription`CameraFocusForceUpdateTime``number``CameraFocusStopSpeed``number``CameraFocusStopWaitTime``number``CameraFocusTeleportJumpDistance``number`Camera focus jump distance (cm) within a single simulation tick that is treated as a teleport, forcing an immediate focus update; 0 disables it.`PIE_OverrideLevelNameWhenSimulationLevel``FSoftObjectPath`The world level to load instead of the simulation level when running in PIE.`SiteDataSkipOption``integer`Bitmask of site data export options to skip during extraction.`bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| --- |
| `CameraFocusForceUpdateTime``number``CameraFocusStopSpeed``number``CameraFocusStopWaitTime``number``CameraFocusTeleportJumpDistance``number`Camera focus jump distance (cm) within a single simulation tick that is treated as a teleport, forcing an immediate focus update; 0 disables it.`PIE_OverrideLevelNameWhenSimulationLevel``FSoftObjectPath`The world level to load instead of the simulation level when running in PIE.`SiteDataSkipOption``integer`Bitmask of site data export options to skip during extraction.`bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| `CameraFocusStopSpeed``number``CameraFocusStopWaitTime``number``CameraFocusTeleportJumpDistance``number`Camera focus jump distance (cm) within a single simulation tick that is treated as a teleport, forcing an immediate focus update; 0 disables it.`PIE_OverrideLevelNameWhenSimulationLevel``FSoftObjectPath`The world level to load instead of the simulation level when running in PIE.`SiteDataSkipOption``integer`Bitmask of site data export options to skip during extraction.`bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| `CameraFocusStopWaitTime``number``CameraFocusTeleportJumpDistance``number`Camera focus jump distance (cm) within a single simulation tick that is treated as a teleport, forcing an immediate focus update; 0 disables it.`PIE_OverrideLevelNameWhenSimulationLevel``FSoftObjectPath`The world level to load instead of the simulation level when running in PIE.`SiteDataSkipOption``integer`Bitmask of site data export options to skip during extraction.`bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| `CameraFocusTeleportJumpDistance``number`Camera focus jump distance (cm) within a single simulation tick that is treated as a teleport, forcing an immediate focus update; 0 disables it.`PIE_OverrideLevelNameWhenSimulationLevel``FSoftObjectPath`The world level to load instead of the simulation level when running in PIE.`SiteDataSkipOption``integer`Bitmask of site data export options to skip during extraction.`bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| `PIE_OverrideLevelNameWhenSimulationLevel``FSoftObjectPath`The world level to load instead of the simulation level when running in PIE.`SiteDataSkipOption``integer`Bitmask of site data export options to skip during extraction.`bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| `SiteDataSkipOption``integer`Bitmask of site data export options to skip during extraction.`bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| `bExtractAndPlay_PIE``boolean`Whether to extract and use fresh data on PIE start rather than pre-saved data; recommended true unless testing packaged data.`bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |
| `bLoadAlreadyExistNewGameJson``boolean`Whether to reuse a previously extracted NewGame.json; strongly recommended to keep false. |

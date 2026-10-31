---
document_id: "59c831a15123bcae48100415775a23f04a8dc3cef56a01148e7ef7fb84140e94"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2aoisystem"
title: "FB2AOISystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:56+00:00"
content_sha256: "08c401aadb8c794d45946194cec090bbabb2d988d5854d119cddcb518414b178"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2aoisystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Area-of-interest (AOI) system.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AOISystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AOISystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AOISystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AOISystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2AOISystem')` |
| Require`require('Systems.FB2AOISystem')` |

# Properties (5)

| NameTypeDescription`AOICenterLocation``FVector``GameCameraLocation``FVector``GridAuraInfos``table<FIntVector2, FB2AuraInfoSet>`Only for range-finding; each Entity manages the lifetime of its own Aura.`GridInfos``table<FIntVector2, FB2AOIGridInfo>`Considers 2D only for now; must handle entity despawn.`LastCenterCoord``FIntVector2`static FB2AOISystem* Subsystem; virtual void Initialize(FSubsystemCollectionBase& Collection) override { Subsystem = this; } |
| --- |
| `AOICenterLocation``FVector``GameCameraLocation``FVector``GridAuraInfos``table<FIntVector2, FB2AuraInfoSet>`Only for range-finding; each Entity manages the lifetime of its own Aura.`GridInfos``table<FIntVector2, FB2AOIGridInfo>`Considers 2D only for now; must handle entity despawn.`LastCenterCoord``FIntVector2`static FB2AOISystem* Subsystem; virtual void Initialize(FSubsystemCollectionBase& Collection) override { Subsystem = this; } |
| `GameCameraLocation``FVector``GridAuraInfos``table<FIntVector2, FB2AuraInfoSet>`Only for range-finding; each Entity manages the lifetime of its own Aura.`GridInfos``table<FIntVector2, FB2AOIGridInfo>`Considers 2D only for now; must handle entity despawn.`LastCenterCoord``FIntVector2`static FB2AOISystem* Subsystem; virtual void Initialize(FSubsystemCollectionBase& Collection) override { Subsystem = this; } |
| `GridAuraInfos``table<FIntVector2, FB2AuraInfoSet>`Only for range-finding; each Entity manages the lifetime of its own Aura.`GridInfos``table<FIntVector2, FB2AOIGridInfo>`Considers 2D only for now; must handle entity despawn.`LastCenterCoord``FIntVector2`static FB2AOISystem* Subsystem; virtual void Initialize(FSubsystemCollectionBase& Collection) override { Subsystem = this; } |
| `GridInfos``table<FIntVector2, FB2AOIGridInfo>`Considers 2D only for now; must handle entity despawn.`LastCenterCoord``FIntVector2`static FB2AOISystem* Subsystem; virtual void Initialize(FSubsystemCollectionBase& Collection) override { Subsystem = this; } |
| `LastCenterCoord``FIntVector2`static FB2AOISystem* Subsystem; virtual void Initialize(FSubsystemCollectionBase& Collection) override { Subsystem = this; } |

# Functions (12)

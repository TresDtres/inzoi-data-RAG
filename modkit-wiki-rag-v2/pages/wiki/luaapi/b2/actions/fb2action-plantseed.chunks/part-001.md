---
document_id: "95a1cc32e91f0b4707d0f43fa3985a63667ee2481cffc79937477428d1865200"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-plantseed"
title: "FB2Action_PlantSeed"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:04+00:00"
content_sha256: "74719f270e45312acd0a4fb6f93e3527fb73d9486dd82029be59aa3d121fc07b"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-plantseed"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PlantSeed action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlantSeed')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlantSeed')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlantSeed')` |
| Category`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlantSeed')` |
| Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlantSeed')` |
| Require`require('Actions.B2Action_PlantSeed')` |

# Properties (6)

| NameTypeDescription`CropId``string`Crop id resolved from the seed, passed through to soil planting`ObjectCategoryId``string`Object category id resolved from the seed, passed through to soil planting`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data resolved from the seed, passed through to soil planting`SeedObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the seed object currently grabbed in the character's hand`SeedObjectId``string`Seed table id resolved from the grabbed seed object, used to plant and to consume the seed on finish`SeedPlantingMode`[`EB1SeedPlantingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seedplantingmode)Planting mode resolved from the seed table row, validated before the action is allowed to proceed |
| --- |
| `CropId``string`Crop id resolved from the seed, passed through to soil planting`ObjectCategoryId``string`Object category id resolved from the seed, passed through to soil planting`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data resolved from the seed, passed through to soil planting`SeedObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the seed object currently grabbed in the character's hand`SeedObjectId``string`Seed table id resolved from the grabbed seed object, used to plant and to consume the seed on finish`SeedPlantingMode`[`EB1SeedPlantingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seedplantingmode)Planting mode resolved from the seed table row, validated before the action is allowed to proceed |
| `ObjectCategoryId``string`Object category id resolved from the seed, passed through to soil planting`OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data resolved from the seed, passed through to soil planting`SeedObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the seed object currently grabbed in the character's hand`SeedObjectId``string`Seed table id resolved from the grabbed seed object, used to plant and to consume the seed on finish`SeedPlantingMode`[`EB1SeedPlantingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seedplantingmode)Planting mode resolved from the seed table row, validated before the action is allowed to proceed |
| `OwnershipData`[`FB1OwnershipData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata)Ownership data resolved from the seed, passed through to soil planting`SeedObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the seed object currently grabbed in the character's hand`SeedObjectId``string`Seed table id resolved from the grabbed seed object, used to plant and to consume the seed on finish`SeedPlantingMode`[`EB1SeedPlantingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seedplantingmode)Planting mode resolved from the seed table row, validated before the action is allowed to proceed |
| `SeedObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the seed object currently grabbed in the character's hand`SeedObjectId``string`Seed table id resolved from the grabbed seed object, used to plant and to consume the seed on finish`SeedPlantingMode`[`EB1SeedPlantingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seedplantingmode)Planting mode resolved from the seed table row, validated before the action is allowed to proceed |
| `SeedObjectId``string`Seed table id resolved from the grabbed seed object, used to plant and to consume the seed on finish`SeedPlantingMode`[`EB1SeedPlantingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seedplantingmode)Planting mode resolved from the seed table row, validated before the action is allowed to proceed |
| `SeedPlantingMode`[`EB1SeedPlantingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seedplantingmode)Planting mode resolved from the seed table row, validated before the action is allowed to proceed |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_PlantSeed.Override_Name = function(...) end`.

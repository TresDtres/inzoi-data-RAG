---
document_id: "0cd21291542ba6c0c1a8d82b940ab54a4d9f9d71a6ce9252514f07d11f19c3f4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2vehiclenavigationcomponent"
title: "FB2VehicleNavigationComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:16+00:00"
content_sha256: "d2f2ee24a169d768489414d594fafaf9f69744557dfd010f9414b00ad7d0495f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2vehiclenavigationcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that handles vehicle navigation.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleNavigationComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleNavigationComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleNavigationComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleNavigationComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2VehicleNavigationComponent')` |
| Require`require('Components.B2VehicleNavigationComponent')` |

# Properties (6)

| NameTypeDescription`AutoDrivingInteractionQueueId``integer``AutoSkipTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`KeyIndex``integer``NavigationPath`[`FB1CityGraphPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpath)`Vehicle``any`UPROPERTY(Transient)`bUseAutoDrivingPopup``boolean` |
| --- |
| `AutoDrivingInteractionQueueId``integer``AutoSkipTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`KeyIndex``integer``NavigationPath`[`FB1CityGraphPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpath)`Vehicle``any`UPROPERTY(Transient)`bUseAutoDrivingPopup``boolean` |
| `AutoSkipTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`KeyIndex``integer``NavigationPath`[`FB1CityGraphPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpath)`Vehicle``any`UPROPERTY(Transient)`bUseAutoDrivingPopup``boolean` |
| `KeyIndex``integer``NavigationPath`[`FB1CityGraphPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpath)`Vehicle``any`UPROPERTY(Transient)`bUseAutoDrivingPopup``boolean` |
| `NavigationPath`[`FB1CityGraphPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpath)`Vehicle``any`UPROPERTY(Transient)`bUseAutoDrivingPopup``boolean` |
| `Vehicle``any`UPROPERTY(Transient)`bUseAutoDrivingPopup``boolean` |
| `bUseAutoDrivingPopup``boolean` |

# Functions (7)

| FunctionParametersReturnsDescription`CheckSkippable`OutResult: [`FB2NavigationSkipResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2navigationskipresult)[`EB1VehicleNavigationSkipResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehiclenavigationskipresult)Checks Skippable.`GetAutoDrivingInteractionQueueId``-``integer`Returns Auto Driving Interaction Queue Id.`Quit`InReason: [`EB1AutoDrivingStopReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1autodrivingstopreason)`-``ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Restart``-``boolean``SetAutoDrivingInteractionQueueId`InQueueId: `integer``-`Sets Auto Driving Interaction Queue Id.`Skip``-``-` |
| --- |
| `CheckSkippable`OutResult: [`FB2NavigationSkipResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2navigationskipresult)[`EB1VehicleNavigationSkipResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehiclenavigationskipresult)Checks Skippable.`GetAutoDrivingInteractionQueueId``-``integer`Returns Auto Driving Interaction Queue Id.`Quit`InReason: [`EB1AutoDrivingStopReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1autodrivingstopreason)`-``ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Restart``-``boolean``SetAutoDrivingInteractionQueueId`InQueueId: `integer``-`Sets Auto Driving Interaction Queue Id.`Skip``-``-` |
| `GetAutoDrivingInteractionQueueId``-``integer`Returns Auto Driving Interaction Queue Id.`Quit`InReason: [`EB1AutoDrivingStopReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1autodrivingstopreason)`-``ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Restart``-``boolean``SetAutoDrivingInteractionQueueId`InQueueId: `integer``-`Sets Auto Driving Interaction Queue Id.`Skip``-``-` |
| `Quit`InReason: [`EB1AutoDrivingStopReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1autodrivingstopreason)`-``ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Restart``-``boolean``SetAutoDrivingInteractionQueueId`InQueueId: `integer``-`Sets Auto Driving Interaction Queue Id.`Skip``-``-` |
| `ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Restart``-``boolean``SetAutoDrivingInteractionQueueId`InQueueId: `integer``-`Sets Auto Driving Interaction Queue Id.`Skip``-``-` |
| `Restart``-``boolean``SetAutoDrivingInteractionQueueId`InQueueId: `integer``-`Sets Auto Driving Interaction Queue Id.`Skip``-``-` |
| `SetAutoDrivingInteractionQueueId`InQueueId: `integer``-`Sets Auto Driving Interaction Queue Id.`Skip``-``-` |
| `Skip``-``-` |

# Override points (4)

Implement these in Lua as `FB2VehicleNavigationComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Quit`InReason: [`EB1AutoDrivingStopReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1autodrivingstopreason)`-``Override_ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Override_Restart``-``boolean``Override_Skip``-``-` |
| --- |
| `Override_Quit`InReason: [`EB1AutoDrivingStopReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1autodrivingstopreason)`-``Override_ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Override_Restart``-``boolean``Override_Skip``-``-` |
| `Override_ResetAutoSkipTask``-``-`Resets Auto Skip Task.`Override_Restart``-``boolean``Override_Skip``-``-` |
| `Override_Restart``-``boolean``Override_Skip``-``-` |
| `Override_Skip``-``-` |

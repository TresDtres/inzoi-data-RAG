---
document_id: "066192c22e6a2dd71db0215363d371726b89bb1352cc9891c7bbc71af5a72bdf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2stuckcomponent"
title: "FB2StuckComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:15+00:00"
content_sha256: "798ce46f936c454ca348552646488a9acd7b3377d53fefdf4e0e4ae5bd8093a6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2stuckcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that detects/handles character stuck state.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2StuckComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2StuckComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2StuckComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2StuckComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2StuckComponent')` |
| Require`require('Components.B2StuckComponent')` |

# Properties (11)

| NameTypeDescription`AutonomyFailedInteractionBagId``string``CheckCoolTime_Alert``integer`Config`CheckCoolTime_CantAction``integer``LastExecutedTime_Alert``FDateTime`Not Save`LastExecutedTime_CantAction``FDateTime``MainCurrencyId``string``Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| --- |
| `AutonomyFailedInteractionBagId``string``CheckCoolTime_Alert``integer`Config`CheckCoolTime_CantAction``integer``LastExecutedTime_Alert``FDateTime`Not Save`LastExecutedTime_CantAction``FDateTime``MainCurrencyId``string``Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `CheckCoolTime_Alert``integer`Config`CheckCoolTime_CantAction``integer``LastExecutedTime_Alert``FDateTime`Not Save`LastExecutedTime_CantAction``FDateTime``MainCurrencyId``string``Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `CheckCoolTime_CantAction``integer``LastExecutedTime_Alert``FDateTime`Not Save`LastExecutedTime_CantAction``FDateTime``MainCurrencyId``string``Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `LastExecutedTime_Alert``FDateTime`Not Save`LastExecutedTime_CantAction``FDateTime``MainCurrencyId``string``Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `LastExecutedTime_CantAction``FDateTime``MainCurrencyId``string``Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `MainCurrencyId``string``Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `Thresholds_AutonomyTime``integer``Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `Thresholds_CurrencySalvation``integer``Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `Thresholds_FamilyRelationship``number``Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `Thresholds_HomeDustyValue``number``Thresholds_NotEnoughStatCount``integer` |
| `Thresholds_NotEnoughStatCount``integer` |

# Functions (2)

| FunctionParametersReturnsDescription`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| --- |
| `GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |

# Override points (1)

Implement these in Lua as `FB2StuckComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Cheat_CatAlert`InReason: `InReason``-` |
| --- |
| `Override_Cheat_CatAlert`InReason: `InReason``-` |

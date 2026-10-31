---
document_id: "c8a8ba3ee834fb9035b10f7cc005ceec1dc498319d6f45d1338063db8f8e517d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2dustycomponent"
title: "FB2DustyComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:12+00:00"
content_sha256: "c930d8f40982c54733823760b0c9e1bc1c799d23bf1341b88bce594cfd3db05e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2dustycomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages dust/dirt state.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2DustyComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2DustyComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2DustyComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2DustyComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2DustyComponent')` |
| Require`require('Components.B2DustyComponent')` |

# Properties (4)

| NameTypeDescription`CurrentDusty``number``NextDustyUpdateTime``integer``OnChangeDustValueEvent``any``bIsDisabled``boolean` |
| --- |
| `CurrentDusty``number``NextDustyUpdateTime``integer``OnChangeDustValueEvent``any``bIsDisabled``boolean` |
| `NextDustyUpdateTime``integer``OnChangeDustValueEvent``any``bIsDisabled``boolean` |
| `OnChangeDustValueEvent``any``bIsDisabled``boolean` |
| `bIsDisabled``boolean` |

# Functions (6)

| FunctionParametersReturnsDescription`AddDustyValue`InValue: `number``-`Adds Dusty Value.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`GetDustyValue``-``number`Returns Dusty Value.`IsDisabled``-``boolean`Returns whether Disabled.`SetDustyValue`InValue: `number`, bForce: `boolean``-`Sets Dusty Value.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| --- |
| `AddDustyValue`InValue: `number``-`Adds Dusty Value.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`GetDustyValue``-``number`Returns Dusty Value.`IsDisabled``-``boolean`Returns whether Disabled.`SetDustyValue`InValue: `number`, bForce: `boolean``-`Sets Dusty Value.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`GetDustyValue``-``number`Returns Dusty Value.`IsDisabled``-``boolean`Returns whether Disabled.`SetDustyValue`InValue: `number`, bForce: `boolean``-`Sets Dusty Value.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `GetDustyValue``-``number`Returns Dusty Value.`IsDisabled``-``boolean`Returns whether Disabled.`SetDustyValue`InValue: `number`, bForce: `boolean``-`Sets Dusty Value.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `IsDisabled``-``boolean`Returns whether Disabled.`SetDustyValue`InValue: `number`, bForce: `boolean``-`Sets Dusty Value.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `SetDustyValue`InValue: `number`, bForce: `boolean``-`Sets Dusty Value.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |

# Override points (1)

Implement these in Lua as `FB2DustyComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddDustyValue`InValue: `number``-`Adds Dusty Value. |
| --- |
| `Override_AddDustyValue`InValue: `number``-`Adds Dusty Value. |

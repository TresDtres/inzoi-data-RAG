---
document_id: "4dcc874d1a7af6bd46efb9c7e1901b7b129a7151c5f4d97212dcb97757f8e589"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2bizmodifiercomponent"
title: "FB2BizModifierComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:11+00:00"
content_sha256: "78fa4f6581490c2df6918feec8af7cd2b5b0298a278e6273acfeea8e843e7842"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2bizmodifiercomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages business (biz) modifiers.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BizModifierComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BizModifierComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BizModifierComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BizModifierComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BizModifierComponent')` |
| Require`require('Components.B2BizModifierComponent')` |

# Properties (2)

| NameTypeDescription`ModifierIds``table<string, boolean>``ModifierMap``table<EB1BizModifierType, table<string, FB1BizModifierData>>` |
| --- |
| `ModifierIds``table<string, boolean>``ModifierMap``table<EB1BizModifierType, table<string, FB1BizModifierData>>` |
| `ModifierMap``table<EB1BizModifierType, table<string, FB1BizModifierData>>` |

# Functions (3)

| FunctionParametersReturnsDescription`AddModifier`InModifierId: `string``boolean`Adds Modifier.`CalcModifierValue`InModifierType: [`EB1BizModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bizmodifiertype), InBaseValue: `number``number``RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |
| --- |
| `AddModifier`InModifierId: `string``boolean`Adds Modifier.`CalcModifierValue`InModifierType: [`EB1BizModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bizmodifiertype), InBaseValue: `number``number``RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |
| `CalcModifierValue`InModifierType: [`EB1BizModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bizmodifiertype), InBaseValue: `number``number``RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |
| `RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |

# Override points (3)

Implement these in Lua as `FB2BizModifierComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddModifier`InModifierId: `string``boolean`Adds Modifier.`Override_CalcModifierValue`InModifierType: [`EB1BizModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bizmodifiertype), InBaseValue: `number``number``Override_RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |
| --- |
| `Override_AddModifier`InModifierId: `string``boolean`Adds Modifier.`Override_CalcModifierValue`InModifierType: [`EB1BizModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bizmodifiertype), InBaseValue: `number``number``Override_RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |
| `Override_CalcModifierValue`InModifierType: [`EB1BizModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bizmodifiertype), InBaseValue: `number``number``Override_RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |
| `Override_RemoveModifier`InModifierId: `string``boolean`Removes Modifier. |

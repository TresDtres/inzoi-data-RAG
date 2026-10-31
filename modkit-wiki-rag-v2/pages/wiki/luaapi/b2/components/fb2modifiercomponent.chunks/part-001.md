---
document_id: "dac91a2f33cd843965c1d1899b253649ef6840700bc8f4e9c0930c46cc4ac7dd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2modifiercomponent"
title: "FB2ModifierComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:14+00:00"
content_sha256: "b99c9d1257513c30177f90d427957e93296baea86da9ea6cdd2d99236e3b17d7"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/components/fb2modifiercomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages various modifiers.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2ModifierComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2ModifierComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2ModifierComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2ModifierComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2ModifierComponent')` |
| Require`require('Components.B2ModifierComponent')` |

# Properties (3)

| NameTypeDescription`DebugModifierTypeFilter``table<EB1ModifierType, boolean>``ModifierIds``table<string, boolean>``ModifierMap``table<EB1ModifierType, table<string, FB1ModifierData>>` |
| --- |
| `DebugModifierTypeFilter``table<EB1ModifierType, boolean>``ModifierIds``table<string, boolean>``ModifierMap``table<EB1ModifierType, table<string, FB1ModifierData>>` |
| `ModifierIds``table<string, boolean>``ModifierMap``table<EB1ModifierType, table<string, FB1ModifierData>>` |
| `ModifierMap``table<EB1ModifierType, table<string, FB1ModifierData>>` |

# Functions (7)

| FunctionParametersReturnsDescription`AddModifier`ModifierId: `string`, bSendEvent: `boolean``-`Adds Modifier.`CalculateModifierValue`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InValue: `number`, InIgnoreWorldModifier: `boolean``number``CalculateModifierValueEx`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InValue: `number`, InIgnoreWorldModifier: `boolean``number`Stat optimization-test variant.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`HasModifier`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InIgnoreWorldModifier: `boolean``boolean`Returns whether it has Modifier.`RemoveAllModifiers``-``-`Removes All Modifiers.`RemoveModifier`ModifierId: `string``-`Removes Modifier. |
| --- |
| `AddModifier`ModifierId: `string`, bSendEvent: `boolean``-`Adds Modifier.`CalculateModifierValue`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InValue: `number`, InIgnoreWorldModifier: `boolean``number``CalculateModifierValueEx`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InValue: `number`, InIgnoreWorldModifier: `boolean``number`Stat optimization-test variant.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`HasModifier`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InIgnoreWorldModifier: `boolean``boolean`Returns whether it has Modifier.`RemoveAllModifiers``-``-`Removes All Modifiers.`RemoveModifier`ModifierId: `string``-`Removes Modifier. |
| `CalculateModifierValue`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InValue: `number`, InIgnoreWorldModifier: `boolean``number``CalculateModifierValueEx`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InValue: `number`, InIgnoreWorldModifier: `boolean``number`Stat optimization-test variant.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`HasModifier`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InIgnoreWorldModifier: `boolean``boolean`Returns whether it has Modifier.`RemoveAllModifiers``-``-`Removes All Modifiers.`RemoveModifier`ModifierId: `string``-`Removes Modifier. |
| `CalculateModifierValueEx`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InValue: `number`, InIgnoreWorldModifier: `boolean``number`Stat optimization-test variant.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`HasModifier`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InIgnoreWorldModifier: `boolean``boolean`Returns whether it has Modifier.`RemoveAllModifiers``-``-`Removes All Modifiers.`RemoveModifier`ModifierId: `string``-`Removes Modifier. |
| `GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`HasModifier`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InIgnoreWorldModifier: `boolean``boolean`Returns whether it has Modifier.`RemoveAllModifiers``-``-`Removes All Modifiers.`RemoveModifier`ModifierId: `string``-`Removes Modifier. |
| `HasModifier`InModifierType: [`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype), InKey: `string`, InIgnoreWorldModifier: `boolean``boolean`Returns whether it has Modifier.`RemoveAllModifiers``-``-`Removes All Modifiers.`RemoveModifier`ModifierId: `string``-`Removes Modifier. |
| `RemoveAllModifiers``-``-`Removes All Modifiers.`RemoveModifier`ModifierId: `string``-`Removes Modifier. |
| `RemoveModifier`ModifierId: `string``-`Removes Modifier. |

# Override points (6)

Implement these in Lua as `FB2ModifierComponent.Override_Name = function(...) end`.

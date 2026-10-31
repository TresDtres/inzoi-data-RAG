---
document_id: "2cc5e4ab8fa1126ea6ecc17bb477f98fcde160f8615988a3b25db7d19807927a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2gameobjectstatcomponent"
title: "FB2GameObjectStatComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:13+00:00"
content_sha256: "baecf1ed59ec4135f0b9cbc533e5d1372a2983e049278b5829c18fc677a31ed9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2gameobjectstatcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages game-object stats.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent)Require`require('Components.B2GameObjectStatComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent)Require`require('Components.B2GameObjectStatComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent)Require`require('Components.B2GameObjectStatComponent')` |
| Category`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent)Require`require('Components.B2GameObjectStatComponent')` |
| Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent)Require`require('Components.B2GameObjectStatComponent')` |
| Require`require('Components.B2GameObjectStatComponent')` |

# Properties (1)

| NameTypeDescription`Debug_RefreshStatMap``table<string, number>` |
| --- |
| `Debug_RefreshStatMap``table<string, number>` |

# Functions (6)

| FunctionParametersReturnsDescription`AddStat`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason), InStatReason: [`EB1StatReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statreason)`-`Adds Stat.`GetEstimatedRemainStatValue`InElapsedTicks: `integer`, InCurrentTicks: `integer`, InStatId: `string``number`Returns Estimated Remain Stat Value.`GetNextDecayCompletionTime``-``number`Returns Next Decay Completion Time.`GetStatDecayCompletionTime`InStatSystem: [`FB2StatSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2statsystem), InStatId: `string`, InStatValue: `number``number`Returns Stat Decay Completion Time.`HasDecayStat``-``boolean`Returns whether it has Decay Stat.`RefreshFromInventory`InElapsedTicks: `integer`, InCurrentTicks: `integer``-` |
| --- |
| `AddStat`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason), InStatReason: [`EB1StatReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statreason)`-`Adds Stat.`GetEstimatedRemainStatValue`InElapsedTicks: `integer`, InCurrentTicks: `integer`, InStatId: `string``number`Returns Estimated Remain Stat Value.`GetNextDecayCompletionTime``-``number`Returns Next Decay Completion Time.`GetStatDecayCompletionTime`InStatSystem: [`FB2StatSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2statsystem), InStatId: `string`, InStatValue: `number``number`Returns Stat Decay Completion Time.`HasDecayStat``-``boolean`Returns whether it has Decay Stat.`RefreshFromInventory`InElapsedTicks: `integer`, InCurrentTicks: `integer``-` |
| `GetEstimatedRemainStatValue`InElapsedTicks: `integer`, InCurrentTicks: `integer`, InStatId: `string``number`Returns Estimated Remain Stat Value.`GetNextDecayCompletionTime``-``number`Returns Next Decay Completion Time.`GetStatDecayCompletionTime`InStatSystem: [`FB2StatSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2statsystem), InStatId: `string`, InStatValue: `number``number`Returns Stat Decay Completion Time.`HasDecayStat``-``boolean`Returns whether it has Decay Stat.`RefreshFromInventory`InElapsedTicks: `integer`, InCurrentTicks: `integer``-` |
| `GetNextDecayCompletionTime``-``number`Returns Next Decay Completion Time.`GetStatDecayCompletionTime`InStatSystem: [`FB2StatSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2statsystem), InStatId: `string`, InStatValue: `number``number`Returns Stat Decay Completion Time.`HasDecayStat``-``boolean`Returns whether it has Decay Stat.`RefreshFromInventory`InElapsedTicks: `integer`, InCurrentTicks: `integer``-` |
| `GetStatDecayCompletionTime`InStatSystem: [`FB2StatSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2statsystem), InStatId: `string`, InStatValue: `number``number`Returns Stat Decay Completion Time.`HasDecayStat``-``boolean`Returns whether it has Decay Stat.`RefreshFromInventory`InElapsedTicks: `integer`, InCurrentTicks: `integer``-` |
| `HasDecayStat``-``boolean`Returns whether it has Decay Stat.`RefreshFromInventory`InElapsedTicks: `integer`, InCurrentTicks: `integer``-` |
| `RefreshFromInventory`InElapsedTicks: `integer`, InCurrentTicks: `integer``-` |

# Override points (1)

Implement these in Lua as `FB2GameObjectStatComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddStat`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason), InStatReason: [`EB1StatReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statreason)`-`Adds Stat. |
| --- |
| `Override_AddStat`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason), InStatReason: [`EB1StatReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statreason)`-`Adds Stat. |

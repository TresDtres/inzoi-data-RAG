---
document_id: "361ae79a9d4c2df7adea1c3b679c2846e40df3a268e281c47d5bf0cf7f661728"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2ticktaskgroup"
title: "FB2TickTaskGroup"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:50+00:00"
content_sha256: "fdb511b0dee8cca9d300b7537f575532bedb9a5023498735a9ebd2253262df35"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2ticktaskgroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- FB2TickTaskGroup: per-component-type Task group, time-sliced in a round-robin manner.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs` |
| EnvironmentB2 - SimulationCategory`structs` |
| Category`structs` |

# Properties (12)

| NameTypeDescription`BaseDefaultInterval``number``BaseMaxProcessPerTick``integer``BudgetMs``number``DefaultInterval``number``IndexMap``table<FB1EntityId, integer>``LastTickTimeMs``number`Processing-time monitoring.`MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| --- |
| `BaseDefaultInterval``number``BaseMaxProcessPerTick``integer``BudgetMs``number``DefaultInterval``number``IndexMap``table<FB1EntityId, integer>``LastTickTimeMs``number`Processing-time monitoring.`MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `BaseMaxProcessPerTick``integer``BudgetMs``number``DefaultInterval``number``IndexMap``table<FB1EntityId, integer>``LastTickTimeMs``number`Processing-time monitoring.`MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `BudgetMs``number``DefaultInterval``number``IndexMap``table<FB1EntityId, integer>``LastTickTimeMs``number`Processing-time monitoring.`MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `DefaultInterval``number``IndexMap``table<FB1EntityId, integer>``LastTickTimeMs``number`Processing-time monitoring.`MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `IndexMap``table<FB1EntityId, integer>``LastTickTimeMs``number`Processing-time monitoring.`MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `LastTickTimeMs``number`Processing-time monitoring.`MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `MaxProcessPerTick``integer`Per-group setting (value after quality scaling).`NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `NextStartIndex``integer`For round-robin traversal (ensures a fair processing order).`Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `Tasks``FB2TickTask[]``Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `Type`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `bAlwaysProcess``boolean`Process first every frame (exempt from round-robin/TickBudget).`bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |
| `bUsePriorityOrder``boolean`SLOD-based priority processing. A group with this true processes Priority <= 0 (SLOD0) first, then Priority > 0 (SLOD2) with the remaining budget. |

---
document_id: "2ad79c629a347c8f1f056f250003939923fda21caf90fec5309971ed08ddcfe4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2componentschedulersystem"
title: "FB2ComponentSchedulerSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:13+00:00"
content_sha256: "061fbbeaf8cd22c51f3df31606d3acfd5eac97630fdd048a6196a54b14fc144d"
chunk: 1
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b2/components/fb2componentschedulersystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Scheduler system that centrally manages component Ticks. Manages 24 components in per-type groups, time-sliced with round-robin + frame budget, compensating timing error via AccumulatedTime. Excluded components: AuraComponent (handled by AuraSystem), CharacterMovementComponent (handled by MovementUpdateSystem, Phase 6).

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends`FB2Subsystem`Require`require('Systems.FB2ComponentSchedulerSystem')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends`FB2Subsystem`Require`require('Systems.FB2ComponentSchedulerSystem')` |
| EnvironmentB2 - SimulationCategory`components`Extends`FB2Subsystem`Require`require('Systems.FB2ComponentSchedulerSystem')` |
| Category`components`Extends`FB2Subsystem`Require`require('Systems.FB2ComponentSchedulerSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2ComponentSchedulerSystem')` |
| Require`require('Systems.FB2ComponentSchedulerSystem')` |

# Properties (9)

| NameTypeDescription`AlwaysBudgetMs``number``CurrentQualityLevel``integer``GroupKeys``EB2ComponentType[]``IntervalScale``number``MaxProcessScale``number``NextGroupIndex``integer``PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| --- |
| `AlwaysBudgetMs``number``CurrentQualityLevel``integer``GroupKeys``EB2ComponentType[]``IntervalScale``number``MaxProcessScale``number``NextGroupIndex``integer``PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `CurrentQualityLevel``integer``GroupKeys``EB2ComponentType[]``IntervalScale``number``MaxProcessScale``number``NextGroupIndex``integer``PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `GroupKeys``EB2ComponentType[]``IntervalScale``number``MaxProcessScale``number``NextGroupIndex``integer``PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `IntervalScale``number``MaxProcessScale``number``NextGroupIndex``integer``PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `MaxProcessScale``number``NextGroupIndex``integer``PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `NextGroupIndex``integer``PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `PendingUnregistrations``any[]``TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `TaskGroups``table<EB2ComponentType, FB2TickTaskGroup>`Per-type Task groups.`TickBudgetMs``number`Frame-budget management. |
| `TickBudgetMs``number`Frame-budget management. |

# Functions (10)

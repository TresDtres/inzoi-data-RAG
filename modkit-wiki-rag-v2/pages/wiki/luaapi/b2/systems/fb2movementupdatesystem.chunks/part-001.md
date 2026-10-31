---
document_id: "a23f06d87ea8985f3b7d0627cbf7603ea2455147c36e775a74c1f34a97de2c5f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2movementupdatesystem"
title: "FB2MovementUpdateSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "5e8aaeba0e819ac3a4ba82bb503911847f0e9f23bdd200a8b487b9f45135d47f"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2movementupdatesystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Registers per MovementComponent and ticks them directly. Removes GetComponent overhead via direct component references.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2MovementUpdateSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2MovementUpdateSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2MovementUpdateSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2MovementUpdateSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2MovementUpdateSystem')` |
| Require`require('Systems.FB2MovementUpdateSystem')` |

# Properties (9)

| NameTypeDescription`CurrentTime_Cached``number``EntityIndexMap``table<FB1EntityId, integer>``LastCleanupTime``number``PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``PossessedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Tracks the possessed entity separately (to remove an in-loop check).`PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| --- |
| `CurrentTime_Cached``number``EntityIndexMap``table<FB1EntityId, integer>``LastCleanupTime``number``PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``PossessedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Tracks the possessed entity separately (to remove an in-loop check).`PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `EntityIndexMap``table<FB1EntityId, integer>``LastCleanupTime``number``PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``PossessedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Tracks the possessed entity separately (to remove an in-loop check).`PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `LastCleanupTime``number``PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``PossessedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Tracks the possessed entity separately (to remove an in-loop check).`PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``PossessedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Tracks the possessed entity separately (to remove an in-loop check).`PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `PendingUnregistrations``FB1EntityId[]``PossessedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Tracks the possessed entity separately (to remove an in-loop check).`PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `PossessedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Tracks the possessed entity separately (to remove an in-loop check).`PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `PossessedMovementComponent``any``RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `RegisteredEntities``FB2MovementUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |
| `bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities changes on the OnScheduledTick -> indirect Entity Simulate disable -> UnregisterComponent path. |

# Functions (6)

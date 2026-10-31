---
document_id: "b8372b0bc2f5270c35a6b558cb238435b99cf1640004a0f80dd1b00e93873408"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2aurasystem"
title: "FB2AuraSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:56+00:00"
content_sha256: "7b72537ee14399231408ec07c938a8e0c206fc0300dc13f511d964bfbc67762d"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2aurasystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Subsystem that centrally manages the Aura system. Switches from the previous per-FB2AuraComponent Tick approach to a system-based Tick to improve performance. Emitter: an Entity emitting an Aura (few, dynamically registered). Receiver: an Entity affected by Auras (every Entity that has an AuraComponent). Location-change detection is done automatically in the system Tick.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AuraSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AuraSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AuraSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AuraSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2AuraSystem')` |
| Require`require('Systems.FB2AuraSystem')` |

# Properties (8)

| NameTypeDescription`EmitterEntries``FB2AuraEmitterEntry[]`Array of Emitter entries (only Entities currently emitting an Aura).`EmitterIndexMap``table<FB1EntityId, integer>``PendingComponents``any[]``PendingEmitterUnregistrations``FB1EntityId[]``PendingReceiverUnregistrations``FB1EntityId[]``ReceiverEntries``FB2AuraReceiverEntry[]`Array of Receiver entries (every Entity with an AuraComponent).`ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| --- |
| `EmitterEntries``FB2AuraEmitterEntry[]`Array of Emitter entries (only Entities currently emitting an Aura).`EmitterIndexMap``table<FB1EntityId, integer>``PendingComponents``any[]``PendingEmitterUnregistrations``FB1EntityId[]``PendingReceiverUnregistrations``FB1EntityId[]``ReceiverEntries``FB2AuraReceiverEntry[]`Array of Receiver entries (every Entity with an AuraComponent).`ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| `EmitterIndexMap``table<FB1EntityId, integer>``PendingComponents``any[]``PendingEmitterUnregistrations``FB1EntityId[]``PendingReceiverUnregistrations``FB1EntityId[]``ReceiverEntries``FB2AuraReceiverEntry[]`Array of Receiver entries (every Entity with an AuraComponent).`ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| `PendingComponents``any[]``PendingEmitterUnregistrations``FB1EntityId[]``PendingReceiverUnregistrations``FB1EntityId[]``ReceiverEntries``FB2AuraReceiverEntry[]`Array of Receiver entries (every Entity with an AuraComponent).`ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| `PendingEmitterUnregistrations``FB1EntityId[]``PendingReceiverUnregistrations``FB1EntityId[]``ReceiverEntries``FB2AuraReceiverEntry[]`Array of Receiver entries (every Entity with an AuraComponent).`ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| `PendingReceiverUnregistrations``FB1EntityId[]``ReceiverEntries``FB2AuraReceiverEntry[]`Array of Receiver entries (every Entity with an AuraComponent).`ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| `ReceiverEntries``FB2AuraReceiverEntry[]`Array of Receiver entries (every Entity with an AuraComponent).`ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| `ReceiverIndexMap``table<FB1EntityId, integer>`Index map for fast lookup.`bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |
| `bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents OOB/stale-index when the Entries array changes on the UpdateReceiverAura/UpdateEmitterLocation -> Entity::Destroy -> AuraComponent::OnDestroy -> UnregisterReceiver/UnregisterEmitter path. |

# Functions (9)

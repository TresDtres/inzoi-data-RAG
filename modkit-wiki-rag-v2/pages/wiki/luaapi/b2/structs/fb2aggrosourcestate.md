---
document_id: "c9fa0bc14edcc04ea4e22080a42f0fdce5d903f2be3750613fdcb847ffdcefd2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2aggrosourcestate"
title: "FB2AggroSourceState"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:30+00:00"
content_sha256: "49b97fae3b60f66ec8310d4e1e79eb852049e0427b16b7069dfcd9790f58c809"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2aggrosourcestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Aggro state of one Source, holding multiple Targets at once. The manager's ActiveAggros holds it as a TMap<FB1EntityId, FB2AggroSourceState>.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs` |
| EnvironmentB2 - SimulationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Entries``FB2AggroEntry[]`The Source's per-Target aggro entries. Each tick the single largest-total entry is picked as the chase target.`TopEntryIndexCache``integer`Cached Top-entry index. INDEX_NONE means invalid; the manager recomputes it on the next query. Invalidated on: AddAggro entry, the empty-entry removal step in Tick (if an entry was actually removed), DecreaseAggroByReason / DecreaseAggroByTargetReason, RemoveAggro / RemoveAggroForTarget / OnEntityRemoved, and on Decay (decay amounts differ per reason).`WalkBackLocation``FVector``bWalkBackCaptured``boolean` |
| --- |
| `Entries``FB2AggroEntry[]`The Source's per-Target aggro entries. Each tick the single largest-total entry is picked as the chase target.`TopEntryIndexCache``integer`Cached Top-entry index. INDEX_NONE means invalid; the manager recomputes it on the next query. Invalidated on: AddAggro entry, the empty-entry removal step in Tick (if an entry was actually removed), DecreaseAggroByReason / DecreaseAggroByTargetReason, RemoveAggro / RemoveAggroForTarget / OnEntityRemoved, and on Decay (decay amounts differ per reason).`WalkBackLocation``FVector``bWalkBackCaptured``boolean` |
| `TopEntryIndexCache``integer`Cached Top-entry index. INDEX_NONE means invalid; the manager recomputes it on the next query. Invalidated on: AddAggro entry, the empty-entry removal step in Tick (if an entry was actually removed), DecreaseAggroByReason / DecreaseAggroByTargetReason, RemoveAggro / RemoveAggroForTarget / OnEntityRemoved, and on Decay (decay amounts differ per reason).`WalkBackLocation``FVector``bWalkBackCaptured``boolean` |
| `WalkBackLocation``FVector``bWalkBackCaptured``boolean` |
| `bWalkBackCaptured``boolean` |

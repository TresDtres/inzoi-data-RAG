---
document_id: "9322a6f114eac15b616e51910442b3f43611a3fd11cdcce58f17d021649801e2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1inputtriggermodifierblocker"
title: "UB1InputTriggerModifierBlocker"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:45+00:00"
content_sha256: "17f51c4decaa0c238a6090fe0cc2af25defe083247c10cc483dea35cea99cdf1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1inputtriggermodifierblocker"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Custom trigger that blocks a mapping while a Modifier action (L1, R1) is held. Unlike the engine's UInputTriggerChordBlocker, it also blocks the Ongoing state. Engine ChordBlocker issue: IsBlocking() checks only the Triggered state, so pressing L1 first then another key leaves L1 Ongoing and not blocked. This class's fix: IsBlocking() checks both Triggered + Ongoing, always blocking while L1 is held.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UInputTrigger` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UInputTrigger` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UInputTrigger` |
| Category`classes`Extends`UInputTrigger` |
| Extends`UInputTrigger` |

# Properties (4)

| NameTypeDescription`ChordAction``any`The Modifier Action (L1 or R1) that is the blocking condition.`DebugOwnerActionName``string`For debug - to be removed later.`DebugOwnerKeyName``string``OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |
| --- |
| `ChordAction``any`The Modifier Action (L1 or R1) that is the blocking condition.`DebugOwnerActionName``string`For debug - to be removed later.`DebugOwnerKeyName``string``OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |
| `DebugOwnerActionName``string`For debug - to be removed later.`DebugOwnerKeyName``string``OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |
| `DebugOwnerKeyName``string``OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |
| `OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |

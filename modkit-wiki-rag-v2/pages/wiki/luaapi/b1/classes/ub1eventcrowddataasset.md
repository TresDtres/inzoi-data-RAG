---
document_id: "5be19d2918afe20fc78b74c1902a35b2abd25597a4dbb422fefe2ca61055d48b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1eventcrowddataasset"
title: "UB1EventCrowdDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:25+00:00"
content_sha256: "c3a0d08c092eec1961ebd333ca90ebd2b08b233bc839c582b30867d07f6584db"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1eventcrowddataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset configuring crowd spawning behavior for in-game events, including pool sizes, age ranges, and restricted appearance presets.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (6)

| NameTypeDescription`DefaultSpawnPoolSize``integer`Default number of crowd NPCs to maintain in the spawn pool.`RestrictAppearancePreset``string[]`List of appearance preset IDs that are forbidden from being used for event crowd spawns.`SpawnEndBornAge``integer`Maximum born age (in in-game years) for spawned crowd NPCs.`SpawnPoolSize``table<string, integer>`Per-event override map for spawn pool sizes, keyed by event name.`SpawnStartBornAge``integer`Minimum born age (in in-game years) for spawned crowd NPCs.`UniqueEventNpcList``FB1UniqueEventNpcData[]`Unique event NPC configurations. Each entry defines a distinct NPC with its own spawn count. |
| --- |
| `DefaultSpawnPoolSize``integer`Default number of crowd NPCs to maintain in the spawn pool.`RestrictAppearancePreset``string[]`List of appearance preset IDs that are forbidden from being used for event crowd spawns.`SpawnEndBornAge``integer`Maximum born age (in in-game years) for spawned crowd NPCs.`SpawnPoolSize``table<string, integer>`Per-event override map for spawn pool sizes, keyed by event name.`SpawnStartBornAge``integer`Minimum born age (in in-game years) for spawned crowd NPCs.`UniqueEventNpcList``FB1UniqueEventNpcData[]`Unique event NPC configurations. Each entry defines a distinct NPC with its own spawn count. |
| `RestrictAppearancePreset``string[]`List of appearance preset IDs that are forbidden from being used for event crowd spawns.`SpawnEndBornAge``integer`Maximum born age (in in-game years) for spawned crowd NPCs.`SpawnPoolSize``table<string, integer>`Per-event override map for spawn pool sizes, keyed by event name.`SpawnStartBornAge``integer`Minimum born age (in in-game years) for spawned crowd NPCs.`UniqueEventNpcList``FB1UniqueEventNpcData[]`Unique event NPC configurations. Each entry defines a distinct NPC with its own spawn count. |
| `SpawnEndBornAge``integer`Maximum born age (in in-game years) for spawned crowd NPCs.`SpawnPoolSize``table<string, integer>`Per-event override map for spawn pool sizes, keyed by event name.`SpawnStartBornAge``integer`Minimum born age (in in-game years) for spawned crowd NPCs.`UniqueEventNpcList``FB1UniqueEventNpcData[]`Unique event NPC configurations. Each entry defines a distinct NPC with its own spawn count. |
| `SpawnPoolSize``table<string, integer>`Per-event override map for spawn pool sizes, keyed by event name.`SpawnStartBornAge``integer`Minimum born age (in in-game years) for spawned crowd NPCs.`UniqueEventNpcList``FB1UniqueEventNpcData[]`Unique event NPC configurations. Each entry defines a distinct NPC with its own spawn count. |
| `SpawnStartBornAge``integer`Minimum born age (in in-game years) for spawned crowd NPCs.`UniqueEventNpcList``FB1UniqueEventNpcData[]`Unique event NPC configurations. Each entry defines a distinct NPC with its own spawn count. |
| `UniqueEventNpcList``FB1UniqueEventNpcData[]`Unique event NPC configurations. Each entry defines a distinct NPC with its own spawn count. |

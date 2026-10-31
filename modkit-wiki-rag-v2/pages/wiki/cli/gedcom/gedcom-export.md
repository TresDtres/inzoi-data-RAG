---
document_id: "cf6215542c160df68753903b1ae89640fd088cccb134b720df3532b3ff5be1d8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gedcom/gedcom-export"
title: "gedcom.export"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:01+00:00"
content_sha256: "22cf1fd7549a7f7be059757e0093fa2cfe64919401a3473574328b5638c5f64c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/gedcom/gedcom-export"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Export current simulation's families and characters to a GEDCOM 7.0 file. Static snapshot of names/sex/birth_day/death_status. Marriage/divorce/death dates are NOT preserved by inZOI and are emitted as NOTE.

# Metadata

| FieldValueDisplayGEDCOM ExportCategory`gedcom`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGEDCOM ExportCategory`gedcom`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`gedcom`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionoutput_pathstringno—Absolute path to a .ged file, OR a directory (a file inzoi_gedcom_.ged is auto-created inside it). A value without a .ged extension, ending with a separator, or naming an existing folder is treated as a directory. Default: UserSaveDir()/ged/inzoi_gedcom_.ged. Missing directories are created.household_idintno0Specific household id to export. 0 = export all.first_namestringno—MCCC-style root character first name. first_name and/or last_name selects the first matching character as root and exports only the connected family graph reachable from that character (ancestors, descendants, spouses, siblings). Either field alone is sufficient; if both are empty, all characters are exported.last_namestringno—MCCC-style root character last name. Optional; can be used alone or together with first_name to disambiguate the root character.portrait_dirstringno—Optional absolute path to a save-game Portrait/ folder. If omitted, auto-resolves to the most-recently-modified Portrait folder under Documents/InZOI/SaveGames* and copies <entity_id>.png next to the .ged file.include_npcboolnofalseReserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |
| --- |
| output_pathstringno—Absolute path to a .ged file, OR a directory (a file inzoi_gedcom_.ged is auto-created inside it). A value without a .ged extension, ending with a separator, or naming an existing folder is treated as a directory. Default: UserSaveDir()/ged/inzoi_gedcom_.ged. Missing directories are created.household_idintno0Specific household id to export. 0 = export all.first_namestringno—MCCC-style root character first name. first_name and/or last_name selects the first matching character as root and exports only the connected family graph reachable from that character (ancestors, descendants, spouses, siblings). Either field alone is sufficient; if both are empty, all characters are exported.last_namestringno—MCCC-style root character last name. Optional; can be used alone or together with first_name to disambiguate the root character.portrait_dirstringno—Optional absolute path to a save-game Portrait/ folder. If omitted, auto-resolves to the most-recently-modified Portrait folder under Documents/InZOI/SaveGames* and copies <entity_id>.png next to the .ged file.include_npcboolnofalseReserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |
| household_idintno0Specific household id to export. 0 = export all.first_namestringno—MCCC-style root character first name. first_name and/or last_name selects the first matching character as root and exports only the connected family graph reachable from that character (ancestors, descendants, spouses, siblings). Either field alone is sufficient; if both are empty, all characters are exported.last_namestringno—MCCC-style root character last name. Optional; can be used alone or together with first_name to disambiguate the root character.portrait_dirstringno—Optional absolute path to a save-game Portrait/ folder. If omitted, auto-resolves to the most-recently-modified Portrait folder under Documents/InZOI/SaveGames* and copies <entity_id>.png next to the .ged file.include_npcboolnofalseReserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |
| first_namestringno—MCCC-style root character first name. first_name and/or last_name selects the first matching character as root and exports only the connected family graph reachable from that character (ancestors, descendants, spouses, siblings). Either field alone is sufficient; if both are empty, all characters are exported.last_namestringno—MCCC-style root character last name. Optional; can be used alone or together with first_name to disambiguate the root character.portrait_dirstringno—Optional absolute path to a save-game Portrait/ folder. If omitted, auto-resolves to the most-recently-modified Portrait folder under Documents/InZOI/SaveGames* and copies <entity_id>.png next to the .ged file.include_npcboolnofalseReserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |
| last_namestringno—MCCC-style root character last name. Optional; can be used alone or together with first_name to disambiguate the root character.portrait_dirstringno—Optional absolute path to a save-game Portrait/ folder. If omitted, auto-resolves to the most-recently-modified Portrait folder under Documents/InZOI/SaveGames* and copies <entity_id>.png next to the .ged file.include_npcboolnofalseReserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |
| portrait_dirstringno—Optional absolute path to a save-game Portrait/ folder. If omitted, auto-resolves to the most-recently-modified Portrait folder under Documents/InZOI/SaveGames* and copies <entity_id>.png next to the .ged file.include_npcboolnofalseReserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |
| include_npcboolnofalseReserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |

# Usage

```
await inzoi.cli.execute('gedcom.export', {  output_path: '', // optional  household_id: 0, // optional  first_name: '', // optional  last_name: '', // optional  portrait_dir: '', // optional  include_npc: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

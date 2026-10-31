---
document_id: "b36840a162a8bb71109da2911fe0f31feb2baeb69278b2999e91e25c6185df79"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1levelinstancethemesubsystem"
title: "UB1LevelInstanceThemeSubsystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:48+00:00"
content_sha256: "f4d1dbd312b384da37dc5e3f4ebc502e84b0bc701e0ef98c12f8e86865f4aec2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1levelinstancethemesubsystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Levels with a placed LoadControlActor (lobby, in-game city) operate via ULevelStreamingDynamic dynamic loading. City levels without a LoadControlActor placed yet operate the legacy way (ALevelInstance auto-loads, then UnloadLevelInstance/LoadLevelInstance).

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UWorldSubsystem` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UWorldSubsystem` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UWorldSubsystem` |
| Category`classes`Extends`UWorldSubsystem` |
| Extends`UWorldSubsystem` |

# Properties (3)

| NameTypeDescription`CustomizeLevelInstances``table<ALevelInstance, boolean>``DynamicLevelStreams``table<EB1DynamicLevelType, FB1DynamicLevelStreamArray>``LoadControlActor``any` |
| --- |
| `CustomizeLevelInstances``table<ALevelInstance, boolean>``DynamicLevelStreams``table<EB1DynamicLevelType, FB1DynamicLevelStreamArray>``LoadControlActor``any` |
| `DynamicLevelStreams``table<EB1DynamicLevelType, FB1DynamicLevelStreamArray>``LoadControlActor``any` |
| `LoadControlActor``any` |

# Functions (2)

| FunctionParametersReturnsDescription`LoadLevelInstanceCollection``-``-`Loads Level Instance Collection.`UnloadLevelInstanceCollection``-``-` |
| --- |
| `LoadLevelInstanceCollection``-``-`Loads Level Instance Collection.`UnloadLevelInstanceCollection``-``-` |
| `UnloadLevelInstanceCollection``-``-` |

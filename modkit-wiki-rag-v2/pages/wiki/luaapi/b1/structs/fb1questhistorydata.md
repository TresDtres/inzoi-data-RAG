---
document_id: "9145538ddc1d2fe5b33ef7385f65ff9119454855f92eb99b4d125924d6a73086"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questhistorydata"
title: "FB1QuestHistoryData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:09+00:00"
content_sha256: "d55d0b50440ad17b6c7a30c73ee2c6fb29d4755c262b72aebb58dfff4c591e69"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1questhistorydata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the history data for an entire quest, including priority, a map of mission history elements, and lazy completion state.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`HistoryElementMap``table<string, FB1QuestHistoryElement>`A map from mission data table ID to the corresponding history element.`IsLazyCompleted``boolean`Whether this quest has been lazily completed, requiring an explicit complete call.`Priority``integer`The priority order in which this history entry was added. |
| --- |
| `HistoryElementMap``table<string, FB1QuestHistoryElement>`A map from mission data table ID to the corresponding history element.`IsLazyCompleted``boolean`Whether this quest has been lazily completed, requiring an explicit complete call.`Priority``integer`The priority order in which this history entry was added. |
| `IsLazyCompleted``boolean`Whether this quest has been lazily completed, requiring an explicit complete call.`Priority``integer`The priority order in which this history entry was added. |
| `Priority``integer`The priority order in which this history entry was added. |

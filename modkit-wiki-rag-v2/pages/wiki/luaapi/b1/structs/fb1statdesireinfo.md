---
document_id: "ead223e6aa48f0c0d49fce9c13fcba2a68ff423aa4181ac96488acc86ff82420"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1statdesireinfo"
title: "FB1StatDesireInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:33+00:00"
content_sha256: "7251612f3713fc7cecad8a8ae5edb5eb90b71ffe55520ed69d1124a68423cd35"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1statdesireinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the desire priority and graph configuration used when a stat influences an NPC's desire-driven decision making.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`PriorityLevel``integer`The priority level of this desire; lower values indicate higher priority.`PriorityValue``number`The priority value used as a weight during desire selection.`StatDesireGraph``FB1StatToDesireGraph[]`The list of graph entries mapping stat values to desire scores. |
| --- |
| `PriorityLevel``integer`The priority level of this desire; lower values indicate higher priority.`PriorityValue``number`The priority value used as a weight during desire selection.`StatDesireGraph``FB1StatToDesireGraph[]`The list of graph entries mapping stat values to desire scores. |
| `PriorityValue``number`The priority value used as a weight during desire selection.`StatDesireGraph``FB1StatToDesireGraph[]`The list of graph entries mapping stat values to desire scores. |
| `StatDesireGraph``FB1StatToDesireGraph[]`The list of graph entries mapping stat values to desire scores. |

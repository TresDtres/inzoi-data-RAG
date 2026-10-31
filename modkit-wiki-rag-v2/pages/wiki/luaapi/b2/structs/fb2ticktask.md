---
document_id: "8b7722a0e49d85744befa907f4289a1a03e676d865224f98eb72aa3fac392b08"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2ticktask"
title: "FB2TickTask"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:49+00:00"
content_sha256: "a914f8843f98c4cdde280954f9878af9b03546438ecab339bae8be73efd0d66e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2ticktask"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Individual Task unit of the FB2TickTask component scheduler. Memory-optimized to 32 bytes (8-byte aligned).

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs` |
| EnvironmentB2 - SimulationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`AccumulatedGameDeltaMinutes``number``AccumulatedTime``number`For time-slicing (3 floats = 12 bytes).`ComponentType`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Priority``integer`Packing optimization: int16 + uint8 + padding = 4 bytes.`ProcessInterval``number` |
| --- |
| `AccumulatedGameDeltaMinutes``number``AccumulatedTime``number`For time-slicing (3 floats = 12 bytes).`ComponentType`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Priority``integer`Packing optimization: int16 + uint8 + padding = 4 bytes.`ProcessInterval``number` |
| `AccumulatedTime``number`For time-slicing (3 floats = 12 bytes).`ComponentType`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Priority``integer`Packing optimization: int16 + uint8 + padding = 4 bytes.`ProcessInterval``number` |
| `ComponentType`[`EB2ComponentType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2componenttype)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Priority``integer`Packing optimization: int16 + uint8 + padding = 4 bytes.`ProcessInterval``number` |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Priority``integer`Packing optimization: int16 + uint8 + padding = 4 bytes.`ProcessInterval``number` |
| `Priority``integer`Packing optimization: int16 + uint8 + padding = 4 bytes.`ProcessInterval``number` |
| `ProcessInterval``number` |

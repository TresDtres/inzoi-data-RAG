---
document_id: "cfa36dcfd99636b1e9770416a4a6b595d020fcc9d6622e4dcc6dfa316b049ce1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1compacttargetmemory"
title: "FB1CompactTargetMemory"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:32+00:00"
content_sha256: "a78a44dea77f2b5c2863c820607e5b9e0e1dfd8aa59f6530b88a91a52e666619"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1compacttargetmemory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Compact subset of target memory for lightweight UI updates. Only stores TargetEntity, MemoryDtId, bIsUnread, and MoodScore.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`MemoryDtId``string`Data table row ID of the memory definition.`MoodScore``number`Accumulated mood score for this memory (positive or negative).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| --- |
| `MemoryDtId``string`Data table row ID of the memory definition.`MoodScore``number`Accumulated mood score for this memory (positive or negative).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `MoodScore``number`Accumulated mood score for this memory (positive or negative).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `bIsUnread``boolean`Whether this memory has not yet been read in the UI. |

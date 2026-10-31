---
document_id: "8f9e06dd77d4ee91542b6a0e67b097af511407fd344b75dfbf7cb548fee1c730"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagepartiesresult"
title: "FB1MobileMessagePartiesResult"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:29+00:00"
content_sha256: "2fbca66987629f7e675ec96bde128ef0c93add3d9ff25b637b12e04e7cf5a649"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagepartiesresult"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Resolved sender and receiver entity IDs for a mobile message parties lookup. Holds the final sender (character or system) and receiver after evaluating the parties table row.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`ReceiverId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character acting as the message receiver.`SenderId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character acting as the message sender.`SenderSystemId``string`System ID used as the sender when the sender is a system entity rather than a character. |
| --- |
| `ReceiverId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character acting as the message receiver.`SenderId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character acting as the message sender.`SenderSystemId``string`System ID used as the sender when the sender is a system entity rather than a character. |
| `SenderId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character acting as the message sender.`SenderSystemId``string`System ID used as the sender when the sender is a system entity rather than a character. |
| `SenderSystemId``string`System ID used as the sender when the sender is a system entity rather than a character. |

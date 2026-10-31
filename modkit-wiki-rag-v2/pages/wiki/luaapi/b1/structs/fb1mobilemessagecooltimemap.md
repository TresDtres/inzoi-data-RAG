---
document_id: "42ff0a4104ae9dc7ddfb10bd46aa7d4ae1a9a631a56eb2897bb1ff768089015e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagecooltimemap"
title: "FB1MobileMessageCooltimeMap"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:29+00:00"
content_sha256: "36f8707e1f336b292caffbab758c80d21120165a431c8847887057fd52396b11"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagecooltimemap"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores cooldown maps for mobile messages, message pools, and send messages. Tracks per-ID cooldown expiry times in in-game minutes to prevent premature re-sending.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`MobileMessageCooltimeMap``table<string, integer>`Map from custom message ID to the in-game minute timestamp when its cooldown expires.`MobileMessagePoolCooltimeMap``table<string, integer>`Map from message pool ID to the in-game minute timestamp when its cooldown expires.`SendMessageCooltimeMap``table<string, integer>`Map from send message ID to the in-game minute timestamp when its cooldown expires. |
| --- |
| `MobileMessageCooltimeMap``table<string, integer>`Map from custom message ID to the in-game minute timestamp when its cooldown expires.`MobileMessagePoolCooltimeMap``table<string, integer>`Map from message pool ID to the in-game minute timestamp when its cooldown expires.`SendMessageCooltimeMap``table<string, integer>`Map from send message ID to the in-game minute timestamp when its cooldown expires. |
| `MobileMessagePoolCooltimeMap``table<string, integer>`Map from message pool ID to the in-game minute timestamp when its cooldown expires.`SendMessageCooltimeMap``table<string, integer>`Map from send message ID to the in-game minute timestamp when its cooldown expires. |
| `SendMessageCooltimeMap``table<string, integer>`Map from send message ID to the in-game minute timestamp when its cooldown expires. |

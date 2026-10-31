---
document_id: "2a226f2c3ceb28247fb6c38509ad41b2f4527426b469deb8068c3b6382de7679"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagelistmap"
title: "FB1MobileMessageListMap"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:29+00:00"
content_sha256: "927834b98ed7e5e30ba659338eac385422ee1667a1209369fdfc568044264054"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagelistmap"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores all mobile message conversation threads keyed by the other character's entity ID. Provides a per-character map of all active message threads for the owning entity.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (1)

| NameTypeDescription`MobileMessageListMap``table<FB1EntityId, FB1MobileMessageList>`Map from entity ID to the conversation thread with that entity. |
| --- |
| `MobileMessageListMap``table<FB1EntityId, FB1MobileMessageList>`Map from entity ID to the conversation thread with that entity. |

---
document_id: "294d13b8a00a48a8f260fd586bfad64fd034f84bad69175fc9d8b6e6f1c6257f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sentoncemessagelist"
title: "FB1SentOnceMessageList"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:22+00:00"
content_sha256: "df42a12fd9243ed6abb9eed430d674f8e8b66868ae6d02747bbfb426c26695e9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1sentoncemessagelist"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores a list of send message IDs that have already been sent exactly once in the given scope. Used to enforce send-once constraints for messages with a Global or Receiver send-once scope.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (1)

| NameTypeDescription`SentOnceSendMessages``string[]`Array of send message IDs that have been sent exactly once and should not be sent again. |
| --- |
| `SentOnceSendMessages``string[]`Array of send message IDs that have been sent exactly once and should not be sent again. |

---
document_id: "d43d153c59d3b9fc92b2da16fb3f18e750153a40f67e5cac35cbc4af5eb5dafb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1videochatbottablerow"
title: "FB1VideoChatbotTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:48+00:00"
content_sha256: "03e76814659774748af055b776707eeea734441322f34a01cb4f3aa5f8ccaf19"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1videochatbottablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a video chatbot, extending the base chatbot definition with a screen image, voice index, and per-language data table map.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1ChatbotTableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1chatbottablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1ChatbotTableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1chatbottablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1ChatbotTableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1chatbottablerowbase) |
| Category`structs`Extends[`FB1ChatbotTableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1chatbottablerowbase) |
| Extends[`FB1ChatbotTableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1chatbottablerowbase) |

# Properties (3)

| NameTypeDescription`ChatbotDTMap``table<string, FSoftObjectPath>`Map from language key to the chatbot data table path.`ScreenImage``UTexture2D`Soft reference to the screen image displayed during video chat.`VoiceIndex``integer`Voice index used for this video chatbot. |
| --- |
| `ChatbotDTMap``table<string, FSoftObjectPath>`Map from language key to the chatbot data table path.`ScreenImage``UTexture2D`Soft reference to the screen image displayed during video chat.`VoiceIndex``integer`Voice index used for this video chatbot. |
| `ScreenImage``UTexture2D`Soft reference to the screen image displayed during video chat.`VoiceIndex``integer`Voice index used for this video chatbot. |
| `VoiceIndex``integer`Voice index used for this video chatbot. |

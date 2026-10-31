---
document_id: "575836541e0c65df5d1ff41f78fd6c024e96faeca3a5375dd726937275d39974"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1chatbottablerowbase"
title: "FB1ChatbotTableRowBase"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:23+00:00"
content_sha256: "327878f81c46c7bd2c6f85fdb1022296e31e824df3c00f6c391626de9e6d13b2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1chatbottablerowbase"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Base table row for chatbot entries, defining common chatbot properties such as name, profile image, profile message, web links, and cat translator flag.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`ChatbotNameTextId``string`Localized chatbot display name text identifier.`ChatbotProfileImage``UTexture2D`Soft reference to the chatbot's profile image texture.`ChatbotProfileMessageTextId``string`Localized chatbot profile message text identifier.`WebLinkMap``table<string, string>`Map from link name to URL for web links displayed by this chatbot.`bUseCatTranslator``boolean`Whether this chatbot uses the cat translator feature. |
| --- |
| `ChatbotNameTextId``string`Localized chatbot display name text identifier.`ChatbotProfileImage``UTexture2D`Soft reference to the chatbot's profile image texture.`ChatbotProfileMessageTextId``string`Localized chatbot profile message text identifier.`WebLinkMap``table<string, string>`Map from link name to URL for web links displayed by this chatbot.`bUseCatTranslator``boolean`Whether this chatbot uses the cat translator feature. |
| `ChatbotProfileImage``UTexture2D`Soft reference to the chatbot's profile image texture.`ChatbotProfileMessageTextId``string`Localized chatbot profile message text identifier.`WebLinkMap``table<string, string>`Map from link name to URL for web links displayed by this chatbot.`bUseCatTranslator``boolean`Whether this chatbot uses the cat translator feature. |
| `ChatbotProfileMessageTextId``string`Localized chatbot profile message text identifier.`WebLinkMap``table<string, string>`Map from link name to URL for web links displayed by this chatbot.`bUseCatTranslator``boolean`Whether this chatbot uses the cat translator feature. |
| `WebLinkMap``table<string, string>`Map from link name to URL for web links displayed by this chatbot.`bUseCatTranslator``boolean`Whether this chatbot uses the cat translator feature. |
| `bUseCatTranslator``boolean`Whether this chatbot uses the cat translator feature. |

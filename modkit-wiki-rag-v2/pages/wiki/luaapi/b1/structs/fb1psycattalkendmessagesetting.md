---
document_id: "d2b0f72a4ddc41f8a86901a54130a408eefe446720276d0dfa2400cae37be85a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1psycattalkendmessagesetting"
title: "FB1PsycatTalkEndMessageSetting"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:08+00:00"
content_sha256: "c0dd307cd3e0b4437a7bcf8e96bff603a13fedf09b38647d091a51cfa5168b15"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1psycattalkendmessagesetting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines end-message behavior for the Psycat Talk system, specifying the maximum number of responses and the end-message text IDs shown when the limit is exceeded.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`EndMessageTextIdList``string[]`List of end-message text IDs randomly selected when the response limit is exceeded.`MaxResponseCount``integer`Maximum number of responses Psycat will give before showing an end message. After this limit, the next query triggers an end message. The count resets when the UI is closed or after the end message is shown. |
| --- |
| `EndMessageTextIdList``string[]`List of end-message text IDs randomly selected when the response limit is exceeded.`MaxResponseCount``integer`Maximum number of responses Psycat will give before showing an end message. After this limit, the next query triggers an end message. The count resets when the UI is closed or after the end message is shown. |
| `MaxResponseCount``integer`Maximum number of responses Psycat will give before showing an end message. After this limit, the next query triggers an end message. The count resets when the UI is closed or after the end message is shown. |

---
document_id: "0adb1e1ba558adce43ce9337aa3ed85e4aa768426de4825772c11c0d1ee21c20"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bgmaudiotablerow"
title: "FB1BGMAudioTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:10+00:00"
content_sha256: "23b660a2b562bdeb46890d169c98758f53854345f47346e319c3d3f05206f8c9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bgmaudiotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row defining a BGM audio entry, including its group ID, MetaSound source, and whether playback position can be saved.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`CanSavePlayTime``boolean`If true, the playback position of this BGM can be saved and restored.`GroupId``string`Group ID used to reference this BGM track for transitions.`MetaSoundResource``any`MetaSound source asset for this BGM entry. |
| --- |
| `CanSavePlayTime``boolean`If true, the playback position of this BGM can be saved and restored.`GroupId``string`Group ID used to reference this BGM track for transitions.`MetaSoundResource``any`MetaSound source asset for this BGM entry. |
| `GroupId``string`Group ID used to reference this BGM track for transitions.`MetaSoundResource``any`MetaSound source asset for this BGM entry. |
| `MetaSoundResource``any`MetaSound source asset for this BGM entry. |

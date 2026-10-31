---
document_id: "a5fa03f638a1f5245baf8de76fd535d037026f56c12e4e854147b7d581efb667"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagepartiesdata"
title: "FB1MobileMessagePartiesData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:29+00:00"
content_sha256: "c877fb8fedc59dbd8300aa689f2171aeaab38f32da4a9602c348cbec47b7373c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagepartiesdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines how a message party (sender or receiver) is resolved from a script context base object. Uses a base object reference and optional conditions to identify the target entity.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`BaseObject`[`EB1MobileMessageBaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessagebaseobject)Base object in the script context used as the starting reference to resolve this party.`Conditions``FB1Condition[]`Conditions that must be satisfied for this party resolution to be valid. |
| --- |
| `BaseObject`[`EB1MobileMessageBaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessagebaseobject)Base object in the script context used as the starting reference to resolve this party.`Conditions``FB1Condition[]`Conditions that must be satisfied for this party resolution to be valid. |
| `Conditions``FB1Condition[]`Conditions that must be satisfied for this party resolution to be valid. |

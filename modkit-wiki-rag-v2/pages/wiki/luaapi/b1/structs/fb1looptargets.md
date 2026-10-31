---
document_id: "bfcee75e6fe9db083542a845ea144df4c2fb92b433b395bef60bd4d8a6458ed6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1looptargets"
title: "FB1LoopTargets"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:24+00:00"
content_sha256: "1cf819ab814977e7e652e833cc15263c9dd80882da0bc5d82358e86fbd603ceb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1looptargets"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single loop target condition for emotion expression. Multiple conditions are evaluated as OR — matching any one triggers the expression.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`Id``string`Identifier for the condition. Meaning depends on Type (ObjectBP Id, InteractionBag Id, Tag, etc.).`Type`[`EB1LoopTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1looptargettype)Type of condition to match against. |
| --- |
| `Id``string`Identifier for the condition. Meaning depends on Type (ObjectBP Id, InteractionBag Id, Tag, etc.).`Type`[`EB1LoopTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1looptargettype)Type of condition to match against. |
| `Type`[`EB1LoopTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1looptargettype)Type of condition to match against. |

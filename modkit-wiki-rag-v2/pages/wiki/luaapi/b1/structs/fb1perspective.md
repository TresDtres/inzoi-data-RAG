---
document_id: "827a0f3c5b9db1d12492dd98f9eb19714a55c6d877cf1a5b5643deb4d1875588"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1perspective"
title: "FB1Perspective"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:01+00:00"
content_sha256: "a3d2a6cc77c258ccb971fad00279b286fa53e818f4ef5604b68947226d5bd283"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1perspective"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Tracks the current perspective value and cooldown times for a character's perspective system.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CoolTimePerReason``table<string, FDateTime>`Map of interaction bag IDs to the last time their cooldown was applied.`UpdateTime``FDateTime`Timestamp of the last update to this perspective.`Value``number`Current numerical value of the perspective. |
| --- |
| `CoolTimePerReason``table<string, FDateTime>`Map of interaction bag IDs to the last time their cooldown was applied.`UpdateTime``FDateTime`Timestamp of the last update to this perspective.`Value``number`Current numerical value of the perspective. |
| `UpdateTime``FDateTime`Timestamp of the last update to this perspective.`Value``number`Current numerical value of the perspective. |
| `Value``number`Current numerical value of the perspective. |

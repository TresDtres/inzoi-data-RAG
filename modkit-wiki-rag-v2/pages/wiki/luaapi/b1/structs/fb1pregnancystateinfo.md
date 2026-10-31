---
document_id: "2d0fdc384d7201983b89a4c058c0680fea3799b5c46fb9ef5a56623660362670"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pregnancystateinfo"
title: "FB1PregnancyStateInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:05+00:00"
content_sha256: "c696360c994939dbc43a4bb04fe526631804a3abe78b309b0b6c16340c4d9af1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1pregnancystateinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a single pregnancy state in the progression sequence. Specifies the state identifier, duration, body morph scale, and UI visibility.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`BodyMorphScale``number`Normalized value (0 to 1) representing belly expansion due to pregnancy Normalized belly expansion morph scale for this pregnancy state (0.0 to 1.0).`Duration``number`Duration of the pregnancy state before it goes to the next state in in-game minutes, zero means it persists Duration of this pregnancy state in in-game minutes before advancing to the next state. Zero means it persists indefinitely.`HideInUI``boolean`Should this pregnancy state be hidden from user in UI Whether this pregnancy state should be hidden from the player in the UI.`Id``string`Unique identifier for this pregnancy state. |
| --- |
| `BodyMorphScale``number`Normalized value (0 to 1) representing belly expansion due to pregnancy Normalized belly expansion morph scale for this pregnancy state (0.0 to 1.0).`Duration``number`Duration of the pregnancy state before it goes to the next state in in-game minutes, zero means it persists Duration of this pregnancy state in in-game minutes before advancing to the next state. Zero means it persists indefinitely.`HideInUI``boolean`Should this pregnancy state be hidden from user in UI Whether this pregnancy state should be hidden from the player in the UI.`Id``string`Unique identifier for this pregnancy state. |
| `Duration``number`Duration of the pregnancy state before it goes to the next state in in-game minutes, zero means it persists Duration of this pregnancy state in in-game minutes before advancing to the next state. Zero means it persists indefinitely.`HideInUI``boolean`Should this pregnancy state be hidden from user in UI Whether this pregnancy state should be hidden from the player in the UI.`Id``string`Unique identifier for this pregnancy state. |
| `HideInUI``boolean`Should this pregnancy state be hidden from user in UI Whether this pregnancy state should be hidden from the player in the UI.`Id``string`Unique identifier for this pregnancy state. |
| `Id``string`Unique identifier for this pregnancy state. |

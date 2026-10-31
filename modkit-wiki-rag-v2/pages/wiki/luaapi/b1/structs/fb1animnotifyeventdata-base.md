---
document_id: "24f1d31ceab2978d548e1d78efc45f7b9675996062a685943efa2433272651ea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base"
title: "FB1AnimNotifyEventData_Base"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "5d0341423f9bf36fd57eefc36ada885e2806e783843ffff0d5bb0480a06ea1b7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1animnotifyeventdata-base"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Base struct for animation notify event data, storing the notify type, trigger time, and duration shared by all event subtypes.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`Duration``number`Duration in seconds for NotifyState events.`TriggerTime``number`Time in seconds within the animation at which this event triggers.`Type`[`EB1NotyfyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1notyfytype)Whether this is a one-shot Notify or a duration-based NotifyState. |
| --- |
| `Duration``number`Duration in seconds for NotifyState events.`TriggerTime``number`Time in seconds within the animation at which this event triggers.`Type`[`EB1NotyfyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1notyfytype)Whether this is a one-shot Notify or a duration-based NotifyState. |
| `TriggerTime``number`Time in seconds within the animation at which this event triggers.`Type`[`EB1NotyfyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1notyfytype)Whether this is a one-shot Notify or a duration-based NotifyState. |
| `Type`[`EB1NotyfyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1notyfytype)Whether this is a one-shot Notify or a duration-based NotifyState. |

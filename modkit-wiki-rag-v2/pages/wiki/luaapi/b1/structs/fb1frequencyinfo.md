---
document_id: "02b941c844ed103b62060b3da2966fd4f3a61a40cdd53554f347321f1579449c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1frequencyinfo"
title: "FB1FrequencyInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:57+00:00"
content_sha256: "1c3fc2e1f0dd60b0b0010504239986e50f3430f565111bd6198fbf8ab1167d5d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1frequencyinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the frequency behavior of a howling event, controlling whether it fires once, on enter, or on a repeating pulse, along with cooldown and duration settings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`CooldownTime``number`Cooldown time between repeated firings of this howling event.`Duration``number`Duration for which this howling event remains active (for Pulse type).`Type`[`EB1HowlingFrequencyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1howlingfrequencytype)Frequency type determining when and how often this howling fires.`bAllowMultiple``boolean`If true (Enter type only), allows the howling to fire multiple times for the same target. This flag works only for the Enter type; check the spec before using. |
| --- |
| `CooldownTime``number`Cooldown time between repeated firings of this howling event.`Duration``number`Duration for which this howling event remains active (for Pulse type).`Type`[`EB1HowlingFrequencyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1howlingfrequencytype)Frequency type determining when and how often this howling fires.`bAllowMultiple``boolean`If true (Enter type only), allows the howling to fire multiple times for the same target. This flag works only for the Enter type; check the spec before using. |
| `Duration``number`Duration for which this howling event remains active (for Pulse type).`Type`[`EB1HowlingFrequencyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1howlingfrequencytype)Frequency type determining when and how often this howling fires.`bAllowMultiple``boolean`If true (Enter type only), allows the howling to fire multiple times for the same target. This flag works only for the Enter type; check the spec before using. |
| `Type`[`EB1HowlingFrequencyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1howlingfrequencytype)Frequency type determining when and how often this howling fires.`bAllowMultiple``boolean`If true (Enter type only), allows the howling to fire multiple times for the same target. This flag works only for the Enter type; check the spec before using. |
| `bAllowMultiple``boolean`If true (Enter type only), allows the howling to fire multiple times for the same target. This flag works only for the Enter type; check the spec before using. |

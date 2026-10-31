---
document_id: "951bbdeae5e9d946a9736543ca9f8b7a8db78b062aaf71b476bc0e7778fb0c1e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1admitdesireboostdata"
title: "FB1AdmitDesireBoostData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "6c35c2fa70fa52a4eab4e785325fb028a85b56e095df1a8710f1a127b8a4df75"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1admitdesireboostdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single entry in the admit desire boost table, specifying a value range and the resulting emotion tendency and level when triggered.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`From``number`The lower bound of the desire value range for this boost entry.`Level``integer`The emotion level applied when the desire value is within this range (minimum 1).`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotion tendency applied when the desire value is within this range.`To``number`The upper bound of the desire value range for this boost entry. |
| --- |
| `From``number`The lower bound of the desire value range for this boost entry.`Level``integer`The emotion level applied when the desire value is within this range (minimum 1).`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotion tendency applied when the desire value is within this range.`To``number`The upper bound of the desire value range for this boost entry. |
| `Level``integer`The emotion level applied when the desire value is within this range (minimum 1).`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotion tendency applied when the desire value is within this range.`To``number`The upper bound of the desire value range for this boost entry. |
| `Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotion tendency applied when the desire value is within this range.`To``number`The upper bound of the desire value range for this boost entry. |
| `To``number`The upper bound of the desire value range for this boost entry. |

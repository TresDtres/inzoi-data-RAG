---
document_id: "6970ff6a9836e7a295bdbe40335c25c52a59419f4fc93406203b9caba3ea9139"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1emotionreward"
title: "FB1EmotionReward"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:45+00:00"
content_sha256: "f93a30b2512dc5208dd62e2a06e900f9aae6f64af9f44f87cc406edbe053f391"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1emotionreward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines an emotion-based reward for an interaction. Applies a bonus when the target emotion level falls within a specified range.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Bonus``integer`Bonus value applied when the emotion level is within the specified range.`EmotionId``string`ID of the emotion associated with this reward (references Emotion.Id).`LevelFrom``integer`Minimum emotion level at which this reward applies.`LevelTo``integer`Maximum emotion level at which this reward applies. |
| --- |
| `Bonus``integer`Bonus value applied when the emotion level is within the specified range.`EmotionId``string`ID of the emotion associated with this reward (references Emotion.Id).`LevelFrom``integer`Minimum emotion level at which this reward applies.`LevelTo``integer`Maximum emotion level at which this reward applies. |
| `EmotionId``string`ID of the emotion associated with this reward (references Emotion.Id).`LevelFrom``integer`Minimum emotion level at which this reward applies.`LevelTo``integer`Maximum emotion level at which this reward applies. |
| `LevelFrom``integer`Minimum emotion level at which this reward applies.`LevelTo``integer`Maximum emotion level at which this reward applies. |
| `LevelTo``integer`Maximum emotion level at which this reward applies. |

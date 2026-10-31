---
document_id: "304b3a5707168acf566dff5cd712131da9c1ac284ab73d22b8c920b0659b4866"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1emotiontablerow"
title: "FB1EmotionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:45+00:00"
content_sha256: "27cdc238bf37bf17f418f11834e1805c0d8f77d6e0a0219e33ea720139f41167"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1emotiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a single emotion type, including its tendency, activation value, UI order, icon, and the level data and admit desire buff data for each tier.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (7)

| NameTypeDescription`ActivateValue``integer`The base value at which this emotion becomes active.`AdmitDesireBuffLevelDatas``FB1AdmitDesireBuffLevelData[]`List of admit desire buff level data applied when the character's desire is acknowledged.`EmotionLevelDatas``FB1EmotionLevelData[]`List of level data defining thresholds, modifiers, and visuals per emotion level.`Icon``UObject`Soft reference to the icon texture used for this emotion in UI.`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotional tendency (Natural, Positive, or Negative).`Type`[`EB1EmotionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontype)The category type of this emotion (Normal, Sleep, etc.).`UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |
| --- |
| `ActivateValue``integer`The base value at which this emotion becomes active.`AdmitDesireBuffLevelDatas``FB1AdmitDesireBuffLevelData[]`List of admit desire buff level data applied when the character's desire is acknowledged.`EmotionLevelDatas``FB1EmotionLevelData[]`List of level data defining thresholds, modifiers, and visuals per emotion level.`Icon``UObject`Soft reference to the icon texture used for this emotion in UI.`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotional tendency (Natural, Positive, or Negative).`Type`[`EB1EmotionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontype)The category type of this emotion (Normal, Sleep, etc.).`UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |
| `AdmitDesireBuffLevelDatas``FB1AdmitDesireBuffLevelData[]`List of admit desire buff level data applied when the character's desire is acknowledged.`EmotionLevelDatas``FB1EmotionLevelData[]`List of level data defining thresholds, modifiers, and visuals per emotion level.`Icon``UObject`Soft reference to the icon texture used for this emotion in UI.`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotional tendency (Natural, Positive, or Negative).`Type`[`EB1EmotionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontype)The category type of this emotion (Normal, Sleep, etc.).`UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |
| `EmotionLevelDatas``FB1EmotionLevelData[]`List of level data defining thresholds, modifiers, and visuals per emotion level.`Icon``UObject`Soft reference to the icon texture used for this emotion in UI.`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotional tendency (Natural, Positive, or Negative).`Type`[`EB1EmotionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontype)The category type of this emotion (Normal, Sleep, etc.).`UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |
| `Icon``UObject`Soft reference to the icon texture used for this emotion in UI.`Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotional tendency (Natural, Positive, or Negative).`Type`[`EB1EmotionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontype)The category type of this emotion (Normal, Sleep, etc.).`UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |
| `Tendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)The emotional tendency (Natural, Positive, or Negative).`Type`[`EB1EmotionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontype)The category type of this emotion (Normal, Sleep, etc.).`UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |
| `Type`[`EB1EmotionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontype)The category type of this emotion (Normal, Sleep, etc.).`UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |
| `UIOrder``integer`UI display order; default -1 means the emotion is not shown in the UI. |

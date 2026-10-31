---
document_id: "7b0265c37b9e3f3eed47a11151de5f1e3a6a62f2df6bc7d89bea2f0b4a16a6e8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1levelsequenceinfo"
title: "FB1LevelSequenceInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:15+00:00"
content_sha256: "1f885c358c8f09859cdf87ae49d0a8a400eaae7ca9ec880c82496209c2628e09"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1levelsequenceinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a level sequence entry for cinematic playback. Contains gender conditions, sequence reference, data layer, outfit copy settings, and streaming behavior.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (9)

| NameTypeDescription`DataLayerPath``string`Data layer path associated with this level sequence.`LevelSequence``FSoftObjectPath`Soft path to the level sequence asset to play.`MaxCinemaCharNum``integer`Maximum number of characters allowed in the cinematic.`PlayerGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the player character when selecting this sequence.`PresetIdList``string[]`List of preset IDs used to configure characters in the cinematic.`StreamingSourceHandleMethod`[`EB1StreamingSourceHandleMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1streamingsourcehandlemethod)Method used to handle the streaming source during cinematic playback.`TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| --- |
| `DataLayerPath``string`Data layer path associated with this level sequence.`LevelSequence``FSoftObjectPath`Soft path to the level sequence asset to play.`MaxCinemaCharNum``integer`Maximum number of characters allowed in the cinematic.`PlayerGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the player character when selecting this sequence.`PresetIdList``string[]`List of preset IDs used to configure characters in the cinematic.`StreamingSourceHandleMethod`[`EB1StreamingSourceHandleMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1streamingsourcehandlemethod)Method used to handle the streaming source during cinematic playback.`TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `LevelSequence``FSoftObjectPath`Soft path to the level sequence asset to play.`MaxCinemaCharNum``integer`Maximum number of characters allowed in the cinematic.`PlayerGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the player character when selecting this sequence.`PresetIdList``string[]`List of preset IDs used to configure characters in the cinematic.`StreamingSourceHandleMethod`[`EB1StreamingSourceHandleMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1streamingsourcehandlemethod)Method used to handle the streaming source during cinematic playback.`TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `MaxCinemaCharNum``integer`Maximum number of characters allowed in the cinematic.`PlayerGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the player character when selecting this sequence.`PresetIdList``string[]`List of preset IDs used to configure characters in the cinematic.`StreamingSourceHandleMethod`[`EB1StreamingSourceHandleMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1streamingsourcehandlemethod)Method used to handle the streaming source during cinematic playback.`TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `PlayerGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the player character when selecting this sequence.`PresetIdList``string[]`List of preset IDs used to configure characters in the cinematic.`StreamingSourceHandleMethod`[`EB1StreamingSourceHandleMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1streamingsourcehandlemethod)Method used to handle the streaming source during cinematic playback.`TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `PresetIdList``string[]`List of preset IDs used to configure characters in the cinematic.`StreamingSourceHandleMethod`[`EB1StreamingSourceHandleMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1streamingsourcehandlemethod)Method used to handle the streaming source during cinematic playback.`TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `StreamingSourceHandleMethod`[`EB1StreamingSourceHandleMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1streamingsourcehandlemethod)Method used to handle the streaming source during cinematic playback.`TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `TargetGenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Required gender type for the target character when selecting this sequence.`bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `bCopyOutFit``boolean`Whether to copy the character's current outfit to the cinematic character.`bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |
| `bCouldStopWhilePlaying``boolean`Whether the sequence can be stopped while it is playing. |

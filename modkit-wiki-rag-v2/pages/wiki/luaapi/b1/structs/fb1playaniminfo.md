---
document_id: "53eb3b8a643f3ef3ee497db0e6cefb180a3ebae2788c259ad344daa8db21abe7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1playaniminfo"
title: "FB1PlayAnimInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:02+00:00"
content_sha256: "a9636774952b987e7375abfbcf3a03d5f3ee08b0cd2f20aaa8edadf3a8c0bd4d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1playaniminfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines animation playback data for a target game object or character, including animation IDs, start section, force-play flag, and conditions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`AnimStartSection`[`EB1LoopAnimSection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loopanimsection)Animation start section override.`CharacterAnimId``string`Character animation ID to play on the acting character.`Conditions``FB1PlayAnimCondition[]`List of conditions that must pass before the animation plays.`GameObjectAnimId``string`Game object animation ID to play on the target.`TargetGameObjectType`[`EB1TargetObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1targetobjecttype)Target game object type (interaction target or posture target).`bForcePlayAnim``boolean`If true, forces playback even if conditions are not fully met. |
| --- |
| `AnimStartSection`[`EB1LoopAnimSection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loopanimsection)Animation start section override.`CharacterAnimId``string`Character animation ID to play on the acting character.`Conditions``FB1PlayAnimCondition[]`List of conditions that must pass before the animation plays.`GameObjectAnimId``string`Game object animation ID to play on the target.`TargetGameObjectType`[`EB1TargetObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1targetobjecttype)Target game object type (interaction target or posture target).`bForcePlayAnim``boolean`If true, forces playback even if conditions are not fully met. |
| `CharacterAnimId``string`Character animation ID to play on the acting character.`Conditions``FB1PlayAnimCondition[]`List of conditions that must pass before the animation plays.`GameObjectAnimId``string`Game object animation ID to play on the target.`TargetGameObjectType`[`EB1TargetObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1targetobjecttype)Target game object type (interaction target or posture target).`bForcePlayAnim``boolean`If true, forces playback even if conditions are not fully met. |
| `Conditions``FB1PlayAnimCondition[]`List of conditions that must pass before the animation plays.`GameObjectAnimId``string`Game object animation ID to play on the target.`TargetGameObjectType`[`EB1TargetObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1targetobjecttype)Target game object type (interaction target or posture target).`bForcePlayAnim``boolean`If true, forces playback even if conditions are not fully met. |
| `GameObjectAnimId``string`Game object animation ID to play on the target.`TargetGameObjectType`[`EB1TargetObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1targetobjecttype)Target game object type (interaction target or posture target).`bForcePlayAnim``boolean`If true, forces playback even if conditions are not fully met. |
| `TargetGameObjectType`[`EB1TargetObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1targetobjecttype)Target game object type (interaction target or posture target).`bForcePlayAnim``boolean`If true, forces playback even if conditions are not fully met. |
| `bForcePlayAnim``boolean`If true, forces playback even if conditions are not fully met. |

---
document_id: "3e1b9707868d40f52a81d3c6dd775a1fa67976217622087d7dab59bd37f1e68b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/common/structs/fbanimpacketdata"
title: "FBAnimPacketData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:47:45+00:00"
content_sha256: "96692019e8c397b21db7cdfedc5438f2212c3cdce0b3f8cb9788e4553055f64a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/common/structs/fbanimpacketdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Network packet data describing an animation to play, including IDs, section, owner/target entities, playback position, and motion warp flag.

# Metadata

| FieldValueKind`struct`EnvironmentCommon / EngineCategory`structs` |
| --- |
| Kind`struct`EnvironmentCommon / EngineCategory`structs` |
| EnvironmentCommon / EngineCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`ActionOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the action owner playing the animation.`ActionTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the action target receiving the animation.`AnimId``string`Animation data table ID to play.`AnimTag``string`Tag identifying the animation context.`Position``number`Playback position to start from.`StartSectionName``string`Name of the montage section to start from.`bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |
| --- |
| `ActionOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the action owner playing the animation.`ActionTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the action target receiving the animation.`AnimId``string`Animation data table ID to play.`AnimTag``string`Tag identifying the animation context.`Position``number`Playback position to start from.`StartSectionName``string`Name of the montage section to start from.`bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |
| `ActionTargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the action target receiving the animation.`AnimId``string`Animation data table ID to play.`AnimTag``string`Tag identifying the animation context.`Position``number`Playback position to start from.`StartSectionName``string`Name of the montage section to start from.`bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |
| `AnimId``string`Animation data table ID to play.`AnimTag``string`Tag identifying the animation context.`Position``number`Playback position to start from.`StartSectionName``string`Name of the montage section to start from.`bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |
| `AnimTag``string`Tag identifying the animation context.`Position``number`Playback position to start from.`StartSectionName``string`Name of the montage section to start from.`bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |
| `Position``number`Playback position to start from.`StartSectionName``string`Name of the montage section to start from.`bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |
| `StartSectionName``string`Name of the montage section to start from.`bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |
| `bWithMotionWarp``boolean`If true, motion warping is applied during this animation. |

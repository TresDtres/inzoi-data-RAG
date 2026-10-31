---
document_id: "7f7d59fbb51b0e244a36b719db312181f5e4a002614fbd5bd76376e368199347"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1characteranimtablerow"
title: "FB1CharacterAnimTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:20+00:00"
content_sha256: "9fa33786e5def368654a17a4621816aeb83a8ec3d2ff6f8d06779642898eb32d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1characteranimtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row defining a character animation, including attach mesh info, playing component, loop section, and animation configurations per gender/age.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`AttachMeshInfos``FB1AnimAttachMeshInfo[]`List of attach meshes to spawn during this animation.`CharacterAnimConfigList``FB1CharacterAnimConfig[]`List of character animation configurations for different postures/parts.`PlayingComponentName``string`Name of the playing component to use (Root, Head, or Hair).`StartAnimSection`[`EB1LoopAnimSection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loopanimsection)Animation section to begin playback from.`StopOtherComponentOnFinish``boolean`If true, stops other playing components when this animation finishes. |
| --- |
| `AttachMeshInfos``FB1AnimAttachMeshInfo[]`List of attach meshes to spawn during this animation.`CharacterAnimConfigList``FB1CharacterAnimConfig[]`List of character animation configurations for different postures/parts.`PlayingComponentName``string`Name of the playing component to use (Root, Head, or Hair).`StartAnimSection`[`EB1LoopAnimSection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loopanimsection)Animation section to begin playback from.`StopOtherComponentOnFinish``boolean`If true, stops other playing components when this animation finishes. |
| `CharacterAnimConfigList``FB1CharacterAnimConfig[]`List of character animation configurations for different postures/parts.`PlayingComponentName``string`Name of the playing component to use (Root, Head, or Hair).`StartAnimSection`[`EB1LoopAnimSection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loopanimsection)Animation section to begin playback from.`StopOtherComponentOnFinish``boolean`If true, stops other playing components when this animation finishes. |
| `PlayingComponentName``string`Name of the playing component to use (Root, Head, or Hair).`StartAnimSection`[`EB1LoopAnimSection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loopanimsection)Animation section to begin playback from.`StopOtherComponentOnFinish``boolean`If true, stops other playing components when this animation finishes. |
| `StartAnimSection`[`EB1LoopAnimSection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loopanimsection)Animation section to begin playback from.`StopOtherComponentOnFinish``boolean`If true, stops other playing components when this animation finishes. |
| `StopOtherComponentOnFinish``boolean`If true, stops other playing components when this animation finishes. |

---
document_id: "115e6c0220b5c7506b2b6f993e961fc68587b1ec7b552f5828425d59b1612be5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1posturedirectioninfo"
title: "FB1PostureDirectionInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:04+00:00"
content_sha256: "f3eecac4af90f93f085950bcb482ddf41e9b90e054bb678da11682463c024f97"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1posturedirectioninfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Holds the directional animation configuration for a posture, including start, loop, and end animation IDs.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`BaseComponentName``string`The name of the base object component that provides this posture's slot.`Direction`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)The slot direction this posture direction info applies to.`EndAnimId``string`The animation ID played when exiting this posture direction.`LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`LoopAnimId``string`The animation ID played while looping in this posture direction.`PostureAnimId``string`The animation ID played when entering this posture direction.`PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |
| --- |
| `BaseComponentName``string`The name of the base object component that provides this posture's slot.`Direction`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)The slot direction this posture direction info applies to.`EndAnimId``string`The animation ID played when exiting this posture direction.`LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`LoopAnimId``string`The animation ID played while looping in this posture direction.`PostureAnimId``string`The animation ID played when entering this posture direction.`PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |
| `Direction`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)The slot direction this posture direction info applies to.`EndAnimId``string`The animation ID played when exiting this posture direction.`LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`LoopAnimId``string`The animation ID played while looping in this posture direction.`PostureAnimId``string`The animation ID played when entering this posture direction.`PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |
| `EndAnimId``string`The animation ID played when exiting this posture direction.`LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`LoopAnimId``string`The animation ID played while looping in this posture direction.`PostureAnimId``string`The animation ID played when entering this posture direction.`PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |
| `LinkedComponentName``string`The name of the linked object component paired with the base for multi-component slots.`LoopAnimId``string`The animation ID played while looping in this posture direction.`PostureAnimId``string`The animation ID played when entering this posture direction.`PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |
| `LoopAnimId``string`The animation ID played while looping in this posture direction.`PostureAnimId``string`The animation ID played when entering this posture direction.`PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |
| `PostureAnimId``string`The animation ID played when entering this posture direction.`PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |
| `PostureTransitionDatas``FB1PostureTransitionData[]`Transition data for direct posture-to-posture changes from this direction. |

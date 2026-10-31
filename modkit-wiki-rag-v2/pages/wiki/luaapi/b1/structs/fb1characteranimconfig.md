---
document_id: "ade57232f1593daa6b5b0df8fe18f64f24670299aa58997ca7998bd9f2dde599"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1characteranimconfig"
title: "FB1CharacterAnimConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:19+00:00"
content_sha256: "d1322c0c39e145cd690c57a63d7cafae38deabf63081c90539d1bcb88df6cd72"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1characteranimconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a character animation configuration entry, specifying which postures, body parts, grab parts, slot direction, and animation list apply.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`AnimBodyParts`[`EB1AnimBodyParts`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animbodyparts)Body parts affected by this animation configuration. ex) Dance with Glass -> Grab with right hand + clap with left hand -> using BothHands.`AnimGrabParts`[`EB1AnimBodyParts`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animbodyparts)Body parts involved in grab operations for this configuration.`AnimInfoList``FB1AnimationInfo[]`List of animation entries for this configuration.`AnimPostureId``string[]`Posture IDs for which this configuration applies.`AnimSlotDirection`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)Slot direction applied to this animation configuration. |
| --- |
| `AnimBodyParts`[`EB1AnimBodyParts`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animbodyparts)Body parts affected by this animation configuration. ex) Dance with Glass -> Grab with right hand + clap with left hand -> using BothHands.`AnimGrabParts`[`EB1AnimBodyParts`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animbodyparts)Body parts involved in grab operations for this configuration.`AnimInfoList``FB1AnimationInfo[]`List of animation entries for this configuration.`AnimPostureId``string[]`Posture IDs for which this configuration applies.`AnimSlotDirection`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)Slot direction applied to this animation configuration. |
| `AnimGrabParts`[`EB1AnimBodyParts`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animbodyparts)Body parts involved in grab operations for this configuration.`AnimInfoList``FB1AnimationInfo[]`List of animation entries for this configuration.`AnimPostureId``string[]`Posture IDs for which this configuration applies.`AnimSlotDirection`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)Slot direction applied to this animation configuration. |
| `AnimInfoList``FB1AnimationInfo[]`List of animation entries for this configuration.`AnimPostureId``string[]`Posture IDs for which this configuration applies.`AnimSlotDirection`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)Slot direction applied to this animation configuration. |
| `AnimPostureId``string[]`Posture IDs for which this configuration applies.`AnimSlotDirection`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)Slot direction applied to this animation configuration. |
| `AnimSlotDirection`[`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)Slot direction applied to this animation configuration. |

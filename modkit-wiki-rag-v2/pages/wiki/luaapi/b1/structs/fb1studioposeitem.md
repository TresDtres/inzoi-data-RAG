---
document_id: "2ffb311309e2ab0705b88c531879f7a3c0da542fdb1c4a4ae966764f4507388d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1studioposeitem"
title: "FB1StudioPoseItem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:36+00:00"
content_sha256: "f98a9695d335786d69fcdb057f25a2e39bf94ba9b7e4e5fe09ab81a78b123854"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1studioposeitem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a single pose item used in the photo studio, including its display name, icon, and animation data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`AnimPose``UAnimSequence`The animation sequence asset used as the pose.`DisabledModes``EB1CharacterCustomizationMode[]`Customization modes in which this pose is disabled and not selectable.`Icon``UObject`The icon displayed in the UI for this pose item.`IsMovingMotion``boolean`Whether this pose involves a moving motion rather than a static pose.`Name``string`Display name shown in the UI for this pose item.`PoseType`[`EB1PoseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1posetype)The type of pose, indicating whether it is a studio pose or a user-defined motion.`bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |
| --- |
| `AnimPose``UAnimSequence`The animation sequence asset used as the pose.`DisabledModes``EB1CharacterCustomizationMode[]`Customization modes in which this pose is disabled and not selectable.`Icon``UObject`The icon displayed in the UI for this pose item.`IsMovingMotion``boolean`Whether this pose involves a moving motion rather than a static pose.`Name``string`Display name shown in the UI for this pose item.`PoseType`[`EB1PoseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1posetype)The type of pose, indicating whether it is a studio pose or a user-defined motion.`bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |
| `DisabledModes``EB1CharacterCustomizationMode[]`Customization modes in which this pose is disabled and not selectable.`Icon``UObject`The icon displayed in the UI for this pose item.`IsMovingMotion``boolean`Whether this pose involves a moving motion rather than a static pose.`Name``string`Display name shown in the UI for this pose item.`PoseType`[`EB1PoseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1posetype)The type of pose, indicating whether it is a studio pose or a user-defined motion.`bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |
| `Icon``UObject`The icon displayed in the UI for this pose item.`IsMovingMotion``boolean`Whether this pose involves a moving motion rather than a static pose.`Name``string`Display name shown in the UI for this pose item.`PoseType`[`EB1PoseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1posetype)The type of pose, indicating whether it is a studio pose or a user-defined motion.`bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |
| `IsMovingMotion``boolean`Whether this pose involves a moving motion rather than a static pose.`Name``string`Display name shown in the UI for this pose item.`PoseType`[`EB1PoseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1posetype)The type of pose, indicating whether it is a studio pose or a user-defined motion.`bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |
| `Name``string`Display name shown in the UI for this pose item.`PoseType`[`EB1PoseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1posetype)The type of pose, indicating whether it is a studio pose or a user-defined motion.`bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |
| `PoseType`[`EB1PoseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1posetype)The type of pose, indicating whether it is a studio pose or a user-defined motion.`bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |
| `bBlendPose``boolean`Whether to blend the pose with the character's current animation state. |

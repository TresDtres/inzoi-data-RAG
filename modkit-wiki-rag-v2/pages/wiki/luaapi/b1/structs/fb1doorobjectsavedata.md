---
document_id: "7aa4bebdb7e791e0589f6a3190d2df57cdd295ec1db0fa71bc4d5b0935eb000d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1doorobjectsavedata"
title: "FB1DoorObjectSaveData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:42+00:00"
content_sha256: "4db8a2c60f3b8eb25e55213e5411a8e15a78b8212b1b667f9b5ba01824657517"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1doorobjectsavedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Save data for a door object, storing owner, permission mode, and access group settings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`AccessiblePermissionGroup`[`EB1DoorPermissionGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1doorpermissiongroup)The permission group that is currently allowed to access the door.`DevelopersPermissionsMessageId``string`Message ID for developer-defined permission rules.`DoorPermissionMode`[`EB1DoorPermissionMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1doorpermissionmode)The permission mode determining how access is evaluated.`DoorPermissionPresetIds``string[]`List of door permission preset IDs applied to this door.`OwnerId``integer`The entity ID of the door owner.`bIsDisabledDoor``boolean`Whether this door is currently disabled (locked/blocked). |
| --- |
| `AccessiblePermissionGroup`[`EB1DoorPermissionGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1doorpermissiongroup)The permission group that is currently allowed to access the door.`DevelopersPermissionsMessageId``string`Message ID for developer-defined permission rules.`DoorPermissionMode`[`EB1DoorPermissionMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1doorpermissionmode)The permission mode determining how access is evaluated.`DoorPermissionPresetIds``string[]`List of door permission preset IDs applied to this door.`OwnerId``integer`The entity ID of the door owner.`bIsDisabledDoor``boolean`Whether this door is currently disabled (locked/blocked). |
| `DevelopersPermissionsMessageId``string`Message ID for developer-defined permission rules.`DoorPermissionMode`[`EB1DoorPermissionMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1doorpermissionmode)The permission mode determining how access is evaluated.`DoorPermissionPresetIds``string[]`List of door permission preset IDs applied to this door.`OwnerId``integer`The entity ID of the door owner.`bIsDisabledDoor``boolean`Whether this door is currently disabled (locked/blocked). |
| `DoorPermissionMode`[`EB1DoorPermissionMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1doorpermissionmode)The permission mode determining how access is evaluated.`DoorPermissionPresetIds``string[]`List of door permission preset IDs applied to this door.`OwnerId``integer`The entity ID of the door owner.`bIsDisabledDoor``boolean`Whether this door is currently disabled (locked/blocked). |
| `DoorPermissionPresetIds``string[]`List of door permission preset IDs applied to this door.`OwnerId``integer`The entity ID of the door owner.`bIsDisabledDoor``boolean`Whether this door is currently disabled (locked/blocked). |
| `OwnerId``integer`The entity ID of the door owner.`bIsDisabledDoor``boolean`Whether this door is currently disabled (locked/blocked). |
| `bIsDisabledDoor``boolean`Whether this door is currently disabled (locked/blocked). |

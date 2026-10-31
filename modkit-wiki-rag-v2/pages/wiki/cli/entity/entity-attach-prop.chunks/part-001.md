---
document_id: "9a9df6f2620bfae7dd598815502a31947037cb171b7512bf10870fee85c06010"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop"
title: "entity.attach_prop"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:56+00:00"
content_sha256: "555d1afe0eca11200b8c144b80b51b4608e4ab5e8fc5442778614c2ae1209552"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/cli/entity/entity-attach-prop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Spawn an object or vehicle and attach it to a character bone. action=list_sockets [filter=]: list mesh sockets. action=attach object_id=<DT_ID> [type=object|vehicle] [bone=]: spawn and attach (default bone: pelvis). type=object (default): uses Object data table. type=vehicle: uses Vehicle data table. action=list: show attached props with index, type, and transform. action=set_transform prop_index= [x y z] [rx ry rz] [sx sy sz]: adjust relative transform. action=detach [prop_index=]: remove one or all props. Collision and physics are disabled on the prop automatically.

# Metadata

| FieldValueDisplayAttach Prop to Character BoneCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntityAttachProp` |
| --- |
| DisplayAttach Prop to Character BoneCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntityAttachProp` |
| Category`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntityAttachProp` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntityAttachProp` |
| Scope`B1Multicast`Tags—Aliases`EntityAttachProp` |
| Tags—Aliases`EntityAttachProp` |
| Aliases`EntityAttachProp` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target character (default: possessed)actionstringnolistlist (default), list_sockets, attach, set_transform, detachobject_idnameno—Data table row ID to spawn (required for attach)typestringnoobjectProp source table: object (default) or vehiclebonestringno—Bone or socket name (default: pelvis)filterstringno—Socket name filter for list_socketsprop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees) rz float no — Relative Roll (degrees) sx float no — Relative scale X (also sets Y/Z if sy/sz omitted) sy float no — Relative scale Y sz float no — Relative scale Z |
| --- |
| entity_identityIdno—Target character (default: possessed)actionstringnolistlist (default), list_sockets, attach, set_transform, detachobject_idnameno—Data table row ID to spawn (required for attach)typestringnoobjectProp source table: object (default) or vehiclebonestringno—Bone or socket name (default: pelvis)filterstringno—Socket name filter for list_socketsprop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sx float no — Relative scale X (also sets Y/Z if sy/sz omitted) sy float no — Relative scale Y sz float no — Relative scale Z |
| actionstringnolistlist (default), list_sockets, attach, set_transform, detachobject_idnameno—Data table row ID to spawn (required for attach)typestringnoobjectProp source table: object (default) or vehiclebonestringno—Bone or socket name (default: pelvis)filterstringno—Socket name filter for list_socketsprop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)sy float no — Relative scale Y sz float no — Relative scale Z |
| object_idnameno—Data table row ID to spawn (required for attach)typestringnoobjectProp source table: object (default) or vehiclebonestringno—Bone or socket name (default: pelvis)filterstringno—Socket name filter for list_socketsprop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Ysz float no — Relative scale Z |
| typestringnoobjectProp source table: object (default) or vehiclebonestringno—Bone or socket name (default: pelvis)filterstringno—Socket name filter for list_socketsprop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| bonestringno—Bone or socket name (default: pelvis)filterstringno—Socket name filter for list_socketsprop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| filterstringno—Socket name filter for list_socketsprop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| prop_indexintno—Index of attached prop (for set_transform/detach)xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| xfloatno—Relative X offset (cm)yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| yfloatno—Relative Y offset (cm)zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| zfloatno—Relative Z offset (cm)rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| rxfloatno—Relative Pitch (degrees)ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| ryfloatno—Relative Yaw (degrees)rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| rzfloatno—Relative Roll (degrees)sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| sxfloatno—Relative scale X (also sets Y/Z if sy/sz omitted)syfloatno—Relative scale Yszfloatno—Relative scale Z |
| syfloatno—Relative scale Yszfloatno—Relative scale Z |
| szfloatno—Relative scale Z |

# Usage

```
await inzoi.cli.execute('entity.attach_prop', {  entity_id: 0, // optional  action: 'list', // optional  object_id: '', // optional  type: 'object', // optional  bone: '', // optional  filter: '', // optional  prop_index: 0, // optional  x: 0.0, // optional  y: 0.0, // optional  z: 0.0, // optional  rx: 0.0, // optional  ry: 0.0, // optional  rz: 0.0, // optional  sx: 0.0, // optional  sy: 0.0, // optional  sz: 0.0, // optional});
```

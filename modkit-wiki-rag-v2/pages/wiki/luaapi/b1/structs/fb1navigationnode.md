---
document_id: "1b8715021d848e494db3ad6c913e96bd59534306fc4bff8d2e72cc7c4a090675"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1navigationnode"
title: "FB1NavigationNode"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:32+00:00"
content_sha256: "ed22f732558e59d6bae2f8c44057bbaa4f8eeb48b6d0345426538064b3f080bd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1navigationnode"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a single waypoint in a navigation path, storing world position, orientation, and associated metadata. Used to build navigation node arrays for path following and city graph traversal.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`Forward``FVector`Forward direction vector at this node for orientation guidance.`HorizontalOffset``number`Horizontal offset applied to the character's position at this node.`LaneKey`[`FB1CityGraphLaneKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphlanekey)City graph lane key associated with this navigation node.`Point``FVector`World position of this navigation node.`Right``FVector`Right direction vector at this node for lateral offset calculations.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target object associated with this node, if any.`Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |
| --- |
| `Forward``FVector`Forward direction vector at this node for orientation guidance.`HorizontalOffset``number`Horizontal offset applied to the character's position at this node.`LaneKey`[`FB1CityGraphLaneKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphlanekey)City graph lane key associated with this navigation node.`Point``FVector`World position of this navigation node.`Right``FVector`Right direction vector at this node for lateral offset calculations.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target object associated with this node, if any.`Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |
| `HorizontalOffset``number`Horizontal offset applied to the character's position at this node.`LaneKey`[`FB1CityGraphLaneKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphlanekey)City graph lane key associated with this navigation node.`Point``FVector`World position of this navigation node.`Right``FVector`Right direction vector at this node for lateral offset calculations.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target object associated with this node, if any.`Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |
| `LaneKey`[`FB1CityGraphLaneKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphlanekey)City graph lane key associated with this navigation node.`Point``FVector`World position of this navigation node.`Right``FVector`Right direction vector at this node for lateral offset calculations.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target object associated with this node, if any.`Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |
| `Point``FVector`World position of this navigation node.`Right``FVector`Right direction vector at this node for lateral offset calculations.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target object associated with this node, if any.`Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |
| `Right``FVector`Right direction vector at this node for lateral offset calculations.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target object associated with this node, if any.`Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |
| `TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target object associated with this node, if any.`Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |
| `Type`[`EB1NavigationNodeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1navigationnodetype)Type classification of this navigation node. |

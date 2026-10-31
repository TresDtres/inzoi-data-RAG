---
document_id: "4f640d2236e4e6aaf073003106b9245e7cc3720d77473400ef5d5294f1cd45a1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1spacenodesavedata"
title: "FB1SpaceNodeSaveData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:31+00:00"
content_sha256: "9d10bd02da2f18be8a519886e1f1faab84206832615fb6863b8325718ecd9a18"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1spacenodesavedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Saved data for a node in the space tree, containing its owner face, border, child spaces, and child node indices.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Children``integer[]`The list of child node indices in the space tree hierarchy.`NodeBorder`[`FB1SpaceBorderSaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1spacebordersavedata)The 2D boundary of this space node used for containment checks.`OwnerFaceNo``integer`The face number of the wall face that owns this space node.`Spaces``FB1SpaceSaveData[]`The list of space volumes contained within this node. |
| --- |
| `Children``integer[]`The list of child node indices in the space tree hierarchy.`NodeBorder`[`FB1SpaceBorderSaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1spacebordersavedata)The 2D boundary of this space node used for containment checks.`OwnerFaceNo``integer`The face number of the wall face that owns this space node.`Spaces``FB1SpaceSaveData[]`The list of space volumes contained within this node. |
| `NodeBorder`[`FB1SpaceBorderSaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1spacebordersavedata)The 2D boundary of this space node used for containment checks.`OwnerFaceNo``integer`The face number of the wall face that owns this space node.`Spaces``FB1SpaceSaveData[]`The list of space volumes contained within this node. |
| `OwnerFaceNo``integer`The face number of the wall face that owns this space node.`Spaces``FB1SpaceSaveData[]`The list of space volumes contained within this node. |
| `Spaces``FB1SpaceSaveData[]`The list of space volumes contained within this node. |

---
document_id: "a28a84d1b76269a91797e3da2d87d9f0a99cb73d984ee0bcce95c7b60edb6347"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1faceshapecustomizedata"
title: "FB1FaceShapeCustomizeData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:49+00:00"
content_sha256: "4ec1e648e5bf0af49bcb7c7d73d978db7aa2be1d798e120e1ede99f49f961890"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1faceshapecustomizedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines face shape customization data, including gizmo groups, transform groups, and lookup tables for runtime interaction.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`BoneToGizmoGroupIndexTable``table<string, integer>`Lookup table mapping bones to gizmo group indices.`CustomizeGroups``FB1FaceGroupTransformData[]`Transform groups defining additive data and gizmo behavior.`GizmoGroupTree``table<string, FB1GizmoGroupNode>`Editor-only tree representation of gizmo groups, keyed by name.`GizmoGroups``FB1FaceGizmoGroup[]`Gizmo groups used for face customization. |
| --- |
| `BoneToGizmoGroupIndexTable``table<string, integer>`Lookup table mapping bones to gizmo group indices.`CustomizeGroups``FB1FaceGroupTransformData[]`Transform groups defining additive data and gizmo behavior.`GizmoGroupTree``table<string, FB1GizmoGroupNode>`Editor-only tree representation of gizmo groups, keyed by name.`GizmoGroups``FB1FaceGizmoGroup[]`Gizmo groups used for face customization. |
| `CustomizeGroups``FB1FaceGroupTransformData[]`Transform groups defining additive data and gizmo behavior.`GizmoGroupTree``table<string, FB1GizmoGroupNode>`Editor-only tree representation of gizmo groups, keyed by name.`GizmoGroups``FB1FaceGizmoGroup[]`Gizmo groups used for face customization. |
| `GizmoGroupTree``table<string, FB1GizmoGroupNode>`Editor-only tree representation of gizmo groups, keyed by name.`GizmoGroups``FB1FaceGizmoGroup[]`Gizmo groups used for face customization. |
| `GizmoGroups``FB1FaceGizmoGroup[]`Gizmo groups used for face customization. |

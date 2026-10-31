---
document_id: "b14f6a1d9b85c06da0f25008a731efdbc1849e7175d3f9f255a44cb14473b4d7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bodyshapecustomizedata"
title: "FB1BodyShapeCustomizeData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:12+00:00"
content_sha256: "4af4f3f4f1345a9c337af458dba0517a7bf73ff9e8f39c08f4c1aee756d8b3b2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bodyshapecustomizedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines body shape customization data, including gizmo groups, transform groups, and lookup tables for runtime interaction.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`BoneToGizmoGroupIndexTable``table<string, integer>`Lookup table mapping bones to gizmo group indices.`CustomizeGroups``FB1BodyGroupTransformData[]`Transform groups defining body shape adjustments.`GizmoGroups``FB1BodyGizmoGroup[]`Body gizmo groups used for customization.`MuscleLimitGroup``integer`Group index that limits muscle deformation. |
| --- |
| `BoneToGizmoGroupIndexTable``table<string, integer>`Lookup table mapping bones to gizmo group indices.`CustomizeGroups``FB1BodyGroupTransformData[]`Transform groups defining body shape adjustments.`GizmoGroups``FB1BodyGizmoGroup[]`Body gizmo groups used for customization.`MuscleLimitGroup``integer`Group index that limits muscle deformation. |
| `CustomizeGroups``FB1BodyGroupTransformData[]`Transform groups defining body shape adjustments.`GizmoGroups``FB1BodyGizmoGroup[]`Body gizmo groups used for customization.`MuscleLimitGroup``integer`Group index that limits muscle deformation. |
| `GizmoGroups``FB1BodyGizmoGroup[]`Body gizmo groups used for customization.`MuscleLimitGroup``integer`Group index that limits muscle deformation. |
| `MuscleLimitGroup``integer`Group index that limits muscle deformation. |

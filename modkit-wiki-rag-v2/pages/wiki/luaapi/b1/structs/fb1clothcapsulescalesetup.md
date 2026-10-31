---
document_id: "57c94e56b44d6a234a6d9d848c465d9eab466a0f51ad947d4b83f47b9ce0618a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1clothcapsulescalesetup"
title: "FB1ClothCapsuleScaleSetup"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:30+00:00"
content_sha256: "d2ef7caab02014d43fa3b233bb128dd617034eb23c6bed24b5ad988596066a58"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1clothcapsulescalesetup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines how a cloth physics-asset capsule is scaled from a body-shape parameter, interpolating between MinScale and MaxScale based on the bone control value.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`MaxScale``number`Interpolated between 1.0 and MaxScale when boneControl > 0.`MinScale``number`Interpolated between MinScale and 1.0 when boneControl < 0.`ShapeParameterIndex``integer`Index into BodyShapeParameters. |
| --- |
| `MaxScale``number`Interpolated between 1.0 and MaxScale when boneControl > 0.`MinScale``number`Interpolated between MinScale and 1.0 when boneControl < 0.`ShapeParameterIndex``integer`Index into BodyShapeParameters. |
| `MinScale``number`Interpolated between MinScale and 1.0 when boneControl < 0.`ShapeParameterIndex``integer`Index into BodyShapeParameters. |
| `ShapeParameterIndex``integer`Index into BodyShapeParameters. |

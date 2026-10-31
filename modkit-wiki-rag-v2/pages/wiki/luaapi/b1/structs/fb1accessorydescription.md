---
document_id: "9f35f4daaebdb9512a04c8f1915b80d9d6b065484b61feaa763a0d6b048ee098"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1accessorydescription"
title: "FB1AccessoryDescription"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:39:45+00:00"
content_sha256: "b9f911af5daee503a583097ac2b0e9a4bf6d2b0cbb3eaf9d2740bbbec1a96274"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1accessorydescription"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines an accessory instance used in character customization, including its type, mesh IDs, socket bindings, transforms, and customizable material.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`AccessoryId``string`Accessory identifier referencing AttachedAccessory.Id.`AccessoryMeshId``string`Mesh identifier referencing AttachedAccessoryMesh.Id.`AccessoryTransformData``table<string, FTransform>`Transform overrides per bone.`AccessoryType``string`Type/category of the accessory (e.g., Glasses, Earring).`AiTextureParameters``table<integer, FB1AccessoryAiTextureInfo>`AI-generated texture parameters by section index.`ScalarParameters``table<integer, FB1AccessoryScalarParamterInfo>`Scalar material parameters by section index.`SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| --- |
| `AccessoryId``string`Accessory identifier referencing AttachedAccessory.Id.`AccessoryMeshId``string`Mesh identifier referencing AttachedAccessoryMesh.Id.`AccessoryTransformData``table<string, FTransform>`Transform overrides per bone.`AccessoryType``string`Type/category of the accessory (e.g., Glasses, Earring).`AiTextureParameters``table<integer, FB1AccessoryAiTextureInfo>`AI-generated texture parameters by section index.`ScalarParameters``table<integer, FB1AccessoryScalarParamterInfo>`Scalar material parameters by section index.`SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| `AccessoryMeshId``string`Mesh identifier referencing AttachedAccessoryMesh.Id.`AccessoryTransformData``table<string, FTransform>`Transform overrides per bone.`AccessoryType``string`Type/category of the accessory (e.g., Glasses, Earring).`AiTextureParameters``table<integer, FB1AccessoryAiTextureInfo>`AI-generated texture parameters by section index.`ScalarParameters``table<integer, FB1AccessoryScalarParamterInfo>`Scalar material parameters by section index.`SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| `AccessoryTransformData``table<string, FTransform>`Transform overrides per bone.`AccessoryType``string`Type/category of the accessory (e.g., Glasses, Earring).`AiTextureParameters``table<integer, FB1AccessoryAiTextureInfo>`AI-generated texture parameters by section index.`ScalarParameters``table<integer, FB1AccessoryScalarParamterInfo>`Scalar material parameters by section index.`SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| `AccessoryType``string`Type/category of the accessory (e.g., Glasses, Earring).`AiTextureParameters``table<integer, FB1AccessoryAiTextureInfo>`AI-generated texture parameters by section index.`ScalarParameters``table<integer, FB1AccessoryScalarParamterInfo>`Scalar material parameters by section index.`SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| `AiTextureParameters``table<integer, FB1AccessoryAiTextureInfo>`AI-generated texture parameters by section index.`ScalarParameters``table<integer, FB1AccessoryScalarParamterInfo>`Scalar material parameters by section index.`SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| `ScalarParameters``table<integer, FB1AccessoryScalarParamterInfo>`Scalar material parameters by section index.`SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| `SocketNames``string[]`Socket names where the accessory is attached.`VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |
| `VectorParameters``table<string, FLinearColor>`Vector (color) material parameters. |

---
document_id: "5cf44f4d23823af429c1b5ab7480dea4618f919b64f659ddbd5675f6b314b456"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1submaterialassetuserdata"
title: "UB1SubMaterialAssetUserData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:23+00:00"
content_sha256: "46948928044ab3e95c34ae68be66854bee1e8dccc263754537d578ad8f542c0a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1submaterialassetuserdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UAssetUserData` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UAssetUserData` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UAssetUserData` |
| Category`classes`Extends`UAssetUserData` |
| Extends`UAssetUserData` |

# Properties (3)

| NameTypeDescription`BaseSubMaterials`[`FB1SubMaterials`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1submaterials)`SubMaskedMaterials``table<string, UMaterialInterface>``eCurrentSubMatType`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype) |
| --- |
| `BaseSubMaterials`[`FB1SubMaterials`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1submaterials)`SubMaskedMaterials``table<string, UMaterialInterface>``eCurrentSubMatType`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype) |
| `SubMaskedMaterials``table<string, UMaterialInterface>``eCurrentSubMatType`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype) |
| `eCurrentSubMatType`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype) |

# Functions (8)

| FunctionParametersReturnsDescription`AddSubMaterial`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SlotName: `string`, Material: `UMaterialInterface``-`Adds Sub Material.`AddSubMaterialInstance`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SlotName: `string`, SubMaterialInstanceUserData: [`UB1SubMaterialInstanceUserData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1submaterialinstanceuserdata)`-`Adds Sub Material Instance.`GetSubMaterialType``-`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype)Returns Sub Material Type.`IsSubMaterial``-``boolean`Returns whether Sub Material.`ResetMaterials`SMComp: `UStaticMeshComponent``boolean`Resets Materials.`RestoreMaterials`SMComp: `UStaticMeshComponent``-``SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| --- |
| `AddSubMaterial`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SlotName: `string`, Material: `UMaterialInterface``-`Adds Sub Material.`AddSubMaterialInstance`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SlotName: `string`, SubMaterialInstanceUserData: [`UB1SubMaterialInstanceUserData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1submaterialinstanceuserdata)`-`Adds Sub Material Instance.`GetSubMaterialType``-`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype)Returns Sub Material Type.`IsSubMaterial``-``boolean`Returns whether Sub Material.`ResetMaterials`SMComp: `UStaticMeshComponent``boolean`Resets Materials.`RestoreMaterials`SMComp: `UStaticMeshComponent``-``SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| `AddSubMaterialInstance`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SlotName: `string`, SubMaterialInstanceUserData: [`UB1SubMaterialInstanceUserData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1submaterialinstanceuserdata)`-`Adds Sub Material Instance.`GetSubMaterialType``-`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype)Returns Sub Material Type.`IsSubMaterial``-``boolean`Returns whether Sub Material.`ResetMaterials`SMComp: `UStaticMeshComponent``boolean`Resets Materials.`RestoreMaterials`SMComp: `UStaticMeshComponent``-``SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| `GetSubMaterialType``-`[`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype)Returns Sub Material Type.`IsSubMaterial``-``boolean`Returns whether Sub Material.`ResetMaterials`SMComp: `UStaticMeshComponent``boolean`Resets Materials.`RestoreMaterials`SMComp: `UStaticMeshComponent``-``SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| `IsSubMaterial``-``boolean`Returns whether Sub Material.`ResetMaterials`SMComp: `UStaticMeshComponent``boolean`Resets Materials.`RestoreMaterials`SMComp: `UStaticMeshComponent``-``SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| `ResetMaterials`SMComp: `UStaticMeshComponent``boolean`Resets Materials.`RestoreMaterials`SMComp: `UStaticMeshComponent``-``SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| `RestoreMaterials`SMComp: `UStaticMeshComponent``-``SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| `SwitchMaterials`eSubMatType: [`EB1SubMaterialType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1submaterialtype), SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean``SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |
| `SwitchMaterialsFromBlendMode`eBlendMode: `EBlendMode`, SMComp: `UStaticMeshComponent`, bForce: `boolean``boolean` |

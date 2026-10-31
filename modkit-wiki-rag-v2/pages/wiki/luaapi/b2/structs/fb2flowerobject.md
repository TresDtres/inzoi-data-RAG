---
document_id: "8dc77f1d7b01a7c081835c23e035c33206b0815c9758b8fa1164135c443d7819"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2flowerobject"
title: "FB2FlowerObject"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:37+00:00"
content_sha256: "a6799e61e2bb1103b8431afc7a9b41de6ca62a642ce2599011157ef18279b651"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2flowerobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CarriableObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2carriableobject)Require`require('Objects.B2FlowerObject')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CarriableObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2carriableobject)Require`require('Objects.B2FlowerObject')` |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CarriableObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2carriableobject)Require`require('Objects.B2FlowerObject')` |
| Category`structs`Extends[`FB2CarriableObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2carriableobject)Require`require('Objects.B2FlowerObject')` |
| Extends[`FB2CarriableObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2carriableobject)Require`require('Objects.B2FlowerObject')` |
| Require`require('Objects.B2FlowerObject')` |

# Properties (4)

| NameTypeDescription`CurrentFlowerState`[`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`CurrentOuterType`[`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`EnchantId``string``FlowerId``string` |
| --- |
| `CurrentFlowerState`[`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`CurrentOuterType`[`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`EnchantId``string``FlowerId``string` |
| `CurrentOuterType`[`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`EnchantId``string``FlowerId``string` |
| `EnchantId``string``FlowerId``string` |
| `FlowerId``string` |

# Functions (7)

| FunctionParametersReturnsDescription`ApplyFlowerEnchant`InEnchantId: `string``-`Applies Flower Enchant.`ApplyFlowerState`NewState: [`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`-`Applies Flower State.`ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`GetFlowerEnchantId``-``string`Returns Flower Enchant Id.`GetFlowerId``-``string`Returns Flower Id.`Initialize`InTableId: `string``-``IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |
| --- |
| `ApplyFlowerEnchant`InEnchantId: `string``-`Applies Flower Enchant.`ApplyFlowerState`NewState: [`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`-`Applies Flower State.`ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`GetFlowerEnchantId``-``string`Returns Flower Enchant Id.`GetFlowerId``-``string`Returns Flower Id.`Initialize`InTableId: `string``-``IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |
| `ApplyFlowerState`NewState: [`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`-`Applies Flower State.`ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`GetFlowerEnchantId``-``string`Returns Flower Enchant Id.`GetFlowerId``-``string`Returns Flower Id.`Initialize`InTableId: `string``-``IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |
| `ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`GetFlowerEnchantId``-``string`Returns Flower Enchant Id.`GetFlowerId``-``string`Returns Flower Id.`Initialize`InTableId: `string``-``IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |
| `GetFlowerEnchantId``-``string`Returns Flower Enchant Id.`GetFlowerId``-``string`Returns Flower Id.`Initialize`InTableId: `string``-``IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |
| `GetFlowerId``-``string`Returns Flower Id.`Initialize`InTableId: `string``-``IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |
| `Initialize`InTableId: `string``-``IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |
| `IsCleanUpTarget`InCleanUpTarget: [`EB1CleanUpObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanupobjecttype)`boolean`Returns whether Clean Up Target. |

# Override points (4)

Implement these in Lua as `FB2FlowerObject.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ApplyFlowerEnchant`InEnchantId: `string``-`Applies Flower Enchant.`Override_ApplyFlowerState`NewState: [`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`-`Applies Flower State.`Override_ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`Override_Initialize`InTableId: `string``-` |
| --- |
| `Override_ApplyFlowerEnchant`InEnchantId: `string``-`Applies Flower Enchant.`Override_ApplyFlowerState`NewState: [`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`-`Applies Flower State.`Override_ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`Override_Initialize`InTableId: `string``-` |
| `Override_ApplyFlowerState`NewState: [`EB1FlowerStateType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1flowerstatetype)`-`Applies Flower State.`Override_ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`Override_Initialize`InTableId: `string``-` |
| `Override_ApplyOuterType`NewOuterType: [`EB1FlowerOuterType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1floweroutertype)`-`Applies Outer Type.`Override_Initialize`InTableId: `string``-` |
| `Override_Initialize`InTableId: `string``-` |

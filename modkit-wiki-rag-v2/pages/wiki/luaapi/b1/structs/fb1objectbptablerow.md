---
document_id: "74bc405dd496188ff9d41df51f505076b22e160e726db2d55a96d85466431f0c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectbptablerow"
title: "FB1ObjectBpTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:34+00:00"
content_sha256: "0e499112d28e3df27096df114bff9abe09e5c7702537c0d97b92a383d1002c87"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectbptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining the blueprint-level properties of a game object, used primarily for modding. Stores parent class, bounding box, size, slots, components, and area/meta data for a specific object blueprint.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (10)

| NameTypeDescription`AreaBoxDatas``table<string, string>``BoxOriginOffset``FVector`Offset applied to the bounding box origin for accurate placement and collision.`ComponentDatas``FB1ObjectBPComponentData[]``DetailType`[`EB2GameObjectDetailType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2gameobjectdetailtype)Detail type identifier controlling which meta-data handling path is used for this object.`EntranceTransform``FTransform`World transform used as the entrance point for character interactions with this object.`ExitTransform``FTransform`World transform used as the exit point after a character finishes interacting with this object.`ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| --- |
| `AreaBoxDatas``table<string, string>``BoxOriginOffset``FVector`Offset applied to the bounding box origin for accurate placement and collision.`ComponentDatas``FB1ObjectBPComponentData[]``DetailType`[`EB2GameObjectDetailType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2gameobjectdetailtype)Detail type identifier controlling which meta-data handling path is used for this object.`EntranceTransform``FTransform`World transform used as the entrance point for character interactions with this object.`ExitTransform``FTransform`World transform used as the exit point after a character finishes interacting with this object.`ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `BoxOriginOffset``FVector`Offset applied to the bounding box origin for accurate placement and collision.`ComponentDatas``FB1ObjectBPComponentData[]``DetailType`[`EB2GameObjectDetailType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2gameobjectdetailtype)Detail type identifier controlling which meta-data handling path is used for this object.`EntranceTransform``FTransform`World transform used as the entrance point for character interactions with this object.`ExitTransform``FTransform`World transform used as the exit point after a character finishes interacting with this object.`ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `ComponentDatas``FB1ObjectBPComponentData[]``DetailType`[`EB2GameObjectDetailType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2gameobjectdetailtype)Detail type identifier controlling which meta-data handling path is used for this object.`EntranceTransform``FTransform`World transform used as the entrance point for character interactions with this object.`ExitTransform``FTransform`World transform used as the exit point after a character finishes interacting with this object.`ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `DetailType`[`EB2GameObjectDetailType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2gameobjectdetailtype)Detail type identifier controlling which meta-data handling path is used for this object.`EntranceTransform``FTransform`World transform used as the entrance point for character interactions with this object.`ExitTransform``FTransform`World transform used as the exit point after a character finishes interacting with this object.`ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `EntranceTransform``FTransform`World transform used as the entrance point for character interactions with this object.`ExitTransform``FTransform`World transform used as the exit point after a character finishes interacting with this object.`ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `ExitTransform``FTransform`World transform used as the exit point after a character finishes interacting with this object.`ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `ObjectMetaDatas``table<string, string>``ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `ParentClass``string`Parent class name of the blueprint this table row represents.`Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `Size``FVector`Bounding box size of this object blueprint in centimeters.`SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |
| `SlotComponents``FB1ObjectBpSlotData[]`Array of slot component data entries defining all available slots on this object. |

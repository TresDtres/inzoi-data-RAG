---
document_id: "e2a741c2ce9fe023fbf662ba329a22466d39af3fa7fa949cc92e127a864aaa89"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectchangemeshgrouprow"
title: "FB1ObjectChangeMeshGroupRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:34+00:00"
content_sha256: "b382c3c6eaeec0f60b317153aff32d4bdb78f7050a5cd4dabb7291c30734673c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectchangemeshgrouprow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining a group of swappable mesh variants for a game object. Provides a named set of mesh replacement options with icons and optional parameter overrides.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`ChangeParam``FB1GameObjectChangeMeshParam[]`Array of mesh change parameter entries representing each available mesh variant.`DisplayName``string`String table key referencing the localized display name shown in the UI.`GroupName``string`String table key referencing the localized display name for this mesh change group.`Icon``UObject`Soft reference to the icon displayed for this mesh change group in the UI.`OverrideParam``boolean`Whether this group overrides the default material parameters when a mesh is swapped.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true. |
| --- |
| `ChangeParam``FB1GameObjectChangeMeshParam[]`Array of mesh change parameter entries representing each available mesh variant.`DisplayName``string`String table key referencing the localized display name shown in the UI.`GroupName``string`String table key referencing the localized display name for this mesh change group.`Icon``UObject`Soft reference to the icon displayed for this mesh change group in the UI.`OverrideParam``boolean`Whether this group overrides the default material parameters when a mesh is swapped.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true. |
| `DisplayName``string`String table key referencing the localized display name shown in the UI.`GroupName``string`String table key referencing the localized display name for this mesh change group.`Icon``UObject`Soft reference to the icon displayed for this mesh change group in the UI.`OverrideParam``boolean`Whether this group overrides the default material parameters when a mesh is swapped.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true. |
| `GroupName``string`String table key referencing the localized display name for this mesh change group.`Icon``UObject`Soft reference to the icon displayed for this mesh change group in the UI.`OverrideParam``boolean`Whether this group overrides the default material parameters when a mesh is swapped.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true. |
| `Icon``UObject`Soft reference to the icon displayed for this mesh change group in the UI.`OverrideParam``boolean`Whether this group overrides the default material parameters when a mesh is swapped.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true. |
| `OverrideParam``boolean`Whether this group overrides the default material parameters when a mesh is swapped.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true. |
| `ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true. |

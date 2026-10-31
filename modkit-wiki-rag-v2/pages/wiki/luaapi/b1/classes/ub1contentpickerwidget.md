---
document_id: "15cc356a11d410ef54cb1bbd5a7a9f7b9743a5098dbb29b7f017dfd63edecb86"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerwidget"
title: "UB1ContentPickerWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:17+00:00"
content_sha256: "b0993f7b2337fb7847556abe882aa218143d1abbc471e4f5d7b60845cadeb7d8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1contentpickerwidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Reusable ContentPicker component. Design: composition pattern (included in other widgets), unified API (same API regardless of TileView/ListView), event-driven (only emits delegates, no business logic), flexible layout (switch grid/list via EntryWidth/Height). Usage: include in another widget, set data with SetListItems(), bind the OnItemSelected/OnItemDeselected delegates, and handle business logic externally.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Category`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |

# Properties (2)

| NameTypeDescription`BW_TileView``any`TileView widget (uses BlueUI B1TileView).`CurrentSelection``any`The currently selected item (Single Selection mode). |
| --- |
| `BW_TileView``any`TileView widget (uses BlueUI B1TileView).`CurrentSelection``any`The currently selected item (Single Selection mode). |
| `CurrentSelection``any`The currently selected item (Single Selection mode). |

# Functions (8)

| FunctionParametersReturnsDescription`ClearSelection``-``-`Clears the selection.`GetSelectedItem``-`[`UB1ContentPickerEntryData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerentrydata)Gets the currently selected item (Single mode).`GetSelectedItems``-``UB1ContentPickerEntryData[]`Gets all selected items (Multi mode).`OnTileViewItemClicked`Item: `UObject``-`Callback invoked on Tile View Item Clicked.`OnTileViewItemSelectionChanged`Item: `UObject``-`Handles a TileView item click event; updates only the UI state and emits a delegate.`RegenerateList``-``-`Refreshes the list (call after data changes).`SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| --- |
| `ClearSelection``-``-`Clears the selection.`GetSelectedItem``-`[`UB1ContentPickerEntryData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerentrydata)Gets the currently selected item (Single mode).`GetSelectedItems``-``UB1ContentPickerEntryData[]`Gets all selected items (Multi mode).`OnTileViewItemClicked`Item: `UObject``-`Callback invoked on Tile View Item Clicked.`OnTileViewItemSelectionChanged`Item: `UObject``-`Handles a TileView item click event; updates only the UI state and emits a delegate.`RegenerateList``-``-`Refreshes the list (call after data changes).`SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| `GetSelectedItem``-`[`UB1ContentPickerEntryData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerentrydata)Gets the currently selected item (Single mode).`GetSelectedItems``-``UB1ContentPickerEntryData[]`Gets all selected items (Multi mode).`OnTileViewItemClicked`Item: `UObject``-`Callback invoked on Tile View Item Clicked.`OnTileViewItemSelectionChanged`Item: `UObject``-`Handles a TileView item click event; updates only the UI state and emits a delegate.`RegenerateList``-``-`Refreshes the list (call after data changes).`SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| `GetSelectedItems``-``UB1ContentPickerEntryData[]`Gets all selected items (Multi mode).`OnTileViewItemClicked`Item: `UObject``-`Callback invoked on Tile View Item Clicked.`OnTileViewItemSelectionChanged`Item: `UObject``-`Handles a TileView item click event; updates only the UI state and emits a delegate.`RegenerateList``-``-`Refreshes the list (call after data changes).`SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| `OnTileViewItemClicked`Item: `UObject``-`Callback invoked on Tile View Item Clicked.`OnTileViewItemSelectionChanged`Item: `UObject``-`Handles a TileView item click event; updates only the UI state and emits a delegate.`RegenerateList``-``-`Refreshes the list (call after data changes).`SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| `OnTileViewItemSelectionChanged`Item: `UObject``-`Handles a TileView item click event; updates only the UI state and emits a delegate.`RegenerateList``-``-`Refreshes the list (call after data changes).`SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| `RegenerateList``-``-`Refreshes the list (call after data changes).`SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| `SetListItems`Items: `UObject[]``-`Sets the item list.`SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |
| `SetSelectionMode`InSelectionMode: `any``-`Sets the selection mode (Single/Multi). |

---
document_id: "cf2c47ebbaa7b7fceef4d74381eb8ae538aec961f652870078e844a2fab24b39"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1controllerkeybindwidget"
title: "UB1ControllerKeyBindWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:17+00:00"
content_sha256: "f59f0ad6cda922150bdc18f8dbaa5a5f3485bdf76f51ca57fe83b3305df975ad"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1controllerkeybindwidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Category`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |

# Properties (8)

| NameTypeDescription`BW_B1ScaleBox_L1``any``BW_B1ScaleBox_R1``any``BW_ComboBoxKey_GameAction``any``BW_CommonActionWidget``any``ComboType`[`EB1WidgetComboType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1widgetcombotype)The combo type this widget handles (Normal / L1 / R1).`GameMode`[`EB1GameMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gamemode)The game mode this widget handles (None = all modes).`InputActions``FDataTableRowHandle[]``Key``FKey` |
| --- |
| `BW_B1ScaleBox_L1``any``BW_B1ScaleBox_R1``any``BW_ComboBoxKey_GameAction``any``BW_CommonActionWidget``any``ComboType`[`EB1WidgetComboType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1widgetcombotype)The combo type this widget handles (Normal / L1 / R1).`GameMode`[`EB1GameMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gamemode)The game mode this widget handles (None = all modes).`InputActions``FDataTableRowHandle[]``Key``FKey` |
| `BW_B1ScaleBox_R1``any``BW_ComboBoxKey_GameAction``any``BW_CommonActionWidget``any``ComboType`[`EB1WidgetComboType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1widgetcombotype)The combo type this widget handles (Normal / L1 / R1).`GameMode`[`EB1GameMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gamemode)The game mode this widget handles (None = all modes).`InputActions``FDataTableRowHandle[]``Key``FKey` |
| `BW_ComboBoxKey_GameAction``any``BW_CommonActionWidget``any``ComboType`[`EB1WidgetComboType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1widgetcombotype)The combo type this widget handles (Normal / L1 / R1).`GameMode`[`EB1GameMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gamemode)The game mode this widget handles (None = all modes).`InputActions``FDataTableRowHandle[]``Key``FKey` |
| `BW_CommonActionWidget``any``ComboType`[`EB1WidgetComboType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1widgetcombotype)The combo type this widget handles (Normal / L1 / R1).`GameMode`[`EB1GameMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gamemode)The game mode this widget handles (None = all modes).`InputActions``FDataTableRowHandle[]``Key``FKey` |
| `ComboType`[`EB1WidgetComboType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1widgetcombotype)The combo type this widget handles (Normal / L1 / R1).`GameMode`[`EB1GameMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gamemode)The game mode this widget handles (None = all modes).`InputActions``FDataTableRowHandle[]``Key``FKey` |
| `GameMode`[`EB1GameMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gamemode)The game mode this widget handles (None = all modes).`InputActions``FDataTableRowHandle[]``Key``FKey` |
| `InputActions``FDataTableRowHandle[]``Key``FKey` |
| `Key``FKey` |

# Functions (4)

| FunctionParametersReturnsDescription`InitializeWidget``-``-`Called to initialize this widget externally (inject the data asset).`OnActionSelectionChanged`selectedItem: `string`, selectionType: `ESelectInfo``-`Callback invoked when the combo-box selection changes.`RefreshWidget``-``-`Called when the widget needs an external refresh (e.g. mode change).`SetKeyToWidget`newKey: `FKey``-`Sets the key and refreshes the UI. |
| --- |
| `InitializeWidget``-``-`Called to initialize this widget externally (inject the data asset).`OnActionSelectionChanged`selectedItem: `string`, selectionType: `ESelectInfo``-`Callback invoked when the combo-box selection changes.`RefreshWidget``-``-`Called when the widget needs an external refresh (e.g. mode change).`SetKeyToWidget`newKey: `FKey``-`Sets the key and refreshes the UI. |
| `OnActionSelectionChanged`selectedItem: `string`, selectionType: `ESelectInfo``-`Callback invoked when the combo-box selection changes.`RefreshWidget``-``-`Called when the widget needs an external refresh (e.g. mode change).`SetKeyToWidget`newKey: `FKey``-`Sets the key and refreshes the UI. |
| `RefreshWidget``-``-`Called when the widget needs an external refresh (e.g. mode change).`SetKeyToWidget`newKey: `FKey``-`Sets the key and refreshes the UI. |
| `SetKeyToWidget`newKey: `FKey``-`Sets the key and refreshes the UI. |

---
document_id: "592d54ebc3918338a462483c3f9c724d49bc34cbadd2f4a9f83d689083b2718a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerpopupwidget"
title: "UB1ContentPickerPopupWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:17+00:00"
content_sha256: "2cb88f4e43cbe3ea7613ca711c786cfb4d83c7c88822653d23a2a6b2a32bb828"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1contentpickerpopupwidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Content picker popup widget. Hosts a content picker with optional title/description/info text. Exposes confirm/cancel events and confirm-with-selection payload.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| Category`classes`Extends`UB1MainContentWidgetBase` |
| Extends`UB1MainContentWidgetBase` |

# Properties (10)

| NameTypeDescription`BW_Button_Cancel``any``BW_Button_Confirm``any``BW_ContentPicker``any``BW_Overlay_Number``any``BW_Text_Description``any``BW_Text_Info``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| --- |
| `BW_Button_Cancel``any``BW_Button_Confirm``any``BW_ContentPicker``any``BW_Overlay_Number``any``BW_Text_Description``any``BW_Text_Info``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `BW_Button_Confirm``any``BW_ContentPicker``any``BW_Overlay_Number``any``BW_Text_Description``any``BW_Text_Info``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `BW_ContentPicker``any``BW_Overlay_Number``any``BW_Text_Description``any``BW_Text_Info``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `BW_Overlay_Number``any``BW_Text_Description``any``BW_Text_Info``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `BW_Text_Description``any``BW_Text_Info``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `BW_Text_Info``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `OnConfirmClicked``FOnConfirmClicked``OnConfirmSelection``FOnConfirmSelection` |
| `OnConfirmSelection``FOnConfirmSelection` |

# Functions (9)

| FunctionParametersReturnsDescription`ClosePopup``-``-``DebugLogSelectedItems``-``-``GetContentPicker``-`[`UB1ContentPickerWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerwidget)Returns Content Picker.`OnCancelButtonClicked``-``-`Callback invoked on Cancel Button Clicked.`OnConfirmButtonClicked``-``-`Callback invoked on Confirm Button Clicked.`SetDescription`InDescription: `string``-`Sets Description.`SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| --- |
| `ClosePopup``-``-``DebugLogSelectedItems``-``-``GetContentPicker``-`[`UB1ContentPickerWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerwidget)Returns Content Picker.`OnCancelButtonClicked``-``-`Callback invoked on Cancel Button Clicked.`OnConfirmButtonClicked``-``-`Callback invoked on Confirm Button Clicked.`SetDescription`InDescription: `string``-`Sets Description.`SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `DebugLogSelectedItems``-``-``GetContentPicker``-`[`UB1ContentPickerWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerwidget)Returns Content Picker.`OnCancelButtonClicked``-``-`Callback invoked on Cancel Button Clicked.`OnConfirmButtonClicked``-``-`Callback invoked on Confirm Button Clicked.`SetDescription`InDescription: `string``-`Sets Description.`SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `GetContentPicker``-`[`UB1ContentPickerWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerwidget)Returns Content Picker.`OnCancelButtonClicked``-``-`Callback invoked on Cancel Button Clicked.`OnConfirmButtonClicked``-``-`Callback invoked on Confirm Button Clicked.`SetDescription`InDescription: `string``-`Sets Description.`SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `OnCancelButtonClicked``-``-`Callback invoked on Cancel Button Clicked.`OnConfirmButtonClicked``-``-`Callback invoked on Confirm Button Clicked.`SetDescription`InDescription: `string``-`Sets Description.`SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `OnConfirmButtonClicked``-``-`Callback invoked on Confirm Button Clicked.`SetDescription`InDescription: `string``-`Sets Description.`SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `SetDescription`InDescription: `string``-`Sets Description.`SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `SetInfoText`InInfo: `string``-`Sets Info Text.`SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `SetNumberVisibility`InVisibility: `ESlateVisibility``-`Sets Number Visibility.`SetTitle`InTitle: `string``-`Sets Title. |
| `SetTitle`InTitle: `string``-`Sets Title. |

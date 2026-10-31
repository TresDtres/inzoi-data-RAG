---
document_id: "ad4f2dba79db372da5893b65ef632acb8fe5e522615fb5c39f6afe9292e6757e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1gallerywidget"
title: "UB1GalleryWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:36+00:00"
content_sha256: "b9c7ebae7b333a2bfc799b6b310eb53858b5cd7594fe74d177ead2d84b29bf81"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1gallerywidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| Category`classes`Extends`UB1MainContentWidgetBase` |
| Extends`UB1MainContentWidgetBase` |

# Properties (15)

| NameTypeDescription`Anim_Downloading``any``BW_AlertButton``any``BW_Button_Alert``any``BW_Button_Back``any``BW_Button_Close``any``BW_Button_Discord``any``BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| --- |
| `Anim_Downloading``any``BW_AlertButton``any``BW_Button_Alert``any``BW_Button_Back``any``BW_Button_Close``any``BW_Button_Discord``any``BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_AlertButton``any``BW_Button_Alert``any``BW_Button_Back``any``BW_Button_Close``any``BW_Button_Discord``any``BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Alert``any``BW_Button_Back``any``BW_Button_Close``any``BW_Button_Discord``any``BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Back``any``BW_Button_Close``any``BW_Button_Discord``any``BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Close``any``BW_Button_Discord``any``BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Discord``any``BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_EventTest``any``BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Forward``any``BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Home``any``BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Refresh``any``BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_Button_Steam``any``BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_EditableTextBox_URL``any``BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_WBP_Alert``any``BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_WBP_AlertListPopup``any``BW_WebBrowser``any` |
| `BW_WebBrowser``any` |

# Functions (8)

| FunctionParametersReturnsDescription`OnBeforePopup`InURL: `string`, InFrame: `string``-`Callback invoked on Before Popup.`OnConsoleMessage`InMessage: `string`, InSource: `string`, InLine: `integer``-`Callback invoked on Console Message.`OnDownload`GalleryId: `string`, ComponentTypes: `string`, Meta: `string``-`Callback invoked on Download.`OnGetDownloadList``-``-`Callback invoked on Get Download List.`OnLaunchExternalUrl`url: `string``-`Callback invoked on Launch External Url.`OnURLTextCommitted`InText: `string`, InCommitMethod: `ETextCommit``-`Callback invoked on URLText Committed.`OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| --- |
| `OnBeforePopup`InURL: `string`, InFrame: `string``-`Callback invoked on Before Popup.`OnConsoleMessage`InMessage: `string`, InSource: `string`, InLine: `integer``-`Callback invoked on Console Message.`OnDownload`GalleryId: `string`, ComponentTypes: `string`, Meta: `string``-`Callback invoked on Download.`OnGetDownloadList``-``-`Callback invoked on Get Download List.`OnLaunchExternalUrl`url: `string``-`Callback invoked on Launch External Url.`OnURLTextCommitted`InText: `string`, InCommitMethod: `ETextCommit``-`Callback invoked on URLText Committed.`OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| `OnConsoleMessage`InMessage: `string`, InSource: `string`, InLine: `integer``-`Callback invoked on Console Message.`OnDownload`GalleryId: `string`, ComponentTypes: `string`, Meta: `string``-`Callback invoked on Download.`OnGetDownloadList``-``-`Callback invoked on Get Download List.`OnLaunchExternalUrl`url: `string``-`Callback invoked on Launch External Url.`OnURLTextCommitted`InText: `string`, InCommitMethod: `ETextCommit``-`Callback invoked on URLText Committed.`OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| `OnDownload`GalleryId: `string`, ComponentTypes: `string`, Meta: `string``-`Callback invoked on Download.`OnGetDownloadList``-``-`Callback invoked on Get Download List.`OnLaunchExternalUrl`url: `string``-`Callback invoked on Launch External Url.`OnURLTextCommitted`InText: `string`, InCommitMethod: `ETextCommit``-`Callback invoked on URLText Committed.`OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| `OnGetDownloadList``-``-`Callback invoked on Get Download List.`OnLaunchExternalUrl`url: `string``-`Callback invoked on Launch External Url.`OnURLTextCommitted`InText: `string`, InCommitMethod: `ETextCommit``-`Callback invoked on URLText Committed.`OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| `OnLaunchExternalUrl`url: `string``-`Callback invoked on Launch External Url.`OnURLTextCommitted`InText: `string`, InCommitMethod: `ETextCommit``-`Callback invoked on URLText Committed.`OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| `OnURLTextCommitted`InText: `string`, InCommitMethod: `ETextCommit``-`Callback invoked on URLText Committed.`OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| `OnUrlChanged`InText: `string``-`Callback invoked on Url Changed.`ShouldLogout``-``-`Returns whether it should Logout. |
| `ShouldLogout``-``-`Returns whether it should Logout. |

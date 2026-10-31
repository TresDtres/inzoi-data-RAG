---
document_id: "76baa1ae0f81a19a374f160835380c8ae165767041c2a56f89607d20d96deaf4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dlcwelcomepopupdata"
title: "FB1DLCWelcomePopupData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:42+00:00"
content_sha256: "865305ba3063647a84571ad821f19cd1bae7e7a271a01957edb210938597ee7e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1dlcwelcomepopupdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores all data needed to display the welcome popup for a specific DLC, including title, icon, colors, and pages.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`DLCColorId1``string`Color mapping ID used for the Color1 material parameter in the popup.`DLCColorId2``string`Color mapping ID used for the Color2 material parameter in the popup.`DLCIcon``UObject`Soft reference to the DLC icon asset displayed in the popup header (BW_Image_Icon).`Pages``FB1DLCWelcomePopupPageData[]`List of page data entries (subtitle, description, and image) for this DLC welcome popup.`TitleTextId``string`String table key for the localized popup title (BW_Text_Title). |
| --- |
| `DLCColorId1``string`Color mapping ID used for the Color1 material parameter in the popup.`DLCColorId2``string`Color mapping ID used for the Color2 material parameter in the popup.`DLCIcon``UObject`Soft reference to the DLC icon asset displayed in the popup header (BW_Image_Icon).`Pages``FB1DLCWelcomePopupPageData[]`List of page data entries (subtitle, description, and image) for this DLC welcome popup.`TitleTextId``string`String table key for the localized popup title (BW_Text_Title). |
| `DLCColorId2``string`Color mapping ID used for the Color2 material parameter in the popup.`DLCIcon``UObject`Soft reference to the DLC icon asset displayed in the popup header (BW_Image_Icon).`Pages``FB1DLCWelcomePopupPageData[]`List of page data entries (subtitle, description, and image) for this DLC welcome popup.`TitleTextId``string`String table key for the localized popup title (BW_Text_Title). |
| `DLCIcon``UObject`Soft reference to the DLC icon asset displayed in the popup header (BW_Image_Icon).`Pages``FB1DLCWelcomePopupPageData[]`List of page data entries (subtitle, description, and image) for this DLC welcome popup.`TitleTextId``string`String table key for the localized popup title (BW_Text_Title). |
| `Pages``FB1DLCWelcomePopupPageData[]`List of page data entries (subtitle, description, and image) for this DLC welcome popup.`TitleTextId``string`String table key for the localized popup title (BW_Text_Title). |
| `TitleTextId``string`String table key for the localized popup title (BW_Text_Title). |

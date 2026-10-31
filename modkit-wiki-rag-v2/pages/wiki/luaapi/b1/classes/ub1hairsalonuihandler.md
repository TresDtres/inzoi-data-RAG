---
document_id: "1fb06c8d3ba4307fc13dc7a51351e18c4e5999ff147b8d306ffaab231253d5de"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1hairsalonuihandler"
title: "UB1HairSalonUIHandler"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:39+00:00"
content_sha256: "8aacb4457b0de9cc4c2dadc44f999e06c9d9648ff5aa6b9a9dc6d76dc1e69831"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1hairsalonuihandler"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- UIHandler dedicated to hair-salon styling. When the customer is the Player, it receives the S_OpenSalonHairContentPicker packet to show the ContentPicker and sends the selection to the server via C_SelectSalonHair.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1UIHandlerBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1UIHandlerBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1UIHandlerBase` |
| Category`classes`Extends`UB1UIHandlerBase` |
| Extends`UB1UIHandlerBase` |

# Properties (4)

| NameTypeDescription`PendingCandidatePoolIds``string[]``PendingCustomerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PendingPopup``any``PendingSubCategoryId``string` |
| --- |
| `PendingCandidatePoolIds``string[]``PendingCustomerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PendingPopup``any``PendingSubCategoryId``string` |
| `PendingCustomerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PendingPopup``any``PendingSubCategoryId``string` |
| `PendingPopup``any``PendingSubCategoryId``string` |
| `PendingSubCategoryId``string` |

# Functions (2)

| FunctionParametersReturnsDescription`OnSalonHairPickerCancelClicked``-``-`Callback invoked on Salon Hair Picker Cancel Clicked.`OnSalonHairPickerConfirmed`InSelectedItems: `UB1ContentPickerEntryData[]``-`Callback invoked on Salon Hair Picker Confirmed. |
| --- |
| `OnSalonHairPickerCancelClicked``-``-`Callback invoked on Salon Hair Picker Cancel Clicked.`OnSalonHairPickerConfirmed`InSelectedItems: `UB1ContentPickerEntryData[]``-`Callback invoked on Salon Hair Picker Confirmed. |
| `OnSalonHairPickerConfirmed`InSelectedItems: `UB1ContentPickerEntryData[]``-`Callback invoked on Salon Hair Picker Confirmed. |

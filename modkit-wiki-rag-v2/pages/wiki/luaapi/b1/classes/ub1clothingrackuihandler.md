---
document_id: "3825eea3ea01ef63b7e3d576d96b275917f0e2853119c6f05c26da862b181b43"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1clothingrackuihandler"
title: "UB1ClothingRackUIHandler"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:12+00:00"
content_sha256: "a51234ab071ef794178779598c9f121efa9186e72a9ff6b51db995c861f8bcfa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1clothingrackuihandler"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- UIHandler dedicated to clothing-rack outfit purchase. When the player runs a clothing-rack interaction, it receives the S_OpenClothingRackOutfitContentPicker packet to show the ContentPicker and sends the selection to the server via C_SelectClothingRackOutfit. (Per-look purchase; whether to wear immediately is passed via the packet's bWearImmediately.)

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1UIHandlerBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1UIHandlerBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1UIHandlerBase` |
| Category`classes`Extends`UB1UIHandlerBase` |
| Extends`UB1UIHandlerBase` |

# Properties (3)

| NameTypeDescription`PendingCandidatePoolIds``string[]``PendingCustomerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PendingPopup``any` |
| --- |
| `PendingCandidatePoolIds``string[]``PendingCustomerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PendingPopup``any` |
| `PendingCustomerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PendingPopup``any` |
| `PendingPopup``any` |

# Functions (2)

| FunctionParametersReturnsDescription`OnClothingRackOutfitPickerCancelClicked``-``-`Callback invoked on Clothing Rack Outfit Picker Cancel Clicked.`OnClothingRackOutfitPickerConfirmed`InSelectedItems: `UB1ContentPickerEntryData[]``-`Callback invoked on Clothing Rack Outfit Picker Confirmed. |
| --- |
| `OnClothingRackOutfitPickerCancelClicked``-``-`Callback invoked on Clothing Rack Outfit Picker Cancel Clicked.`OnClothingRackOutfitPickerConfirmed`InSelectedItems: `UB1ContentPickerEntryData[]``-`Callback invoked on Clothing Rack Outfit Picker Confirmed. |
| `OnClothingRackOutfitPickerConfirmed`InSelectedItems: `UB1ContentPickerEntryData[]``-`Callback invoked on Clothing Rack Outfit Picker Confirmed. |

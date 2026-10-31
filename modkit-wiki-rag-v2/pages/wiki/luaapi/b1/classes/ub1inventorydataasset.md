---
document_id: "2508ca560ac89278ae52c09792f06fa16ec0c44230af37e73819ae6e6db810eb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1inventorydataasset"
title: "UB1InventoryDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:46+00:00"
content_sha256: "236423e7d6bf29bccbf40585748661cd4fbb2e2b116dec437e749d640ea1f723"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1inventorydataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset that holds global configuration for the inventory system. Includes default inventory IDs and interaction bag references for pickup and hand-over actions.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (4)

| NameTypeDescription`DefaultCharacterInventoryId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Default inventory ID used for character inventories.`DefaultSiteInventoryId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Default inventory ID used for site (location-based) inventories.`HandOverInteractionBagIds``table<EB1InventoryHandOverType, string>`Map from hand-over type to the interaction bag ID executed after a hand-over selection action.`PickUpInventoryInteractionBagId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Interaction bag ID used to pick up an item from the inventory. |
| --- |
| `DefaultCharacterInventoryId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Default inventory ID used for character inventories.`DefaultSiteInventoryId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Default inventory ID used for site (location-based) inventories.`HandOverInteractionBagIds``table<EB1InventoryHandOverType, string>`Map from hand-over type to the interaction bag ID executed after a hand-over selection action.`PickUpInventoryInteractionBagId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Interaction bag ID used to pick up an item from the inventory. |
| `DefaultSiteInventoryId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Default inventory ID used for site (location-based) inventories.`HandOverInteractionBagIds``table<EB1InventoryHandOverType, string>`Map from hand-over type to the interaction bag ID executed after a hand-over selection action.`PickUpInventoryInteractionBagId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Interaction bag ID used to pick up an item from the inventory. |
| `HandOverInteractionBagIds``table<EB1InventoryHandOverType, string>`Map from hand-over type to the interaction bag ID executed after a hand-over selection action.`PickUpInventoryInteractionBagId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Interaction bag ID used to pick up an item from the inventory. |
| `PickUpInventoryInteractionBagId`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)Interaction bag ID used to pick up an item from the inventory. |

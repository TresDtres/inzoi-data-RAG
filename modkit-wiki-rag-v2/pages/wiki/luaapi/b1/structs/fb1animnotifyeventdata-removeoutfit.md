---
document_id: "f51ee99954670f595b2174d7ed2cc32c37e3331e67bcdd7d5bf2df3f2ee8d3d3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-removeoutfit"
title: "FB1AnimNotifyEventData_RemoveOutfit"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "a69fe3d05aeada6c720635ab122c580df05befea2ea4d68e9d3e6dc46964dadf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1animnotifyeventdata-removeoutfit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Animation notify event data for removing an outfit during animation playback. Must set the same CostumeId/OutfitCategory as the corresponding B1ChangeOutfit.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| Category`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |

# Properties (2)

| NameTypeDescription`CostumeId``string`CostumeId of the outfit to remove. If None, OutfitCategory is used. Must match the corresponding ChangeOutfit.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Used for category-based removal (when CostumeId is None). |
| --- |
| `CostumeId``string`CostumeId of the outfit to remove. If None, OutfitCategory is used. Must match the corresponding ChangeOutfit.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Used for category-based removal (when CostumeId is None). |
| `OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Used for category-based removal (when CostumeId is None). |

---
document_id: "609ace64d5542065711c5dbf12ff35a77fb7e116d5e1eb8f3b80017873e35790"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-changeoutfit"
title: "FB1AnimNotifyEventData_ChangeOutfit"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "1f511057e0a64b1988ac0d05d403538b8e999d4470d56cd03ce5416dc5fca0d5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1animnotifyeventdata-changeoutfit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Animation notify event data for applying an outfit during animation playback. Used as a set: B1ChangeOutfit (apply) with B1RemoveOutfit (remove).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| Category`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |

# Properties (2)

| NameTypeDescription`CostumeId``string`CostumeId of the outfit to apply. If None, OutfitCategory is used.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Used for category-based change (when CostumeId is None). |
| --- |
| `CostumeId``string`CostumeId of the outfit to apply. If None, OutfitCategory is used.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Used for category-based change (when CostumeId is None). |
| `OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Used for category-based change (when CostumeId is None). |

---
document_id: "dd1ef7efb73794c609399c7b5f1d4a05bfcb7642b556177d3084ef79f91e915e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cazunlockcatalogtablerow"
title: "FB1CAZUnlockCatalogTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:19+00:00"
content_sha256: "8b2cf3b17691768935d496a526f99a7b1e2d65994e4fdd8ffe94784e4c8bb9f5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cazunlockcatalogtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Catalog row used by shop/service flows to sell and unlock one or more CAZ reward objects.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`AcquireType`[`EB1CAZUnlockAcquireType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockacquiretype)How this catalog item is unlocked.`SiteTag``string`Optional site tag used by shop/service flows to filter available rows.`ThumbnailTextureId``string`Optional thumbnail texture row for picker/list UI.`UnlockConditionTooltipDatas``FB1CAZUnlockConditionTooltipData[]`Conditions that must pass before unlock, with condition-specific rich text tooltip entries.`UnlockObjects``FB1RewardCAZObjectData[]`Actual CAZ reward objects unlocked by this catalog item. Use mesh/variant row ids, not group ids.`UnlockType`[`EB1CAZUnlockCatalogType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockcatalogtype)Content group that consumes this catalog row. |
| --- |
| `AcquireType`[`EB1CAZUnlockAcquireType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockacquiretype)How this catalog item is unlocked.`SiteTag``string`Optional site tag used by shop/service flows to filter available rows.`ThumbnailTextureId``string`Optional thumbnail texture row for picker/list UI.`UnlockConditionTooltipDatas``FB1CAZUnlockConditionTooltipData[]`Conditions that must pass before unlock, with condition-specific rich text tooltip entries.`UnlockObjects``FB1RewardCAZObjectData[]`Actual CAZ reward objects unlocked by this catalog item. Use mesh/variant row ids, not group ids.`UnlockType`[`EB1CAZUnlockCatalogType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockcatalogtype)Content group that consumes this catalog row. |
| `SiteTag``string`Optional site tag used by shop/service flows to filter available rows.`ThumbnailTextureId``string`Optional thumbnail texture row for picker/list UI.`UnlockConditionTooltipDatas``FB1CAZUnlockConditionTooltipData[]`Conditions that must pass before unlock, with condition-specific rich text tooltip entries.`UnlockObjects``FB1RewardCAZObjectData[]`Actual CAZ reward objects unlocked by this catalog item. Use mesh/variant row ids, not group ids.`UnlockType`[`EB1CAZUnlockCatalogType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockcatalogtype)Content group that consumes this catalog row. |
| `ThumbnailTextureId``string`Optional thumbnail texture row for picker/list UI.`UnlockConditionTooltipDatas``FB1CAZUnlockConditionTooltipData[]`Conditions that must pass before unlock, with condition-specific rich text tooltip entries.`UnlockObjects``FB1RewardCAZObjectData[]`Actual CAZ reward objects unlocked by this catalog item. Use mesh/variant row ids, not group ids.`UnlockType`[`EB1CAZUnlockCatalogType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockcatalogtype)Content group that consumes this catalog row. |
| `UnlockConditionTooltipDatas``FB1CAZUnlockConditionTooltipData[]`Conditions that must pass before unlock, with condition-specific rich text tooltip entries.`UnlockObjects``FB1RewardCAZObjectData[]`Actual CAZ reward objects unlocked by this catalog item. Use mesh/variant row ids, not group ids.`UnlockType`[`EB1CAZUnlockCatalogType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockcatalogtype)Content group that consumes this catalog row. |
| `UnlockObjects``FB1RewardCAZObjectData[]`Actual CAZ reward objects unlocked by this catalog item. Use mesh/variant row ids, not group ids.`UnlockType`[`EB1CAZUnlockCatalogType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockcatalogtype)Content group that consumes this catalog row. |
| `UnlockType`[`EB1CAZUnlockCatalogType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cazunlockcatalogtype)Content group that consumes this catalog row. |

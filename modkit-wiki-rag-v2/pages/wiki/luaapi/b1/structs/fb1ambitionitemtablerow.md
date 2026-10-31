---
document_id: "0219759d1dd1c1cc42e917369a58b3d71479b1bb9f8e33eceef87f4a379ef585"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ambitionitemtablerow"
title: "FB1AmbitionItemTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "221c8627520f18634710b874e887be1f05328610ba74c04a1f8660944edcde33"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1ambitionitemtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row defining an ambition item, including display data, age availability, growth change data, and step-based mission progression.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (9)

| NameTypeDescription`AgeAvailable``EB1GrowthStep[]`Growth steps during which this ambition item is available.`AmbitionSteps``FB1AmbitionStepDefine[]`Ordered list of steps defining this ambition item's mission progression.`ChangeByGrowthStep``FB1GrowthChangeData[]`Weighted content change data applied when the character grows.`CompletePopupTextId``string`String table key for the popup text shown on completion.`ConditionId``string`Condition ID checked before this ambition item can be activated.`DescTextId``string`String table key for the localized description.`DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| --- |
| `AgeAvailable``EB1GrowthStep[]`Growth steps during which this ambition item is available.`AmbitionSteps``FB1AmbitionStepDefine[]`Ordered list of steps defining this ambition item's mission progression.`ChangeByGrowthStep``FB1GrowthChangeData[]`Weighted content change data applied when the character grows.`CompletePopupTextId``string`String table key for the popup text shown on completion.`ConditionId``string`Condition ID checked before this ambition item can be activated.`DescTextId``string`String table key for the localized description.`DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `AmbitionSteps``FB1AmbitionStepDefine[]`Ordered list of steps defining this ambition item's mission progression.`ChangeByGrowthStep``FB1GrowthChangeData[]`Weighted content change data applied when the character grows.`CompletePopupTextId``string`String table key for the popup text shown on completion.`ConditionId``string`Condition ID checked before this ambition item can be activated.`DescTextId``string`String table key for the localized description.`DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `ChangeByGrowthStep``FB1GrowthChangeData[]`Weighted content change data applied when the character grows.`CompletePopupTextId``string`String table key for the popup text shown on completion.`ConditionId``string`Condition ID checked before this ambition item can be activated.`DescTextId``string`String table key for the localized description.`DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `CompletePopupTextId``string`String table key for the popup text shown on completion.`ConditionId``string`Condition ID checked before this ambition item can be activated.`DescTextId``string`String table key for the localized description.`DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `ConditionId``string`Condition ID checked before this ambition item can be activated.`DescTextId``string`String table key for the localized description.`DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `DescTextId``string`String table key for the localized description.`DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `DisplayTextId``string`String table key for the localized display name.`Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `Icon``UTexture2D`Icon texture for this ambition item.`RewardTextId``string`String table key for the localized reward description. |
| `RewardTextId``string`String table key for the localized reward description. |

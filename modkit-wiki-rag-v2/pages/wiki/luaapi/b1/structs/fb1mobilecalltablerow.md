---
document_id: "3426627da3eae7646477b23e2d17dcf1f3a090c9238eabcaf2266499db7d8b4b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilecalltablerow"
title: "FB1MobileCallTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:29+00:00"
content_sha256: "e4b458fa8e327374206ec0b0dda45c929141ee5418daedf99f43b46c7467dd2e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilecalltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row storing configuration for a mobile call entry, including its type, choice card, and condition. References ChoiceCard.json for choice card display logic. Mobile Call Flow: Receive calls check matching ConditionId entries and display a choice card; Send calls trigger when the player initiates a call from a contact's profile.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`CallType`[`EB1MobileCallType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilecalltype)The type of call (Receive, Send, or None). Determines when this entry is used.`CallerTagTextId``string`Text ID for the caller's tag displayed separately. If empty, the tag is hidden (e.g. '(client)').`ChoiceCardId``string`The ID of the choice card to display for this call.`ConditionId``string`Condition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected. |
| --- |
| `CallType`[`EB1MobileCallType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilecalltype)The type of call (Receive, Send, or None). Determines when this entry is used.`CallerTagTextId``string`Text ID for the caller's tag displayed separately. If empty, the tag is hidden (e.g. '(client)').`ChoiceCardId``string`The ID of the choice card to display for this call.`ConditionId``string`Condition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected. |
| `CallerTagTextId``string`Text ID for the caller's tag displayed separately. If empty, the tag is hidden (e.g. '(client)').`ChoiceCardId``string`The ID of the choice card to display for this call.`ConditionId``string`Condition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected. |
| `ChoiceCardId``string`The ID of the choice card to display for this call.`ConditionId``string`Condition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected. |
| `ConditionId``string`Condition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected. |

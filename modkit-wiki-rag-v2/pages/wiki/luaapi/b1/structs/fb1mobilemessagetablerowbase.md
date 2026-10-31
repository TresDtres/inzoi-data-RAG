---
document_id: "cefacfbd5cdb7af0f7aa95aa505cd6da1d85607b94c1ba5023e9d932f27620ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagetablerowbase"
title: "FB1MobileMessageTableRowBase"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:30+00:00"
content_sha256: "0d076d6da5c7c15fcc7e69c1aa54478668675294716ae53627a75b3b448d8e69"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagetablerowbase"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Base data table row for mobile message entries, providing shared reward and condition ID fields. Extended by specific message row types such as FB1MobileMessageTableRow and FB1CustomMobileMessageTableRow.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`ConditionId``string`Condition ID that must be satisfied for this message to be eligible for sending.`MobileMessageRewardId``string`ID referencing the reward table row to apply when this message is responded to. |
| --- |
| `ConditionId``string`Condition ID that must be satisfied for this message to be eligible for sending.`MobileMessageRewardId``string`ID referencing the reward table row to apply when this message is responded to. |
| `MobileMessageRewardId``string`ID referencing the reward table row to apply when this message is responded to. |

---
document_id: "b59185297b0925da913151268aaa2fd95918eb9034bf375c840271bc3f868991"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1transactiontypetablerow"
title: "FB1TransactionTypeTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:43+00:00"
content_sha256: "226eb720850b601625f078975816c4f9b106b04b90bf5c3ac53ffae175f23f98"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1transactiontypetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a transaction type, mapping a transaction reason to its display text and icon system data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`DescTextId``string`String table key for the localized description of this transaction type.`Systems``FB1TransactionSystemData[]`List of system metadata entries associated with this transaction type.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)The transaction reason this row represents.`bUseCompanyIcon``boolean`Whether to display the company icon instead of the system icon for this transaction type. |
| --- |
| `DescTextId``string`String table key for the localized description of this transaction type.`Systems``FB1TransactionSystemData[]`List of system metadata entries associated with this transaction type.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)The transaction reason this row represents.`bUseCompanyIcon``boolean`Whether to display the company icon instead of the system icon for this transaction type. |
| `Systems``FB1TransactionSystemData[]`List of system metadata entries associated with this transaction type.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)The transaction reason this row represents.`bUseCompanyIcon``boolean`Whether to display the company icon instead of the system icon for this transaction type. |
| `TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)The transaction reason this row represents.`bUseCompanyIcon``boolean`Whether to display the company icon instead of the system icon for this transaction type. |
| `bUseCompanyIcon``boolean`Whether to display the company icon instead of the system icon for this transaction type. |

---
document_id: "04468a72aac790902d8cccb9a3d379ec0e9d99b2b4a69e3c686752ca7c0f89b2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1conditiontablerow"
title: "FB1ConditionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:33+00:00"
content_sha256: "d6f416bf84807df00e6ef29838bbab8b08a59d8bb5d067e54788276549bcc1e4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1conditiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DataTable row that stores compound AND/OR condition groups for reusable condition evaluation.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`AndConditionsList``FB1ConditionList[]`The list of AND condition groups; all conditions in each group must be true.`OrConditionsList``FB1ConditionList[]`The list of OR condition groups; at least one group must be satisfied. |
| --- |
| `AndConditionsList``FB1ConditionList[]`The list of AND condition groups; all conditions in each group must be true.`OrConditionsList``FB1ConditionList[]`The list of OR condition groups; at least one group must be satisfied. |
| `OrConditionsList``FB1ConditionList[]`The list of OR condition groups; at least one group must be satisfied. |

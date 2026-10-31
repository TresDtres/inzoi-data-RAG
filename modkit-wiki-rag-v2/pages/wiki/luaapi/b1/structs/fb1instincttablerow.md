---
document_id: "a89fcb7a59992c808e8978401a4aacfe5e04c5bb1278ab1544fce96a75a8c218"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1instincttablerow"
title: "FB1InstinctTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:12+00:00"
content_sha256: "85fa1f3eed8cb0ce01ae87583f12b398e8349c83bfcae82cb9cdefe28f2e84fa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1instincttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining an instinct entry, specifying the age groups it applies to, the scripts executed when it is added or removed, and its associated behavior scripts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`AddScriptId``string`Script ID executed when this instinct is applied to a character.`AgeAvailable``EB1GrowthStep[]`List of growth step age groups during which this instinct is active.`InstinctScripts``FB1TraitScript[]`List of behavior scripts associated with this instinct.`RemoveScriptId``string`Script ID executed when this instinct is removed from a character. |
| --- |
| `AddScriptId``string`Script ID executed when this instinct is applied to a character.`AgeAvailable``EB1GrowthStep[]`List of growth step age groups during which this instinct is active.`InstinctScripts``FB1TraitScript[]`List of behavior scripts associated with this instinct.`RemoveScriptId``string`Script ID executed when this instinct is removed from a character. |
| `AgeAvailable``EB1GrowthStep[]`List of growth step age groups during which this instinct is active.`InstinctScripts``FB1TraitScript[]`List of behavior scripts associated with this instinct.`RemoveScriptId``string`Script ID executed when this instinct is removed from a character. |
| `InstinctScripts``FB1TraitScript[]`List of behavior scripts associated with this instinct.`RemoveScriptId``string`Script ID executed when this instinct is removed from a character. |
| `RemoveScriptId``string`Script ID executed when this instinct is removed from a character. |

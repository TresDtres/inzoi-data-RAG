---
document_id: "322344ddc27125eaea28e125bf3efa09479bdb03e472a3fe2c4422658bde28b3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1subtpotablerow"
title: "FB1SubTPOTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:36+00:00"
content_sha256: "6f0f5e4719c8cfa5005e822d7d845b6e0e8d5bd933d655e53fb23271890d45b2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1subtpotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that defines a single SubTPO condition entry. Each entry specifies a condition within its category and references a TPOAction that provides recommended and banned interaction tags.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`ConditionId``string`Condition that must be satisfied for this SubTPO to apply.`SubTPOCategory`[`EB1SubTPOCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1subtpocategory)Category this SubTPO belongs to. Must match the parent TPO's SubTPOCategory.`TPOActionId``string`TPOAction ID that defines the recommended and banned interaction tags for this condition. |
| --- |
| `ConditionId``string`Condition that must be satisfied for this SubTPO to apply.`SubTPOCategory`[`EB1SubTPOCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1subtpocategory)Category this SubTPO belongs to. Must match the parent TPO's SubTPOCategory.`TPOActionId``string`TPOAction ID that defines the recommended and banned interaction tags for this condition. |
| `SubTPOCategory`[`EB1SubTPOCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1subtpocategory)Category this SubTPO belongs to. Must match the parent TPO's SubTPOCategory.`TPOActionId``string`TPOAction ID that defines the recommended and banned interaction tags for this condition. |
| `TPOActionId``string`TPOAction ID that defines the recommended and banned interaction tags for this condition. |

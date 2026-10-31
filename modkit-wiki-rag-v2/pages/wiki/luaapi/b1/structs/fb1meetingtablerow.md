---
document_id: "c9a03769df7dfb065c98b35db0dde0cdf021de55d0ea026e731aaee80bf4a546"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1meetingtablerow"
title: "FB1MeetingTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:26+00:00"
content_sha256: "a5e6670ebd2294051d9aeb0eabbb0f02c7030ed4dae63fc28bb93c51bf3d61da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1meetingtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a meeting data table row. Specifies aging condition flags and a list of meeting rules for a given meeting configuration.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`AgingConditionFlags``integer`Bitmask of aging (growth step) conditions required for this meeting row to apply.`MeetingRules``FB1MeetingRuleData[]`List of meeting rules associated with this meeting configuration. |
| --- |
| `AgingConditionFlags``integer`Bitmask of aging (growth step) conditions required for this meeting row to apply.`MeetingRules``FB1MeetingRuleData[]`List of meeting rules associated with this meeting configuration. |
| `MeetingRules``FB1MeetingRuleData[]`List of meeting rules associated with this meeting configuration. |

---
document_id: "0170ece14c02bd0fd60907f2cce2cb70219a6a60e73805df3e5861fe79617eca"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tpotablerow"
title: "FB1TPOTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:41+00:00"
content_sha256: "7d9eee0d620d499cd491b79d4e1de69de7a1b0a9cc60734a414545951f8e38a6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1tpotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that maps a place type to its SubTPO groups. During autonomous behavior selection, the character's current site type is matched against TPOSiteTag to find applicable TPO entries.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`SubTPOList``FB1TPOSubTPOInfo[]`SubTPO groups categorized by condition type (schedule, time, emotion, relationship).`TPOSiteTag``string`Site type identifier to match against the character's current site. |
| --- |
| `SubTPOList``FB1TPOSubTPOInfo[]`SubTPO groups categorized by condition type (schedule, time, emotion, relationship).`TPOSiteTag``string`Site type identifier to match against the character's current site. |
| `TPOSiteTag``string`Site type identifier to match against the character's current site. |

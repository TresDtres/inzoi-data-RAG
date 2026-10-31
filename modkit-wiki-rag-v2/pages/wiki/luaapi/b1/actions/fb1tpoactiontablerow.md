---
document_id: "c8099de367964f3d751d2afec45698a328ed515255521580a913b3bbd9b63bcf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/actions/fb1tpoactiontablerow"
title: "FB1TPOActionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:27+00:00"
content_sha256: "3467da720e98fa0907ec039026ee0e8d912050bbd24fc659a25453db83d6eb5d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/actions/fb1tpoactiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that defines recommended and banned interaction tags for a TPO condition. Recommended tags are selected via weighted random, while banned tags are excluded from autonomous behavior candidates.

# Metadata

| FieldValueKind`action`EnvironmentB1 - PresentationCategory`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`action`EnvironmentB1 - PresentationCategory`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`BanTags``string[]`List of interaction tags banned from autonomous behavior selection.`RecommendTags``FB1TPORecommendTagInfo[]`List of recommended interaction tags with selection weights. |
| --- |
| `BanTags``string[]`List of interaction tags banned from autonomous behavior selection.`RecommendTags``FB1TPORecommendTagInfo[]`List of recommended interaction tags with selection weights. |
| `RecommendTags``FB1TPORecommendTagInfo[]`List of recommended interaction tags with selection weights. |

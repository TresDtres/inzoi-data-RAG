---
document_id: "31d7cefa7036c0f26b514d42db211cf5a55054cdd83a0a48581bc2dbd77aec4a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traitchangebyperspectivetablerow"
title: "FB1TraitChangeByPerspectiveTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:41+00:00"
content_sha256: "a0706969421bbea843c6a396438ac1e00368661d57343d741f973751dda2327b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1traitchangebyperspectivetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row mapping a perspective (main value) and the destination growth step to a weighted trait pool, used when refreshing characteristics on growth transition (DT_TraitChangeByPerspective).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`EndGrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Growth step at which the transition resolves (the destination step).`PerspectiveId``string`Main perspective ID this row applies to.`TraitProbabilities``FB1GrowthChangeData[]`Weighted trait candidates. Probabilities must sum to 1. |
| --- |
| `EndGrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Growth step at which the transition resolves (the destination step).`PerspectiveId``string`Main perspective ID this row applies to.`TraitProbabilities``FB1GrowthChangeData[]`Weighted trait candidates. Probabilities must sum to 1. |
| `PerspectiveId``string`Main perspective ID this row applies to.`TraitProbabilities``FB1GrowthChangeData[]`Weighted trait candidates. Probabilities must sum to 1. |
| `TraitProbabilities``FB1GrowthChangeData[]`Weighted trait candidates. Probabilities must sum to 1. |

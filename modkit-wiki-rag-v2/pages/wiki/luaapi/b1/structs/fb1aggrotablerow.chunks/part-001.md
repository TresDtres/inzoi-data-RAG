---
document_id: "c50280efa522c8192157e31ad142e9433b586c01b614307f93969cd81679a78c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1aggrotablerow"
title: "FB1AggroTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "061a6bb615626a92df9e9f37e0260869cda0d614a6ff7d42272ec6cc94a1e097"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1aggrotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Aggro Reason data — the TableRow Id itself is used as the Reason. - Chase vs immediate (`bAutoChase`) - Per-row arrival distance override (`OffsetDistanceOverride`) - Arrival fire: Interaction / Script list / Howling (at least one of the three must be defined) - Emotion applied on AddAggro (`OnTriggeredEmotionId`) Aggro → Emotion is one-way (apply only). The reverse direction (emotion expression → aggro decrement) is not handled here; Script-side code adjusts aggro directly via `B2AggroHelper::DecreaseAggroByReason(...)`.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (10)

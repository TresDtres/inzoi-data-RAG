---
document_id: "945b11a91378882fd355817a0dc88840b947f4dd99a3c8547ad7a66a5206ae0f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1grabtablerow"
title: "FB1GrabTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:05+00:00"
content_sha256: "073bd47aee691f6405164252fd6551b3572db1490489f85ef96442ac250cda60"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1grabtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining the grab behavior for an object, including pick-up animations, a loop animation, and put-down animations.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`ActiveProfileId``string`The profile resolved for active interaction (Attack/Throw). Empty means use default profile.`LoopAnimId``string`The animation ID played while carrying the grabbed object.`PickUpAnimations``FB1GrabTransition[]`The list of pick-up animation transitions for this grab interaction.`PutDownAnimations``FB1GrabTransition[]`The list of put-down animation transitions for this grab interaction. |
| --- |
| `ActiveProfileId``string`The profile resolved for active interaction (Attack/Throw). Empty means use default profile.`LoopAnimId``string`The animation ID played while carrying the grabbed object.`PickUpAnimations``FB1GrabTransition[]`The list of pick-up animation transitions for this grab interaction.`PutDownAnimations``FB1GrabTransition[]`The list of put-down animation transitions for this grab interaction. |
| `LoopAnimId``string`The animation ID played while carrying the grabbed object.`PickUpAnimations``FB1GrabTransition[]`The list of pick-up animation transitions for this grab interaction.`PutDownAnimations``FB1GrabTransition[]`The list of put-down animation transitions for this grab interaction. |
| `PickUpAnimations``FB1GrabTransition[]`The list of pick-up animation transitions for this grab interaction.`PutDownAnimations``FB1GrabTransition[]`The list of put-down animation transitions for this grab interaction. |
| `PutDownAnimations``FB1GrabTransition[]`The list of put-down animation transitions for this grab interaction. |

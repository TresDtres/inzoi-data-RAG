---
document_id: "a3e80d274442f82dbf7a549a43a61aa4db38a50ccf0da4b3b173a54ed06d0a27"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1howlingeffecttablerow"
title: "FB1HowlingEffectTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:09+00:00"
content_sha256: "2ee14124f5091116c7df9935683b40fac1459f64991bd320fc6e110a0de4de90"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1howlingeffecttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a howling effect pool with a cooldown time, a list of weighted effects, and an optional flag restricting the effect to ghost characters only.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`Cooltime``number`Minimum cooldown time (seconds) before this effect pool can fire again.`Effects``FB1HowlingEffect[]`List of weighted effects in this pool; one is selected randomly when the howling fires.`PlayReasonOverride`[`EB1InteractionPlayReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactionplayreason)PlayReason override for the InteractionBag queued by this howling. Uses default Howling if None.`bOnlyForGhost``boolean`Whether this effect can only fire when the target is a ghost character. |
| --- |
| `Cooltime``number`Minimum cooldown time (seconds) before this effect pool can fire again.`Effects``FB1HowlingEffect[]`List of weighted effects in this pool; one is selected randomly when the howling fires.`PlayReasonOverride`[`EB1InteractionPlayReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactionplayreason)PlayReason override for the InteractionBag queued by this howling. Uses default Howling if None.`bOnlyForGhost``boolean`Whether this effect can only fire when the target is a ghost character. |
| `Effects``FB1HowlingEffect[]`List of weighted effects in this pool; one is selected randomly when the howling fires.`PlayReasonOverride`[`EB1InteractionPlayReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactionplayreason)PlayReason override for the InteractionBag queued by this howling. Uses default Howling if None.`bOnlyForGhost``boolean`Whether this effect can only fire when the target is a ghost character. |
| `PlayReasonOverride`[`EB1InteractionPlayReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactionplayreason)PlayReason override for the InteractionBag queued by this howling. Uses default Howling if None.`bOnlyForGhost``boolean`Whether this effect can only fire when the target is a ghost character. |
| `bOnlyForGhost``boolean`Whether this effect can only fire when the target is a ghost character. |

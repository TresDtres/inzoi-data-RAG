---
document_id: "84141b8a1fcabed465b7cfa85a9064f368123fa70578e3dd129a0f1518ff9230"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1coopgrouprotationtablerow"
title: "FB1CoopGroupRotationTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:33+00:00"
content_sha256: "1c91dd97773aff7965d70b834d528d09179944ae9dc10f374a411fd80787ae8d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1coopgrouprotationtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a group rotation cooperative action, where participants take turns performing interactions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`ConditionId``string`Condition ID that must be met for this rotation to proceed.`MainInteractionBagId``string`Interaction bag ID used for the main interaction slot.`MainInteractionScriptIds``string[]`Script IDs executed during the main interaction.`ParticipantMainInteractCount``integer`Number of times each participant performs the main interaction before the rotation ends.`SubInteractionBagId``string`Interaction bag ID used for the sub interaction slot (for waiting participants).`TimeOutDuration``integer`Maximum duration before the group rotation times out (in game-time minutes). |
| --- |
| `ConditionId``string`Condition ID that must be met for this rotation to proceed.`MainInteractionBagId``string`Interaction bag ID used for the main interaction slot.`MainInteractionScriptIds``string[]`Script IDs executed during the main interaction.`ParticipantMainInteractCount``integer`Number of times each participant performs the main interaction before the rotation ends.`SubInteractionBagId``string`Interaction bag ID used for the sub interaction slot (for waiting participants).`TimeOutDuration``integer`Maximum duration before the group rotation times out (in game-time minutes). |
| `MainInteractionBagId``string`Interaction bag ID used for the main interaction slot.`MainInteractionScriptIds``string[]`Script IDs executed during the main interaction.`ParticipantMainInteractCount``integer`Number of times each participant performs the main interaction before the rotation ends.`SubInteractionBagId``string`Interaction bag ID used for the sub interaction slot (for waiting participants).`TimeOutDuration``integer`Maximum duration before the group rotation times out (in game-time minutes). |
| `MainInteractionScriptIds``string[]`Script IDs executed during the main interaction.`ParticipantMainInteractCount``integer`Number of times each participant performs the main interaction before the rotation ends.`SubInteractionBagId``string`Interaction bag ID used for the sub interaction slot (for waiting participants).`TimeOutDuration``integer`Maximum duration before the group rotation times out (in game-time minutes). |
| `ParticipantMainInteractCount``integer`Number of times each participant performs the main interaction before the rotation ends.`SubInteractionBagId``string`Interaction bag ID used for the sub interaction slot (for waiting participants).`TimeOutDuration``integer`Maximum duration before the group rotation times out (in game-time minutes). |
| `SubInteractionBagId``string`Interaction bag ID used for the sub interaction slot (for waiting participants).`TimeOutDuration``integer`Maximum duration before the group rotation times out (in game-time minutes). |
| `TimeOutDuration``integer`Maximum duration before the group rotation times out (in game-time minutes). |

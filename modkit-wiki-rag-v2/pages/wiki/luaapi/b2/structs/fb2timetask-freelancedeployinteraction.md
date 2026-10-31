---
document_id: "927ab67e15eccb579df20d11b5d0867e046fafff0e3dd540e673c732cc0c6a7f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-freelancedeployinteraction"
title: "FB2TimeTask_FreelanceDeployInteraction"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:51+00:00"
content_sha256: "eaea3bfd76a8a4b3297dce00e73dd09134e835f0c118e5b651e74fe5d6b17afb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2timetask-freelancedeployinteraction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- TimeTask that switches an inactive (non-Simulate) NPC to Active, waits for the state to apply, then registers an InteractionQueue. Triggers 5 minutes after DeployOrderZoi calls TryChangeState(Active); on Execute, after confirming the Simulate state, registers the FreelanceOrderClientSit interaction.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Category`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |

# Properties (1)

| NameTypeDescription`CharacterEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| --- |
| `CharacterEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |

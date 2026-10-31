---
document_id: "10720d54b5e26f6b01e5ef48730fabfdd7bea639a2b8970936bab67a166b19ab"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-promvote"
title: "FB2Action_PromVote"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:05+00:00"
content_sha256: "cc2156121acd0376870290f5f4ee36b9c4daab4a65f748d9460d3f80b6085137"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-promvote"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PromVote action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base) |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base) |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base) |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base) |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base) |

# Properties (4)

| NameTypeDescription`VoteGender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender of the vote candidates, parsed from Action.S1`bComplete``boolean`Whether the vote was completed via NotifyVoteComplete (as opposed to canceled)`bRestore``boolean`Whether this action is being restored from a save rather than played fresh`bSendPacket``boolean`Whether the OpenPromVoteUI packet was sent to the client |
| --- |
| `VoteGender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender of the vote candidates, parsed from Action.S1`bComplete``boolean`Whether the vote was completed via NotifyVoteComplete (as opposed to canceled)`bRestore``boolean`Whether this action is being restored from a save rather than played fresh`bSendPacket``boolean`Whether the OpenPromVoteUI packet was sent to the client |
| `bComplete``boolean`Whether the vote was completed via NotifyVoteComplete (as opposed to canceled)`bRestore``boolean`Whether this action is being restored from a save rather than played fresh`bSendPacket``boolean`Whether the OpenPromVoteUI packet was sent to the client |
| `bRestore``boolean`Whether this action is being restored from a save rather than played fresh`bSendPacket``boolean`Whether the OpenPromVoteUI packet was sent to the client |
| `bSendPacket``boolean`Whether the OpenPromVoteUI packet was sent to the client |

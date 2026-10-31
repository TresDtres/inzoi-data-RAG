---
document_id: "7eef203bac8819713fb63f8f26885e04c7531c1c5f38689313a9a7428750ec3c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-throwcarriableobject"
title: "FB2Action_ThrowCarriableObject"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:07+00:00"
content_sha256: "6c04b2a316819a649719dfc99f6fd90b9f4f8e83ef867370b52c9f720800f09b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-throwcarriableobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Action that checks which hand holds the throw target, decides SelectedHand, and plays the matching montage. (Releasing the object from the hand is handled by B1AnimNotify_ThrowCarriable embedded in the montage.)

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim) |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim) |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim) |
| Category`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim) |
| Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim) |

# Properties (1)

| NameTypeDescription`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand holding the throw target, used to pick the throw montage/tag |
| --- |
| `SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand holding the throw target, used to pick the throw montage/tag |

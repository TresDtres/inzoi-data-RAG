---
document_id: "f162769da94378c8facff897621e36d7ef0eb0feaf46a5815540ada6210f1f4f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingstep"
title: "FB1CraftingStep"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:35+00:00"
content_sha256: "1e22b0efb07036a1c97e226134b2b0571f009e504f5d8671ddb218414d0c974d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1craftingstep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single step in the crafting process, including the interaction bag to play and optional spawn data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`InteractionBagId``string`Interaction bag ID executed during this crafting step.`SpawnData`[`FB1CraftingObjectSpawnData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingobjectspawndata)Data defining what object to spawn and where at the end of this step.`bResultFailContinue``boolean`Whether crafting continues even if the result of this step is a failure.`bShouldContinueInPreviousInteractingObject``boolean`Whether this step should continue in the same object used in the previous step. |
| --- |
| `InteractionBagId``string`Interaction bag ID executed during this crafting step.`SpawnData`[`FB1CraftingObjectSpawnData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingobjectspawndata)Data defining what object to spawn and where at the end of this step.`bResultFailContinue``boolean`Whether crafting continues even if the result of this step is a failure.`bShouldContinueInPreviousInteractingObject``boolean`Whether this step should continue in the same object used in the previous step. |
| `SpawnData`[`FB1CraftingObjectSpawnData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingobjectspawndata)Data defining what object to spawn and where at the end of this step.`bResultFailContinue``boolean`Whether crafting continues even if the result of this step is a failure.`bShouldContinueInPreviousInteractingObject``boolean`Whether this step should continue in the same object used in the previous step. |
| `bResultFailContinue``boolean`Whether crafting continues even if the result of this step is a failure.`bShouldContinueInPreviousInteractingObject``boolean`Whether this step should continue in the same object used in the previous step. |
| `bShouldContinueInPreviousInteractingObject``boolean`Whether this step should continue in the same object used in the previous step. |

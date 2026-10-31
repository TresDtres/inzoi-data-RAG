---
document_id: "72cc401b2966dc30636b7fe8e6ac569a67a3566b72bc6bb15eac361bf290e051"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1howlinginteractionbagitem"
title: "FB1HowlingInteractionBagItem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:09+00:00"
content_sha256: "18a93eaf2c7f7d50405a30e7fb3055b65448318a36cec519b09e39baf75556fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1howlinginteractionbagitem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Single entry in the Howling InteractionEffect pool. ID + weight. Matching is evaluated against each InteractionBag's own InteractionEnableConditionIds (no per-entry ConditionId on the pool).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`InteractionBagId``string`InteractionBag to enqueue when this entry is selected.`Ratio``integer`Selection weight (>=0). 0 excludes the entry. Same meaning as ChoiceCard.Ratio. |
| --- |
| `InteractionBagId``string`InteractionBag to enqueue when this entry is selected.`Ratio``integer`Selection weight (>=0). 0 excludes the entry. Same meaning as ChoiceCard.Ratio. |
| `Ratio``integer`Selection weight (>=0). 0 excludes the entry. Same meaning as ChoiceCard.Ratio. |

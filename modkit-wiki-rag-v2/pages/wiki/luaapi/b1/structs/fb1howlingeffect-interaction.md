---
document_id: "2bc36405282fccd1fc29a844e73efa4a9db22791285536d0fecd30fdfe4418bb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1howlingeffect-interaction"
title: "FB1HowlingEffect_Interaction"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:09+00:00"
content_sha256: "0f28cf84e8ae4290c34c62edbc2e9b40d37d131334f99f7acc9a6572bfaeaad1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1howlingeffect-interaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the interaction effect of a howling event: a weighted pool of InteractionBags, each gated by its own enable conditions, from which one is chosen for the target.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (1)

| NameTypeDescription`InteractionBagList``FB1HowlingInteractionBagItem[]`Pool: each candidate is gated by its InteractionBag.InteractionEnableConditionIds, then Ratio-weighted random pick from those that pass. If a candidate's InteractionEnableConditionIds is empty, it auto-passes (uniform random). |
| --- |
| `InteractionBagList``FB1HowlingInteractionBagItem[]`Pool: each candidate is gated by its InteractionBag.InteractionEnableConditionIds, then Ratio-weighted random pick from those that pass. If a candidate's InteractionEnableConditionIds is empty, it auto-passes (uniform random). |

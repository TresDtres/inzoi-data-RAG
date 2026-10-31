---
document_id: "d5ef57079946c1bb4912733a68333821dd304e07a55a5d301ce3fb0d61f8d49e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scenarioinfo"
title: "FB1ScenarioInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:19+00:00"
content_sha256: "99d99f8f0a261c7a9bc50447546afe0015d6662669d2e61ab1e2e171a3629aab"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1scenarioinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single scenario step within a cooperative action role, specifying which interaction bag to play and its acting type.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`ActingType`[`EB1ActingType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1actingtype)Acting type determining whether this step is essential, looping, or non-synced.`ForceCurrentInteractionCancel``boolean`Whether the current interaction should be force-cancelled before this scenario starts.`InteractionBagId``string`Interaction bag ID to execute for this scenario step. |
| --- |
| `ActingType`[`EB1ActingType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1actingtype)Acting type determining whether this step is essential, looping, or non-synced.`ForceCurrentInteractionCancel``boolean`Whether the current interaction should be force-cancelled before this scenario starts.`InteractionBagId``string`Interaction bag ID to execute for this scenario step. |
| `ForceCurrentInteractionCancel``boolean`Whether the current interaction should be force-cancelled before this scenario starts.`InteractionBagId``string`Interaction bag ID to execute for this scenario step. |
| `InteractionBagId``string`Interaction bag ID to execute for this scenario step. |

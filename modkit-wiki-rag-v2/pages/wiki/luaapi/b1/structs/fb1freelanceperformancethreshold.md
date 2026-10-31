---
document_id: "b933f56ed90344e9f3af383884e45663856d714253370f0c75ea5170d245be49"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceperformancethreshold"
title: "FB1FreelancePerformanceThreshold"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:56+00:00"
content_sha256: "81066ee4a0762593c002d888e3ad3a9e185c827f5166648c9df9f6c8927606c1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelanceperformancethreshold"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Client satisfaction weights for freelance calculations. Dynamic normalization: divides by the sum of active component weights to guarantee 0~1 range. Used in CalculateClientSatisfaction and BuildDebugDescParam. Client satisfaction weight settings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`DecisionFlowScoreWeight``number`DecisionFlow score weight.`FastCompletionSatisfactionWeight``number`Fast completion weight.`QualitySatisfactionWeight``number`Quality score weight. |
| --- |
| `DecisionFlowScoreWeight``number`DecisionFlow score weight.`FastCompletionSatisfactionWeight``number`Fast completion weight.`QualitySatisfactionWeight``number`Quality score weight. |
| `FastCompletionSatisfactionWeight``number`Fast completion weight.`QualitySatisfactionWeight``number`Quality score weight. |
| `QualitySatisfactionWeight``number`Quality score weight. |

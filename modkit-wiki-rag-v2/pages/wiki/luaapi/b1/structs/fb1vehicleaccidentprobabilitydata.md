---
document_id: "362e54394fc9bf0fdb80ffd184abcea881b520c8c3f16017233fdbf166ffca0a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleaccidentprobabilitydata"
title: "FB1VehicleAccidentProbabilityData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:46+00:00"
content_sha256: "74962149fcd267f5ea7f047a38c2e32332903c5d9f183036987fc2cb14317ec9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vehicleaccidentprobabilitydata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Maps accident IDs to probabilities and provides a fallback accident ID when no match is found.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`AccidentProbMap``table<string, number>`Map of accident IDs to their occurrence probability values.`FallbackAccidentId``string`Fallback accident ID used when no matching probability entry is found. |
| --- |
| `AccidentProbMap``table<string, number>`Map of accident IDs to their occurrence probability values.`FallbackAccidentId``string`Fallback accident ID used when no matching probability entry is found. |
| `FallbackAccidentId``string`Fallback accident ID used when no matching probability entry is found. |

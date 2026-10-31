---
document_id: "df6b060e12b05df0af2a3a543ce19d2d88013b224e9b6c1b94935793af7b7687"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1responsetypeprobability"
title: "FB1ResponseTypeProbability"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:16+00:00"
content_sha256: "3d4cfe7b64272445b8ffcdb685763e998ca621253ed9e764fe0d8f4ba901ece2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1responsetypeprobability"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines probabilities for positive and neutral response types from an NPC character. The negative probability is derived as 1 minus the sum of positive and normal probabilities.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`NormalProb``number`Probability (0-1) of receiving a neutral response; negative probability is 1 - (Positive + Normal).`PositiveProb``number`Probability (0-1) of receiving a positive response; negative probability is 1 - (Positive + Normal). |
| --- |
| `NormalProb``number`Probability (0-1) of receiving a neutral response; negative probability is 1 - (Positive + Normal).`PositiveProb``number`Probability (0-1) of receiving a positive response; negative probability is 1 - (Positive + Normal). |
| `PositiveProb``number`Probability (0-1) of receiving a positive response; negative probability is 1 - (Positive + Normal). |

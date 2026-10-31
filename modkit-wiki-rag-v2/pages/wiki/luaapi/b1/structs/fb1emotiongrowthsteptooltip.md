---
document_id: "6a4cf7a4fe360b5377c7899c99bc8bcc3d458b5eee6058e61f1fa5b7e518c154"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1emotiongrowthsteptooltip"
title: "FB1EmotionGrowthStepTooltip"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:45+00:00"
content_sha256: "199d35a0f59975767860ae9608f0512f89c5372d52fa53d806621895d0a2635a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1emotiongrowthsteptooltip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-growth-step override of an emotion level's tooltip text. GrowthStepFlags is a bitmask of EB1GrowthStep, so combined values such as OverLowTeen can be assigned to a single entry.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`DescTooltipTextId``string`String table key for the description tooltip text shown for these growth steps.`GrowthStepFlags``integer`Growth steps this tooltip applies to (bitmask of EB1GrowthStep; combined values like OverLowTeen allowed). |
| --- |
| `DescTooltipTextId``string`String table key for the description tooltip text shown for these growth steps.`GrowthStepFlags``integer`Growth steps this tooltip applies to (bitmask of EB1GrowthStep; combined values like OverLowTeen allowed). |
| `GrowthStepFlags``integer`Growth steps this tooltip applies to (bitmask of EB1GrowthStep; combined values like OverLowTeen allowed). |

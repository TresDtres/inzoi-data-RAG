---
document_id: "9d1e50297aa29f04d14db9db032043a8d9205ea3d22bd5cc19646bcce515f6a7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vacationsegment"
title: "FB1VacationSegment"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:46+00:00"
content_sha256: "f365b2303fa0c766a9c763b9012c0f2c02ca3a0d07a916e47312ffed1f5a83c3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vacationsegment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A single contiguous block of vacation days of the same type within a vacation stretch. Extensions append new segments (or merge if same type). Consumed FIFO from front.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`Days``integer`Number of days in this segment.`VacationType`[`EB1CareerVacationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1careervacationtype)Vacation type of this segment. |
| --- |
| `Days``integer`Number of days in this segment.`VacationType`[`EB1CareerVacationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1careervacationtype)Vacation type of this segment. |
| `VacationType`[`EB1CareerVacationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1careervacationtype)Vacation type of this segment. |

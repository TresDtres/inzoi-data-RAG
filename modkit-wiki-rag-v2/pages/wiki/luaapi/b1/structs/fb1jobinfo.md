---
document_id: "4123897bda294ef06c62178a97ff17b5748c62094545cc3691fa6dbb318c90f5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1jobinfo"
title: "FB1JobInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:13+00:00"
content_sha256: "f3369b0ac21a883f0bcae830aeb5f08a69cf333ff839d704da4f91c3a8bd5f80"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1jobinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that stores runtime job information for a character. Tracks the active job ID, current level, experience points, and job type.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`JobId``string`ID of the currently held job (references Job.Id).`JobType`[`EB1JobType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jobtype)The type of this job (Normal, Student, or Freelancer). |
| --- |
| `JobId``string`ID of the currently held job (references Job.Id).`JobType`[`EB1JobType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jobtype)The type of this job (Normal, Student, or Freelancer). |
| `JobType`[`EB1JobType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jobtype)The type of this job (Normal, Student, or Freelancer). |

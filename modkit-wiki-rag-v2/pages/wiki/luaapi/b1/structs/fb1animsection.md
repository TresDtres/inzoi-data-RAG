---
document_id: "ee330c52ce9d14e50c7028e96ce7352a04db2d5a07933f443406100b5f0814ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animsection"
title: "FB1AnimSection"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "75d788c0e047a967c9e9954b027d931f480e5b8f277e2ebdc142b05d14661633"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1animsection"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a named section within a montage, including its start time, next section, and loop flag. Sections are used to control playback flow within a montage (e.g., intro, loop, outro).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`IsLoop``boolean`Whether this section loops when it reaches its end.`Name``string`Name of this montage section.`NextSectionName``string`Name of the section to transition to after this one completes.`Time``number`Start time of this section within the montage timeline in seconds. |
| --- |
| `IsLoop``boolean`Whether this section loops when it reaches its end.`Name``string`Name of this montage section.`NextSectionName``string`Name of the section to transition to after this one completes.`Time``number`Start time of this section within the montage timeline in seconds. |
| `Name``string`Name of this montage section.`NextSectionName``string`Name of the section to transition to after this one completes.`Time``number`Start time of this section within the montage timeline in seconds. |
| `NextSectionName``string`Name of the section to transition to after this one completes.`Time``number`Start time of this section within the montage timeline in seconds. |
| `Time``number`Start time of this section within the montage timeline in seconds. |

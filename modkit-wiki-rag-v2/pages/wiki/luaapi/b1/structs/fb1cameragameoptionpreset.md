---
document_id: "59d7ac07572fd8838f9a8d523bdbc85af2d37a240b1521c2b6ab12ee71168a03"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cameragameoptionpreset"
title: "FB1CameraGameOptionPreset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:15+00:00"
content_sha256: "fbaf3f4e5c96c1286877f916b1ec3b13a6f2a52ac24a0965877d89b097545fef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cameragameoptionpreset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines game option preset values (shadow quality and FOV) applied per camera mode, excluding top-view cameras.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`AdditionalShadowQuality``integer`Additive shadow quality offset for this camera mode (-4 to 4). The final shadow quality is clamped to [0, 4].`FOV``number`Field of view applied for this camera mode. |
| --- |
| `AdditionalShadowQuality``integer`Additive shadow quality offset for this camera mode (-4 to 4). The final shadow quality is clamped to [0, 4].`FOV``number`Field of view applied for this camera mode. |
| `FOV``number`Field of view applied for this camera mode. |

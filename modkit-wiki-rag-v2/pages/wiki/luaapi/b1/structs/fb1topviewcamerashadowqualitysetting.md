---
document_id: "e97d8c6bcfbaa57183368fb7e67d8b9f7bc4633870c0fda13bf65a359c23516b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1topviewcamerashadowqualitysetting"
title: "FB1TopViewCameraShadowQualitySetting"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:42+00:00"
content_sha256: "8b031ebdebf8ab1ae67eca08e051309f706b5fd80042367024477017eb4b73a7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1topviewcamerashadowqualitysetting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a distance-range-based shadow quality adjustment for top-view cameras, applying an additive offset to the user-configured shadow quality.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`AdditionalShadowQuality``integer`Additive shadow quality offset for this distance range (-4 to 4). The final quality is clamped to [0, 4].`MaxValue``number`Maximum camera distance (exclusive) for this shadow quality range.`MinValue``number`Minimum camera distance (inclusive) for this shadow quality range. |
| --- |
| `AdditionalShadowQuality``integer`Additive shadow quality offset for this distance range (-4 to 4). The final quality is clamped to [0, 4].`MaxValue``number`Maximum camera distance (exclusive) for this shadow quality range.`MinValue``number`Minimum camera distance (inclusive) for this shadow quality range. |
| `MaxValue``number`Maximum camera distance (exclusive) for this shadow quality range.`MinValue``number`Minimum camera distance (inclusive) for this shadow quality range. |
| `MinValue``number`Minimum camera distance (inclusive) for this shadow quality range. |

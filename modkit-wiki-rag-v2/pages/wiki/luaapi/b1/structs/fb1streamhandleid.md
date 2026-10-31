---
document_id: "3e1059e92ae657bb53b9f1c6f409fd74e6b512cafb80ec9ba0ccb971fca16672"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1streamhandleid"
title: "FB1StreamHandleId"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:36+00:00"
content_sha256: "ecbec94ed16879b64b413e5f6665e200901471bf9c359bca06b4db12a904f85b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1streamhandleid"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stream handle identifier issued by UB1LoadManager. InvalidId (=-1) is an unissued/invalid handle (issued ids are always >= 1). Same approach as FB1EntityId (BLUEUTILS_API USTRUCT + a static InvalidId defined in the cpp), so inter-module linkage is guaranteed. When it must be treated as an integer (logging "%llu", counters, etc.), cast explicitly to (uint64).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (1)

| NameTypeDescription`Value``integer`Initialized to the literal -1 (constexpr) instead of the static InvalidId. Using the type's own static for member default initialization is fragile, as static initialization order may leave it 0 (zero-init). |
| --- |
| `Value``integer`Initialized to the literal -1 (constexpr) instead of the static InvalidId. Using the type's own static for member default initialization is fragile, as static initialization order may leave it 0 (zero-init). |

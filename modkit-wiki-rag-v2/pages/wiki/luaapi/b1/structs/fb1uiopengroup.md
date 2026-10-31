---
document_id: "b67c33bda559bdb9bdfc203da415bf247562b8d18bcfa99c0ac8f519358d7085"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1uiopengroup"
title: "FB1UIOpenGroup"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:44+00:00"
content_sha256: "648390fffd5115a7fa7b8ec48be3e16afcf05522ac6267bf875afb747e01e5d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1uiopengroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Groups related widgets for mutual open/close management; only one widget in a group is allowed open at a time.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`CloseWidgetListWhenClose``EB1UIType[]`List of widget types that will also be closed when this widget closes.`CloseWidgetListWhenOpen``EB1UIType[]`List of widget types that will be closed when this widget opens.`GroupName``string`Name identifying this group; widgets in the same group close each other when one opens.`OpenWidgetListWhenClose``EB1UIType[]`List of widget types that will be opened when this widget closes. |
| --- |
| `CloseWidgetListWhenClose``EB1UIType[]`List of widget types that will also be closed when this widget closes.`CloseWidgetListWhenOpen``EB1UIType[]`List of widget types that will be closed when this widget opens.`GroupName``string`Name identifying this group; widgets in the same group close each other when one opens.`OpenWidgetListWhenClose``EB1UIType[]`List of widget types that will be opened when this widget closes. |
| `CloseWidgetListWhenOpen``EB1UIType[]`List of widget types that will be closed when this widget opens.`GroupName``string`Name identifying this group; widgets in the same group close each other when one opens.`OpenWidgetListWhenClose``EB1UIType[]`List of widget types that will be opened when this widget closes. |
| `GroupName``string`Name identifying this group; widgets in the same group close each other when one opens.`OpenWidgetListWhenClose``EB1UIType[]`List of widget types that will be opened when this widget closes. |
| `OpenWidgetListWhenClose``EB1UIType[]`List of widget types that will be opened when this widget closes. |

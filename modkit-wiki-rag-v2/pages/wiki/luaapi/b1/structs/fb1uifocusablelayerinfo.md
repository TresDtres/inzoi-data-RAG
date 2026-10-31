---
document_id: "702108f1a546c73ff6a267649c034d10636fa6f23a64e224ee9c36ac6c10d17f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1uifocusablelayerinfo"
title: "FB1UIFocusableLayerInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:44+00:00"
content_sha256: "c994805b76c560a047a45a74ba8fa5a08f1b5d8f996d599c81c293030a20fb33"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1uifocusablelayerinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Configuration for a focusable UI layer, specifying input mode, layer restriction, and default focus behavior.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`InitUIInputMode`[`EB1UIInputMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1uiinputmode)`UIInputModeSetting`[`EB1UIInputModeSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1uiinputmodesetting)Input mode setting determining whether the layer uses UI-only, control-only, or mixed input.`bAlwaysDefaultFocus``boolean`When true, focus always returns to the default widget rather than restoring the last focused widget.`bEnableLayerRestriction``boolean`Whether layer restriction is enabled during custom navigation.`bFocusOnKeyboard``boolean`When true, the layer enters a focused state when keyboard input is received.`bSelectOnShow``boolean`Whether the layer should request focus when it becomes visible.`bUsingInitUIInputMode``boolean` |
| --- |
| `InitUIInputMode`[`EB1UIInputMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1uiinputmode)`UIInputModeSetting`[`EB1UIInputModeSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1uiinputmodesetting)Input mode setting determining whether the layer uses UI-only, control-only, or mixed input.`bAlwaysDefaultFocus``boolean`When true, focus always returns to the default widget rather than restoring the last focused widget.`bEnableLayerRestriction``boolean`Whether layer restriction is enabled during custom navigation.`bFocusOnKeyboard``boolean`When true, the layer enters a focused state when keyboard input is received.`bSelectOnShow``boolean`Whether the layer should request focus when it becomes visible.`bUsingInitUIInputMode``boolean` |
| `UIInputModeSetting`[`EB1UIInputModeSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1uiinputmodesetting)Input mode setting determining whether the layer uses UI-only, control-only, or mixed input.`bAlwaysDefaultFocus``boolean`When true, focus always returns to the default widget rather than restoring the last focused widget.`bEnableLayerRestriction``boolean`Whether layer restriction is enabled during custom navigation.`bFocusOnKeyboard``boolean`When true, the layer enters a focused state when keyboard input is received.`bSelectOnShow``boolean`Whether the layer should request focus when it becomes visible.`bUsingInitUIInputMode``boolean` |
| `bAlwaysDefaultFocus``boolean`When true, focus always returns to the default widget rather than restoring the last focused widget.`bEnableLayerRestriction``boolean`Whether layer restriction is enabled during custom navigation.`bFocusOnKeyboard``boolean`When true, the layer enters a focused state when keyboard input is received.`bSelectOnShow``boolean`Whether the layer should request focus when it becomes visible.`bUsingInitUIInputMode``boolean` |
| `bEnableLayerRestriction``boolean`Whether layer restriction is enabled during custom navigation.`bFocusOnKeyboard``boolean`When true, the layer enters a focused state when keyboard input is received.`bSelectOnShow``boolean`Whether the layer should request focus when it becomes visible.`bUsingInitUIInputMode``boolean` |
| `bFocusOnKeyboard``boolean`When true, the layer enters a focused state when keyboard input is received.`bSelectOnShow``boolean`Whether the layer should request focus when it becomes visible.`bUsingInitUIInputMode``boolean` |
| `bSelectOnShow``boolean`Whether the layer should request focus when it becomes visible.`bUsingInitUIInputMode``boolean` |
| `bUsingInitUIInputMode``boolean` |

---
document_id: "8ef5a339586ae74feb7146dab6b42e1426907693b9443cc0ba724795353ca06f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cameramode-console"
title: "UB1CameraMode_Console"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:58+00:00"
content_sha256: "0de8508235f2c89d70536f105a2f0922e62b6d8aad19a6c31983350a781be091"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1cameramode-console"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Gamepad-only unified zoom camera mode. Inherits UB1CameraMode_Top and continuously interpolates between shoulder view (near) and top view (far) with a single logic based on the zoom ratio (0-1). Pitch control: auto-interpolates toward the target pitch only while the zoom distance changes; holds the current pitch when zooming stops; user input (PitchRotate) always takes precedence and stays at that position. Curve properties: each curve's X axis is zoomRatio (0=min distance/shoulder, 1=max distance/top view); if a curve is null, it falls back to scalar-UPROPERTY-based linear interpolation.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1CameraMode_Top`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cameramode-top) |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1CameraMode_Top`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cameramode-top) |
| EnvironmentB1 - PresentationCategory`classes`Extends[`UB1CameraMode_Top`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cameramode-top) |
| Category`classes`Extends[`UB1CameraMode_Top`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cameramode-top) |
| Extends[`UB1CameraMode_Top`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cameramode-top) |

# Properties (13)

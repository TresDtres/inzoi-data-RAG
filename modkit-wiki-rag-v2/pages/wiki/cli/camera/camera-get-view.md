---
document_id: "d3daef4c063ac865e9cba1e4856c85746c268d0432faa5e867ab69a7a08b0629"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/camera/camera-get-view"
title: "camera.get_view"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:51+00:00"
content_sha256: "fc8df5bf12dd5e2ae855408f4405b89617e297ef9d8790320db038112d2e471f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/camera/camera-get-view"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the live state of the active game camera: world position, rotation, the forward/right/up unit vectors derived from that rotation, the field of view actually in effect this frame, aspect ratio, projection mode, viewport resolution, the current inZOI camera mode (ShoulderView, QuarterView, BuildView, PhotoMode, ...) and the actor the camera is following. This reads the camera cache the renderer used, so fov here is the value in effect right now, which can differ from the user preference reported by camera.get_settings. aspect_ratio is the effective one used to render (the viewport aspect unless the camera constrains it), not the camera's raw AspectRatio field, which normally sits at an unused 4:3 default. Coordinates are Unreal world space: left-handed, Z-up, centimetres, with forward = +X, right = +Y, up = +Z. The camera interpolates and does collision avoidance every frame, so treat the result as a snapshot; pause the simulation first if you need a stable reading.

# Metadata

| FieldValueDisplayGet Camera ViewCategory`camera`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Camera ViewCategory`camera`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`camera`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('camera.get_view');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

---
document_id: "f296a37f44ca2d5c192b311c415f024e3700fd906ab85f3eb7e2d6b1b67880bf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-set-option"
title: "graphics.set_option"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:01+00:00"
content_sha256: "58bd0d33d66ea9d10ad5964880a2ef3a94316fae495fa0b8e8b3fb8ae3bb92ad"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/graphics/graphics-set-option"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set an individual graphics option. Use graphics.get_settings to see current values. Common options: shadow_quality, texture_quality, view_distance, max_fps, vsync, screen_percentage. Quality values are typically 0-4 (0=lowest, 4=highest).

# Metadata

| FieldValueDisplaySet Graphics OptionCategory`graphics`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet Graphics OptionCategory`graphics`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`graphics`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionoptionstringyes—Option name (e.g. shadow_quality, texture_quality, max_fps)valuestringyes—Value to set (e.g. 0, 1, 2, 3, 4 for quality; 30, 60, 120 for FPS) |
| --- |
| optionstringyes—Option name (e.g. shadow_quality, texture_quality, max_fps)valuestringyes—Value to set (e.g. 0, 1, 2, 3, 4 for quality; 30, 60, 120 for FPS) |
| valuestringyes—Value to set (e.g. 0, 1, 2, 3, 4 for quality; 30, 60, 120 for FPS) |

# Usage

```
await inzoi.cli.execute('graphics.set_option', {  option: '',  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsographics[graphics.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-get-settings)[graphics.optimize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-optimize)[graphics.set_cvar](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-set-cvar)[graphics.set_preset](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-set-preset)

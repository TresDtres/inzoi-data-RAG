---
document_id: "0c9d0d3c049e9e83cba83cbe1bd088000fce615659b2ccc6677f77d0b8fabc0a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/screenshot/screenshot-capture"
title: "screenshot.capture"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:14+00:00"
content_sha256: "aa9c25d3df5eeadea82c61311e3c8d0638a8fc3aa3428fd8b69d42a4819ecb50"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/screenshot/screenshot-capture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Requests an engine screenshot and returns the exact absolute path, directory and filename the engine will write to. The path is authoritative, not a guess: the engine resolves the final filename at request time. OFFSCREEN-SAFE: this is a GPU read-back of the game's own render target, not a desktop grab, so it works while the game window is fully covered by other windows, unfocused, or moved off-screen — you do not need to bring the game to the foreground. SLOW AND DELAYED: nothing is on disk when this command returns. The file is only written when the engine renders and presents its next frame, so expect at least one frame of latency, and much longer (seconds) while a loading screen is up, while the window is minimised, or when the game thread is blocked by a map load. Poll screenshot.get_last until saved == true before reading the file. Only one request can be pending engine-wide; this fails if one is already in flight, or if Photo Mode currently owns the capture delegate (in that case the engine would write no file at all). Call system.get_paths for the directory these files land in.

# Metadata

| FieldValueDisplayCapture ScreenshotCategory`screenshot`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayCapture ScreenshotCategory`screenshot`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`screenshot`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfilenamestringno—Optional target name. A bare name (no slash) lands in the engine screenshot directory reported by system.get_paths as screenshot_dir; a name containing a slash is used as the path as-is. The .png extension is added automatically. Defaults to 'ScreenShot'.show_uiboolnotruetrue (default): capture the whole window including the game UI via the Slate widget tree. false: capture only the 3D scene viewport, with UI and on-screen debug messages suppressed.unique_suffixboolnotruetrue (default): append an auto-incrementing index so an existing file is never overwritten. false: write exactly the given filename, overwriting any existing file. |
| --- |
| filenamestringno—Optional target name. A bare name (no slash) lands in the engine screenshot directory reported by system.get_paths as screenshot_dir; a name containing a slash is used as the path as-is. The .png extension is added automatically. Defaults to 'ScreenShot'.show_uiboolnotruetrue (default): capture the whole window including the game UI via the Slate widget tree. false: capture only the 3D scene viewport, with UI and on-screen debug messages suppressed.unique_suffixboolnotruetrue (default): append an auto-incrementing index so an existing file is never overwritten. false: write exactly the given filename, overwriting any existing file. |
| show_uiboolnotruetrue (default): capture the whole window including the game UI via the Slate widget tree. false: capture only the 3D scene viewport, with UI and on-screen debug messages suppressed.unique_suffixboolnotruetrue (default): append an auto-incrementing index so an existing file is never overwritten. false: write exactly the given filename, overwriting any existing file. |
| unique_suffixboolnotruetrue (default): append an auto-incrementing index so an existing file is never overwritten. false: write exactly the given filename, overwriting any existing file. |

# Usage

```
await inzoi.cli.execute('screenshot.capture', {  filename: '', // optional  show_ui: true, // optional  unique_suffix: true, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)

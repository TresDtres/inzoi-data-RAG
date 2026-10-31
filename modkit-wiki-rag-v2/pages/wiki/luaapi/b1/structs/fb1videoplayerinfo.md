---
document_id: "74f212bfc27068546784239b664d938cb5cdc6c7ea2991c5e14f7e55bdcce5f8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1videoplayerinfo"
title: "FB1VideoPlayerInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:48+00:00"
content_sha256: "eaa407e3674a824002cddcd0eb8055e030ae6c3894477794d4b35ea2f8328c1f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1videoplayerinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Holds configuration for a single video player entry, including the media source, fade-out timing, and an optional widget animation to play alongside the video.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`FadeOutSec``number`Duration in seconds to apply a fade-out effect near the end of video playback; values greater than 0 activate the fade-out.`MediaSource``FSoftObjectPath`Soft object path to the media source asset to be played.`WidgetAnimationName``string`Name of the widget animation in WBP_VideoPlayer to play simultaneously with the video, used as a temporary subtitle mechanism. |
| --- |
| `FadeOutSec``number`Duration in seconds to apply a fade-out effect near the end of video playback; values greater than 0 activate the fade-out.`MediaSource``FSoftObjectPath`Soft object path to the media source asset to be played.`WidgetAnimationName``string`Name of the widget animation in WBP_VideoPlayer to play simultaneously with the video, used as a temporary subtitle mechanism. |
| `MediaSource``FSoftObjectPath`Soft object path to the media source asset to be played.`WidgetAnimationName``string`Name of the widget animation in WBP_VideoPlayer to play simultaneously with the video, used as a temporary subtitle mechanism. |
| `WidgetAnimationName``string`Name of the widget animation in WBP_VideoPlayer to play simultaneously with the video, used as a temporary subtitle mechanism. |

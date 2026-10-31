---
document_id: "a40a26d5e1a24b0a5094433eab5e08c4e3eea5ac91fee8041603d2dee3c77b6f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cameragameoptionpresetsetting"
title: "FB1CameraGameOptionPresetSetting"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:15+00:00"
content_sha256: "cd2f2b099f8d5175391fa1b408272b74182c5259c40bc5239ab0a60a024fa65c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cameragameoptionpresetsetting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Aggregates all camera game option preset settings, including per-mode FOV and shadow quality presets, top-view FOV blend range, top-view shadow quality distance settings, and Ultra Dynamic Sky post-process.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`DefaultPresetMap``table<EB1CameraModeType, FB1CameraGameOptionPreset>`Per-camera-mode FOV and shadow quality presets. Does not apply to top-view. If no shadow quality is defined for a mode, GameUserSettings value is used.`TopViewDynamicSkyPostProcessSetting`[`FB1TopViewCameraDynamicSkyPostProcessSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1topviewcameradynamicskypostprocesssetting)Ultra Dynamic Sky post-process settings applied in top-view camera mode.`TopViewMaxFOV``number`Maximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.`TopViewMinFOV``number`Minimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.`TopViewShadowQualitySettingArray``FB1TopViewCameraShadowQualitySetting[]`Distance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4]. |
| --- |
| `DefaultPresetMap``table<EB1CameraModeType, FB1CameraGameOptionPreset>`Per-camera-mode FOV and shadow quality presets. Does not apply to top-view. If no shadow quality is defined for a mode, GameUserSettings value is used.`TopViewDynamicSkyPostProcessSetting`[`FB1TopViewCameraDynamicSkyPostProcessSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1topviewcameradynamicskypostprocesssetting)Ultra Dynamic Sky post-process settings applied in top-view camera mode.`TopViewMaxFOV``number`Maximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.`TopViewMinFOV``number`Minimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.`TopViewShadowQualitySettingArray``FB1TopViewCameraShadowQualitySetting[]`Distance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4]. |
| `TopViewDynamicSkyPostProcessSetting`[`FB1TopViewCameraDynamicSkyPostProcessSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1topviewcameradynamicskypostprocesssetting)Ultra Dynamic Sky post-process settings applied in top-view camera mode.`TopViewMaxFOV``number`Maximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.`TopViewMinFOV``number`Minimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.`TopViewShadowQualitySettingArray``FB1TopViewCameraShadowQualitySetting[]`Distance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4]. |
| `TopViewMaxFOV``number`Maximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.`TopViewMinFOV``number`Minimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.`TopViewShadowQualitySettingArray``FB1TopViewCameraShadowQualitySetting[]`Distance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4]. |
| `TopViewMinFOV``number`Minimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.`TopViewShadowQualitySettingArray``FB1TopViewCameraShadowQualitySetting[]`Distance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4]. |
| `TopViewShadowQualitySettingArray``FB1TopViewCameraShadowQualitySetting[]`Distance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4]. |

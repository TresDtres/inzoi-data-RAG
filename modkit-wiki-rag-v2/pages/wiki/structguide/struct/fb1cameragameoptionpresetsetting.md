---
document_id: "fe3674102becb8622ee8c72795dd9fa668a539f9f2bac8d133db730e21ca37d8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cameragameoptionpresetsetting"
title: "B1CameraGameOptionPresetSetting"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:37+00:00"
content_sha256: "8063420a9baa1b02dd553ef8e971e450962582fc4d41f205cf61945ec9cc30fb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1cameragameoptionpresetsetting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Aggregates all camera game option preset settings, including per-mode FOV and shadow quality presets, * top-view FOV blend range, top-view shadow quality distance settings, and Ultra Dynamic Sky post-process.

| PropertyTypeDescriptionMetadataDefaultPresetMapTMapPer-camera-mode FOV and shadow quality presets. Does not apply to top-view. If no shadow quality is defined for a mode, GameUserSettings value is used.Category: B1CameraGameOptionPresetSettingTopViewMinFOVfloatMinimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.Category: B1CameraGameOptionPresetSetting ClampMin: 0TopViewMaxFOVfloatMaximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.Category: B1CameraGameOptionPresetSetting ClampMin: 0TopViewShadowQualitySettingArrayTArrayDistance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4].Category: B1CameraGameOptionPresetSettingTopViewDynamicSkyPostProcessSettingFB1TopViewCameraDynamicSkyPostProcessSettingUltra Dynamic Sky post-process settings applied in top-view camera mode.Category: B1CameraGameOptionPresetSetting |
| --- |
| DefaultPresetMapTMapPer-camera-mode FOV and shadow quality presets. Does not apply to top-view. If no shadow quality is defined for a mode, GameUserSettings value is used.Category: B1CameraGameOptionPresetSettingTopViewMinFOVfloatMinimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.Category: B1CameraGameOptionPresetSetting ClampMin: 0TopViewMaxFOVfloatMaximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.Category: B1CameraGameOptionPresetSetting ClampMin: 0TopViewShadowQualitySettingArrayTArrayDistance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4].Category: B1CameraGameOptionPresetSettingTopViewDynamicSkyPostProcessSettingFB1TopViewCameraDynamicSkyPostProcessSettingUltra Dynamic Sky post-process settings applied in top-view camera mode.Category: B1CameraGameOptionPresetSetting |
| TopViewMinFOVfloatMinimum FOV applied in top-view camera mode; blended with the max FOV based on camera distance.Category: B1CameraGameOptionPresetSetting ClampMin: 0TopViewMaxFOVfloatMaximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.Category: B1CameraGameOptionPresetSetting ClampMin: 0TopViewShadowQualitySettingArrayTArrayDistance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4].Category: B1CameraGameOptionPresetSettingTopViewDynamicSkyPostProcessSettingFB1TopViewCameraDynamicSkyPostProcessSettingUltra Dynamic Sky post-process settings applied in top-view camera mode.Category: B1CameraGameOptionPresetSetting |
| TopViewMaxFOVfloatMaximum FOV applied in top-view camera mode; blended with the min FOV based on camera distance.Category: B1CameraGameOptionPresetSetting ClampMin: 0TopViewShadowQualitySettingArrayTArrayDistance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4].Category: B1CameraGameOptionPresetSettingTopViewDynamicSkyPostProcessSettingFB1TopViewCameraDynamicSkyPostProcessSettingUltra Dynamic Sky post-process settings applied in top-view camera mode.Category: B1CameraGameOptionPresetSetting |
| TopViewShadowQualitySettingArrayTArrayDistance-based shadow quality settings for top-view. If no range matches, GameUserSettings value is used. The final quality is clamped to [0, 4].Category: B1CameraGameOptionPresetSettingTopViewDynamicSkyPostProcessSettingFB1TopViewCameraDynamicSkyPostProcessSettingUltra Dynamic Sky post-process settings applied in top-view camera mode.Category: B1CameraGameOptionPresetSetting |
| TopViewDynamicSkyPostProcessSettingFB1TopViewCameraDynamicSkyPostProcessSettingUltra Dynamic Sky post-process settings applied in top-view camera mode.Category: B1CameraGameOptionPresetSetting |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCamera[FB1CameraCollisionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cameracollisiondata)[FB1CameraGameOptionPreset](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cameragameoptionpreset)[FB1CameraModeContainer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cameramodecontainer)[FB1CameraModeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cameramodedata)[FB1CameraModeVolume](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cameramodevolume)

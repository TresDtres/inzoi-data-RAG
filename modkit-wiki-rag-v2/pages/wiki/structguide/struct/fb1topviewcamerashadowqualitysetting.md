---
document_id: "69cf5e555aaea1606adc4f61e4c80694fd2dbae4473913b819537320c986cf96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1topviewcamerashadowqualitysetting"
title: "B1TopViewCameraShadowQualitySetting"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:09+00:00"
content_sha256: "906d6c09bb325235f45280764dd959686220ad4aba7a792103277c0f249be3d7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1topviewcamerashadowqualitysetting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines a distance-range-based shadow quality adjustment for top-view cameras, * applying an additive offset to the user-configured shadow quality.

| PropertyTypeDescriptionMetadataMinValuefloatMinimum camera distance (inclusive) for this shadow quality range.Category: B1TopViewCameraShadowQualitySetting ClampMin: 0MaxValuefloatMaximum camera distance (exclusive) for this shadow quality range.Category: B1TopViewCameraShadowQualitySetting ClampMin: 0AdditionalShadowQualityint32Additive shadow quality offset for this distance range (-4 to 4). The final quality is clamped to [0, 4].Category: B1TopViewCameraShadowQualitySetting ClampMax: 4 ClampMin: -4 |
| --- |
| MinValuefloatMinimum camera distance (inclusive) for this shadow quality range.Category: B1TopViewCameraShadowQualitySetting ClampMin: 0MaxValuefloatMaximum camera distance (exclusive) for this shadow quality range.Category: B1TopViewCameraShadowQualitySetting ClampMin: 0AdditionalShadowQualityint32Additive shadow quality offset for this distance range (-4 to 4). The final quality is clamped to [0, 4].Category: B1TopViewCameraShadowQualitySetting ClampMax: 4 ClampMin: -4 |
| MaxValuefloatMaximum camera distance (exclusive) for this shadow quality range.Category: B1TopViewCameraShadowQualitySetting ClampMin: 0AdditionalShadowQualityint32Additive shadow quality offset for this distance range (-4 to 4). The final quality is clamped to [0, 4].Category: B1TopViewCameraShadowQualitySetting ClampMax: 4 ClampMin: -4 |
| AdditionalShadowQualityint32Additive shadow quality offset for this distance range (-4 to 4). The final quality is clamped to [0, 4].Category: B1TopViewCameraShadowQualitySetting ClampMax: 4 ClampMin: -4 |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTop[FB1TopViewCameraDynamicSkyPostProcessSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1topviewcameradynamicskypostprocesssetting)

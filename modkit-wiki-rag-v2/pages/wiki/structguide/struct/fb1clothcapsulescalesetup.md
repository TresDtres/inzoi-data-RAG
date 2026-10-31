---
document_id: "d46591872b20a1024be2c32f1ea6267a287c9c0b3f93380c3222d4493eba6c8b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1clothcapsulescalesetup"
title: "B1ClothCapsuleScaleSetup"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:07+00:00"
content_sha256: "d4ae2baaa7b96426feb1d79817cb8bc84fd505fcc21d60c212d0801d09a3f8e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1clothcapsulescalesetup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines how a cloth physics-asset capsule is scaled from a body-shape parameter, * interpolating between MinScale and MaxScale based on the bone control value.

| PropertyTypeDescriptionMetadataShapeParameterIndexint32Index into the BodyShapeParameters array that drives this capsule scale.Category: Cloth Physics Asset CapsuleMinScalefloatLower bound: when boneControl < 0, scale is interpolated between MinScale and 1.f.Category: Cloth Physics Asset CapsuleMaxScalefloatUpper bound: when boneControl > 0, scale is interpolated between 1.f and MaxScale.Category: Cloth Physics Asset Capsule |
| --- |
| ShapeParameterIndexint32Index into the BodyShapeParameters array that drives this capsule scale.Category: Cloth Physics Asset CapsuleMinScalefloatLower bound: when boneControl < 0, scale is interpolated between MinScale and 1.f.Category: Cloth Physics Asset CapsuleMaxScalefloatUpper bound: when boneControl > 0, scale is interpolated between 1.f and MaxScale.Category: Cloth Physics Asset Capsule |
| MinScalefloatLower bound: when boneControl < 0, scale is interpolated between MinScale and 1.f.Category: Cloth Physics Asset CapsuleMaxScalefloatUpper bound: when boneControl > 0, scale is interpolated between 1.f and MaxScale.Category: Cloth Physics Asset Capsule |
| MaxScalefloatUpper bound: when boneControl > 0, scale is interpolated between 1.f and MaxScale.Category: Cloth Physics Asset Capsule |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)

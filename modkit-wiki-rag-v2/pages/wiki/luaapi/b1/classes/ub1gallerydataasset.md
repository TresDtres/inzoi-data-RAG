---
document_id: "c07f24ff25ee82eb56bc501278a87637219a1c2cf52ba8e2aceb40ca2f8b3bca"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1gallerydataasset"
title: "UB1GalleryDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:35+00:00"
content_sha256: "6f15068ae27963ae17d06635e731930410f298b371dd7a53d6870c92df85cd2d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1gallerydataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset holding all gallery system configuration values, including thumbnail studio level, capture filters, hair overrides, scene capture material, and canvas upload data mappings.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (7)

| NameTypeDescription`CaptureFilterMap``table<string, FB1ThumbnailFilter>`Map of thumbnail capture filter settings keyed by capture name.`CaptureHairOverrides``table<string, FB1ThumbnailHairOverrides>`Map of hair override settings for thumbnail capture keyed by capture name.`CharacterThumbnailStudioLevel``FSoftObjectPath`Soft path to the level used as the studio for character thumbnail capture.`DefaultCanvasPickThumbnail``UTexture2D`Default thumbnail texture used for canvas pick when no specific thumbnail is available.`GenderTypeToCanvasGenders``table<EB1GenderType, integer>`Map from gender type to the canvas gender byte value for upload data.`GrowthStepToCanvasAges``table<EB1GrowthStep, FB1CanvasAges>`Map from growth step to the list of canvas ages for upload data.`SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |
| --- |
| `CaptureFilterMap``table<string, FB1ThumbnailFilter>`Map of thumbnail capture filter settings keyed by capture name.`CaptureHairOverrides``table<string, FB1ThumbnailHairOverrides>`Map of hair override settings for thumbnail capture keyed by capture name.`CharacterThumbnailStudioLevel``FSoftObjectPath`Soft path to the level used as the studio for character thumbnail capture.`DefaultCanvasPickThumbnail``UTexture2D`Default thumbnail texture used for canvas pick when no specific thumbnail is available.`GenderTypeToCanvasGenders``table<EB1GenderType, integer>`Map from gender type to the canvas gender byte value for upload data.`GrowthStepToCanvasAges``table<EB1GrowthStep, FB1CanvasAges>`Map from growth step to the list of canvas ages for upload data.`SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |
| `CaptureHairOverrides``table<string, FB1ThumbnailHairOverrides>`Map of hair override settings for thumbnail capture keyed by capture name.`CharacterThumbnailStudioLevel``FSoftObjectPath`Soft path to the level used as the studio for character thumbnail capture.`DefaultCanvasPickThumbnail``UTexture2D`Default thumbnail texture used for canvas pick when no specific thumbnail is available.`GenderTypeToCanvasGenders``table<EB1GenderType, integer>`Map from gender type to the canvas gender byte value for upload data.`GrowthStepToCanvasAges``table<EB1GrowthStep, FB1CanvasAges>`Map from growth step to the list of canvas ages for upload data.`SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |
| `CharacterThumbnailStudioLevel``FSoftObjectPath`Soft path to the level used as the studio for character thumbnail capture.`DefaultCanvasPickThumbnail``UTexture2D`Default thumbnail texture used for canvas pick when no specific thumbnail is available.`GenderTypeToCanvasGenders``table<EB1GenderType, integer>`Map from gender type to the canvas gender byte value for upload data.`GrowthStepToCanvasAges``table<EB1GrowthStep, FB1CanvasAges>`Map from growth step to the list of canvas ages for upload data.`SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |
| `DefaultCanvasPickThumbnail``UTexture2D`Default thumbnail texture used for canvas pick when no specific thumbnail is available.`GenderTypeToCanvasGenders``table<EB1GenderType, integer>`Map from gender type to the canvas gender byte value for upload data.`GrowthStepToCanvasAges``table<EB1GrowthStep, FB1CanvasAges>`Map from growth step to the list of canvas ages for upload data.`SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |
| `GenderTypeToCanvasGenders``table<EB1GenderType, integer>`Map from gender type to the canvas gender byte value for upload data.`GrowthStepToCanvasAges``table<EB1GrowthStep, FB1CanvasAges>`Map from growth step to the list of canvas ages for upload data.`SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |
| `GrowthStepToCanvasAges``table<EB1GrowthStep, FB1CanvasAges>`Map from growth step to the list of canvas ages for upload data.`SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |
| `SceneCaptureMaterial``FSoftObjectPath`Soft path to the material used for scene capture rendering. |

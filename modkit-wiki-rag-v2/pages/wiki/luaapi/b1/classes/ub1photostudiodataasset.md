---
document_id: "46930b23418519316e105eda50b7c79ee4e7b5bb0f6b09f06b59140fe12f3fe9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1photostudiodataasset"
title: "UB1PhotoStudioDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:02+00:00"
content_sha256: "a0e13ff00cec81fbbcbec8c29350e634b9d3b521aa4df216dc7feca5f4e73a2d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1photostudiodataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset defining the configuration for photo studio features, including site IDs, post-process volumes, and guide texts.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (6)

| NameTypeDescription`BuildModeDefaultGuideText``string`Guide text displayed in the default build mode state within the studio.`BuildModeStudioGuideText``string`Guide text displayed when the studio build mode is active.`CityBySiteId``table<string, string>`A map from studio site ID to its associated city ID.`DefaultMannequinBodyPose``table<EB1GrowthStep, UAnimSequence>`The default mannequin body pose animation mapped per growth step.`StudioByPostProcessName``table<string, string>`A map from studio ID to its associated post-process volume name.`StudioItemTags``string[]`A list of item category tags used to identify studio items. |
| --- |
| `BuildModeDefaultGuideText``string`Guide text displayed in the default build mode state within the studio.`BuildModeStudioGuideText``string`Guide text displayed when the studio build mode is active.`CityBySiteId``table<string, string>`A map from studio site ID to its associated city ID.`DefaultMannequinBodyPose``table<EB1GrowthStep, UAnimSequence>`The default mannequin body pose animation mapped per growth step.`StudioByPostProcessName``table<string, string>`A map from studio ID to its associated post-process volume name.`StudioItemTags``string[]`A list of item category tags used to identify studio items. |
| `BuildModeStudioGuideText``string`Guide text displayed when the studio build mode is active.`CityBySiteId``table<string, string>`A map from studio site ID to its associated city ID.`DefaultMannequinBodyPose``table<EB1GrowthStep, UAnimSequence>`The default mannequin body pose animation mapped per growth step.`StudioByPostProcessName``table<string, string>`A map from studio ID to its associated post-process volume name.`StudioItemTags``string[]`A list of item category tags used to identify studio items. |
| `CityBySiteId``table<string, string>`A map from studio site ID to its associated city ID.`DefaultMannequinBodyPose``table<EB1GrowthStep, UAnimSequence>`The default mannequin body pose animation mapped per growth step.`StudioByPostProcessName``table<string, string>`A map from studio ID to its associated post-process volume name.`StudioItemTags``string[]`A list of item category tags used to identify studio items. |
| `DefaultMannequinBodyPose``table<EB1GrowthStep, UAnimSequence>`The default mannequin body pose animation mapped per growth step.`StudioByPostProcessName``table<string, string>`A map from studio ID to its associated post-process volume name.`StudioItemTags``string[]`A list of item category tags used to identify studio items. |
| `StudioByPostProcessName``table<string, string>`A map from studio ID to its associated post-process volume name.`StudioItemTags``string[]`A list of item category tags used to identify studio items. |
| `StudioItemTags``string[]`A list of item category tags used to identify studio items. |

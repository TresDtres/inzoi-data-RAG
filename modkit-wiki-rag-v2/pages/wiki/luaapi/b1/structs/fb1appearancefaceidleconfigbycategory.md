---
document_id: "00cfa775460b3d72efb0e28c7cfff75147bfdd7aa98df9bba594d5239a4e31c7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancefaceidleconfigbycategory"
title: "FB1AppearanceFaceIdleConfigByCategory"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "bc86b6f324713c64c8c2f2c3baca950ac254beeb66bf946d6492a587eb34b738"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1appearancefaceidleconfigbycategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines face idle motion configurations for a specific character customization category, mapped per growth step.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`Category`[`EB1CharacterCustomizationCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1charactercustomizationcategory)The character customization category this idle configuration applies to.`FaceIdleMotions``table<EB1GrowthStep, FB1StudioPoseItem>`A map of face idle motion items keyed by growth step. |
| --- |
| `Category`[`EB1CharacterCustomizationCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1charactercustomizationcategory)The character customization category this idle configuration applies to.`FaceIdleMotions``table<EB1GrowthStep, FB1StudioPoseItem>`A map of face idle motion items keyed by growth step. |
| `FaceIdleMotions``table<EB1GrowthStep, FB1StudioPoseItem>`A map of face idle motion items keyed by growth step. |

---
document_id: "16dc5ec053f5e1a15bda44be63c8d9d170b05129c53635015ff43d47f1106305"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cityeditlowqualitychangelist"
title: "FB1CityEditLowQualityChangeList"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:25+00:00"
content_sha256: "3f5905ef7015c396e801c9a0ac656d212fe3c6d99d3925b213bb6606d87b7df8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cityeditlowqualitychangelist"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Low quality variant of city edit change data for a specific foliage quality level.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`BaseMesh``UStaticMesh`Base static mesh used in place of the high quality original, when no OverrideChangeList entry matches.`ChangeMeshInfoBySeason``FB1ChangeMeshInfo[]`Season-specific mesh/material overrides for BaseMesh (used only when no OverrideChangeList entry matches).`OverrideChangeList``FB1CityEditChangeList[]`Per-origin-mesh replacement list; applied with priority over BaseMesh when an entry's OriginMesh matches.`TargetFoliageQualities``integer[]`FoliageQuality indices this entry applies to. Empty means applies only to this entry's own array index |
| --- |
| `BaseMesh``UStaticMesh`Base static mesh used in place of the high quality original, when no OverrideChangeList entry matches.`ChangeMeshInfoBySeason``FB1ChangeMeshInfo[]`Season-specific mesh/material overrides for BaseMesh (used only when no OverrideChangeList entry matches).`OverrideChangeList``FB1CityEditChangeList[]`Per-origin-mesh replacement list; applied with priority over BaseMesh when an entry's OriginMesh matches.`TargetFoliageQualities``integer[]`FoliageQuality indices this entry applies to. Empty means applies only to this entry's own array index |
| `ChangeMeshInfoBySeason``FB1ChangeMeshInfo[]`Season-specific mesh/material overrides for BaseMesh (used only when no OverrideChangeList entry matches).`OverrideChangeList``FB1CityEditChangeList[]`Per-origin-mesh replacement list; applied with priority over BaseMesh when an entry's OriginMesh matches.`TargetFoliageQualities``integer[]`FoliageQuality indices this entry applies to. Empty means applies only to this entry's own array index |
| `OverrideChangeList``FB1CityEditChangeList[]`Per-origin-mesh replacement list; applied with priority over BaseMesh when an entry's OriginMesh matches.`TargetFoliageQualities``integer[]`FoliageQuality indices this entry applies to. Empty means applies only to this entry's own array index |
| `TargetFoliageQualities``integer[]`FoliageQuality indices this entry applies to. Empty means applies only to this entry's own array index |

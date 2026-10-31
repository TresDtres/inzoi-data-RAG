---
document_id: "0ab9588c63bd99d9fb6a046f7553b21e02b4583ce15676ab86848fa23448e68f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cityeditstabilityprobpositiontypespawninfo"
title: "FB1CityEditStabilityProbPositionTypeSpawnInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:26+00:00"
content_sha256: "dd834eb114ce883ada781a9c0b3384e44da75ce2faff8fc18d404e616a61dd22"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cityeditstabilityprobpositiontypespawninfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Associates stability probability type spawn asset infos and world transforms for a given position type, defining stability actor spawning at each world location.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`ProbAssetList``table<string, FB1CityEditStabilityProbTypeSpawnAssetInfo>`object type Map from object type name to its stability probability spawn asset info.`TransformList``FTransform[]`List of world transforms at which stability actors may spawn. |
| --- |
| `ProbAssetList``table<string, FB1CityEditStabilityProbTypeSpawnAssetInfo>`object type Map from object type name to its stability probability spawn asset info.`TransformList``FTransform[]`List of world transforms at which stability actors may spawn. |
| `TransformList``FTransform[]`List of world transforms at which stability actors may spawn. |

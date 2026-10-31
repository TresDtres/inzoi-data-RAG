---
document_id: "45c0ac4d9663aa6dea4e4241f23fbd5967231db80afa16d2ca7b23f15feb2554"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1trafficlightasset"
title: "FB1TrafficLightAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:41+00:00"
content_sha256: "31856ccd90ab9a3193a33fc78ea1096a087d692ae925c030b600b8bf0011e626"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1trafficlightasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Describes a single traffic light visual asset including its mesh, transform offset, and cull distance.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`EndCullDistance``integer`Maximum draw distance for this traffic light mesh in world units.`Offset``FTransform`Transform offset applied relative to the traffic light's placement point.`StaticMesh``any`Traffic light static meshs should remain validity until the world it is located in changes. Static mesh used to render this traffic light; must remain valid for the lifetime of its world. |
| --- |
| `EndCullDistance``integer`Maximum draw distance for this traffic light mesh in world units.`Offset``FTransform`Transform offset applied relative to the traffic light's placement point.`StaticMesh``any`Traffic light static meshs should remain validity until the world it is located in changes. Static mesh used to render this traffic light; must remain valid for the lifetime of its world. |
| `Offset``FTransform`Transform offset applied relative to the traffic light's placement point.`StaticMesh``any`Traffic light static meshs should remain validity until the world it is located in changes. Static mesh used to render this traffic light; must remain valid for the lifetime of its world. |
| `StaticMesh``any`Traffic light static meshs should remain validity until the world it is located in changes. Static mesh used to render this traffic light; must remain valid for the lifetime of its world. |

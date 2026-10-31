---
document_id: "f9ed28e5bbbc11e0c07729431b2c6a5ef0c4585c380a19e842da5045458bb3b8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpoint"
title: "FB1CityGraphPoint"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:28+00:00"
content_sha256: "9e491be8774367291eafa2034ba0211a1176d19afa7983559b45524715411c97"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents the result of a city graph lane point lookup, containing the validity flag, snapped world position, and indices into the road, lane, and point arrays.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category of the lane at the located point.`LaneIndex``integer`Index of the lane containing the located lane point.`PointIndex``integer`Index of the specific point within the lane.`Position``FVector`World-space position of the located lane point.`RemainingDistance``number`Remaining distance from this point to the end of the lane.`RoadIndex``integer`Index of the road containing the located lane point.`bValid``boolean`Whether this point result is valid and usable. |
| --- |
| `Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category of the lane at the located point.`LaneIndex``integer`Index of the lane containing the located lane point.`PointIndex``integer`Index of the specific point within the lane.`Position``FVector`World-space position of the located lane point.`RemainingDistance``number`Remaining distance from this point to the end of the lane.`RoadIndex``integer`Index of the road containing the located lane point.`bValid``boolean`Whether this point result is valid and usable. |
| `LaneIndex``integer`Index of the lane containing the located lane point.`PointIndex``integer`Index of the specific point within the lane.`Position``FVector`World-space position of the located lane point.`RemainingDistance``number`Remaining distance from this point to the end of the lane.`RoadIndex``integer`Index of the road containing the located lane point.`bValid``boolean`Whether this point result is valid and usable. |
| `PointIndex``integer`Index of the specific point within the lane.`Position``FVector`World-space position of the located lane point.`RemainingDistance``number`Remaining distance from this point to the end of the lane.`RoadIndex``integer`Index of the road containing the located lane point.`bValid``boolean`Whether this point result is valid and usable. |
| `Position``FVector`World-space position of the located lane point.`RemainingDistance``number`Remaining distance from this point to the end of the lane.`RoadIndex``integer`Index of the road containing the located lane point.`bValid``boolean`Whether this point result is valid and usable. |
| `RemainingDistance``number`Remaining distance from this point to the end of the lane.`RoadIndex``integer`Index of the road containing the located lane point.`bValid``boolean`Whether this point result is valid and usable. |
| `RoadIndex``integer`Index of the road containing the located lane point.`bValid``boolean`Whether this point result is valid and usable. |
| `bValid``boolean`Whether this point result is valid and usable. |

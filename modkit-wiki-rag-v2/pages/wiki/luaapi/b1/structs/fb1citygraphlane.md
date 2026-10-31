---
document_id: "88ac05286f3899136737c9ae615db46a9af9ed7885cf8d560d837bb22b3f69fb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphlane"
title: "FB1CityGraphLane"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:28+00:00"
content_sha256: "d02618df5ecdd9b5b082b376b632ae564ca024553e2e570f6d0713bf5dd0cc33"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphlane"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a single lane within a road in the city graph, storing its indices, lane point range, flags, width, and list of connected lane links.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (9)

| NameTypeDescription`BeginPointIndex``integer`Index of the first FB1CityGraphLanePoint for this lane.`EndPointIndex``integer`Index of the last FB1CityGraphLanePoint for this lane.`Flags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Behavioral flags applied to this lane (e.g., Sparse, Warp).`Index``integer`Global index of this lane in the city graph lane array.`Links``FB1CityGraphLaneLink[]`List of lane links connecting this lane to adjacent or successive lanes.`LocalIndex``integer`Local index of this lane within its parent road.`RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| --- |
| `BeginPointIndex``integer`Index of the first FB1CityGraphLanePoint for this lane.`EndPointIndex``integer`Index of the last FB1CityGraphLanePoint for this lane.`Flags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Behavioral flags applied to this lane (e.g., Sparse, Warp).`Index``integer`Global index of this lane in the city graph lane array.`Links``FB1CityGraphLaneLink[]`List of lane links connecting this lane to adjacent or successive lanes.`LocalIndex``integer`Local index of this lane within its parent road.`RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `EndPointIndex``integer`Index of the last FB1CityGraphLanePoint for this lane.`Flags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Behavioral flags applied to this lane (e.g., Sparse, Warp).`Index``integer`Global index of this lane in the city graph lane array.`Links``FB1CityGraphLaneLink[]`List of lane links connecting this lane to adjacent or successive lanes.`LocalIndex``integer`Local index of this lane within its parent road.`RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `Flags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Behavioral flags applied to this lane (e.g., Sparse, Warp).`Index``integer`Global index of this lane in the city graph lane array.`Links``FB1CityGraphLaneLink[]`List of lane links connecting this lane to adjacent or successive lanes.`LocalIndex``integer`Local index of this lane within its parent road.`RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `Index``integer`Global index of this lane in the city graph lane array.`Links``FB1CityGraphLaneLink[]`List of lane links connecting this lane to adjacent or successive lanes.`LocalIndex``integer`Local index of this lane within its parent road.`RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `Links``FB1CityGraphLaneLink[]`List of lane links connecting this lane to adjacent or successive lanes.`LocalIndex``integer`Local index of this lane within its parent road.`RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `LocalIndex``integer`Local index of this lane within its parent road.`RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `RoadIndex``integer`Index of the road this lane belongs to.`UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `UID``string`Unique named identifier for this lane.`Width``number`Width of this lane in world units. |
| `Width``number`Width of this lane in world units. |

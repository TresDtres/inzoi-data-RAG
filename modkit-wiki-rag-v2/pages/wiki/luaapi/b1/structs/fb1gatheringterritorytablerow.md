---
document_id: "3b44fffbdb61dbe828829c34f823d95bbdafd897a160c8eeef9c156f03da425a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1gatheringterritorytablerow"
title: "FB1GatheringTerritoryTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:04+00:00"
content_sha256: "520f257e390d666e2e07706703cdac9a85b19664d6a28222fecc167eb831970b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1gatheringterritorytablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a gathering territory, including its type, gatherable object pool, spawn rates, fishing rewards, display name, and valid city IDs.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`DisplayNameTextId``string`Localized display name text identifier for this territory.`FishingRewardList``FB1GatherableReward[]`List of fishing reward entries available in this territory.`GatherableObjectPool``FB1GatherableObject[]`Pool of gatherable objects that can spawn in this territory.`GatheringType`[`EB1GatheringType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gatheringtype)Gathering type associated with this territory.`TotalSpawnRate``number`Total spawn rate for all gatherable objects in this territory (0–1).`ValidateCityIds``string[]`List of city IDs in which this territory is valid. |
| --- |
| `DisplayNameTextId``string`Localized display name text identifier for this territory.`FishingRewardList``FB1GatherableReward[]`List of fishing reward entries available in this territory.`GatherableObjectPool``FB1GatherableObject[]`Pool of gatherable objects that can spawn in this territory.`GatheringType`[`EB1GatheringType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gatheringtype)Gathering type associated with this territory.`TotalSpawnRate``number`Total spawn rate for all gatherable objects in this territory (0–1).`ValidateCityIds``string[]`List of city IDs in which this territory is valid. |
| `FishingRewardList``FB1GatherableReward[]`List of fishing reward entries available in this territory.`GatherableObjectPool``FB1GatherableObject[]`Pool of gatherable objects that can spawn in this territory.`GatheringType`[`EB1GatheringType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gatheringtype)Gathering type associated with this territory.`TotalSpawnRate``number`Total spawn rate for all gatherable objects in this territory (0–1).`ValidateCityIds``string[]`List of city IDs in which this territory is valid. |
| `GatherableObjectPool``FB1GatherableObject[]`Pool of gatherable objects that can spawn in this territory.`GatheringType`[`EB1GatheringType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gatheringtype)Gathering type associated with this territory.`TotalSpawnRate``number`Total spawn rate for all gatherable objects in this territory (0–1).`ValidateCityIds``string[]`List of city IDs in which this territory is valid. |
| `GatheringType`[`EB1GatheringType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gatheringtype)Gathering type associated with this territory.`TotalSpawnRate``number`Total spawn rate for all gatherable objects in this territory (0–1).`ValidateCityIds``string[]`List of city IDs in which this territory is valid. |
| `TotalSpawnRate``number`Total spawn rate for all gatherable objects in this territory (0–1).`ValidateCityIds``string[]`List of city IDs in which this territory is valid. |
| `ValidateCityIds``string[]`List of city IDs in which this territory is valid. |

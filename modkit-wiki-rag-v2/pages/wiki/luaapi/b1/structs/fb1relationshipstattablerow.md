---
document_id: "18ac4db98e28f008b7d366f3a0c2f11365ca1ba61251aaaac9c6b5bd1e4041ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipstattablerow"
title: "FB1RelationshipStatTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:15+00:00"
content_sha256: "f234fb6207f5d75e09d38ab612b5d664aa0ec600b63ffecc6c4cbeb348d5c2f2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipstattablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a relationship stat, including display text, decay configuration, and inner thought icon data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (9)

| NameTypeDescription`BackgroundAsset``UObject`The background asset for this relationship stat in the UI.`BadInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a bad (negative) value.`DecayDataList``FB1RelationshipDecayData[]`The list of value-range decay entries for this relationship stat.`DefaultDecayValuePerSec``number`The default per-second decay value when no specific range matches.`DisplayNameTextId``string`The text ID for the display name of this relationship stat.`GoodInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a good (positive) value.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| --- |
| `BackgroundAsset``UObject`The background asset for this relationship stat in the UI.`BadInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a bad (negative) value.`DecayDataList``FB1RelationshipDecayData[]`The list of value-range decay entries for this relationship stat.`DefaultDecayValuePerSec``number`The default per-second decay value when no specific range matches.`DisplayNameTextId``string`The text ID for the display name of this relationship stat.`GoodInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a good (positive) value.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `BadInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a bad (negative) value.`DecayDataList``FB1RelationshipDecayData[]`The list of value-range decay entries for this relationship stat.`DefaultDecayValuePerSec``number`The default per-second decay value when no specific range matches.`DisplayNameTextId``string`The text ID for the display name of this relationship stat.`GoodInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a good (positive) value.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `DecayDataList``FB1RelationshipDecayData[]`The list of value-range decay entries for this relationship stat.`DefaultDecayValuePerSec``number`The default per-second decay value when no specific range matches.`DisplayNameTextId``string`The text ID for the display name of this relationship stat.`GoodInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a good (positive) value.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `DefaultDecayValuePerSec``number`The default per-second decay value when no specific range matches.`DisplayNameTextId``string`The text ID for the display name of this relationship stat.`GoodInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a good (positive) value.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `DisplayNameTextId``string`The text ID for the display name of this relationship stat.`GoodInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a good (positive) value.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `GoodInnerThoughtIcon`[`FB1RelationshipInnerIconData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipinnericondata)The inner thought icon data shown when the stat has a good (positive) value.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The minimum growth step at which this relationship stat is active.`NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `NegativeAsset``UObject`The asset displayed on the negative side of the relationship stat UI.`PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |
| `PositiveAsset``UObject`The asset displayed on the positive side of the relationship stat UI. |

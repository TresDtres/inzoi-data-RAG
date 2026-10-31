---
document_id: "6afa725c6e7751fb47711254e6d21620773e5d58afec0c5ea1d6de3ac9eb6634"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditiondata"
title: "FB1MissionConditionData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:28+00:00"
content_sha256: "e7f78071d23f721aae78f499cb0d6680ad4795f1e650253b0726ee8cd837e5b0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1missionconditiondata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Definition data for a single mission condition, specifying its type, identifiers, and goal count. Used both in data tables and at runtime to evaluate mission progress.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`ConditionId1``string`Primary content identifier used by the condition type (e.g. currency ID, skill ID).`ConditionId2``string`Secondary content identifier used by certain condition types as an additional filter.`ConditionInt``integer`Integer parameter used by certain condition types for numeric comparisons.`ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of condition that must be fulfilled for the mission.`DescTextId``string`String table key referencing the localized description text for this condition.`GoalCount``integer`Number of times the condition must be met to complete this mission step. |
| --- |
| `ConditionId1``string`Primary content identifier used by the condition type (e.g. currency ID, skill ID).`ConditionId2``string`Secondary content identifier used by certain condition types as an additional filter.`ConditionInt``integer`Integer parameter used by certain condition types for numeric comparisons.`ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of condition that must be fulfilled for the mission.`DescTextId``string`String table key referencing the localized description text for this condition.`GoalCount``integer`Number of times the condition must be met to complete this mission step. |
| `ConditionId2``string`Secondary content identifier used by certain condition types as an additional filter.`ConditionInt``integer`Integer parameter used by certain condition types for numeric comparisons.`ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of condition that must be fulfilled for the mission.`DescTextId``string`String table key referencing the localized description text for this condition.`GoalCount``integer`Number of times the condition must be met to complete this mission step. |
| `ConditionInt``integer`Integer parameter used by certain condition types for numeric comparisons.`ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of condition that must be fulfilled for the mission.`DescTextId``string`String table key referencing the localized description text for this condition.`GoalCount``integer`Number of times the condition must be met to complete this mission step. |
| `ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of condition that must be fulfilled for the mission.`DescTextId``string`String table key referencing the localized description text for this condition.`GoalCount``integer`Number of times the condition must be met to complete this mission step. |
| `DescTextId``string`String table key referencing the localized description text for this condition.`GoalCount``integer`Number of times the condition must be met to complete this mission step. |
| `GoalCount``integer`Number of times the condition must be met to complete this mission step. |

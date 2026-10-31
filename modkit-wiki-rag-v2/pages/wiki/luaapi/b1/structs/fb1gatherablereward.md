---
document_id: "e6fe7d40fc442d84b01a55d06d1aaac52f687f51c644e34879f558c4430c17fd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1gatherablereward"
title: "FB1GatherableReward"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:05+00:00"
content_sha256: "31b81b97f88da4d16580a666fdfa81f17ad210ba96e533f9cf2dbcada52b8857"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1gatherablereward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single reward entry for a gatherable object, specifying the required tool level, selection priority, an optional condition, and the reward object pool to draw from.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`ConditionId``string`Optional condition that must be satisfied to grant this reward.`PriorityLevel``integer`Priority used to sort and select rewards when multiple entries match.`RewardObjectPoolId``string`Identifier for the reward object pool to draw items from.`ToolLevel``integer`Minimum tool level required to receive this reward. |
| --- |
| `ConditionId``string`Optional condition that must be satisfied to grant this reward.`PriorityLevel``integer`Priority used to sort and select rewards when multiple entries match.`RewardObjectPoolId``string`Identifier for the reward object pool to draw items from.`ToolLevel``integer`Minimum tool level required to receive this reward. |
| `PriorityLevel``integer`Priority used to sort and select rewards when multiple entries match.`RewardObjectPoolId``string`Identifier for the reward object pool to draw items from.`ToolLevel``integer`Minimum tool level required to receive this reward. |
| `RewardObjectPoolId``string`Identifier for the reward object pool to draw items from.`ToolLevel``integer`Minimum tool level required to receive this reward. |
| `ToolLevel``integer`Minimum tool level required to receive this reward. |

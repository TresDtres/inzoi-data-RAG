---
document_id: "671e580eefa355732e1020371b59800e52f2c605c5c2cfed68b03507386e42fe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1teamprojectstate"
title: "FB1TeamProjectState"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:38+00:00"
content_sha256: "025f141588f0ce1dedf0f62de22240c3fd4daafeca4485fa546d4bee3193c150"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1teamprojectstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime state of an active team project, tracking points, timeline, and per-member contributions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`CurrentPoint``integer`Current accumulated contribution points for this project.`DeadlineTicks``integer`Project deadline time in game ticks.`MemberContributions``table<FB1EntityId, integer>`Map of entity IDs to their individual contribution point totals.`ProjectId``string`DT FK Foreign key referencing the project definition in the data table.`StartTicks``integer`Project start time in game ticks.`TotalPoint``integer`Total points required for the Excellent grade, copied from the data table at project start.`WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| --- |
| `CurrentPoint``integer`Current accumulated contribution points for this project.`DeadlineTicks``integer`Project deadline time in game ticks.`MemberContributions``table<FB1EntityId, integer>`Map of entity IDs to their individual contribution point totals.`ProjectId``string`DT FK Foreign key referencing the project definition in the data table.`StartTicks``integer`Project start time in game ticks.`TotalPoint``integer`Total points required for the Excellent grade, copied from the data table at project start.`WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| `DeadlineTicks``integer`Project deadline time in game ticks.`MemberContributions``table<FB1EntityId, integer>`Map of entity IDs to their individual contribution point totals.`ProjectId``string`DT FK Foreign key referencing the project definition in the data table.`StartTicks``integer`Project start time in game ticks.`TotalPoint``integer`Total points required for the Excellent grade, copied from the data table at project start.`WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| `MemberContributions``table<FB1EntityId, integer>`Map of entity IDs to their individual contribution point totals.`ProjectId``string`DT FK Foreign key referencing the project definition in the data table.`StartTicks``integer`Project start time in game ticks.`TotalPoint``integer`Total points required for the Excellent grade, copied from the data table at project start.`WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| `ProjectId``string`DT FK Foreign key referencing the project definition in the data table.`StartTicks``integer`Project start time in game ticks.`TotalPoint``integer`Total points required for the Excellent grade, copied from the data table at project start.`WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| `StartTicks``integer`Project start time in game ticks.`TotalPoint``integer`Total points required for the Excellent grade, copied from the data table at project start.`WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| `TotalPoint``integer`Total points required for the Excellent grade, copied from the data table at project start.`WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| `WorkedMemberIds``FB1EntityId[]`Members who attended at least one day during the team-project period. Members not in this list are excluded from evaluation (no rewards, no penalties).`bIsActive``boolean`Whether the project is currently active and accepting contributions. |
| `bIsActive``boolean`Whether the project is currently active and accepting contributions. |

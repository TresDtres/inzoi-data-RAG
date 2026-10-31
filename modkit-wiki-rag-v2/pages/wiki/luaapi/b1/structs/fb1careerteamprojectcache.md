---
document_id: "21d5c4b1dfa29843feccdaa69b76b53d4b58d129d372054f33505cdef5e23e22"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerteamprojectcache"
title: "FB1CareerTeamProjectCache"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:18+00:00"
content_sha256: "16ef3df0731a8e0f89d56b952a84979f1e573aaf9724d2eb945385067a11a4a8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1careerteamprojectcache"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Client cache of TeamProject progress within a Career. Updated into the FB1CareerKey.TeamProject field when an S_UpdateTeamProject packet is received.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CurrentPoint``integer`Current accumulated progress points.`DeadlineTicks``integer`Deadline tick for the active team project.`ProgressPercent``number`Progress ratio as a percentage (0 to 100+).`ProjectId``string`Data table ID of the active team project.`TotalPoint``integer`Total points required to complete the project.`bIsActive``boolean`Whether a team project is currently active. |
| --- |
| `CurrentPoint``integer`Current accumulated progress points.`DeadlineTicks``integer`Deadline tick for the active team project.`ProgressPercent``number`Progress ratio as a percentage (0 to 100+).`ProjectId``string`Data table ID of the active team project.`TotalPoint``integer`Total points required to complete the project.`bIsActive``boolean`Whether a team project is currently active. |
| `DeadlineTicks``integer`Deadline tick for the active team project.`ProgressPercent``number`Progress ratio as a percentage (0 to 100+).`ProjectId``string`Data table ID of the active team project.`TotalPoint``integer`Total points required to complete the project.`bIsActive``boolean`Whether a team project is currently active. |
| `ProgressPercent``number`Progress ratio as a percentage (0 to 100+).`ProjectId``string`Data table ID of the active team project.`TotalPoint``integer`Total points required to complete the project.`bIsActive``boolean`Whether a team project is currently active. |
| `ProjectId``string`Data table ID of the active team project.`TotalPoint``integer`Total points required to complete the project.`bIsActive``boolean`Whether a team project is currently active. |
| `TotalPoint``integer`Total points required to complete the project.`bIsActive``boolean`Whether a team project is currently active. |
| `bIsActive``boolean`Whether a team project is currently active. |

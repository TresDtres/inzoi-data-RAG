---
document_id: "41974936c9f2456c2b91df6a411152204293fac145379e20ce9f58c18d8f39ed"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2missioncomponent"
title: "FB2MissionComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:14+00:00"
content_sha256: "73ca32bffebb58262fd8f291e4cfc3e6447db25f6790ab6aa7f78c0f761c2641"
chunk: 35
chunk_count: 65
page_type: "article"
route: "wiki/luaapi/b2/components/fb2missioncomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

``-`Callback invoked on Skill Level Up.`OnTakeASubway``-``-`Callback invoked on Take ASubway.`OnTeamProjectPointAdded`InPoints: `integer``-`Called when a team-project contribution point is added (TeamProjectContribution mission condition).`OnUpdateRelationship`InRelationshipId: `string``-`Callback invoked on Update Relationship.`ReactivateMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`-``RemoveMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`boolean`Removes Mission.`RemoveMissions`InMissionIds: `FB1MissionId[]``-`Removes Missions.`RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `OnTakeASubway``-``-`Callback invoked on Take ASubway.`OnTeamProjectPointAdded`InPoints: `integer``-`Called when a team-project contribution point is added (TeamProjectContribution mission condition).`OnUpdateRelationship`InRelationshipId: `string``-`Callback invoked on Update Relationship.`ReactivateMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`-``RemoveMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`boolean`Removes Mission.`RemoveMissions`InMissionIds: `FB1MissionId[]``-`Removes Missions.`RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `OnTeamProjectPointAdded`InPoints: `integer``-`Called when a team-project contribution point is added (TeamProjectContribution mission condition).`OnUpdateRelationship`InRelationshipId: `string``-`Callback invoked on Update Relationship.`ReactivateMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`-``RemoveMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`boolean`Removes Mission.`RemoveMissions`InMissionIds: `FB1MissionId[]``-`Removes Missions.`RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `OnUpdateRelationship`InRelationshipId: `string``-`Callback invoked on Update Relationship.`ReactivateMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`-``RemoveMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`boolean`Removes Mission.`RemoveMissions`InMissionIds: `FB1MissionId[]``-`Removes Missions.`RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `ReactivateMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`-``RemoveMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`boolean`Removes Mission.`RemoveMissions`InMissionIds: `FB1MissionId[]``-`Removes Missions.`RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `RemoveMission`InMissionId: [`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)`boolean`Removes Mission.`RemoveMissions`InMissionIds: `FB1MissionId[]``-`Removes Missions.`RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `RemoveMissions`InMissionIds: `FB1MissionId[]``-`Removes Missions.`RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `RemoveWorldMission`InMissionDtid: `string``boolean`Removes World Mission.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |

# Override points (66)

Implement these in Lua as `FB2MissionComponent.Override_Name = function(...) end`.

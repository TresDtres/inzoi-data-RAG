---
document_id: "aad80e64a18d12fc8954907c468adc1a4341c48b795ac22e40114434159b888e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2questcomponent"
title: "FB2QuestComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:14+00:00"
content_sha256: "f7e40f8e428c9307878a2a97d87cfd1b03d5bf43cab4556f8a6e8b6878e7cba0"
chunk: 4
chunk_count: 6
page_type: "article"
route: "wiki/luaapi/b2/components/fb2questcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

equests Remove Specific Quests.`RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `OnEnterSite``-``-`Callback invoked on Enter Site.`OnFinishMission`InCurrentMissionType: [`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype), InMissionId: `string`, bIsSuccess: `boolean``-`Callback invoked on Finish Mission.`OnMinuteChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Minute Changed.`RemoveQuest`InQuestId: `string`, bRemoveElementToFail: `boolean``-`bRemoveElementToFail decides, when removing a mission, whether to just delete it or mark it failed.`RequestRemoveQuestsByCategory`InQuestCategoryId: `string``-`Bulk-removes in-progress (ExecutingQuestMap) quests whose QuestCategoryId matches. Used for category-level cleanup such as school dropout/graduation/expulsion/transfer.`RequestRemoveSpecificQuests`QuestIdPrefix: `string``-`Requests Remove Specific Quests.`RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `OnFinishMission`InCurrentMissionType: [`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype), InMissionId: `string`, bIsSuccess: `boolean``-`Callback invoked on Finish Mission.`OnMinuteChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Minute Changed.`RemoveQuest`InQuestId: `string`, bRemoveElementToFail: `boolean``-`bRemoveElementToFail decides, when removing a mission, whether to just delete it or mark it failed.`RequestRemoveQuestsByCategory`InQuestCategoryId: `string``-`Bulk-removes in-progress (ExecutingQuestMap) quests whose QuestCategoryId matches. Used for category-level cleanup such as school dropout/graduation/expulsion/transfer.`RequestRemoveSpecificQuests`QuestIdPrefix: `string``-`Requests Remove Specific Quests.`RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `OnMinuteChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Minute Changed.`RemoveQuest`InQuestId: `string`, bRemoveElementToFail: `boolean``-`bRemoveElementToFail decides, when removing a mission, whether to just delete it or mark it failed.`RequestRemoveQuestsByCategory`InQuestCategoryId: `string``-`Bulk-removes in-progress (ExecutingQuestMap) quests whose QuestCategoryId matches. Used for category-level cleanup such as school dropout/graduation/expulsion/transfer.`RequestRemoveSpecificQuests`QuestIdPrefix: `string``-`Requests Remove Specific Quests.`RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `RemoveQuest`InQuestId: `string`, bRemoveElementToFail: `boolean``-`bRemoveElementToFail decides, when removing a mission, whether to just delete it or mark it failed.`RequestRemoveQuestsByCategory`InQuestCategoryId: `string``-`Bulk-removes in-progress (ExecutingQuestMap) quests whose QuestCategoryId matches. Used for category-level cleanup such as school dropout/graduation/expulsion/transfer.`RequestRemoveSpecificQuests`QuestIdPrefix: `string``-`Requests Remove Specific Quests.`RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `RequestRemoveQuestsByCategory`InQuestCategoryId: `string``-`Bulk-removes in-progress (ExecutingQuestMap) quests whose QuestCategoryId matches. Used for category-level cleanup such as school dropout/graduation/expulsion/transfer.`RequestRemoveSpecificQuests`QuestIdPrefix: `string``-`Requests Remove Specific Quests.`RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `RequestRemoveSpecificQuests`QuestIdPrefix: `string``-`Requests Remove Specific Quests.`RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `RequestSubmitQuest`InQuestId: `string``boolean`Requests Submit Quest.`TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |
| `TriggerImmediateQuestRefresh``-``-`Immediately refreshes the quest UI on returning from a city move (same as the show path in OnMinuteChanged). |

# Override points (13)

Implement these in Lua as `FB2QuestComponent.Override_Name = function(...) end`.

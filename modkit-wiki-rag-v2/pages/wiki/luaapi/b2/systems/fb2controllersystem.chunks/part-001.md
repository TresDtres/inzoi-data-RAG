---
document_id: "232b17bdf10eff0d1491e3f7b673494c8030d91c23a74b56766410de04be8b43"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2controllersystem"
title: "FB2ControllerSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:57+00:00"
content_sha256: "93b8bf9a9027356ae4f5daaaf4ae688500d7cb43cf21dd2de45155f601a5b0ba"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2controllersystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Controller (possession / input control) system.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2ControllerSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2ControllerSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2ControllerSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2ControllerSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2ControllerSystem')` |
| Require`require('Systems.FB2ControllerSystem')` |

# Properties (12)

| NameTypeDescription`ActivityFeedData`[`FB2PlayerActivityFeedData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2playeractivityfeeddata)`BuildModeSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`CachedPossessedCharacter``any`UPROPERTY(Transient)`CheatSelectInteractionSequenceId``string``LastInputTime``number``PossessEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| --- |
| `ActivityFeedData`[`FB2PlayerActivityFeedData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2playeractivityfeeddata)`BuildModeSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`CachedPossessedCharacter``any`UPROPERTY(Transient)`CheatSelectInteractionSequenceId``string``LastInputTime``number``PossessEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `BuildModeSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`CachedPossessedCharacter``any`UPROPERTY(Transient)`CheatSelectInteractionSequenceId``string``LastInputTime``number``PossessEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `CachedPossessedCharacter``any`UPROPERTY(Transient)`CheatSelectInteractionSequenceId``string``LastInputTime``number``PossessEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `CheatSelectInteractionSequenceId``string``LastInputTime``number``PossessEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `LastInputTime``number``PossessEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `PossessEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `PossessHouseholdId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Caches the Family EntityId since the StatComponent looks it up often.`RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `RemainTickCountByActiveEvent``integer``UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `UpdateShowActionPlayerInfoReaminTime``number``bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `bIsShowActionPlayerInfo``boolean``bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `bIsShowingInteractionBagRatio``boolean``bIsValidCheatSelectInteractionSequenceId``boolean` |
| `bIsValidCheatSelectInteractionSequenceId``boolean` |

# Functions (25)

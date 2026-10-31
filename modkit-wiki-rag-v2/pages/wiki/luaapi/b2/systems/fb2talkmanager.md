---
document_id: "2af4894b400d1bbaec4775edf220bc2f50aa44ab2b73f3012004a669f323c1d8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2talkmanager"
title: "FB2TalkManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "e31be867666051169ba0043d9f64b3cb97a5720f60db3dd7d9b5a88f546e8a90"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2talkmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages talk (conversation).

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TalkManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TalkManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TalkManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TalkManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TalkManager')` |
| Require`require('Systems.B2TalkManager')` |

# Properties (5)

| NameTypeDescription`FinishInstanceIds``FB1TalkInstanceId[]``FlushTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`InstanceFlushTimerHandle``FTimerHandle``TalkInstanceIdGenerator``any``TalkInstances``table<FB1TalkInstanceId, FB2TalkInstance>` |
| --- |
| `FinishInstanceIds``FB1TalkInstanceId[]``FlushTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`InstanceFlushTimerHandle``FTimerHandle``TalkInstanceIdGenerator``any``TalkInstances``table<FB1TalkInstanceId, FB2TalkInstance>` |
| `FlushTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`InstanceFlushTimerHandle``FTimerHandle``TalkInstanceIdGenerator``any``TalkInstances``table<FB1TalkInstanceId, FB2TalkInstance>` |
| `InstanceFlushTimerHandle``FTimerHandle``TalkInstanceIdGenerator``any``TalkInstances``table<FB1TalkInstanceId, FB2TalkInstance>` |
| `TalkInstanceIdGenerator``any``TalkInstances``table<FB1TalkInstanceId, FB2TalkInstance>` |
| `TalkInstances``table<FB1TalkInstanceId, FB2TalkInstance>` |

# Functions (3)

| FunctionParametersReturnsDescription`CreateTalkInstance``-`[`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)Creates Talk Instance.`FinishTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-``GetTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)[`FB2TalkInstance`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2talkinstance)Returns Talk Instance. |
| --- |
| `CreateTalkInstance``-`[`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)Creates Talk Instance.`FinishTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-``GetTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)[`FB2TalkInstance`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2talkinstance)Returns Talk Instance. |
| `FinishTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-``GetTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)[`FB2TalkInstance`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2talkinstance)Returns Talk Instance. |
| `GetTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)[`FB2TalkInstance`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2talkinstance)Returns Talk Instance. |

# Override points (2)

Implement these in Lua as `FB2TalkManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_CreateTalkInstance``-`[`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)Creates Talk Instance.`Override_FinishTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-` |
| --- |
| `Override_CreateTalkInstance``-`[`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)Creates Talk Instance.`Override_FinishTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-` |
| `Override_FinishTalkInstance`InInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-` |

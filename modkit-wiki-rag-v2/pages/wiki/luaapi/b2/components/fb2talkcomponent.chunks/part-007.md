---
document_id: "a720a58905dbaff9076ea2ce2342ba82e9c2eefcbdff43d088e8af9b55a75d96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2talkcomponent"
title: "FB2TalkComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:15+00:00"
content_sha256: "9bac3deb72d8e549c9207e3b8e5a5e4d25688a8d8b4f0823209958737a6dd65e"
chunk: 7
chunk_count: 8
page_type: "article"
route: "wiki/luaapi/b2/components/fb2talkcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

 InTalkSubjectEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Talk With Subject.`SetLastTalkMood`InTalkMood: [`EB1TalkBehaviorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1talkbehaviortype)`-`Sets Last Talk Mood.`SetTalkInstance`InTalkInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-`Sets Talk Instance.`SetTalkProceed`InReady: `boolean``-`Sets Talk Proceed. |
| `RequestTalk`InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCoopId: `string`, InInteractionBagId: `string``boolean`Requests Talk.`RequestTalkWithSubject`InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCoopId: `string`, InInteractionBagId: `string`, InTalkSubjectEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Talk With Subject.`SetLastTalkMood`InTalkMood: [`EB1TalkBehaviorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1talkbehaviortype)`-`Sets Last Talk Mood.`SetTalkInstance`InTalkInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-`Sets Talk Instance.`SetTalkProceed`InReady: `boolean``-`Sets Talk Proceed. |
| `RequestTalkWithSubject`InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCoopId: `string`, InInteractionBagId: `string`, InTalkSubjectEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Requests Talk With Subject.`SetLastTalkMood`InTalkMood: [`EB1TalkBehaviorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1talkbehaviortype)`-`Sets Last Talk Mood.`SetTalkInstance`InTalkInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-`Sets Talk Instance.`SetTalkProceed`InReady: `boolean``-`Sets Talk Proceed. |
| `SetLastTalkMood`InTalkMood: [`EB1TalkBehaviorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1talkbehaviortype)`-`Sets Last Talk Mood.`SetTalkInstance`InTalkInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-`Sets Talk Instance.`SetTalkProceed`InReady: `boolean``-`Sets Talk Proceed. |
| `SetTalkInstance`InTalkInstanceId: [`FB1TalkInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinstanceid)`-`Sets Talk Instance.`SetTalkProceed`InReady: `boolean``-`Sets Talk Proceed. |
| `SetTalkProceed`InReady: `boolean``-`Sets Talk Proceed. |

# Override points (10)

Implement these in Lua as `FB2TalkComponent.Override_Name = function(...) end`.

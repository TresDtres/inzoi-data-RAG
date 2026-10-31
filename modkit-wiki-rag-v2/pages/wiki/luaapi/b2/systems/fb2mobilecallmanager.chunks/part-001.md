---
document_id: "b420c2db56e253e01244927b0e426210ca7cdfa46db36cbf0085cc06a6d8eb87"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2mobilecallmanager"
title: "FB2MobileCallManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "65e567cc1d2ef72e5d125dac6b31a3d4ebbf9f030df29e56de72642d83398248"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2mobilecallmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages mobile (phone) calls.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MobileCallManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MobileCallManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MobileCallManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MobileCallManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MobileCallManager')` |
| Require`require('Systems.B2MobileCallManager')` |

# Properties (3)

| NameTypeDescription`DailyRandomCallPairs``table<FB1EntityId, FB1EntityId>`Records daily random-call pairs (Key: Receiver, Value: Sender). Since only one incoming call is allowed, one pair is stored keyed by the receiver.`PendingEventCallIds``table<FB1EntityId, string>`Stores the CallId of event outgoing calls per entity (Key: SenderId, Value: MobileCallId); only one event outgoing call is allowed.`PendingIncomingCalls``table<FB1EntityId, FB1IncomingCallData>`Stores incoming-call data per entity (Key: ReceiverId); only one incoming call is allowed. |
| --- |
| `DailyRandomCallPairs``table<FB1EntityId, FB1EntityId>`Records daily random-call pairs (Key: Receiver, Value: Sender). Since only one incoming call is allowed, one pair is stored keyed by the receiver.`PendingEventCallIds``table<FB1EntityId, string>`Stores the CallId of event outgoing calls per entity (Key: SenderId, Value: MobileCallId); only one event outgoing call is allowed.`PendingIncomingCalls``table<FB1EntityId, FB1IncomingCallData>`Stores incoming-call data per entity (Key: ReceiverId); only one incoming call is allowed. |
| `PendingEventCallIds``table<FB1EntityId, string>`Stores the CallId of event outgoing calls per entity (Key: SenderId, Value: MobileCallId); only one event outgoing call is allowed.`PendingIncomingCalls``table<FB1EntityId, FB1IncomingCallData>`Stores incoming-call data per entity (Key: ReceiverId); only one incoming call is allowed. |
| `PendingIncomingCalls``table<FB1EntityId, FB1IncomingCallData>`Stores incoming-call data per entity (Key: ReceiverId); only one incoming call is allowed. |

# Functions (14)

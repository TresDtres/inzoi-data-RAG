---
document_id: "acf73ea6e0fc1a80c4f58be3343ca9938738c2d411730d8bcb9a44716f9ecb75"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2rumormanager"
title: "FB2RumorManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "cf16ee7be5bcdd99ddfa65b30b2bb330dc77ec82e2495c16679d7257dc9f5ede"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2rumormanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages rumors.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2RumorManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2RumorManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2RumorManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2RumorManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2RumorManager')` |
| Require`require('Systems.B2RumorManager')` |

# Properties (10)

| NameTypeDescription`CheckRumorLifeTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`EntityKnownTheRumorContainer``table<FB1EntityId, FB1RumorIdList>``LastRumorId`[`FB1RumorId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1rumorid)`RumorContainer``table<FB1RumorId, FB1RumorParam>``RumorEventExpireDtId``string``RumorEventNegativeDtIdList``string[]``RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| --- |
| `CheckRumorLifeTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`EntityKnownTheRumorContainer``table<FB1EntityId, FB1RumorIdList>``LastRumorId`[`FB1RumorId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1rumorid)`RumorContainer``table<FB1RumorId, FB1RumorParam>``RumorEventExpireDtId``string``RumorEventNegativeDtIdList``string[]``RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `EntityKnownTheRumorContainer``table<FB1EntityId, FB1RumorIdList>``LastRumorId`[`FB1RumorId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1rumorid)`RumorContainer``table<FB1RumorId, FB1RumorParam>``RumorEventExpireDtId``string``RumorEventNegativeDtIdList``string[]``RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `LastRumorId`[`FB1RumorId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1rumorid)`RumorContainer``table<FB1RumorId, FB1RumorParam>``RumorEventExpireDtId``string``RumorEventNegativeDtIdList``string[]``RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `RumorContainer``table<FB1RumorId, FB1RumorParam>``RumorEventExpireDtId``string``RumorEventNegativeDtIdList``string[]``RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `RumorEventExpireDtId``string``RumorEventNegativeDtIdList``string[]``RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `RumorEventNegativeDtIdList``string[]``RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `RumorEventPositiveDtIdList``string[]`List of TableRowNames used as special cases in RumorEvent.`RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `RumorIdGenerator``any``bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `bIsDebugMode``boolean``bIsSystemOn``boolean` |
| `bIsSystemOn``boolean` |

# Functions (21)

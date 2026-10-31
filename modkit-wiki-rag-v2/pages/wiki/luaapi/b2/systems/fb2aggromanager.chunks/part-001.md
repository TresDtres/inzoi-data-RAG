---
document_id: "bb931d4c430d2f7fac3448ad34714194de03507624d6fc35068b109151780210"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2aggromanager"
title: "FB2AggroManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:56+00:00"
content_sha256: "5ef2b41ee5318d545c094ba619196d0c920120e38a73cc443ce8c79c35a1eb75"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2aggromanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Aggro system. A single Source can hold multiple Target aggro entries simultaneously (multi-target). Summary: AddAggro finds (or creates) the (Source, Target) entry and accumulates the Reason bucket; among a Source's entries, the one with the largest total each tick is picked as the chase target; per-entry OffsetDistance / arrival fire / one-shot (bArrivalFired) guard; the Source's autonomy toggle is blocked only while a Chase-active entry exists (one flag, restored on end).

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AggroManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AggroManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AggroManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AggroManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AggroManager')` |
| Require`require('Systems.B2AggroManager')` |

# Properties (1)

| NameTypeDescription`ActiveAggros``table<FB1EntityId, FB2AggroSourceState>` |
| --- |
| `ActiveAggros``table<FB1EntityId, FB2AggroSourceState>` |

# Functions (18)

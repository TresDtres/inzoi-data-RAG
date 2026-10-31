---
document_id: "d76b807ad2bb1f3ebf5418ca3434a50b9da3f3327d7bdb5b9b6bee0ae50c47c0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2marketpricemanager"
title: "FB2MarketPriceManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "40e8605853d98c52dbd654d47f43b8a0e99421d64278ccb8f90aaef123aa579d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2marketpricemanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages market prices.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MarketPriceManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MarketPriceManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MarketPriceManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MarketPriceManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MarketPriceManager')` |
| Require`require('Systems.B2MarketPriceManager')` |

# Properties (3)

| NameTypeDescription`MarketPriceHistoryMap``table<string, FB1MarketPriceHistory>``RecoveringDisasterId``string``TodayMarketPriceRateMap``table<string, number>` |
| --- |
| `MarketPriceHistoryMap``table<string, FB1MarketPriceHistory>``RecoveringDisasterId``string``TodayMarketPriceRateMap``table<string, number>` |
| `RecoveringDisasterId``string``TodayMarketPriceRateMap``table<string, number>` |
| `TodayMarketPriceRateMap``table<string, number>` |

# Functions (7)

| FunctionParametersReturnsDescription`GetMarketPriceHistory`InMarketPriceId: `string`[`FB1MarketPriceHistory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1marketpricehistory)Returns Market Price History.`GetObjectPrice` *(static)*InObjectDtId: `string``integer`Returns Object Price.`GetTodayMarketPriceRate`InMarketPriceId: `string``number`Returns Today Market Price Rate.`IsMarketPriceEnabled` *(static)*InObjectDtId: `string``boolean`Returns whether Market Price Enabled.`OnDayChanged``-``-`Callback invoked on Day Changed.`OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| --- |
| `GetMarketPriceHistory`InMarketPriceId: `string`[`FB1MarketPriceHistory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1marketpricehistory)Returns Market Price History.`GetObjectPrice` *(static)*InObjectDtId: `string``integer`Returns Object Price.`GetTodayMarketPriceRate`InMarketPriceId: `string``number`Returns Today Market Price Rate.`IsMarketPriceEnabled` *(static)*InObjectDtId: `string``boolean`Returns whether Market Price Enabled.`OnDayChanged``-``-`Callback invoked on Day Changed.`OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `GetObjectPrice` *(static)*InObjectDtId: `string``integer`Returns Object Price.`GetTodayMarketPriceRate`InMarketPriceId: `string``number`Returns Today Market Price Rate.`IsMarketPriceEnabled` *(static)*InObjectDtId: `string``boolean`Returns whether Market Price Enabled.`OnDayChanged``-``-`Callback invoked on Day Changed.`OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `GetTodayMarketPriceRate`InMarketPriceId: `string``number`Returns Today Market Price Rate.`IsMarketPriceEnabled` *(static)*InObjectDtId: `string``boolean`Returns whether Market Price Enabled.`OnDayChanged``-``-`Callback invoked on Day Changed.`OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `IsMarketPriceEnabled` *(static)*InObjectDtId: `string``boolean`Returns whether Market Price Enabled.`OnDayChanged``-``-`Callback invoked on Day Changed.`OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `OnDayChanged``-``-`Callback invoked on Day Changed.`OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |

# Override points (3)

Implement these in Lua as `FB2MarketPriceManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnDayChanged``-``-`Callback invoked on Day Changed.`Override_OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`Override_OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| --- |
| `Override_OnDayChanged``-``-`Callback invoked on Day Changed.`Override_OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`Override_OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `Override_OnDisasterRecoveryFinished`InWeatherId: `string``-`Callback invoked on Disaster Recovery Finished.`Override_OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |
| `Override_OnStartDisaster`InWeatherId: `string``-`Callback invoked on Start Disaster. |

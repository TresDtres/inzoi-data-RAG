---
document_id: "146c2b8d575edc3e7e06da8c7924674c45ed74a76184df58aceaab1648cd80e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2currencycomponent"
title: "FB2CurrencyComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:13+00:00"
content_sha256: "ac53b93d581708b58356ca6071f36a6b738e1f21f1b57f87be254a4412581ec4"
chunk: 4
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b2/components/fb2currencycomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

cs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether it has Enough Currency.`InitCurrency`InCurrencyMap: `table<string, integer>``-`Initializes Currency.`OnDayChanged``-``-`Callback invoked on Day Changed.`SetCurrency`InCurrencyId: `string`, InValue: `integer`, InReason: [`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason), InPlayWidgetEffectEntity: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bForced: `boolean`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Sets Currency.`SetDefaultCurrencyMap``-``-`Sets Default Currency Map.`TrySubtractCurrency`InValue: `integer``boolean` |
| `HasEnoughCurrency`InCurrencyId: `string`, InConsumeCurrencyValue: `integer`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether it has Enough Currency.`InitCurrency`InCurrencyMap: `table<string, integer>``-`Initializes Currency.`OnDayChanged``-``-`Callback invoked on Day Changed.`SetCurrency`InCurrencyId: `string`, InValue: `integer`, InReason: [`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason), InPlayWidgetEffectEntity: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bForced: `boolean`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Sets Currency.`SetDefaultCurrencyMap``-``-`Sets Default Currency Map.`TrySubtractCurrency`InValue: `integer``boolean` |
| `InitCurrency`InCurrencyMap: `table<string, integer>``-`Initializes Currency.`OnDayChanged``-``-`Callback invoked on Day Changed.`SetCurrency`InCurrencyId: `string`, InValue: `integer`, InReason: [`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason), InPlayWidgetEffectEntity: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bForced: `boolean`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Sets Currency.`SetDefaultCurrencyMap``-``-`Sets Default Currency Map.`TrySubtractCurrency`InValue: `integer``boolean` |
| `OnDayChanged``-``-`Callback invoked on Day Changed.`SetCurrency`InCurrencyId: `string`, InValue: `integer`, InReason: [`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason), InPlayWidgetEffectEntity: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bForced: `boolean`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Sets Currency.`SetDefaultCurrencyMap``-``-`Sets Default Currency Map.`TrySubtractCurrency`InValue: `integer``boolean` |
| `SetCurrency`InCurrencyId: `string`, InValue: `integer`, InReason: [`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason), InPlayWidgetEffectEntity: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bForced: `boolean`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Sets Currency.`SetDefaultCurrencyMap``-``-`Sets Default Currency Map.`TrySubtractCurrency`InValue: `integer``boolean` |
| `SetDefaultCurrencyMap``-``-`Sets Default Currency Map.`TrySubtractCurrency`InValue: `integer``boolean` |
| `TrySubtractCurrency`InValue: `integer``boolean` |

# Override points (3)

Implement these in Lua as `FB2CurrencyComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_HasEnoughCurrency`InCurrencyId: `string`, InConsumeCurrencyValue: `integer`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether it has Enough Currency.`Override_OnDayChanged``-``-`Callback invoked on Day Changed.`Override_TrySubtractCurrency`InValue: `integer``boolean` |
| --- |
| `Override_HasEnoughCurrency`InCurrencyId: `string`, InConsumeCurrencyValue: `integer`, InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether it has Enough Currency.`Override_OnDayChanged``-``-`Callback invoked on Day Changed.`Override_TrySubtractCurrency`InValue: `integer``boolean` |
| `Override_OnDayChanged``-``-`Callback invoked on Day Changed.`Override_TrySubtractCurrency`InValue: `integer``boolean` |
| `Override_TrySubtractCurrency`InValue: `integer``boolean` |

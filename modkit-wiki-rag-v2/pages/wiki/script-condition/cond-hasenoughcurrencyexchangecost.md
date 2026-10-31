---
document_id: "09a6e6c360f131a17246fb5190136a55843b28fe7e445b7022e4d976ca5e59d6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost"
title: "Condition_HasEnoughCurrencyExchangeCost"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:04+00:00"
content_sha256: "ed834a78d92bf2ef7cdd0735246130bfab98ae2ddfad253a8afa2fe6d89cd838"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasenoughcurrencyexchangecost"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self has enough currency to pay the exchange cost of the BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe object whose exchange cost will be compared against Self's currency (Self or Target)CompareTypeEqual: Self has enough currency. NotEqual: Self does not have enough currency. |
| --- |
| BaseObjectThe object whose exchange cost will be compared against Self's currency (Self or Target)CompareTypeEqual: Self has enough currency. NotEqual: Self does not have enough currency. |
| CompareTypeEqual: Self has enough currency. NotEqual: Self does not have enough currency. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self can afford the exchange cost of TargetTargetHasEnoughCurrencyExchangeCostEqualCheck if Self cannot afford the exchange cost of TargetTargetHasEnoughCurrencyExchangeCostNotEqual |
| --- |
| Check if Self can afford the exchange cost of TargetTargetHasEnoughCurrencyExchangeCostEqualCheck if Self cannot afford the exchange cost of TargetTargetHasEnoughCurrencyExchangeCostNotEqual |
| Check if Self cannot afford the exchange cost of TargetTargetHasEnoughCurrencyExchangeCostNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

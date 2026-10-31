---
document_id: "95edf06e74be20b379e80e8f63e325f697feac1960bac69ec479d6d0b4b74d9d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite"
title: "Condition_HasEnoughCurrencyExchangeCostInSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:04+00:00"
content_sha256: "ca031a35f7752046ff92666626d7793621737ba03c7f88704bd7fb9947c351d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the self character has enough currency to cover the exchange cost of the target object within the site. The exchange cost is retrieved from the target entity, and B2CurrencyHelper is used to compare the character's balance against it.

# Parameters

| ParameterDescriptionBaseObjectThe character whose currency balance is checked (Self).CompareTypeComparison type used to evaluate the balance against the exchange cost. |
| --- |
| BaseObjectThe character whose currency balance is checked (Self).CompareTypeComparison type used to evaluate the balance against the exchange cost. |
| CompareTypeComparison type used to evaluate the balance against the exchange cost. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has enough currency to pay the target object exchange costSelfHasEnoughCurrencyExchangeCostInSiteGreaterOrEqualCheck if Self cannot afford the exchange costSelfHasEnoughCurrencyExchangeCostInSiteLessCheck if Self has exactly enough to pay the target exchange costSelfHasEnoughCurrencyExchangeCostInSiteEqual |
| --- |
| Check if Self has enough currency to pay the target object exchange costSelfHasEnoughCurrencyExchangeCostInSiteGreaterOrEqualCheck if Self cannot afford the exchange costSelfHasEnoughCurrencyExchangeCostInSiteLessCheck if Self has exactly enough to pay the target exchange costSelfHasEnoughCurrencyExchangeCostInSiteEqual |
| Check if Self cannot afford the exchange costSelfHasEnoughCurrencyExchangeCostInSiteLessCheck if Self has exactly enough to pay the target exchange costSelfHasEnoughCurrencyExchangeCostInSiteEqual |
| Check if Self has exactly enough to pay the target exchange costSelfHasEnoughCurrencyExchangeCostInSiteEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

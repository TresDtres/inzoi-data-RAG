---
document_id: "43e71694a2c306aaedbc016d66058e11751c8ef8f9e874db55646f65d2855f88"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-objectprice"
title: "Condition_ObjectPrice"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:54+00:00"
content_sha256: "0feb071aba4b172c7d252ee127c6b343d9e6841452bb7deb834db3052d5a6858"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-objectprice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the price of the specified object against the given threshold values (F1, F2).

# Parameters

| ParameterDescriptionBaseObjectThe object to validate (Self or Target).CompareTypeType of comparison operation.F1The first threshold value for price comparison.F2The second threshold value (used for Between comparison). |
| --- |
| BaseObjectThe object to validate (Self or Target).CompareTypeType of comparison operation.F1The first threshold value for price comparison.F2The second threshold value (used for Between comparison). |
| CompareTypeType of comparison operation.F1The first threshold value for price comparison.F2The second threshold value (used for Between comparison). |
| F1The first threshold value for price comparison.F2The second threshold value (used for Between comparison). |
| F2The second threshold value (used for Between comparison). |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks whether target object price is >= 100.TargetObjectPriceGreaterOrEqual100Checks whether self object price is between 10~50.SelfObjectPriceBetween1050 |
| --- |
| Checks whether target object price is >= 100.TargetObjectPriceGreaterOrEqual100Checks whether self object price is between 10~50.SelfObjectPriceBetween1050 |
| Checks whether self object price is between 10~50.SelfObjectPriceBetween1050 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)

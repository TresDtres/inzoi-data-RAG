---
document_id: "9977181d9653598d7d03d85cf5854549c4b55904671ace4509f5d251089c793b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid"
title: "Condition_HasTaxId"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:15+00:00"
content_sha256: "f0fe11e1840230d8420bec6866a86c8cde26ffd2399fe5caf6e69a3e7ebd2ad9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hastaxid"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified object has the given TaxId.

# Parameters

| ParameterDescriptionBaseObjectThe object to validate (Self or Target)CompareTypeComparison operator: Equal, NotEqualS1TaxId to compare against (FName) |
| --- |
| BaseObjectThe object to validate (Self or Target)CompareTypeComparison operator: Equal, NotEqualS1TaxId to compare against (FName) |
| CompareTypeComparison operator: Equal, NotEqualS1TaxId to compare against (FName) |
| S1TaxId to compare against (FName) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if target object has TaxId "PropertyTax"TargetHasTaxIdEqualPropertyTaxCheck if self object does not have TaxId "Income"SelfHasTaxIdNotEqualIncome |
| --- |
| Check if target object has TaxId "PropertyTax"TargetHasTaxIdEqualPropertyTaxCheck if self object does not have TaxId "Income"SelfHasTaxIdNotEqualIncome |
| Check if self object does not have TaxId "Income"SelfHasTaxIdNotEqualIncome |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

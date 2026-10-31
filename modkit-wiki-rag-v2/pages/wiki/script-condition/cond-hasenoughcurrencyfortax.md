---
document_id: "1c96695685e3ca26c5a5047d584707ccfde7d3343892c9fbab48b270b2910a58"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax"
title: "Condition_HasEnoughCurrencyForTax"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:04+00:00"
content_sha256: "bd5b81c5e73a2c09332f1cc32690a3068b5cdb2f5fb2b0a8ed122cc0e6cd0c0e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasenoughcurrencyfortax"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has enough currency to pay the required tax for their home site. The comparison is performed between the character's current currency amount and the tax cost.

# Parameters

| ParameterDescriptionBaseObjectThe character whose currency amount is checked for tax payment (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Currency type to check (must be set to Mew). |
| --- |
| BaseObjectThe character whose currency amount is checked for tax payment (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Currency type to check (must be set to Mew). |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Currency type to check (must be set to Mew). |
| S1Currency type to check (must be set to Mew). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if self has enough Mew to pay the taxSelfHasEnoughCurrencyForTaxGreaterOrEqualCheck if target does not have enough Mew to pay the taxTargetHasEnoughCurrencyForTaxLess |
| --- |
| Check if self has enough Mew to pay the taxSelfHasEnoughCurrencyForTaxGreaterOrEqualCheck if target does not have enough Mew to pay the taxTargetHasEnoughCurrencyForTaxLess |
| Check if target does not have enough Mew to pay the taxTargetHasEnoughCurrencyForTaxLess |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

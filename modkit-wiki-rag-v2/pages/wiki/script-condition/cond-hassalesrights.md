---
document_id: "f3e442eb8f2b762cf04d20700778719ff1316bddb99d96a9d1a8d939e17e5c5d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights"
title: "Condition_HasSalesRights"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:14+00:00"
content_sha256: "490b755a05b889f88ffdff327231aa6be3f658e1b393ea4c4dfe986811002606"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hassalesrights"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self has the right to set the price (sell) of the BaseObject. Sales rights are granted to household members when the object is on sale, placed on a flea market stall, or located in the character's home site.

# Parameters

| ParameterDescriptionBaseObjectThe game object to check sales rights on (Self or Target)CompareTypeComparison operator: Equal, NotEqual |
| --- |
| BaseObjectThe game object to check sales rights on (Self or Target)CompareTypeComparison operator: Equal, NotEqual |
| CompareTypeComparison operator: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has the right to set the price of Target objectTargetHasSalesRightsEqualCheck if Self does not have pricing rights on TargetTargetHasSalesRightsNotEqual |
| --- |
| Check if Self has the right to set the price of Target objectTargetHasSalesRightsEqualCheck if Self does not have pricing rights on TargetTargetHasSalesRightsNotEqual |
| Check if Self does not have pricing rights on TargetTargetHasSalesRightsNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

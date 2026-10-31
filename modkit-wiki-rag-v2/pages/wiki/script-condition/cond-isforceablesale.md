---
document_id: "20627d9933c4eabd50ebbf0b934ddbb6f1040bf0d53ad9898ae24c2f58a2076d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale"
title: "Condition_IsForceableSale"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:29+00:00"
content_sha256: "1d0ddf76919b7c27a2aaa3d5b4e323aadc5b0cacd43a92568471dada27041256"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isforceablesale"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target object is eligible for forced sale (seizure) due to unpaid tax. Objects are excluded if they are broken, have no price, are of excluded types (Door, Dusty, Soot, Roof), are stored in the site inventory bag, or if the site's total seized object price already covers the tax.

# Parameters

| ParameterDescriptionBaseObjectThe object to evaluate for forced sale eligibilityCompareTypeEqual only (always checks eligibility) |
| --- |
| BaseObjectThe object to evaluate for forced sale eligibilityCompareTypeEqual only (always checks eligibility) |
| CompareTypeEqual only (always checks eligibility) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the object can be forcibly sold for taxSelfIsForceableSaleEqualCheck if the target object is subject to seizureTargetIsForceableSaleEqual |
| --- |
| Check if the object can be forcibly sold for taxSelfIsForceableSaleEqualCheck if the target object is subject to seizureTargetIsForceableSaleEqual |
| Check if the target object is subject to seizureTargetIsForceableSaleEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

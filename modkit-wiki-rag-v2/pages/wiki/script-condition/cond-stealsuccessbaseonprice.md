---
document_id: "e248f2d749cd34fd056e1a4402ce595a4dd9a89558f9b3a38e34a11eabab8e86"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stealsuccessbaseonprice"
title: "Condition_StealSuccessBaseOnPrice"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:00+00:00"
content_sha256: "ffe8fe324de21bd5db8c81d0d081eed10df9d3c3d6359ddc6fbd476870dbedfc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-stealsuccessbaseonprice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Determines whether stealing succeeds based on the current sale price of the specified object relative to its base price. The steal probability is 0% below F1*basePrice, increases linearly between F1 and F2, and reaches 100% at F2*basePrice.

# Parameters

| ParameterDescriptionBaseObjectThe object whose price will be evaluated for steal success.CompareTypeEqual (steal succeeds), NotEqual (steal fails).F1The minimum price ratio (multiplied by base price) where steal probability is 0%.F2The maximum price ratio (multiplied by base price) where steal probability is 100%. |
| --- |
| BaseObjectThe object whose price will be evaluated for steal success.CompareTypeEqual (steal succeeds), NotEqual (steal fails).F1The minimum price ratio (multiplied by base price) where steal probability is 0%.F2The maximum price ratio (multiplied by base price) where steal probability is 100%. |
| CompareTypeEqual (steal succeeds), NotEqual (steal fails).F1The minimum price ratio (multiplied by base price) where steal probability is 0%.F2The maximum price ratio (multiplied by base price) where steal probability is 100%. |
| F1The minimum price ratio (multiplied by base price) where steal probability is 0%.F2The maximum price ratio (multiplied by base price) where steal probability is 100%. |
| F2The maximum price ratio (multiplied by base price) where steal probability is 100%. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Check if stealing the target object succeeds (range 1.8-2.0)SelfStealSuccessBaseOnPriceEqual1.82.0Check if stealing fails (range 1.8-2.0)SelfStealSuccessBaseOnPriceNotEqual1.82.0Check if stealing the target succeeds (range 1.5-2.5)TargetStealSuccessBaseOnPriceEqual1.52.5 |
| --- |
| Check if stealing the target object succeeds (range 1.8-2.0)SelfStealSuccessBaseOnPriceEqual1.82.0Check if stealing fails (range 1.8-2.0)SelfStealSuccessBaseOnPriceNotEqual1.82.0Check if stealing the target succeeds (range 1.5-2.5)TargetStealSuccessBaseOnPriceEqual1.52.5 |
| Check if stealing fails (range 1.8-2.0)SelfStealSuccessBaseOnPriceNotEqual1.82.0Check if stealing the target succeeds (range 1.5-2.5)TargetStealSuccessBaseOnPriceEqual1.52.5 |
| Check if stealing the target succeeds (range 1.5-2.5)TargetStealSuccessBaseOnPriceEqual1.52.5 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)

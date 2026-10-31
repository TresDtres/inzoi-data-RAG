---
document_id: "37b6b7f957fe7d0f75205ccd615c51559dc33680293c7d29cb66a71aa9ba2d31"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-purchasesuccessbaseonprice"
title: "Condition_PurchaseSuccessBaseOnPrice"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:56+00:00"
content_sha256: "a7ce351d77c98bf1a6c2863eb3daf4e0b4864572dcae58762553df81748c7fcc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-purchasesuccessbaseonprice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Determines whether a purchase succeeds based on the current sale price of the specified object relative to its base price. At the base price the success probability is 50%. As the price decreases toward F1*basePrice, probability increases to 100%. As the price increases toward F2*basePrice, probability decreases to 0%.

# Parameters

| ParameterDescriptionBaseObjectThe object whose price will be evaluated for purchase success.CompareTypeEqual (purchase succeeds), NotEqual (purchase fails).F1The minimum price ratio (multiplied by base price) where success probability is 100%.F2The maximum price ratio (multiplied by base price) where success probability is 0%. |
| --- |
| BaseObjectThe object whose price will be evaluated for purchase success.CompareTypeEqual (purchase succeeds), NotEqual (purchase fails).F1The minimum price ratio (multiplied by base price) where success probability is 100%.F2The maximum price ratio (multiplied by base price) where success probability is 0%. |
| CompareTypeEqual (purchase succeeds), NotEqual (purchase fails).F1The minimum price ratio (multiplied by base price) where success probability is 100%.F2The maximum price ratio (multiplied by base price) where success probability is 0%. |
| F1The minimum price ratio (multiplied by base price) where success probability is 100%.F2The maximum price ratio (multiplied by base price) where success probability is 0%. |
| F2The maximum price ratio (multiplied by base price) where success probability is 0%. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Check if purchasing the target object succeeds (range 0.5-1.5)SelfPurchaseSuccessBaseOnPriceEqual0.51.5Check if purchasing fails (range 0.5-1.5)SelfPurchaseSuccessBaseOnPriceNotEqual0.51.5Check if purchasing the target succeeds (range 0.7-1.3)TargetPurchaseSuccessBaseOnPriceEqual0.71.3 |
| --- |
| Check if purchasing the target object succeeds (range 0.5-1.5)SelfPurchaseSuccessBaseOnPriceEqual0.51.5Check if purchasing fails (range 0.5-1.5)SelfPurchaseSuccessBaseOnPriceNotEqual0.51.5Check if purchasing the target succeeds (range 0.7-1.3)TargetPurchaseSuccessBaseOnPriceEqual0.71.3 |
| Check if purchasing fails (range 0.5-1.5)SelfPurchaseSuccessBaseOnPriceNotEqual0.51.5Check if purchasing the target succeeds (range 0.7-1.3)TargetPurchaseSuccessBaseOnPriceEqual0.71.3 |
| Check if purchasing the target succeeds (range 0.7-1.3)TargetPurchaseSuccessBaseOnPriceEqual0.71.3 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)

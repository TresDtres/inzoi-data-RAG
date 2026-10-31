---
document_id: "c99e1036e42534d0bcbd9977078b7522bb1b3d19be310ae45060b5bf6f3a1cf4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable"
title: "Condition_IsPurchasable"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:41+00:00"
content_sha256: "d4db4e625e898f928d34a82d912b246edda7ec93e7a4c68e075e469fb8a9341b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ispurchasable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the game object specified by BaseObject can be purchased by the Self character. An object is not purchasable if it is owned by the same household as the buyer, preventing household members from purchasing their own property.

# Note

The buyer character is always resolved as Self from the script context, regardless of the BaseObject setting. BaseObject identifies the game object to evaluate.

# Parameters

| ParameterDescriptionBaseObjectThe game object to check for purchasability.CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe game object to check for purchasability.CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the target object can be purchasedTargetIsPurchasableEqualCheck if the target object cannot be purchasedTargetIsPurchasableNotEqual |
| --- |
| Check if the target object can be purchasedTargetIsPurchasableEqualCheck if the target object cannot be purchasedTargetIsPurchasableNotEqual |
| Check if the target object cannot be purchasedTargetIsPurchasableNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

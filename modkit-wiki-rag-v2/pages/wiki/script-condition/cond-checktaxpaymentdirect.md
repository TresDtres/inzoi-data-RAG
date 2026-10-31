---
document_id: "8d3161c5c7faf251998c7d4749ba32aa1fdcea3e4562e7fe86e46c4b18b6944f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect"
title: "Condition_CheckTaxPaymentDirect"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:53+00:00"
content_sha256: "4816dfe987dfdb2b25ad68a61c9426189dcd2a3888c43f6966ea46d1fa418a67"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checktaxpaymentdirect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject's household uses manual (direct) tax payment. Equal returns true when direct tax payment is enabled; NotEqual returns true when it is disabled (automatic).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose household tax payment mode will be checkedCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter whose household tax payment mode will be checkedCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self's household uses manual tax paymentSelfCheckTaxPaymentDirectEqualIf Self's household uses automatic tax paymentSelfCheckTaxPaymentDirectNotEqualIf Target's household uses manual tax paymentTargetCheckTaxPaymentDirectEqualIf Target's household uses automatic tax paymentTargetCheckTaxPaymentDirectNotEqual |
| --- |
| If Self's household uses manual tax paymentSelfCheckTaxPaymentDirectEqualIf Self's household uses automatic tax paymentSelfCheckTaxPaymentDirectNotEqualIf Target's household uses manual tax paymentTargetCheckTaxPaymentDirectEqualIf Target's household uses automatic tax paymentTargetCheckTaxPaymentDirectNotEqual |
| If Self's household uses automatic tax paymentSelfCheckTaxPaymentDirectNotEqualIf Target's household uses manual tax paymentTargetCheckTaxPaymentDirectEqualIf Target's household uses automatic tax paymentTargetCheckTaxPaymentDirectNotEqual |
| If Target's household uses manual tax paymentTargetCheckTaxPaymentDirectEqualIf Target's household uses automatic tax paymentTargetCheckTaxPaymentDirectNotEqual |
| If Target's household uses automatic tax paymentTargetCheckTaxPaymentDirectNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

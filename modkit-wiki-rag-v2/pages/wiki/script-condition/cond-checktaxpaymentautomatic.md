---
document_id: "9a0be6ccb56d67d6aee64fdebe799cc0c385b30a8b319eb8f15b29f0ccc4c4f7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic"
title: "Condition_CheckTaxPaymentAutomatic"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:53+00:00"
content_sha256: "a45d0a39125930da07f1257d8c0a6579902b118aad1da3caea0d7e27b86bba3f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checktaxpaymentautomatic"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject's household uses automatic tax payment (i.e., direct payment is disabled). Equal returns true when automatic payment is in use; NotEqual returns true when manual payment is used.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose household tax payment mode will be checkedCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter whose household tax payment mode will be checkedCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self's household uses automatic tax paymentSelfCheckTaxPaymentAutomaticEqualIf Self's household uses manual tax paymentSelfCheckTaxPaymentAutomaticNotEqualIf Target's household uses automatic tax paymentTargetCheckTaxPaymentAutomaticEqualIf Target's household uses manual tax paymentTargetCheckTaxPaymentAutomaticNotEqual |
| --- |
| If Self's household uses automatic tax paymentSelfCheckTaxPaymentAutomaticEqualIf Self's household uses manual tax paymentSelfCheckTaxPaymentAutomaticNotEqualIf Target's household uses automatic tax paymentTargetCheckTaxPaymentAutomaticEqualIf Target's household uses manual tax paymentTargetCheckTaxPaymentAutomaticNotEqual |
| If Self's household uses manual tax paymentSelfCheckTaxPaymentAutomaticNotEqualIf Target's household uses automatic tax paymentTargetCheckTaxPaymentAutomaticEqualIf Target's household uses manual tax paymentTargetCheckTaxPaymentAutomaticNotEqual |
| If Target's household uses automatic tax paymentTargetCheckTaxPaymentAutomaticEqualIf Target's household uses manual tax paymentTargetCheckTaxPaymentAutomaticNotEqual |
| If Target's household uses manual tax paymentTargetCheckTaxPaymentAutomaticNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

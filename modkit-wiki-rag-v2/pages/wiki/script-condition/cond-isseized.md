---
document_id: "4d3ee36fc28216d38cb1a01a04eed77729311215945ad864a241632031c4d0e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized"
title: "Condition_IsSeized"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:45+00:00"
content_sha256: "0657443a900a6b292c0d7eb2a88967a64f6f0aa09bc68ccf6ed7947cbac27b06"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isseized"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target object has been seized due to a utility bill flow (e.g., water cutoff, electricity cutoff, or general seizure). If S1 is specified, checks for that specific seizure state; otherwise checks for any of: Seizure, WaterCutoff, ElectricityCutoff.

# Parameters

| ParameterDescriptionBaseObjectThe object to be evaluatedCompareTypeEqual (object is seized) / NotEqual (object is not seized)S1Optional: specific seizure state to check. If omitted, checks for any of: Seizure, WaterCutoff, ElectricityCutoff |
| --- |
| BaseObjectThe object to be evaluatedCompareTypeEqual (object is seized) / NotEqual (object is not seized)S1Optional: specific seizure state to check. If omitted, checks for any of: Seizure, WaterCutoff, ElectricityCutoff |
| CompareTypeEqual (object is seized) / NotEqual (object is not seized)S1Optional: specific seizure state to check. If omitted, checks for any of: Seizure, WaterCutoff, ElectricityCutoff |
| S1Optional: specific seizure state to check. If omitted, checks for any of: Seizure, WaterCutoff, ElectricityCutoff |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if the object is in WaterCutoff stateTargetIsSeizedEqualWaterCutoffCheck if the object is in any seizure stateTargetIsSeizedEqualCheck if the object is not electrically cut offTargetIsSeizedNotEqualElectricityCutoff |
| --- |
| Check if the object is in WaterCutoff stateTargetIsSeizedEqualWaterCutoffCheck if the object is in any seizure stateTargetIsSeizedEqualCheck if the object is not electrically cut offTargetIsSeizedNotEqualElectricityCutoff |
| Check if the object is in any seizure stateTargetIsSeizedEqualCheck if the object is not electrically cut offTargetIsSeizedNotEqualElectricityCutoff |
| Check if the object is not electrically cut offTargetIsSeizedNotEqualElectricityCutoff |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)

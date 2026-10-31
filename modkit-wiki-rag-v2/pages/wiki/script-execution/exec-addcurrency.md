---
document_id: "515408e68d84a65eb4f32ff91247167a863fbff01bab47d89929d8741a72cdea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency"
title: "Execute_AddCurrency"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:05+00:00"
content_sha256: "c375c317b87d56711a89776026f83d74ff9a763f9e1319b72478cb732e0de126"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addcurrency"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a currency amount to the specified entity.

# Parameters

| ParameterDescriptionBaseObjectThe entity that receives the currency.S1Currency id (Currency.Id).S2(Optional) Transaction type id (TransactionType.Id).F1Amount to add (can be negative). |
| --- |
| BaseObjectThe entity that receives the currency.S1Currency id (Currency.Id).S2(Optional) Transaction type id (TransactionType.Id).F1Amount to add (can be negative). |
| S1Currency id (Currency.Id).S2(Optional) Transaction type id (TransactionType.Id).F1Amount to add (can be negative). |
| S2(Optional) Transaction type id (TransactionType.Id).F1Amount to add (can be negative). |
| F1Amount to add (can be negative). |

# Examples

| DescriptionBaseObjectCommandS1S2F1Adds 1000 Mew to self.SelfAddCurrencyMew1000Spent 200 Mew on a purchase.TargetAddCurrencyMewExpenseBuy-200 |
| --- |
| Adds 1000 Mew to self.SelfAddCurrencyMew1000Spent 200 Mew on a purchase.TargetAddCurrencyMewExpenseBuy-200 |
| Spent 200 Mew on a purchase.TargetAddCurrencyMewExpenseBuy-200 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

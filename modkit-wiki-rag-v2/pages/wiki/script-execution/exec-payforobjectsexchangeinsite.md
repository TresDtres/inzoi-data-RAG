---
document_id: "5a1a341c76a6e39e356cabbd87a73d88d2a5730e0dfc4f98c975ebee4869b772"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-payforobjectsexchangeinsite"
title: "Execute_PayForObjectsExchangeInSite"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:36+00:00"
content_sha256: "09227693f3c13b450e5f8620ec0c99a8704d4fd398f29b2fc5ce4ac095b49504"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-payforobjectsexchangeinsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Deducts the exchange cost of the target object from the self character's currency balance. The exchange cost is calculated from the target entity. If the self character is enrolled in property damage insurance, the cost is also recorded in the insurance manager for future insurance payout calculations.

# Parameters

| ParameterDescriptionBaseObjectThe character who pays the exchange cost (Self).S1Currency type ID to deduct from the character's balance (e.g., Cash, Coin). |
| --- |
| BaseObjectThe character who pays the exchange cost (Self).S1Currency type ID to deduct from the character's balance (e.g., Cash, Coin). |
| S1Currency type ID to deduct from the character's balance (e.g., Cash, Coin). |

# Examples

| DescriptionBaseObjectCommandS1Pay exchange cost for the target object using CashSelfPayForObjectsExchangeInSiteCashPay for in-site object exchange using Coin currencySelfPayForObjectsExchangeInSiteCoinDeduct the exchange cost and log it for property damage insuranceSelfPayForObjectsExchangeInSiteCash |
| --- |
| Pay exchange cost for the target object using CashSelfPayForObjectsExchangeInSiteCashPay for in-site object exchange using Coin currencySelfPayForObjectsExchangeInSiteCoinDeduct the exchange cost and log it for property damage insuranceSelfPayForObjectsExchangeInSiteCash |
| Pay for in-site object exchange using Coin currencySelfPayForObjectsExchangeInSiteCoinDeduct the exchange cost and log it for property damage insuranceSelfPayForObjectsExchangeInSiteCash |
| Deduct the exchange cost and log it for property damage insuranceSelfPayForObjectsExchangeInSiteCash |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

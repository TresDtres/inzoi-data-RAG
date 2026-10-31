---
document_id: "669620967d7d59206e4222a73afc563de2499890be0d111a56293b0b3ced2daa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-payrestaurantsettlement"
title: "Execute_PayRestaurantSettlement"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:37+00:00"
content_sha256: "bdf633005a4675441f17d7de23914e281e8286d4eefd698fc3cd6a758c51c993"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-payrestaurantsettlement"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Attempts payment for the exact PendingPayment restaurant settlement group containing the BaseObject customer at the currently assigned table. Any member of the group can pay the full group bill. A failed payment leaves the group in PendingPayment so content can retry or let the business-close fallback settle it. Normal customer service content runs this from the employee interaction with BaseObject=Target(customer).

# Parameters

| ParameterDescriptionBaseObjectSelf or Target. Any customer in the settlement group.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| --- |
| BaseObjectSelf or Target. Any customer in the settlement group.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| F1 / F2Not used. Must be 0.ProbMust be 1. |
| ProbMust be 1. |

# Examples

| DescriptionBaseObjectCommandProbEmployee charges the selected member's completed partyTargetPayRestaurantSettlement1 |
| --- |
| Employee charges the selected member's completed partyTargetPayRestaurantSettlement1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

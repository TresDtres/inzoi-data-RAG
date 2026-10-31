---
document_id: "e370b19b342711b7340c011ae1926201f8b95f016e3b72e454301a22eac1d3c6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-payforobjectexchange"
title: "Execute_PayForObjectExchange"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:37+00:00"
content_sha256: "4d866712b257d26509e7558c28bd46bbb56c0b94b4c593cfd8af01407abfa3c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-payforobjectexchange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Deducts the exchange cost of the Target object from Self's specified currency (S1). If the Self character is enrolled in property damage insurance, the cost is recorded for insurance purposes.

# Note

The exchange cost is derived from the Target object's GetExchangeCost().

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self pays and Target is the exchanged objectS1Currency ID used for the payment |
| --- |
| BaseObjectNot directly used; Self pays and Target is the exchanged objectS1Currency ID used for the payment |
| S1Currency ID used for the payment |

# Examples

| DescriptionBaseObjectCommandS1Pay the exchange cost for the Target object using CoinSelfPayForObjectExchangeCoinDeduct exchange fee and log insurance costSelfPayForObjectExchangeCoin |
| --- |
| Pay the exchange cost for the Target object using CoinSelfPayForObjectExchangeCoinDeduct exchange fee and log insurance costSelfPayForObjectExchangeCoin |
| Deduct exchange fee and log insurance costSelfPayForObjectExchangeCoin |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

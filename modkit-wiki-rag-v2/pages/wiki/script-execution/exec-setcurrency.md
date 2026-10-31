---
document_id: "ec981e2097e5cec6b11c95bef9d06598920d65649bfe6f925490703b9679d26b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcurrency"
title: "Execute_SetCurrency"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:54+00:00"
content_sha256: "ccb4cb34f71db23b66488f4422f70d03e970d030496a36ac95c1af7e58832913"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setcurrency"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets the currency amount for the specified currency id, or for all non-CatShopPoint currencies.

# Parameters

| ParameterDescriptionBaseObjectTransaction instigator (used for record/context).S1(Optional) Currency id (Currency.Id). If None, sets all (except CatShopPoint).F1New amount to set. |
| --- |
| BaseObjectTransaction instigator (used for record/context).S1(Optional) Currency id (Currency.Id). If None, sets all (except CatShopPoint).F1New amount to set. |
| S1(Optional) Currency id (Currency.Id). If None, sets all (except CatShopPoint).F1New amount to set. |
| F1New amount to set. |

# Examples

| DescriptionBaseObjectCommandS1F1Sets self currency Mew to 5000.SelfSetCurrencyMew5000Sets all currencies (except CatShopPoint) to 0.SelfSetCurrency0 |
| --- |
| Sets self currency Mew to 5000.SelfSetCurrencyMew5000Sets all currencies (except CatShopPoint) to 0.SelfSetCurrency0 |
| Sets all currencies (except CatShopPoint) to 0.SelfSetCurrency0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

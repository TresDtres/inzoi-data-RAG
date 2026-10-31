---
document_id: "d49bc3b0a3385af155bc58f2f721cd2724766c92fa6bb067167a8ddf320f9e28"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency"
title: "Execute_ExchangeCurrency"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:27+00:00"
content_sha256: "b7ee471788b7dfec36af14248224d6b11c8be7ecf06ac18b0758db65b4cb5c13"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-exchangecurrency"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Transfers a random amount of currency between Self and Target. The payer is determined by BaseObject:

- BaseObject = Self : Self pays Target
- BaseObject = Target : Target pays Self

# Parameters

| ParameterDescriptionBaseObjectWho pays (Self or Target).S1Currency id (Currency.Id).F1Minimum amount (inclusive).F2Maximum amount (inclusive). |
| --- |
| BaseObjectWho pays (Self or Target).S1Currency id (Currency.Id).F1Minimum amount (inclusive).F2Maximum amount (inclusive). |
| S1Currency id (Currency.Id).F1Minimum amount (inclusive).F2Maximum amount (inclusive). |
| F1Minimum amount (inclusive).F2Maximum amount (inclusive). |
| F2Maximum amount (inclusive). |

# Examples

| DescriptionBaseObjectCommandS1F1F2Self pays target 100~200 Mew.SelfExchangeCurrencyMew100200Target pays self 50~100 Mew.TargetExchangeCurrencyMew50100 |
| --- |
| Self pays target 100~200 Mew.SelfExchangeCurrencyMew100200Target pays self 50~100 Mew.TargetExchangeCurrencyMew50100 |
| Target pays self 50~100 Mew.TargetExchangeCurrencyMew50100 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

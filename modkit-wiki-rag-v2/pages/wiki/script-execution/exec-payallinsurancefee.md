---
document_id: "c5babd3d2a9aa0becb99c10cae896670bbd20be88cf66b8e8423c50ef1e48950"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-payallinsurancefee"
title: "Execute_PayAllInsuranceFee"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:36+00:00"
content_sha256: "87f873d916ac300cc9df3f58dc313f7eaa4206435d22e01f9037ef281395e57b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-payallinsurancefee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Pays all currently due recurring insurance fees for the household and sends a success or failure message. Fees are paid in enrollment order; if the balance is insufficient for any fee, a failure message is sent. If all fees are paid successfully, a success message is sent.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose household insurance fees will be paid (Self or Target). |
| --- |
| BaseObjectThe entity whose household insurance fees will be paid (Self or Target). |

# Examples

| DescriptionBaseObjectCommandSelf pays all due insurance feesSelfPayAllInsuranceFeeTarget pays all due insurance feesTargetPayAllInsuranceFee |
| --- |
| Self pays all due insurance feesSelfPayAllInsuranceFeeTarget pays all due insurance feesTargetPayAllInsuranceFee |
| Target pays all due insurance feesTargetPayAllInsuranceFee |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

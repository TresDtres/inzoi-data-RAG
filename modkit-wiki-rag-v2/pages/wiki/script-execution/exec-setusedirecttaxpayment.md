---
document_id: "7c03afc56e302c44898b73a08b44aa85193981a6d25eb56cd7bde11d19d2c19c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setusedirecttaxpayment"
title: "Execute_SetUseDirectTaxPayment"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:57+00:00"
content_sha256: "836d73a8ec64c8df867de4f1620b1ed78e5658e1b48fd8850e14121e2da44a29"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setusedirecttaxpayment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets whether the BaseObject's household uses direct (manual) tax payment. A non-zero F1 value enables direct tax payment; zero disables it (switches to automatic).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose household tax payment mode will be setF1Non-zero to enable direct tax payment; zero to disable (automatic) |
| --- |
| BaseObjectCharacter whose household tax payment mode will be setF1Non-zero to enable direct tax payment; zero to disable (automatic) |
| F1Non-zero to enable direct tax payment; zero to disable (automatic) |

# Examples

| DescriptionBaseObjectCommandEnable direct tax payment for SelfSelfSetUseDirectTaxPaymentDisable direct tax payment for SelfSelfSetUseDirectTaxPaymentEnable direct tax payment for TargetTargetSetUseDirectTaxPaymentDisable direct tax payment for TargetTargetSetUseDirectTaxPayment |
| --- |
| Enable direct tax payment for SelfSelfSetUseDirectTaxPaymentDisable direct tax payment for SelfSelfSetUseDirectTaxPaymentEnable direct tax payment for TargetTargetSetUseDirectTaxPaymentDisable direct tax payment for TargetTargetSetUseDirectTaxPayment |
| Disable direct tax payment for SelfSelfSetUseDirectTaxPaymentEnable direct tax payment for TargetTargetSetUseDirectTaxPaymentDisable direct tax payment for TargetTargetSetUseDirectTaxPayment |
| Enable direct tax payment for TargetTargetSetUseDirectTaxPaymentDisable direct tax payment for TargetTargetSetUseDirectTaxPayment |
| Disable direct tax payment for TargetTargetSetUseDirectTaxPayment |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

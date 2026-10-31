---
document_id: "1ebedddcc806c1741bdf473a4d6e0ecd2787b8b2dcdcc6093cf57b50769ac1a0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-refundhouseholdbizpayment"
title: "Execute_RefundHouseholdBizPayment"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:42+00:00"
content_sha256: "8d305c2989063dd5a51d63e26a1e6a4c5eebb4de4e5009ae8b2af5f73b3c094c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-refundhouseholdbizpayment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Refunds currency from HouseholdBiz funds to the BaseObject customer at the current business site. The refund amount is copied from the customer's latest refundable ledger revenue.

# Parameters

| ParameterDescriptionBaseObjectThe customer entity receiving the refund (Self or Target).S1Currency ID to refund (e.g., Mew). |
| --- |
| BaseObjectThe customer entity receiving the refund (Self or Target).S1Currency ID to refund (e.g., Mew). |
| S1Currency ID to refund (e.g., Mew). |

# Examples

| DescriptionBaseObjectCommandRefund a customer at the current HouseholdBiz siteSelfRefundHouseholdBizPayment |
| --- |
| Refund a customer at the current HouseholdBiz siteSelfRefundHouseholdBizPayment |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

---
document_id: "22fd9862202c777cfee6450f97d4f0b865e6ab1532553ecd27b8f0e299156dd5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz"
title: "Execute_DeductCurrencyFromHouseholdBiz"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:24+00:00"
content_sha256: "83d403ef88c5eb1072c18dc42e27a51a729d975ad8cd8ed78236d2d0533a16df"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-deductcurrencyfromhouseholdbiz"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Deducts currency from HouseholdBiz funds when the BaseObject employee or manager uses materials or incurs a business expense. The amount is deducted from the business owner's household currency and recorded in the business ledger. Only works when the BaseObject is an employee or manager at the currently located HouseholdBiz site.

# Note

If the BaseObject is not an employee or manager at the located biz, or if the biz has insufficient funds, the deduction fails silently.

# Parameters

| ParameterDescriptionBaseObjectThe employee or manager entity making the business expense (Self or Target).S1Currency ID to deduct (e.g., Mew).S2Ledger category for the expense (e.g., InventoryPurchase).F1Amount to deduct (must be a positive value). |
| --- |
| BaseObjectThe employee or manager entity making the business expense (Self or Target).S1Currency ID to deduct (e.g., Mew).S2Ledger category for the expense (e.g., InventoryPurchase).F1Amount to deduct (must be a positive value). |
| S1Currency ID to deduct (e.g., Mew).S2Ledger category for the expense (e.g., InventoryPurchase).F1Amount to deduct (must be a positive value). |
| S2Ledger category for the expense (e.g., InventoryPurchase).F1Amount to deduct (must be a positive value). |
| F1Amount to deduct (must be a positive value). |

# Examples

| DescriptionBaseObjectCommandDeduct material cost from biz funds when employee purchasesSelfDeductCurrencyFromHouseholdBizDeduct expense from biz funds for target employeeTargetDeductCurrencyFromHouseholdBiz |
| --- |
| Deduct material cost from biz funds when employee purchasesSelfDeductCurrencyFromHouseholdBizDeduct expense from biz funds for target employeeTargetDeductCurrencyFromHouseholdBiz |
| Deduct expense from biz funds for target employeeTargetDeductCurrencyFromHouseholdBiz |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

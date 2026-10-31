---
document_id: "6d6b5bcfc896639584222bb2a5152a13df10cf3db6bd3ab6e3cabf893f8da20b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz"
title: "Execute_AddCurrencyToHouseholdBiz"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:05+00:00"
content_sha256: "e40535301bb2460d0c0cafa517ca4bcf182c939372c5aacb773b9619b1b1cfaa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addcurrencytohouseholdbiz"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds currency to the HouseholdBiz owner when the BaseObject entity makes a purchase at a business site. The transferred amount is multiplied by the business level's IncomeMultiplier and the active price policy. If no HouseholdBiz is found at the entity's location, only the original amount is deducted from the customer. Negative F1 values deduct currency from the customer without transferring income to the business owner.

# Note

Final amount transferred = OriginalAmount * LevelMultiplier * PricePolicyMultiplier. Price policy multipliers: VeryLow (0.5x), Low (0.75x), Normal (1.0x), High (1.5x), VeryHigh (2.0x). The currency widget effect is shown on the BaseObject entity.

# Parameters

| ParameterDescriptionBaseObjectThe customer or employee entity making the purchase (Self or Target).S1Currency ID to transfer (e.g., Mew).S2Ledger category for settlement (e.g., ProductSale, ServiceSale, EntranceFee).F1Original transaction amount. Positive = income to biz; Negative = deduction from customer only. |
| --- |
| BaseObjectThe customer or employee entity making the purchase (Self or Target).S1Currency ID to transfer (e.g., Mew).S2Ledger category for settlement (e.g., ProductSale, ServiceSale, EntranceFee).F1Original transaction amount. Positive = income to biz; Negative = deduction from customer only. |
| S1Currency ID to transfer (e.g., Mew).S2Ledger category for settlement (e.g., ProductSale, ServiceSale, EntranceFee).F1Original transaction amount. Positive = income to biz; Negative = deduction from customer only. |
| S2Ledger category for settlement (e.g., ProductSale, ServiceSale, EntranceFee).F1Original transaction amount. Positive = income to biz; Negative = deduction from customer only. |
| F1Original transaction amount. Positive = income to biz; Negative = deduction from customer only. |

# Examples

| DescriptionBaseObjectCommandCustomer pays for a product at a HouseholdBizSelfAddCurrencyToHouseholdBizCustomer pays for a service at a HouseholdBizTargetAddCurrencyToHouseholdBizDeduct cost from customer without income to biz ownerSelfAddCurrencyToHouseholdBiz |
| --- |
| Customer pays for a product at a HouseholdBizSelfAddCurrencyToHouseholdBizCustomer pays for a service at a HouseholdBizTargetAddCurrencyToHouseholdBizDeduct cost from customer without income to biz ownerSelfAddCurrencyToHouseholdBiz |
| Customer pays for a service at a HouseholdBizTargetAddCurrencyToHouseholdBizDeduct cost from customer without income to biz ownerSelfAddCurrencyToHouseholdBiz |
| Deduct cost from customer without income to biz ownerSelfAddCurrencyToHouseholdBiz |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

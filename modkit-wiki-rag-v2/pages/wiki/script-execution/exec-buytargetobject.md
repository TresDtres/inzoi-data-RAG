---
document_id: "d407c63d77ab0d24a327aa84e0400d7d801389813c741bbf3db8017fd36f39c7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject"
title: "Execute_BuyTargetObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:17+00:00"
content_sha256: "5845cde49043ecd39768e35bc45f26ba308654b356a0647609f3972ce0571d9f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-buytargetobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Self character purchases the BaseObject and pays the sale price to the owning household's oldest member. Deducts the sale price from Self's main currency and credits the seller household. After purchase, removes the object from the owning household's sale list and closes the sale.

# Note

Self must have enough main currency to cover the object's sale price.

# Parameters

| ParameterDescriptionBaseObjectThe game object being purchased |
| --- |
| BaseObjectThe game object being purchased |

# Examples

| DescriptionBaseObjectCommandSelf buys the targeted object at its sale priceTargetBuyTargetObjectSelf purchases a listed item from another householdTargetBuyTargetObject |
| --- |
| Self buys the targeted object at its sale priceTargetBuyTargetObjectSelf purchases a listed item from another householdTargetBuyTargetObject |
| Self purchases a listed item from another householdTargetBuyTargetObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

---
document_id: "1b82fc9a28ae592cd17e9ae441f07613630c1488d5c62cd7a63aaf9a58c3d6d5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject"
title: "Execute_BuyBizStallObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:17+00:00"
content_sha256: "0984512bdda4104276e0551b6ced30b3f395e66d9eec7bd8fe807d547a92e2f2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-buybizstallobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Purchases the Target game object on sale at the HouseholdBiz site where Self (the buyer) is located. Deducts the sale price from the buyer's currency, transfers the revenue to the business using the HouseholdBiz currency transfer system (with multiplier applied), resets the object's sale state, and transfers ownership to the buyer. Also evaluates purchased item quality for customer satisfaction.

# Note

Self and Target are resolved directly as EB1BaseObject::Self and EB1BaseObject::Target, not via BaseObject.

# Parameters

| ParameterDescriptionBaseObjectSelf is the buyer character at the HouseholdBiz site; Target is the game object to buy |
| --- |
| BaseObjectSelf is the buyer character at the HouseholdBiz site; Target is the game object to buy |

# Examples

| DescriptionBaseObjectCommandCustomer buys a displayed item from the biz stallSelfBuyBizStallObjectPlayer purchases a product from a player-owned shopSelfBuyBizStallObject |
| --- |
| Customer buys a displayed item from the biz stallSelfBuyBizStallObjectPlayer purchases a product from a player-owned shopSelfBuyBizStallObject |
| Player purchases a product from a player-owned shopSelfBuyBizStallObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

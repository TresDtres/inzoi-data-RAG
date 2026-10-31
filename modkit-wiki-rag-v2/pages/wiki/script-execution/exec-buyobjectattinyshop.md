---
document_id: "9db968ddb37788c559ff6c7bf2e263b1a54e7e958cdee7b1e898d8354acd1d6b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop"
title: "Execute_BuyObjectAtTinyShop"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:17+00:00"
content_sha256: "40ac46f2780a4ce2513801330add43a38d8771e35341dbaf9eb1f348da5a3bcb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-buyobjectattinyshop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

BaseObject character purchases the non-BaseObject item from a TinyShop. On success, ownership is transferred to the buyer, the item is moved to the buyer's inventory, and the price is deducted from the buyer's household currency.

# Note

The item's site must have a TinyShopComponent. If TinyShopComponent's SellObject returns false, nothing happens.

# Parameters

| ParameterDescriptionBaseObjectThe character that is buying the item; the non-BaseObject entity is the item being bought |
| --- |
| BaseObjectThe character that is buying the item; the non-BaseObject entity is the item being bought |

# Examples

| DescriptionBaseObjectCommandSelf buys the non-BaseObject item from a tiny shopSelfBuyObjectAtTinyShopTarget character purchases item from tiny shopTargetBuyObjectAtTinyShop |
| --- |
| Self buys the non-BaseObject item from a tiny shopSelfBuyObjectAtTinyShopTarget character purchases item from tiny shopTargetBuyObjectAtTinyShop |
| Target character purchases item from tiny shopTargetBuyObjectAtTinyShop |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

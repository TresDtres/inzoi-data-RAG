---
document_id: "32be72bbfbbe96dbe6c5b33a105099919e924d792e80014c72d0ed7d4cdd5c85"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sellgrabobject"
title: "Execute_SellGrabObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:52+00:00"
content_sha256: "02c11186524b1e6b2dd4f457b5cd37e090e9b6418dd1ef5fbb856d2326152fc7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sellgrabobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Detaches the held object from the Self character's hand in a Coop activity and destroys it, crediting the Self character's household with currency equal to the object's price. Called via AnimNotify's RunScript during the sale animation. Requires an active Coop activity and a handoverable object in hand; if either condition is not met, the action is ignored.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self character's held object is sold |
| --- |
| BaseObjectNot directly used; Self character's held object is sold |

# Examples

| DescriptionBaseObjectCommandSell the object currently held in hand during CoopSelfSellGrabObject |
| --- |
| Sell the object currently held in hand during CoopSelfSellGrabObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

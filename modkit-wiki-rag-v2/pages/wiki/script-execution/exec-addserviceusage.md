---
document_id: "098f409aeaa3d8b806f0184666b59558bfe7a2a69f0fc4db1ba8f4b2dc14c0b2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage"
title: "Execute_AddServiceUsage"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:10+00:00"
content_sha256: "e11cea3aee89587d37e7e4befa81e3d90fa925176cf82bc2961b95d7b123df4c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addserviceusage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds service usage to the site associated with the BaseObject. If the BaseObject is a character, the interacted game object is found separately. The usage amount (F1) is scaled by an efficiency multiplier derived from the object's quality rating. If the BaseObject is a character, usage is added to the character's home site; otherwise it uses the object's located site.

# Parameters

| ParameterDescriptionBaseObjectThe character or game object used to determine which site receives the usage.S1Service type ID to add usage for (e.g., Water, Electricity, Heating).F1Base usage amount to add (scaled by the object's efficiency multiplier). |
| --- |
| BaseObjectThe character or game object used to determine which site receives the usage.S1Service type ID to add usage for (e.g., Water, Electricity, Heating).F1Base usage amount to add (scaled by the object's efficiency multiplier). |
| S1Service type ID to add usage for (e.g., Water, Electricity, Heating).F1Base usage amount to add (scaled by the object's efficiency multiplier). |
| F1Base usage amount to add (scaled by the object's efficiency multiplier). |

# Examples

| DescriptionBaseObjectCommandS1F1Add 1 usage of Water service to Self's home siteSelfAddServiceUsageWater1Add 2 usages of Electricity service to Target's located siteTargetAddServiceUsageElectricity2Add 5 usages of Heating service to the siteSelfAddServiceUsageHeating5 |
| --- |
| Add 1 usage of Water service to Self's home siteSelfAddServiceUsageWater1Add 2 usages of Electricity service to Target's located siteTargetAddServiceUsageElectricity2Add 5 usages of Heating service to the siteSelfAddServiceUsageHeating5 |
| Add 2 usages of Electricity service to Target's located siteTargetAddServiceUsageElectricity2Add 5 usages of Heating service to the siteSelfAddServiceUsageHeating5 |
| Add 5 usages of Heating service to the siteSelfAddServiceUsageHeating5 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

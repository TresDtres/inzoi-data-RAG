---
document_id: "9a16d3aaa57e0e28366dbb8eb6f540043067d932d75547ed3eadf4fc26d268a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice"
title: "Execute_FinishService"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:28+00:00"
content_sha256: "c855f25289e45228a1a76bebb801d49e825db8d747f76ecc00e0c6daf3898232"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-finishservice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Finishes an active service associated with the BaseObject entity. The subject type (S1) determines whether the entity is treated as the service NPC or as the trigger entity.

# Parameters

| ParameterDescriptionBaseObjectThe entity related to the service to be finished (Self or Target).S1The subject type string: ServiceNpc (entity is the NPC performing the service) or TriggerEntity (entity triggered the service).S2Optional Service Group ID to filter which services to finish when using TriggerEntity mode. |
| --- |
| BaseObjectThe entity related to the service to be finished (Self or Target).S1The subject type string: ServiceNpc (entity is the NPC performing the service) or TriggerEntity (entity triggered the service).S2Optional Service Group ID to filter which services to finish when using TriggerEntity mode. |
| S1The subject type string: ServiceNpc (entity is the NPC performing the service) or TriggerEntity (entity triggered the service).S2Optional Service Group ID to filter which services to finish when using TriggerEntity mode. |
| S2Optional Service Group ID to filter which services to finish when using TriggerEntity mode. |

# Examples

| DescriptionBaseObjectCommandFinish the service currently performed by the NPC (Self)SelfFinishServiceFinish all Delivery group services triggered by TargetTargetFinishService |
| --- |
| Finish the service currently performed by the NPC (Self)SelfFinishServiceFinish all Delivery group services triggered by TargetTargetFinishService |
| Finish all Delivery group services triggered by TargetTargetFinishService |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

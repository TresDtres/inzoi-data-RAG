---
document_id: "33dae9553816ceac9917f812a89727ccdbf4a939717f6d0e889bc0ab38d4ace1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-requestservice"
title: "Execute_RequestService"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:48+00:00"
content_sha256: "3c19e198ed5e6ec149a383848e87729283001a264f79f09e6cf8edcbb1dc384e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-requestservice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Submits a service request for the BaseObject entity using the specified service ID. The destination site for the service is automatically resolved from the service configuration.

# Parameters

| ParameterDescriptionBaseObjectThe entity that triggers the service request (Self or Target).S1The Service ID to request (from FB1ServiceTableRow). |
| --- |
| BaseObjectThe entity that triggers the service request (Self or Target).S1The Service ID to request (from FB1ServiceTableRow). |
| S1The Service ID to request (from FB1ServiceTableRow). |

# Examples

| DescriptionBaseObjectCommandRequest a Taxi service for SelfSelfRequestServiceRequest a Delivery service for TargetTargetRequestService |
| --- |
| Request a Taxi service for SelfSelfRequestServiceRequest a Delivery service for TargetTargetRequestService |
| Request a Delivery service for TargetTargetRequestService |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

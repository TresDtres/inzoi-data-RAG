---
document_id: "438197a2c2c780e3af248affac233b131dfdfa4932ec357eada373344467cce7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment"
title: "Execute_ActivatePendingBizServiceAssignment"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:03+00:00"
content_sha256: "c8c0bf1a6c041a319065e776bcf2ccea4697582bb59b522b17aa59dbf3a65c2d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-activatependingbizserviceassignment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Activates a pending business-service assignment from an employee-role Self to a customer-role Target (BL-58469). Either role may be the Coop host; the resolved role context, rather than the host direction, is authoritative. The pending assignment is re-resolved from Target customer at execution time. If the customer was reassigned while the talk was running, the currently pending assignment is authoritative. The current restaurant adapter then opens the assigned table seats for that party.

# Parameters

| ParameterDescriptionBaseObjectTarget is the CustomerRole member of the pending customer partySelfThe EmployeeRole employee or manager performing the guidance |
| --- |
| BaseObjectTarget is the CustomerRole member of the pending customer partySelfThe EmployeeRole employee or manager performing the guidance |
| SelfThe EmployeeRole employee or manager performing the guidance |

# Data Placement

In a guidance Coop, use this Execute at the start of the first step after the POS talk has completed. Regardless of whether the employee or customer started the Coop, resolve Self=EmployeeRole and Target=CustomerRole. Do not place it at the talk step start because that opens the assignment before the talk succeeds, or in generic Coop.FinishScriptIds because that context has no Target.

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)[ForcedSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsale)

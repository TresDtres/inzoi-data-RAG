---
document_id: "3daa0847752159bcfa4773ed7607f1d4701d0cfca804c90d102565afcfedf462"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects"
title: "Execute_SeizeAndFineStolenObjects"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:50+00:00"
content_sha256: "2da1780dc439e03ae5a5038496a2e892d47cd9a3763ae9f796da399b2e9ecac4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-seizeandfinestolenobjects"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Seizes all stolen objects from the specified character and imposes a fine based on each object's original price multiplied by F1. Grabbed objects are detached and destroyed. Inventory objects are removed and destroyed. The total fine is deducted from the character's currency.

# Parameters

| ParameterDescriptionBaseObjectThe character whose stolen objects will be seized (Self or Target).S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search.F1Fine multiplier applied to each stolen object's original price. |
| --- |
| BaseObjectThe character whose stolen objects will be seized (Self or Target).S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search.F1Fine multiplier applied to each stolen object's original price. |
| S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search.F1Fine multiplier applied to each stolen object's original price. |
| S2Set to IncludeSystem to include system-owned objects in the search.F1Fine multiplier applied to each stolen object's original price. |
| F1Fine multiplier applied to each stolen object's original price. |

# Examples

| DescriptionBaseObjectCommandS1S2F1Seize all stolen objects with 1x fineSelfSeizeAndFineStolenObjects1.0Seize inventory items only with 2x fineSelfSeizeAndFineStolenObjectsInventory2.0Seize grabbed items including system objects with 1xTargetSeizeAndFineStolenObjectsGrabIncludeSystem1.0 |
| --- |
| Seize all stolen objects with 1x fineSelfSeizeAndFineStolenObjects1.0Seize inventory items only with 2x fineSelfSeizeAndFineStolenObjectsInventory2.0Seize grabbed items including system objects with 1xTargetSeizeAndFineStolenObjectsGrabIncludeSystem1.0 |
| Seize inventory items only with 2x fineSelfSeizeAndFineStolenObjectsInventory2.0Seize grabbed items including system objects with 1xTargetSeizeAndFineStolenObjectsGrabIncludeSystem1.0 |
| Seize grabbed items including system objects with 1xTargetSeizeAndFineStolenObjectsGrabIncludeSystem1.0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)

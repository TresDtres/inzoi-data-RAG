---
document_id: "c4b6ad8d4f3290680071167566953772f45b45f3f6e59709821152bf37ee2d0b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal"
title: "Execute_CompleteSteal"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:23+00:00"
content_sha256: "5b377826d90da026e56e6e2a18e912853d7f416e9cf3c47bf0c6a5b889fa7efa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-completesteal"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Completes the theft by transferring ownership of all stolen objects associated with the BaseObject character to that character's household. The scope of objects searched is controlled by S1, and S2 controls whether system-owned objects are included.

# Parameters

| ParameterDescriptionBaseObjectThe character completing the steal (Self or Target).S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search. |
| --- |
| BaseObjectThe character completing the steal (Self or Target).S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search. |
| S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search. |
| S2Set to IncludeSystem to include system-owned objects in the search. |

# Examples

| DescriptionBaseObjectCommandS1S2Complete steal for all stolen objectsSelfCompleteStealComplete steal for inventory items onlySelfCompleteStealInventoryComplete steal including system objectsSelfCompleteStealIncludeSystem |
| --- |
| Complete steal for all stolen objectsSelfCompleteStealComplete steal for inventory items onlySelfCompleteStealInventoryComplete steal including system objectsSelfCompleteStealIncludeSystem |
| Complete steal for inventory items onlySelfCompleteStealInventoryComplete steal including system objectsSelfCompleteStealIncludeSystem |
| Complete steal including system objectsSelfCompleteStealIncludeSystem |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)

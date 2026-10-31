---
document_id: "b50fa33b5f0255183f3fec68afe8d3224a53af87fcb3eb6a7578f49893497ad1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount"
title: "Condition_LoanOverdueCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:51+00:00"
content_sha256: "1dc816859620e14c027ec5194d808e079c7762925884961820b818f404ddb1f2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-loanoverduecount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject's loan overdue count for a specified loan product matches the given condition. For Mortgage loans, the overdue count is checked across all Household members. For other loan types, only the BaseObject itself is checked.

# Parameters

| ParameterDescriptionBaseObjectThe character whose loan overdue count will be checked.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Loan product ID to check, as defined in LoanProduct.json.F1The value to compare against the overdue count. |
| --- |
| BaseObjectThe character whose loan overdue count will be checked.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Loan product ID to check, as defined in LoanProduct.json.F1The value to compare against the overdue count. |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1Loan product ID to check, as defined in LoanProduct.json.F1The value to compare against the overdue count. |
| S1Loan product ID to check, as defined in LoanProduct.json.F1The value to compare against the overdue count. |
| F1The value to compare against the overdue count. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the Mortgage loan overdue count is 0SelfLoanOverdueCountEqualCheck if the LoanShark overdue count is greater than 2SelfLoanOverdueCountGreaterCheck if the Mortgage loan overdue count is 1 or moreSelfLoanOverdueCountGreaterOrEqualCheck if target's LoanShark overdue count equals 3TargetLoanOverdueCountEqual |
| --- |
| Check if the Mortgage loan overdue count is 0SelfLoanOverdueCountEqualCheck if the LoanShark overdue count is greater than 2SelfLoanOverdueCountGreaterCheck if the Mortgage loan overdue count is 1 or moreSelfLoanOverdueCountGreaterOrEqualCheck if target's LoanShark overdue count equals 3TargetLoanOverdueCountEqual |
| Check if the LoanShark overdue count is greater than 2SelfLoanOverdueCountGreaterCheck if the Mortgage loan overdue count is 1 or moreSelfLoanOverdueCountGreaterOrEqualCheck if target's LoanShark overdue count equals 3TargetLoanOverdueCountEqual |
| Check if the Mortgage loan overdue count is 1 or moreSelfLoanOverdueCountGreaterOrEqualCheck if target's LoanShark overdue count equals 3TargetLoanOverdueCountEqual |
| Check if target's LoanShark overdue count equals 3TargetLoanOverdueCountEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)

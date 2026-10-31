---
document_id: "466991c10330ff2df7086d59aabc1b676a5157a2905846095dd754903e1a7bbc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance"
title: "Condition_IsDelayInsurance"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:26+00:00"
content_sha256: "6670760b2503f52530d97ed7e7bf13cdb528a86b3f4763097a5b6d64a92aaa98"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isdelayinsurance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified insurance for the character's household is in an overdue (delinquent) state.

# Parameters

| ParameterDescriptionBaseObjectThe character whose household insurance status is checked (Self or Target).CompareTypeEqual (insurance is overdue), NotEqual (insurance is not overdue).S1Insurance ID to check (Insurance.json Id). |
| --- |
| BaseObjectThe character whose household insurance status is checked (Self or Target).CompareTypeEqual (insurance is overdue), NotEqual (insurance is not overdue).S1Insurance ID to check (Insurance.json Id). |
| CompareTypeEqual (insurance is overdue), NotEqual (insurance is not overdue).S1Insurance ID to check (Insurance.json Id). |
| S1Insurance ID to check (Insurance.json Id). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self's life insurance is overdueSelfIsDelayInsuranceEqualInsurance_LifeCheck if Target's life insurance is not overdueTargetIsDelayInsuranceNotEqualInsurance_LifeCheck if Self's vehicle insurance is overdueSelfIsDelayInsuranceEqualInsurance_VehicleCheck if Self's health insurance is not overdueSelfIsDelayInsuranceNotEqualInsurance_Health |
| --- |
| Check if Self's life insurance is overdueSelfIsDelayInsuranceEqualInsurance_LifeCheck if Target's life insurance is not overdueTargetIsDelayInsuranceNotEqualInsurance_LifeCheck if Self's vehicle insurance is overdueSelfIsDelayInsuranceEqualInsurance_VehicleCheck if Self's health insurance is not overdueSelfIsDelayInsuranceNotEqualInsurance_Health |
| Check if Target's life insurance is not overdueTargetIsDelayInsuranceNotEqualInsurance_LifeCheck if Self's vehicle insurance is overdueSelfIsDelayInsuranceEqualInsurance_VehicleCheck if Self's health insurance is not overdueSelfIsDelayInsuranceNotEqualInsurance_Health |
| Check if Self's vehicle insurance is overdueSelfIsDelayInsuranceEqualInsurance_VehicleCheck if Self's health insurance is not overdueSelfIsDelayInsuranceNotEqualInsurance_Health |
| Check if Self's health insurance is not overdueSelfIsDelayInsuranceNotEqualInsurance_Health |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)

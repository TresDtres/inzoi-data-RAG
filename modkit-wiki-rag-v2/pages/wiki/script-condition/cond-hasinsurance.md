---
document_id: "62461120ba0a782d145cbabb24df08eb8189b598646ed9c95c96033de30daec4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance"
title: "Condition_HasInsurance"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:07+00:00"
content_sha256: "44ed11f6784490a80934a38c150c900a5da25166bc8f58c4ae22b2abdab286d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasinsurance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the household of the specified character is enrolled in the given insurance (S1).

# Parameters

| ParameterDescriptionBaseObjectThe character to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Insurance id (Insurance.Id). |
| --- |
| BaseObjectThe character to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Insurance id (Insurance.Id). |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Insurance id (Insurance.Id). |
| S1Insurance id (Insurance.Id). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether self has joined the given insurance.SelfHasInsuranceEqualInsurance_*Checks whether target has NOT joined it.TargetHasInsuranceNotEqualInsurance_* |
| --- |
| Checks whether self has joined the given insurance.SelfHasInsuranceEqualInsurance_*Checks whether target has NOT joined it.TargetHasInsuranceNotEqualInsurance_* |
| Checks whether target has NOT joined it.TargetHasInsuranceNotEqualInsurance_* |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)

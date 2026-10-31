---
document_id: "4e19736f1f39356a1e43163c0231ac9e40e05729e467946454edced4eee8654d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee"
title: "Condition_CanPayInsuranceFee"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:49+00:00"
content_sha256: "f0fbea13ff2760520410ee0c8a246aab12f6fc7477cc3896842799b6e34642b3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canpayinsurancefee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified entity has enough currency to pay the insurance fee for S1.

Fee type can be specified with S2:

- S2 = joining : compares against JoiningFee

Otherwise (including when S2 is None), this condition uses the recurring-fee path:

- compares against RecurringFee (only valid when the insurance has been billed)
- if the insurance status is overdue, it requires 2x recurring fee (B1Insurance::MAX_OVERDUE_COUNT == 2)

# Parameters

| ParameterDescriptionBaseObjectThe entity used as payer (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Insurance id (Insurance.Id).S2(Optional) Fee type: joining. (Otherwise treated as recurring.) |
| --- |
| BaseObjectThe entity used as payer (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Insurance id (Insurance.Id).S2(Optional) Fee type: joining. (Otherwise treated as recurring.) |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Insurance id (Insurance.Id).S2(Optional) Fee type: joining. (Otherwise treated as recurring.) |
| S1Insurance id (Insurance.Id).S2(Optional) Fee type: joining. (Otherwise treated as recurring.) |
| S2(Optional) Fee type: joining. (Otherwise treated as recurring.) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks whether self can pay the joining fee.SelfCanPayInsuranceFeeEqualInsurance_*joiningChecks whether self can pay the recurring fee.SelfCanPayInsuranceFeeEqualInsurance_* |
| --- |
| Checks whether self can pay the joining fee.SelfCanPayInsuranceFeeEqualInsurance_*joiningChecks whether self can pay the recurring fee.SelfCanPayInsuranceFeeEqualInsurance_* |
| Checks whether self can pay the recurring fee.SelfCanPayInsuranceFeeEqualInsurance_* |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)

---
document_id: "c00f81a3d4a6fb3c1010404d7285f30a241f12daa03ad5b12de3c58da88abbd7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement"
title: "Execute_LoanDisbursement"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:32+00:00"
content_sha256: "0b3fe95b3e6410e902e2f6be6cd89e273c526b40e164fd76e39624ac584ab09b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-loandisbursement"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Disburses a loan of the specified product and amount to the BaseObject character.

# Parameters

| ParameterDescriptionBaseObjectThe character who will receive the loan (Self or Target).S1Loan product ID as defined in LoanProduct.json.F1Loan amount to disburse. |
| --- |
| BaseObjectThe character who will receive the loan (Self or Target).S1Loan product ID as defined in LoanProduct.json.F1Loan amount to disburse. |
| S1Loan product ID as defined in LoanProduct.json.F1Loan amount to disburse. |
| F1Loan amount to disburse. |

# Examples

| DescriptionBaseObjectCommandDisburse a 5000 Mew Mortgage loan to selfSelfLoanDisbursementDisburse a 3000 Mew LoanShark loan to targetTargetLoanDisbursementDisburse a 10000 Mew Mortgage loan to targetTargetLoanDisbursement |
| --- |
| Disburse a 5000 Mew Mortgage loan to selfSelfLoanDisbursementDisburse a 3000 Mew LoanShark loan to targetTargetLoanDisbursementDisburse a 10000 Mew Mortgage loan to targetTargetLoanDisbursement |
| Disburse a 3000 Mew LoanShark loan to targetTargetLoanDisbursementDisburse a 10000 Mew Mortgage loan to targetTargetLoanDisbursement |
| Disburse a 10000 Mew Mortgage loan to targetTargetLoanDisbursement |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)

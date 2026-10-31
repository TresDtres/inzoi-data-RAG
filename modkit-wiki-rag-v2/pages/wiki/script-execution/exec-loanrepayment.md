---
document_id: "fa01a674f79115fff402a849fb548425552a84ef799ef0c75727b5482002a802"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment"
title: "Execute_LoanRepayment"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:32+00:00"
content_sha256: "56e58604e7416fa6a4ec8e7e0b71b61d7bcbca2d828c123296fedd5a1ddf9bd2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-loanrepayment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Processes a loan repayment for the BaseObject entity. The repayment type and amount are determined by the provided parameters.

# Parameters

| ParameterDescriptionBaseObjectThe entity that performs the repayment (Self or Target).S1Loan product ID to repay, as defined in LoanProduct.json.S2Repayment type: Interest (pay interest only), All (pay principal + interest in full), FixedAmount (fixed amount).F1Repayment amount. Only used when S2 is FixedAmount. |
| --- |
| BaseObjectThe entity that performs the repayment (Self or Target).S1Loan product ID to repay, as defined in LoanProduct.json.S2Repayment type: Interest (pay interest only), All (pay principal + interest in full), FixedAmount (fixed amount).F1Repayment amount. Only used when S2 is FixedAmount. |
| S1Loan product ID to repay, as defined in LoanProduct.json.S2Repayment type: Interest (pay interest only), All (pay principal + interest in full), FixedAmount (fixed amount).F1Repayment amount. Only used when S2 is FixedAmount. |
| S2Repayment type: Interest (pay interest only), All (pay principal + interest in full), FixedAmount (fixed amount).F1Repayment amount. Only used when S2 is FixedAmount. |
| F1Repayment amount. Only used when S2 is FixedAmount. |

# Examples

| DescriptionBaseObjectCommandPay interest only on a Mortgage loanSelfLoanRepaymentPay off the full LoanShark loan (principal + interest)SelfLoanRepaymentPay a fixed amount of 1000 toward a Mortgage loanSelfLoanRepaymentPay off the full Mortgage loan for targetTargetLoanRepayment |
| --- |
| Pay interest only on a Mortgage loanSelfLoanRepaymentPay off the full LoanShark loan (principal + interest)SelfLoanRepaymentPay a fixed amount of 1000 toward a Mortgage loanSelfLoanRepaymentPay off the full Mortgage loan for targetTargetLoanRepayment |
| Pay off the full LoanShark loan (principal + interest)SelfLoanRepaymentPay a fixed amount of 1000 toward a Mortgage loanSelfLoanRepaymentPay off the full Mortgage loan for targetTargetLoanRepayment |
| Pay a fixed amount of 1000 toward a Mortgage loanSelfLoanRepaymentPay off the full Mortgage loan for targetTargetLoanRepayment |
| Pay off the full Mortgage loan for targetTargetLoanRepayment |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)

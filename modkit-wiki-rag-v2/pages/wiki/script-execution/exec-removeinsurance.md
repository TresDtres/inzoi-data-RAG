---
document_id: "eaee29afc1a1c4e062c92024a276dec92650287f2f679418cfeecb1b87c0b0c0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance"
title: "Execute_RemoveInsurance"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:45+00:00"
content_sha256: "3a44910559946586a48f2da91a830ccdb4d44439055bbba42e3788cc43e8ae25"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removeinsurance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Cancels the specified insurance for the entity and sends a cancellation message. If the entity is not enrolled in the specified insurance, a warning log is printed and nothing happens.

# Parameters

| ParameterDescriptionBaseObjectThe entity to cancel insurance for (Self or Target).S1Insurance ID (Insurance.json Id). |
| --- |
| BaseObjectThe entity to cancel insurance for (Self or Target).S1Insurance ID (Insurance.json Id). |
| S1Insurance ID (Insurance.json Id). |

# Examples

| DescriptionBaseObjectCommandS1Self cancels life insuranceSelfRemoveInsuranceInsurance_LifeTarget cancels life insuranceTargetRemoveInsuranceInsurance_LifeSelf cancels vehicle insuranceSelfRemoveInsuranceInsurance_VehicleTarget cancels health insuranceTargetRemoveInsuranceInsurance_Health |
| --- |
| Self cancels life insuranceSelfRemoveInsuranceInsurance_LifeTarget cancels life insuranceTargetRemoveInsuranceInsurance_LifeSelf cancels vehicle insuranceSelfRemoveInsuranceInsurance_VehicleTarget cancels health insuranceTargetRemoveInsuranceInsurance_Health |
| Target cancels life insuranceTargetRemoveInsuranceInsurance_LifeSelf cancels vehicle insuranceSelfRemoveInsuranceInsurance_VehicleTarget cancels health insuranceTargetRemoveInsuranceInsurance_Health |
| Self cancels vehicle insuranceSelfRemoveInsuranceInsurance_VehicleTarget cancels health insuranceTargetRemoveInsuranceInsurance_Health |
| Target cancels health insuranceTargetRemoveInsuranceInsurance_Health |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)

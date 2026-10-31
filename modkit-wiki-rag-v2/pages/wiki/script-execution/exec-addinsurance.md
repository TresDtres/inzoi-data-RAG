---
document_id: "152724a2a75c151a20410d60697479e972a510055aaf29442c53b911c60f9d8b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance"
title: "Execute_AddInsurance"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:07+00:00"
content_sha256: "e2de1561ca799486030b0aa5b9f89f6bbc15e05ad120112c9ec9173e90199788"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addinsurance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Enrolls the specified entity into an insurance plan. If the entity is already enrolled in the specified insurance, a warning log is generated and nothing happens.

# Parameters

| ParameterDescriptionBaseObjectThe entity to enroll in insurance (Self or Target).S1Insurance ID (Insurance.json Id). |
| --- |
| BaseObjectThe entity to enroll in insurance (Self or Target).S1Insurance ID (Insurance.json Id). |
| S1Insurance ID (Insurance.json Id). |

# Examples

| DescriptionBaseObjectCommandS1Self enrolls in life insuranceSelfAddInsuranceInsurance_LifeTarget enrolls in life insuranceTargetAddInsuranceInsurance_LifeSelf enrolls in vehicle insuranceSelfAddInsuranceInsurance_VehicleTarget enrolls in health insuranceTargetAddInsuranceInsurance_Health |
| --- |
| Self enrolls in life insuranceSelfAddInsuranceInsurance_LifeTarget enrolls in life insuranceTargetAddInsuranceInsurance_LifeSelf enrolls in vehicle insuranceSelfAddInsuranceInsurance_VehicleTarget enrolls in health insuranceTargetAddInsuranceInsurance_Health |
| Target enrolls in life insuranceTargetAddInsuranceInsurance_LifeSelf enrolls in vehicle insuranceSelfAddInsuranceInsurance_VehicleTarget enrolls in health insuranceTargetAddInsuranceInsurance_Health |
| Self enrolls in vehicle insuranceSelfAddInsuranceInsurance_VehicleTarget enrolls in health insuranceTargetAddInsuranceInsurance_Health |
| Target enrolls in health insuranceTargetAddInsuranceInsurance_Health |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)

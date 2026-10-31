---
document_id: "d9de6af2ca8720442edcf56c65efa09c69c56bdf9fb50776d3d10c5704510da8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-takeinsurancereward"
title: "Execute_TakeInsuranceReward"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:03+00:00"
content_sha256: "c145249248f9aba63789eedcf5f9e0b872d25f83242fd53048e2f72178f98b51"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-takeinsurancereward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Processes the claim payout (reward) for the specified insurance for the entity's household.

# Parameters

| ParameterDescriptionBaseObjectThe character whose household receives the insurance reward (Self or Target).S1Insurance ID to claim the reward from (Insurance.json Id). |
| --- |
| BaseObjectThe character whose household receives the insurance reward (Self or Target).S1Insurance ID to claim the reward from (Insurance.json Id). |
| S1Insurance ID to claim the reward from (Insurance.json Id). |

# Examples

| DescriptionBaseObjectCommandS1Self claims the reward from life insuranceSelfTakeInsuranceRewardInsurance_LifeTarget claims the reward from life insuranceTargetTakeInsuranceRewardInsurance_LifeSelf claims the reward from vehicle insuranceSelfTakeInsuranceRewardInsurance_VehicleTarget claims the reward from health insuranceTargetTakeInsuranceRewardInsurance_Health |
| --- |
| Self claims the reward from life insuranceSelfTakeInsuranceRewardInsurance_LifeTarget claims the reward from life insuranceTargetTakeInsuranceRewardInsurance_LifeSelf claims the reward from vehicle insuranceSelfTakeInsuranceRewardInsurance_VehicleTarget claims the reward from health insuranceTargetTakeInsuranceRewardInsurance_Health |
| Target claims the reward from life insuranceTargetTakeInsuranceRewardInsurance_LifeSelf claims the reward from vehicle insuranceSelfTakeInsuranceRewardInsurance_VehicleTarget claims the reward from health insuranceTargetTakeInsuranceRewardInsurance_Health |
| Self claims the reward from vehicle insuranceSelfTakeInsuranceRewardInsurance_VehicleTarget claims the reward from health insuranceTargetTakeInsuranceRewardInsurance_Health |
| Target claims the reward from health insuranceTargetTakeInsuranceRewardInsurance_Health |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)

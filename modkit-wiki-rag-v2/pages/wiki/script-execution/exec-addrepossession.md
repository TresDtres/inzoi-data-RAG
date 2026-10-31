---
document_id: "c97810303367468e0d376e988e744aab4cac63a0b8ae980342423a5a8fb79eb1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession"
title: "Execute_AddRepossession"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:10+00:00"
content_sha256: "8d45e5bcfb73290836de0e2fd96de15f849e424c9d7ea74baa24a1ee7d3e31aa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addrepossession"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds the BaseObject game object to the list of repossessed objects in the site where it is currently located. This action only registers the object for repossession; to complete the process, also change the object's state to the Repossession state separately using ChangeState.

# Parameters

| ParameterDescriptionBaseObjectThe game object to be marked as a repossession target (Self or Target). |
| --- |
| BaseObjectThe game object to be marked as a repossession target (Self or Target). |

# Examples

| DescriptionBaseObjectCommandMark Self game object as a repossession targetSelfAddRepossessionMark Target game object as a repossession targetTargetAddRepossessionRegister a site object in the repossession listSelfAddRepossession |
| --- |
| Mark Self game object as a repossession targetSelfAddRepossessionMark Target game object as a repossession targetTargetAddRepossessionRegister a site object in the repossession listSelfAddRepossession |
| Mark Target game object as a repossession targetTargetAddRepossessionRegister a site object in the repossession listSelfAddRepossession |
| Register a site object in the repossession listSelfAddRepossession |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)

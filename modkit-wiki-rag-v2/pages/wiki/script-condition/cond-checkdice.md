---
document_id: "c9ec359b103cf3649dbca3255971dbf59b1ee9c71009fcea6dbb97de14def6f7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkdice"
title: "Condition_CheckDice"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:52+00:00"
content_sha256: "9a93855395b3c6bc6aeb46bf46da62b11cf8515ffddd91497852bf5ff275d218"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checkdice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the previously rolled dice value falls within the specified range without rolling again. Used after CheckDiceWithRoll to re-evaluate the same roll result.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose previously rolled dice value is checkedS1Number of dice faces used when the dice was originally rolled (default: 100)F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| --- |
| BaseObjectThe entity whose previously rolled dice value is checkedS1Number of dice faces used when the dice was originally rolled (default: 100)F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| S1Number of dice faces used when the dice was originally rolled (default: 100)F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| F2Maximum value of the valid range (inclusive) |

# Examples

| DescriptionBaseObjectCommandS1F1F2Succeed if previously rolled 100-die value is 1-50SelfCheckDice150Succeed if previously rolled 6-die value is 1-3SelfCheckDice613Succeed if previously rolled 100-die value is 1-30SelfCheckDice130Always succeed on the previous 100-die rollSelfCheckDice1100 |
| --- |
| Succeed if previously rolled 100-die value is 1-50SelfCheckDice150Succeed if previously rolled 6-die value is 1-3SelfCheckDice613Succeed if previously rolled 100-die value is 1-30SelfCheckDice130Always succeed on the previous 100-die rollSelfCheckDice1100 |
| Succeed if previously rolled 6-die value is 1-3SelfCheckDice613Succeed if previously rolled 100-die value is 1-30SelfCheckDice130Always succeed on the previous 100-die rollSelfCheckDice1100 |
| Succeed if previously rolled 100-die value is 1-30SelfCheckDice130Always succeed on the previous 100-die rollSelfCheckDice1100 |
| Always succeed on the previous 100-die rollSelfCheckDice1100 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoProbability & Control[CheckDiceWithRoll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkdicewithroll)

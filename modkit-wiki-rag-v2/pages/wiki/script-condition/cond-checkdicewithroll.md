---
document_id: "83f70313d8fa407cd7231a7271e7c0bbe9c82feaa165c961d7fac383bd2a27f5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkdicewithroll"
title: "Condition_CheckDiceWithRoll"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:52+00:00"
content_sha256: "dcbf4990027d915a37aced7486790c43926c85c2b96326177fc2967248ceceb7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checkdicewithroll"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Rolls the dice and checks whether the result falls within the specified range (inclusive).

# Parameters

| ParameterDescriptionBaseObjectThe entity for which the dice is rolledCompareTypeNot used; pass-through result is based on range checkS1Number of dice faces (default: 100 if omitted)F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| --- |
| BaseObjectThe entity for which the dice is rolledCompareTypeNot used; pass-through result is based on range checkS1Number of dice faces (default: 100 if omitted)F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| CompareTypeNot used; pass-through result is based on range checkS1Number of dice faces (default: 100 if omitted)F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| S1Number of dice faces (default: 100 if omitted)F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| F1Minimum value of the valid range (inclusive)F2Maximum value of the valid range (inclusive) |
| F2Maximum value of the valid range (inclusive) |

# Examples

| DescriptionBaseObjectCommandS1F1F250% chance success on a 100-sided dieSelfCheckDiceWithRoll150Roll a 6-sided die and succeed on 1-3SelfCheckDiceWithRoll61330% chance success on a 100-sided dieSelfCheckDiceWithRoll130Always succeed on a 100-sided dieSelfCheckDiceWithRoll1100 |
| --- |
| 50% chance success on a 100-sided dieSelfCheckDiceWithRoll150Roll a 6-sided die and succeed on 1-3SelfCheckDiceWithRoll61330% chance success on a 100-sided dieSelfCheckDiceWithRoll130Always succeed on a 100-sided dieSelfCheckDiceWithRoll1100 |
| Roll a 6-sided die and succeed on 1-3SelfCheckDiceWithRoll61330% chance success on a 100-sided dieSelfCheckDiceWithRoll130Always succeed on a 100-sided dieSelfCheckDiceWithRoll1100 |
| 30% chance success on a 100-sided dieSelfCheckDiceWithRoll130Always succeed on a 100-sided dieSelfCheckDiceWithRoll1100 |
| Always succeed on a 100-sided dieSelfCheckDiceWithRoll1100 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoProbability & Control[CheckDice](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkdice)

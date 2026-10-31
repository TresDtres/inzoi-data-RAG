---
document_id: "e9fe24720c38453c19df46df419ad2ce198930be1b86e5c55c10160e19843916"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount"
title: "Condition_CriminalBehaviorCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:56+00:00"
content_sha256: "0188859b29285174d2c94b13c948b9dbf49ae8ebd03b0f4e0827f4f560788196"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-criminalbehaviorcount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the criminal behavior count for the BaseObject character. If a Crime ID is specified in S1, checks the count for that specific crime. If S1 is omitted (None), checks the total count across all criminal behaviors.

# Parameters

| ParameterDescriptionBaseObjectThe character whose criminal behavior count will be checkedCompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeS1Crime ID to check. If omitted (None), all criminal behaviors are counted.F1Behavior count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| --- |
| BaseObjectThe character whose criminal behavior count will be checkedCompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeS1Crime ID to check. If omitted (None), all criminal behaviors are counted.F1Behavior count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeS1Crime ID to check. If omitted (None), all criminal behaviors are counted.F1Behavior count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| S1Crime ID to check. If omitted (None), all criminal behaviors are counted.F1Behavior count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| F1Behavior count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| F2Upper bound for range comparisons (InRange, OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Self's theft behavior count is 3 or moreSelfCriminalBehaviorCountGreaterOrEqualTheft3Check if Self has no criminal behavior at allSelfCriminalBehaviorCountEqual0Check if Self's total crime count is between 1 and 5SelfCriminalBehaviorCountInRange15 |
| --- |
| Check if Self's theft behavior count is 3 or moreSelfCriminalBehaviorCountGreaterOrEqualTheft3Check if Self has no criminal behavior at allSelfCriminalBehaviorCountEqual0Check if Self's total crime count is between 1 and 5SelfCriminalBehaviorCountInRange15 |
| Check if Self has no criminal behavior at allSelfCriminalBehaviorCountEqual0Check if Self's total crime count is between 1 and 5SelfCriminalBehaviorCountInRange15 |
| Check if Self's total crime count is between 1 and 5SelfCriminalBehaviorCountInRange15 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)

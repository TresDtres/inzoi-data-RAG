---
document_id: "8d07f6c1663d1a2c28a64174ea2432851cc81347a1efc0c4a0dcf48a154423b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount"
title: "Condition_ImprisonmentCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:18+00:00"
content_sha256: "770f1e1f51de03960f28956423b106091be2aa5e9c1231ecf14f5db8a6d9025a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-imprisonmentcount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the number of times the BaseObject character has been imprisoned.

# Parameters

| ParameterDescriptionBaseObjectThe character whose imprisonment count will be checkedCompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeF1Imprisonment count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| --- |
| BaseObjectThe character whose imprisonment count will be checkedCompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeF1Imprisonment count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeF1Imprisonment count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| F1Imprisonment count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| F2Upper bound for range comparisons (InRange, OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Check if Self has been imprisoned at least onceSelfImprisonmentCountGreaterOrEqual1Check if Self has never been imprisonedSelfImprisonmentCountEqual0Check if Self has been imprisoned between 2 and 5 timesSelfImprisonmentCountInRange25 |
| --- |
| Check if Self has been imprisoned at least onceSelfImprisonmentCountGreaterOrEqual1Check if Self has never been imprisonedSelfImprisonmentCountEqual0Check if Self has been imprisoned between 2 and 5 timesSelfImprisonmentCountInRange25 |
| Check if Self has never been imprisonedSelfImprisonmentCountEqual0Check if Self has been imprisoned between 2 and 5 timesSelfImprisonmentCountInRange25 |
| Check if Self has been imprisoned between 2 and 5 timesSelfImprisonmentCountInRange25 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)

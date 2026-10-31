---
document_id: "3c96b0329d97aac6cee1a5d56461fc40dba46608ed4eeb4f007d94171ecb01fb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan"
title: "Condition_HasMortgageLoan"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:09+00:00"
content_sha256: "1214e55fb5c48d5a35b06b526a53c75561e1844e2d7d1b76ef7fb16f69fb2af2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasmortgageloan"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether any member of the Household that the BaseObject belongs to has an active Mortgage loan. The condition checks all Household members, not just the BaseObject itself.

# Parameters

| ParameterDescriptionBaseObjectThe character whose Household members will be checked for a Mortgage loan.CompareTypeEqual: returns true if at least one Household member has a Mortgage loan. NotEqual: returns true if no Household member has a Mortgage loan. |
| --- |
| BaseObjectThe character whose Household members will be checked for a Mortgage loan.CompareTypeEqual: returns true if at least one Household member has a Mortgage loan. NotEqual: returns true if no Household member has a Mortgage loan. |
| CompareTypeEqual: returns true if at least one Household member has a Mortgage loan. NotEqual: returns true if no Household member has a Mortgage loan. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if any Household member has a Mortgage loanSelfHasMortgageLoanEqualCheck if no Household member has a Mortgage loanSelfHasMortgageLoanNotEqualCheck if any of target's Household members has a MortgageTargetHasMortgageLoanEqual |
| --- |
| Check if any Household member has a Mortgage loanSelfHasMortgageLoanEqualCheck if no Household member has a Mortgage loanSelfHasMortgageLoanNotEqualCheck if any of target's Household members has a MortgageTargetHasMortgageLoanEqual |
| Check if no Household member has a Mortgage loanSelfHasMortgageLoanNotEqualCheck if any of target's Household members has a MortgageTargetHasMortgageLoanEqual |
| Check if any of target's Household members has a MortgageTargetHasMortgageLoanEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)

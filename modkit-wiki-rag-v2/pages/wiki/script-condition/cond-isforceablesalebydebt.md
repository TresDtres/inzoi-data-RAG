---
document_id: "3b075f370bdf6839a7943586afcf30d6f71749195662f4280363471302db996d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt"
title: "Condition_IsForceableSaleByDebt"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:28+00:00"
content_sha256: "3445ea7ad58306de76a7735b3de5b0c75a878c6dcde08fea7e342ce5b84a63e2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isforceablesalebydebt"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified object is eligible for forced sale due to debt collection (loan overdue). Objects are excluded if they are broken, have no price, are of excluded types (Door, Dusty, Soot, Roof), are not in the whitelist category, are stored in the site inventory bag, or if the site's total repossessed object price already covers the remaining overdue debt for the given loan product.

# Parameters

| ParameterDescriptionBaseObjectThe object to evaluate for forced sale eligibility (note: uses NonBaseObject internally)CompareTypeEqual only (always checks eligibility)S1Loan product ID under debt collection (LoanProduct.json Id) |
| --- |
| BaseObjectThe object to evaluate for forced sale eligibility (note: uses NonBaseObject internally)CompareTypeEqual only (always checks eligibility)S1Loan product ID under debt collection (LoanProduct.json Id) |
| CompareTypeEqual only (always checks eligibility)S1Loan product ID under debt collection (LoanProduct.json Id) |
| S1Loan product ID under debt collection (LoanProduct.json Id) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if the object can be forcibly sold for Mortgage debtSelfIsForceableSaleByDebtEqualMortgageCheck if the target object is eligible for repossession for a loanTargetIsForceableSaleByDebtEqualLoan_001 |
| --- |
| Check if the object can be forcibly sold for Mortgage debtSelfIsForceableSaleByDebtEqualMortgageCheck if the target object is eligible for repossession for a loanTargetIsForceableSaleByDebtEqualLoan_001 |
| Check if the target object is eligible for repossession for a loanTargetIsForceableSaleByDebtEqualLoan_001 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[HaveCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

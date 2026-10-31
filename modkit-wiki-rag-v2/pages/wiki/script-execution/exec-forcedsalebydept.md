---
document_id: "30648322260c786dccecda72e91deee9f2aba9e614fa338833be4c4cfb7d2099"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-forcedsalebydept"
title: "Execute_ForcedSaleByDept"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:29+00:00"
content_sha256: "c4902e18626ede43a3ce59a1d8c0cf77a777e738516abddc0e3f441323a7b5ae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-forcedsalebydept"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Forcibly sells the BaseObject game object to repay a debt held by the non-BaseObject character. The proceeds from the forced sale are applied toward the specified loan product of the debtor character. After the sale, the loan data cache for the debtor is refreshed.

# Parameters

| ParameterDescriptionBaseObjectThe game object to be forcibly sold (Self or Target).S1Loan product ID to be repaid (LoanProduct.json Id). |
| --- |
| BaseObjectThe game object to be forcibly sold (Self or Target).S1Loan product ID to be repaid (LoanProduct.json Id). |
| S1Loan product ID to be repaid (LoanProduct.json Id). |

# Examples

| DescriptionBaseObjectCommandS1Sell Self object to repay Target character’s Mortgage loanSelfForcedSaleByDeptMortgageSell Target object to repay Self character’s LoanShark loanTargetForcedSaleByDeptLoanSharkSell Self object to settle Target character’s PersonalLoan debtSelfForcedSaleByDeptPersonalLoan |
| --- |
| Sell Self object to repay Target character’s Mortgage loanSelfForcedSaleByDeptMortgageSell Target object to repay Self character’s LoanShark loanTargetForcedSaleByDeptLoanSharkSell Self object to settle Target character’s PersonalLoan debtSelfForcedSaleByDeptPersonalLoan |
| Sell Target object to repay Self character’s LoanShark loanTargetForcedSaleByDeptLoanSharkSell Self object to settle Target character’s PersonalLoan debtSelfForcedSaleByDeptPersonalLoan |
| Sell Self object to settle Target character’s PersonalLoan debtSelfForcedSaleByDeptPersonalLoan |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

---
document_id: "81be07adc163bf273da48411c2da7ef7150ac1d2ed28c3503754ee80f19e940a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1executedloan"
title: "FB1ExecutedLoan"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:47+00:00"
content_sha256: "11bdfb789e4749f7d6afe3e91830ed41dd6c87672a6404090ee689c704bd38b6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1executedloan"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that stores runtime data for an active loan. Tracks the loan product, state, amounts, dates, interest, and enforcement action counters.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (12)

| NameTypeDescription`ForcedCollectionCount``integer`Number of forced collection (debt collection) visits made.`ForcedSaleAmount``integer`Amount of debt repaid through forced asset sales.`InterestAmount``integer`Accumulated interest amount on this loan.`LoanProductId``string`ID of the loan product this loan is based on.`LoanState`[`EB1LoanState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loanstate)Current state of this loan (Normal, Overdue, ForcedCollection, Repossession).`MaturityDay``FDateTime`The maturity date of this loan.`NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| --- |
| `ForcedCollectionCount``integer`Number of forced collection (debt collection) visits made.`ForcedSaleAmount``integer`Amount of debt repaid through forced asset sales.`InterestAmount``integer`Accumulated interest amount on this loan.`LoanProductId``string`ID of the loan product this loan is based on.`LoanState`[`EB1LoanState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loanstate)Current state of this loan (Normal, Overdue, ForcedCollection, Repossession).`MaturityDay``FDateTime`The maturity date of this loan.`NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `ForcedSaleAmount``integer`Amount of debt repaid through forced asset sales.`InterestAmount``integer`Accumulated interest amount on this loan.`LoanProductId``string`ID of the loan product this loan is based on.`LoanState`[`EB1LoanState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loanstate)Current state of this loan (Normal, Overdue, ForcedCollection, Repossession).`MaturityDay``FDateTime`The maturity date of this loan.`NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `InterestAmount``integer`Accumulated interest amount on this loan.`LoanProductId``string`ID of the loan product this loan is based on.`LoanState`[`EB1LoanState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loanstate)Current state of this loan (Normal, Overdue, ForcedCollection, Repossession).`MaturityDay``FDateTime`The maturity date of this loan.`NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `LoanProductId``string`ID of the loan product this loan is based on.`LoanState`[`EB1LoanState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loanstate)Current state of this loan (Normal, Overdue, ForcedCollection, Repossession).`MaturityDay``FDateTime`The maturity date of this loan.`NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `LoanState`[`EB1LoanState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1loanstate)Current state of this loan (Normal, Overdue, ForcedCollection, Repossession).`MaturityDay``FDateTime`The maturity date of this loan.`NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `MaturityDay``FDateTime`The maturity date of this loan.`NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `NextRepaymentDate``FDateTime`The next scheduled repayment date.`OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `OriginalAmount``integer`The original amount borrowed at the time of loan issuance.`OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `OverdueCount``integer`Number of times this loan has been overdue.`Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `Rate``number`The interest rate applied to this loan.`RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `RepaymentAmount``integer`Total amount repaid on this loan so far.`StartDate``FDateTime`The date this loan was started. |
| `StartDate``FDateTime`The date this loan was started. |

---
document_id: "a198b748512a93528ec48d640610ec3980ce46c5c1c6f381df8cf644ba782a67"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-havecurrency"
title: "Condition_HaveCurrency"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:17+00:00"
content_sha256: "f8fb10f26b569e8853c6948fa2718e2d466a94a1607063706cfa219e76127f6d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-havecurrency"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the BaseObject's current currency amount against the specified value using the given comparison type. If S1 is empty, the main currency is used by default.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose currency amount is checked.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Currency ID (CurrencyDtId). If empty, the main currency is used.F1Currency value to compare against (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| --- |
| BaseObjectThe entity whose currency amount is checked.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Currency ID (CurrencyDtId). If empty, the main currency is used.F1Currency value to compare against (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Currency ID (CurrencyDtId). If empty, the main currency is used.F1Currency value to compare against (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| S1Currency ID (CurrencyDtId). If empty, the main currency is used.F1Currency value to compare against (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| F1Currency value to compare against (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| F2Upper bound value for InRange/OutRange comparisons. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if self has 0 or less main currencySelfHaveCurrencyLessOrEqualCheck if self has 100 or more main currencySelfHaveCurrencyGreaterOrEqualCheck if self has between 100 and 999 main currencySelfHaveCurrencyInRangeCheck if self has 10 or more CatShopPointSelfHaveCurrencyGreaterOrEqual |
| --- |
| Check if self has 0 or less main currencySelfHaveCurrencyLessOrEqualCheck if self has 100 or more main currencySelfHaveCurrencyGreaterOrEqualCheck if self has between 100 and 999 main currencySelfHaveCurrencyInRangeCheck if self has 10 or more CatShopPointSelfHaveCurrencyGreaterOrEqual |
| Check if self has 100 or more main currencySelfHaveCurrencyGreaterOrEqualCheck if self has between 100 and 999 main currencySelfHaveCurrencyInRangeCheck if self has 10 or more CatShopPointSelfHaveCurrencyGreaterOrEqual |
| Check if self has between 100 and 999 main currencySelfHaveCurrencyInRangeCheck if self has 10 or more CatShopPointSelfHaveCurrencyGreaterOrEqual |
| Check if self has 10 or more CatShopPointSelfHaveCurrencyGreaterOrEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoMoney, Price & Sales[CheckTaxPaymentAutomatic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentautomatic)[CheckTaxPaymentDirect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checktaxpaymentdirect)[HasEnoughCurrencyExchangeCost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecost)[HasEnoughCurrencyExchangeCostInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyexchangecostinsite)[HasEnoughCurrencyForTax](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencyfortax)[HasEnoughCurrencyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasenoughcurrencytarget)[HasSalesRights](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hassalesrights)[HasTaxId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hastaxid)[IsForceableSale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesale)[IsForceableSaleByDebt](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isforceablesalebydebt)[IsPurchasable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasable)[IsSeized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isseized)

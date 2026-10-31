---
document_id: "84c5cc3590bc7bf42b533ebaf9ec83621399368232d7ec7558ef32b44a2c4ad3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-payfreelancepenalty"
title: "Execute_PayFreelancePenalty"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:36+00:00"
content_sha256: "80f311346be671d127d7a518e3f55eea15449e98da7af235f6ecddff5cf02c29"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-payfreelancepenalty"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Calculates and deducts a penalty from the BaseObject's currency based on the active freelance order. Penalty = TargetItem exchange price x PenaltyPriceMultiplier (from FreelanceDataAsset per difficulty).

# Parameters

| ParameterDescriptionBaseObjectThe character entity who pays the penalty. |
| --- |
| BaseObjectThe character entity who pays the penalty. |

# Examples

| DescriptionBaseObjectCommandDeduct penalty from Self's default currencySelfPayFreelancePenalty |
| --- |
| Deduct penalty from Self's default currencySelfPayFreelancePenalty |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

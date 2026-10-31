---
document_id: "ae6062a411abb4b0b4e983310dc37c979d66ebbc2f88f4f069bb571b9d52ca66"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-payinsurancefee"
title: "Execute_PayInsuranceFee"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:36+00:00"
content_sha256: "2e7bf99a9ce7fe41d2bb9fa6686ae7f8ec01169c2693901249a56f46d98c9c75"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-payinsurancefee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Pays the recurring fee (including overdue fees) for the specified insurance and sends a success or failure message. If the entity is not enrolled or the insurance has not been billed yet, a warning log is printed and nothing happens. If the balance is insufficient, a failure message is sent; otherwise the fee is paid and a success message is sent.

# Parameters

| ParameterDescriptionBaseObjectThe entity paying the insurance fee (Self or Target).S1Insurance ID (Insurance.json Id). |
| --- |
| BaseObjectThe entity paying the insurance fee (Self or Target).S1Insurance ID (Insurance.json Id). |
| S1Insurance ID (Insurance.json Id). |

# Examples

| DescriptionBaseObjectCommandS1Self pays the recurring fee for life insuranceSelfPayInsuranceFeeInsurance_LifeTarget pays the recurring fee for life insuranceTargetPayInsuranceFeeInsurance_LifeSelf pays the overdue fee for vehicle insuranceSelfPayInsuranceFeeInsurance_VehicleTarget pays the recurring fee for health insuranceTargetPayInsuranceFeeInsurance_Health |
| --- |
| Self pays the recurring fee for life insuranceSelfPayInsuranceFeeInsurance_LifeTarget pays the recurring fee for life insuranceTargetPayInsuranceFeeInsurance_LifeSelf pays the overdue fee for vehicle insuranceSelfPayInsuranceFeeInsurance_VehicleTarget pays the recurring fee for health insuranceTargetPayInsuranceFeeInsurance_Health |
| Target pays the recurring fee for life insuranceTargetPayInsuranceFeeInsurance_LifeSelf pays the overdue fee for vehicle insuranceSelfPayInsuranceFeeInsurance_VehicleTarget pays the recurring fee for health insuranceTargetPayInsuranceFeeInsurance_Health |
| Self pays the overdue fee for vehicle insuranceSelfPayInsuranceFeeInsurance_VehicleTarget pays the recurring fee for health insuranceTargetPayInsuranceFeeInsurance_Health |
| Target pays the recurring fee for health insuranceTargetPayInsuranceFeeInsurance_Health |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoMoney, Trade & Service[ActivatePendingBizServiceAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activatependingbizserviceassignment)[AddCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrency)[AddCurrencyRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencyrange)[AddCurrencyToHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcurrencytohouseholdbiz)[AddSeizure](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addseizure)[AddServiceUsage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addserviceusage)[BuyBizStallObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buybizstallobject)[BuyObjectAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyobjectattinyshop)[BuyTargetObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buytargetobject)[DeductCurrencyFromHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deductcurrencyfromhouseholdbiz)[ExchangeCurrency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-exchangecurrency)[FinishService](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishservice)

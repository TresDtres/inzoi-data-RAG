---
document_id: "ed78f80e50e9c0314df3507f7723822d12f542ec00703f6daed5a574fa4bad8a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1enrolledinsurance"
title: "B1EnrolledInsurance"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:32+00:00"
content_sha256: "da09326b4e430156274ac9429b762028c52905f6724072a26a542152486fe9e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1enrolledinsurance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Stores the runtime state of a single insurance policy enrolled by a household, * including the insurance type, payment status, next charge time, recurring fee, and covered object costs.

| PropertyTypeDescriptionMetadataIdFNameUnique ID of the enrolled insurance policy.Category: B1EnrolledInsuranceInsuranceTypeEB1InsuranceTypeType of insurance (Property, Life, or Disaster).Category: B1EnrolledInsuranceCurrentStatusEB1InsuranceStatusCurrent payment status of this insurance policy.Category: B1EnrolledInsuranceNextChargeDayTicksint64Game tick at which the next premium charge is due.Category: B1EnrolledInsuranceRecurringFeeint32Recurring premium amount charged each billing cycle.Category: B1EnrolledInsuranceObjectCostsTArrayList of insured object costs stored for property damage claim payouts. |
| --- |
| IdFNameUnique ID of the enrolled insurance policy.Category: B1EnrolledInsuranceInsuranceTypeEB1InsuranceTypeType of insurance (Property, Life, or Disaster).Category: B1EnrolledInsuranceCurrentStatusEB1InsuranceStatusCurrent payment status of this insurance policy.Category: B1EnrolledInsuranceNextChargeDayTicksint64Game tick at which the next premium charge is due.Category: B1EnrolledInsuranceRecurringFeeint32Recurring premium amount charged each billing cycle.Category: B1EnrolledInsuranceObjectCostsTArrayList of insured object costs stored for property damage claim payouts. |
| InsuranceTypeEB1InsuranceTypeType of insurance (Property, Life, or Disaster).Category: B1EnrolledInsuranceCurrentStatusEB1InsuranceStatusCurrent payment status of this insurance policy.Category: B1EnrolledInsuranceNextChargeDayTicksint64Game tick at which the next premium charge is due.Category: B1EnrolledInsuranceRecurringFeeint32Recurring premium amount charged each billing cycle.Category: B1EnrolledInsuranceObjectCostsTArrayList of insured object costs stored for property damage claim payouts. |
| CurrentStatusEB1InsuranceStatusCurrent payment status of this insurance policy.Category: B1EnrolledInsuranceNextChargeDayTicksint64Game tick at which the next premium charge is due.Category: B1EnrolledInsuranceRecurringFeeint32Recurring premium amount charged each billing cycle.Category: B1EnrolledInsuranceObjectCostsTArrayList of insured object costs stored for property damage claim payouts. |
| NextChargeDayTicksint64Game tick at which the next premium charge is due.Category: B1EnrolledInsuranceRecurringFeeint32Recurring premium amount charged each billing cycle.Category: B1EnrolledInsuranceObjectCostsTArrayList of insured object costs stored for property damage claim payouts. |
| RecurringFeeint32Recurring premium amount charged each billing cycle.Category: B1EnrolledInsuranceObjectCostsTArrayList of insured object costs stored for property damage claim payouts. |
| ObjectCostsTArrayList of insured object costs stored for property damage claim payouts. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)

---
document_id: "b27a61e7029b0f6b97e2220b3db5f4e58ccaeaebf1da58889fc969b194280a01"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1enrolledinsurance"
title: "FB1EnrolledInsurance"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:45+00:00"
content_sha256: "fb762742f6ecbb4e022de1015a95376c268f41b527cd4bff4eb8e4beb5d0519a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1enrolledinsurance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the runtime state of a single insurance policy enrolled by a household, including the insurance type, payment status, next charge time, recurring fee, and covered object costs.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CurrentStatus`[`EB1InsuranceStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancestatus)Current payment status of this insurance policy.`Id``string`Unique ID of the enrolled insurance policy.`InsuranceType`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance (Property, Life, or Disaster).`NextChargeDayTicks``integer`Game tick at which the next premium charge is due.`ObjectCosts``integer[]`List of insured object costs stored for property damage claim payouts.`RecurringFee``integer`Recurring premium amount charged each billing cycle. |
| --- |
| `CurrentStatus`[`EB1InsuranceStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancestatus)Current payment status of this insurance policy.`Id``string`Unique ID of the enrolled insurance policy.`InsuranceType`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance (Property, Life, or Disaster).`NextChargeDayTicks``integer`Game tick at which the next premium charge is due.`ObjectCosts``integer[]`List of insured object costs stored for property damage claim payouts.`RecurringFee``integer`Recurring premium amount charged each billing cycle. |
| `Id``string`Unique ID of the enrolled insurance policy.`InsuranceType`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance (Property, Life, or Disaster).`NextChargeDayTicks``integer`Game tick at which the next premium charge is due.`ObjectCosts``integer[]`List of insured object costs stored for property damage claim payouts.`RecurringFee``integer`Recurring premium amount charged each billing cycle. |
| `InsuranceType`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance (Property, Life, or Disaster).`NextChargeDayTicks``integer`Game tick at which the next premium charge is due.`ObjectCosts``integer[]`List of insured object costs stored for property damage claim payouts.`RecurringFee``integer`Recurring premium amount charged each billing cycle. |
| `NextChargeDayTicks``integer`Game tick at which the next premium charge is due.`ObjectCosts``integer[]`List of insured object costs stored for property damage claim payouts.`RecurringFee``integer`Recurring premium amount charged each billing cycle. |
| `ObjectCosts``integer[]`List of insured object costs stored for property damage claim payouts.`RecurringFee``integer`Recurring premium amount charged each billing cycle. |
| `RecurringFee``integer`Recurring premium amount charged each billing cycle. |

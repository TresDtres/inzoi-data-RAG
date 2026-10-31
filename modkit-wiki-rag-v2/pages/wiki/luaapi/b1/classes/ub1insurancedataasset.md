---
document_id: "400f17444e21781af5809c821cb43edbca4c3d3e4e90e25f8fb6bffdff395b2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1insurancedataasset"
title: "UB1InsuranceDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:45+00:00"
content_sha256: "fb4196207dcd9e783c01aad0d0a905f9010e873e5085846b11ed9544b1635d81"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1insurancedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset defining global insurance system settings, including the billing interval in days, the daily charge hour, and message IDs for enrollment and payment outcomes.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (6)

| NameTypeDescription`ChargeHour``integer`Hour of the day (0–23) at which premium charges are processed.`JoinFailedMessageId``string`Message ID sent when a household fails to enroll in an insurance policy.`JoinSuccessMessageId``string`Message ID sent when a household successfully enrolls in an insurance policy.`PayFailedMessageId``string`Message ID sent when a premium payment fails to process.`PaySuccessMessageId``string`Message ID sent when a premium payment is successfully processed.`PaymentIntervalDays``integer`Number of days between recurring premium charges. |
| --- |
| `ChargeHour``integer`Hour of the day (0–23) at which premium charges are processed.`JoinFailedMessageId``string`Message ID sent when a household fails to enroll in an insurance policy.`JoinSuccessMessageId``string`Message ID sent when a household successfully enrolls in an insurance policy.`PayFailedMessageId``string`Message ID sent when a premium payment fails to process.`PaySuccessMessageId``string`Message ID sent when a premium payment is successfully processed.`PaymentIntervalDays``integer`Number of days between recurring premium charges. |
| `JoinFailedMessageId``string`Message ID sent when a household fails to enroll in an insurance policy.`JoinSuccessMessageId``string`Message ID sent when a household successfully enrolls in an insurance policy.`PayFailedMessageId``string`Message ID sent when a premium payment fails to process.`PaySuccessMessageId``string`Message ID sent when a premium payment is successfully processed.`PaymentIntervalDays``integer`Number of days between recurring premium charges. |
| `JoinSuccessMessageId``string`Message ID sent when a household successfully enrolls in an insurance policy.`PayFailedMessageId``string`Message ID sent when a premium payment fails to process.`PaySuccessMessageId``string`Message ID sent when a premium payment is successfully processed.`PaymentIntervalDays``integer`Number of days between recurring premium charges. |
| `PayFailedMessageId``string`Message ID sent when a premium payment fails to process.`PaySuccessMessageId``string`Message ID sent when a premium payment is successfully processed.`PaymentIntervalDays``integer`Number of days between recurring premium charges. |
| `PaySuccessMessageId``string`Message ID sent when a premium payment is successfully processed.`PaymentIntervalDays``integer`Number of days between recurring premium charges. |
| `PaymentIntervalDays``integer`Number of days between recurring premium charges. |

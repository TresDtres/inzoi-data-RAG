---
document_id: "6cc5a4211b48999e29d3d79447ac1612e1f367006562309b7d88d6730bee7d4a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-finish-accommodation-booking"
title: "household_biz.finish_accommodation_booking"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "fe012965777b212dff9386cdf7bcb0cc7340a5f874fce7524695e1b2bb660085"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-finish-accommodation-booking"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Finishes the accommodation booking containing the specified guest.

# Metadata

| FieldValueDisplayFinish Accommodation BookingCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayFinish Accommodation BookingCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionguest_entity_identityIdyes—Any guest entity id in the bookingreasonstringno—Finish reason (UserRequest/CheckOutTimeReached/Interrupted, default: CheckOutTimeReached) |
| --- |
| guest_entity_identityIdyes—Any guest entity id in the bookingreasonstringno—Finish reason (UserRequest/CheckOutTimeReached/Interrupted, default: CheckOutTimeReached) |
| reasonstringno—Finish reason (UserRequest/CheckOutTimeReached/Interrupted, default: CheckOutTimeReached) |

# Usage

```
await inzoi.cli.execute('household_biz.finish_accommodation_booking', {  guest_entity_id: 0,  reason: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
